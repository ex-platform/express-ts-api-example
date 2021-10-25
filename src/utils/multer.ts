import * as path from "path";
import * as multer from "multer";


// Uplaod an image before upload post
// ex:
//     router.post('/img', isLoggendIn, upload.single('img'), (req, res)=>{})
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});

// ex:
//     router.post('/img', isLoggendIn, uploadEmpty.none(), (req, res)=>{})
const uploadEmpty = multer();

export {upload, uploadEmpty}
