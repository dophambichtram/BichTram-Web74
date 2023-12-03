const express = require('express');
const app = express();

// Middleware để xử lý dữ liệu JSON
app.use(express.json());

// Import các route
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

// Sử dụng các route
app.use('/register', registerRoute);
app.use('/login', loginRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});