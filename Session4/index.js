import express from "express";
const app = express();
const PORT = 4000;

// Thực hiện login sinh ra access_touken
app.post("/login", loginController);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Err ${err.message}`);
  } else {
    console.log(`Your app is listening on PORT ${PORT}`);
  }
})
