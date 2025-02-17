import axios from "axios";

const upload = async (file) => {
  return new Promise(async (resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET); // Use env variable

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, // Use env variable
        formData
      );

      const imageUrl = response.data.secure_url;
      console.log("Uploaded Image URL:", imageUrl);
      resolve(imageUrl);
    } catch (error) {
      console.error("Upload failed:", error);
      reject(error);
    }
  });
};

export default upload;
