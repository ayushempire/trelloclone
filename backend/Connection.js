const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://ayushempire03:kanbanapp@kanbanapp.ympxhwn.mongodb.net/USER_DATA?retryWrites=true&w=majority";

const MONGODB = async () => {
  await mongoose
    .connect(mongoURL, { useNewUrlParser: true })

    .then(() => {
      console.log("connected to mongodb");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = MONGODB;
