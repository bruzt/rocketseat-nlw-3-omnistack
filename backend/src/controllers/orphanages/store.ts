import { Request, Response } from 'express';
import * as Yup from 'yup';

import Ophanage from '../../entities/Orphanage';
import OrphanageImage from '../../entities/OrphanageImage';

interface IOrphanage {
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: string;
}

export default async (req: Request, res: Response) => {

    const reqBody: IOrphanage = req.body;
    const reqFiles = req.files as Express.Multer.File[];

    const images = reqFiles.map( (image) => OrphanageImage.create({
        path: image.filename
    }));

    const data = {
        ...reqBody,
        open_on_weekends: reqBody.open_on_weekends == 'true', 
        images
    }

    const schema = Yup.object().shape({
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        images: Yup.array(Yup.object().shape({
            path: Yup.string().required()
        }))
    });

    await schema.validate(data, {
        abortEarly: false
    });

    try {
        
        const orphanage = Ophanage.create(data);
        
        await orphanage.save();
    
        return res.status(201).json(orphanage);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error creating orphanage' });
    }
}
