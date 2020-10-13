import multer from 'multer';
import path from 'path';

interface IStorageLocation {
    [key: string]: any;
}

const storageLocation: IStorageLocation = {

    local: multer.diskStorage({

        destination: path.join(__dirname, '..', '..', './uploads'),
        
        filename: (request, file, callback) => {

            const fileName = `${Date.now()}-${file.originalname}`;

            callback(null, fileName);
        }
    })
}

export default {

    storage: storageLocation[process.env.IMG_STORAGE_LOCATION as string]
};
