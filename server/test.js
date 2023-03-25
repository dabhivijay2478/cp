const express = require("express");
// const csvtojson = require("csvtojson");

const app = express();
const PORT = 8000;

app.use(express.json());

app.post("/signupserver", async (req, res) => {
  try {
    const jsonData = req.body;
    console.log(jsonData); // Print the data received from the client to the server's console
    // Here you can write the code to add the users to your database or perform any other actions you want
    res.json({ message: "Users added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding users" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
