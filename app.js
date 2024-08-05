const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "Vishnu",
    email: "s0R5A@example.com",
    username: "Visnu24",
  });
  res.send(createduser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.send(users);
});

app.get("/update", async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate(
    { username: "Biswa22" },
    { name: "Biswaranjan Sahoo" },
    { new: true }
  );

  res.send(updateduser);
});

app.get("/delete", async (req, res) => {
  let users = await userModel.findOneAndDelete({ username: "Biswa22" });
  res.send(users);
});

app.listen(3000);
