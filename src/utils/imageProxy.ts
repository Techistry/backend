import axios from "axios";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";

const FALLBACK_IMAGE_URL =
  "https://res.cloudinary.com/dxhxeb3wo/image/upload/v1754063589/image_not_found_hsgscw.svg";

// Optional: URL validator
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const uploadImageFromUrl = async (
  imageUrl: string,
  toolName: string,
  retries = 2
): Promise<string> => {
  let attempt = 0;

  if (!imageUrl || !isValidUrl(imageUrl)) {
    console.warn("Invalid or missing image URL:", imageUrl);
    return FALLBACK_IMAGE_URL;
  }

  while (attempt <= retries) {
    try {
      console.log(
        `Downloading image [${attempt + 1}/${retries + 1}]: ${imageUrl}`
      );

      const response = await axios.get(imageUrl, {
        responseType: "arraybuffer",
        timeout: 8000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36",
          Accept: "image/*,*/*;q=0.8",
        },
        validateStatus: (status) => status < 400,
      });

      const buffer = Buffer.from(response.data, "binary");

      const cloudinaryUrl = await new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "encore-ai",
            public_id: toolName.replace(/\s+/g, "_").toLowerCase(),
          },
          (error, result) => {
            if (error || !result) return reject(error);
            resolve(result.secure_url);
          }
        );

        const readStream = streamifier.createReadStream(buffer);
        readStream.on("error", (err) => {
          console.error("Stream error:", err);
          reject(err);
        });

        readStream.pipe(uploadStream);
      });

      return cloudinaryUrl;
    } catch (error: any) {
      console.warn(`Attempt ${attempt + 1} failed for image: ${imageUrl}`);
      if (error?.response?.status) {
        console.warn("Status code:", error.response.status);
      } else if (error?.code) {
        console.warn("Axios error code:", error.code);
      }
      attempt++;
    }
  }

  console.warn(
    `Image failed after ${retries + 1} attempts. Using fallback image.`
  );
  return FALLBACK_IMAGE_URL;
};
