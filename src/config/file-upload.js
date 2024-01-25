import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import { ServerConfig } from "./server-config.js";

aws.config.update({
    region:"ap-south-1",
    secretAccessKey:ServerConfig.AWS_SECURE_ACCESS_KEY,
    accessKeyId:ServerConfig.AWS_ACCESS_KEY
});

const s3=new aws.S3();

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: ServerConfig.BUCKET,
      acl:'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
});

export default upload;
  