import {v2 as cloudinary} from "cloudinary"
import fs from "fs" // file system


cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET' 
});

const uploadOnCloudinary = async (localFiePath) => {
    try {
        if(!localFiePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFiePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("file is uploaded on cloudinary", response.url);
        return response;
    } catch(error) {
        fs.unlinkSync(localFiePath)// remove the locally saved temporay file as the upload operation got failed.
        return null;
    }
}
export {uploadOnCloudinary}