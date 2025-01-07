import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: 'dnl2sl5km', 
  api_key: '525122636541138', 
  api_secret: '6jBkh1T9pkOcrDljYAuK_tiHndo',
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        //console.log(localFilePath)
        if (!localFilePath) return null 
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //console.log(response)
        //console.log("file is uploaded on cloudinary ", response.url)

        //file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        //console.log(error)

        return null;
    }
}



export {uploadOnCloudinary}