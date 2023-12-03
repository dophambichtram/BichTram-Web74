const express = require('express');
const router = express.Router();

// Dữ liệu tạm thời để lưu trữ thông tin người dùng
const users = [];

router.post('/', (req, res) => {
  const { username, password } = req.body;

  // Kiểm tra xem người dùng đã tồn tại hay chưa
  for (const user of users) {
    if (user.username === username) {
      return res.json({ message: 'Username already exists' });
    }
  }

  // Tạo người dùng mới
  const user = { username, password };
  users.push(user);

  return res.json({ message: 'User registered successfully' });
});

module.exports = router;