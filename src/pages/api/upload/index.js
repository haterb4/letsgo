import { IncomingForm } from 'formidable'
import * as moment from 'moment'
import { promises as fs } from 'fs'

var mv = require('mv');


export const config = {
    api: {
       bodyParser: false,
    }
};
 
export default async (req, res) => {
    
    const data = await new Promise((resolve, reject) => {
       const form = new IncomingForm()
       
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err)
            // console.log(fields, files)
            // console.log(files.file.filepath)
            let oldPath = files.file.filepath;
            let newPath = `./public/uploads/${moment().unix() + files.file.originalFilename}`;
            mv(oldPath, newPath, function(err) {
            })

            res.status(200).json({ fields, files, path: newPath.slice(8) }) //On enlève "./public" du chemin
        })
    })
    
}
