import express from "express";
import multer from "multer";

const PORT = 8000;
const app = express();

// multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + Date.now() + "." + ext);
  },
});

const upload = multer({ storage: storage });

// api route

app.post("/upload", upload.single("image"), (req, res) => {
  res.end("Image Successfully Uploaded!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
