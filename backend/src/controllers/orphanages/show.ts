import { Request, Response } from 'express';

import Ophanage from '../../entities/Orphanage';
import orphanagesView from '../../views/orphanages';

export default async (req: Request, res: Response) => {

    const id: number = req.params.id as any;

    try {
        
        const orphanage = await Ophanage.findOne(id, {
            relations: ['images']
        });

        if(!orphanage) return res.status(400).json({ message: 'Orphanage not found' });
    
        return res.json(orphanagesView.render(orphanage));

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'Error searching for orphanage' });
    }
}
