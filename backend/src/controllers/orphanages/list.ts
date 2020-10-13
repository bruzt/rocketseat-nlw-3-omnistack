import { Request, Response } from 'express';

import Ophanage from '../../entities/Orphanage';
import orphanagesView from '../../views/orphanages';

export default async (req: Request, res: Response) => {

    try {
        
        const orphanages = await Ophanage.find({
            relations: ['images']
        });
    
        return res.json(orphanagesView.renderMany(orphanages));

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error searching for orphanages' });
    }
}
