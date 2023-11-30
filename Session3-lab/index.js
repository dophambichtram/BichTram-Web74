const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const PORT = 3000;
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), (req, res) => {
  try {
    // Lấy thông tin về file đã upload
    const file = req.file;

    // Đọc file đã upload
    fs.readFile(file.path, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
      } else {
        // Chuyển đổi file sang dạng base64
        const base64Image = data.toString('base64');

        // Xóa file đã upload
        fs.unlink(file.path, (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong' });
          } else {
            // Trả về dữ liệu base64
            res.json({ base64Image });
          }
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});