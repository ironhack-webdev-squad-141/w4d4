const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect("mongodb://localhost/dbName141");

const userSchema = new Schema({
  username: String
});

const User = new mongoose.model("User", userSchema);

// creates a user in the 'users' collection
User.create({
  username: "cocoapuff"
});

/*
for (let i = 1; i < 5; i++) {
  User.create({
    username: `cocoapuff${i}`
  });
}
*/
/*
User.insertMany([
  {
    username: "jim"
  },
  {
    username: "dwight"
  },
  {
    username: "pam"
  }
]);
*/

// finds the users in the 'users' collection
const userDwight = User.find({ username: "blabla" })
  .then(data => {
    //   fulfilled
    console.log("data: ", data);
  })
  .catch(err => {
    //   rejected
    console.log("error: ", err);
  });

console.log(userDwight); // pending
