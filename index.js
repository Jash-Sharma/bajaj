const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.post("/bfhl", (req, res) => {
  const data = req.body.data || [];
  const user_id = "jash_sharma_28032003";
  const email = "jash.sharma2021@vitstudent.ac.in";
  const roll_number = "21BCE6176";

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const highest_lowercase_alphabet =
    alphabets
      .filter((char) => char >= "a" && char <= "z")
      .sort()
      .reverse()[0] || "";

  res.json({
    is_success: true,
    user_id: user_id,
    email: email,
    roll_number: roll_number,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highest_lowercase_alphabet
      ? [highest_lowercase_alphabet]
      : [],
  });
});

app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running");
});
