const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect("mongodb://localhost/dbName141");

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: String,
  lastName: {
    type: String,
    set: str => str[0].toUpperCase() + str.substring(1).toLowerCase()
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  age: {
    type: Number,
    min: 18,
    max: 99
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 24,
    required: true
  },
  birthdate: Date,
  phoneNumbers: [Number], // array of numbers
  addresses: [Object], // array of objects
  isActive: Boolean,
  website: {
    type: String,
    validate: {
      validator: str => str.startsWith("http"),
      message: "Website url should start with http"
    }
  },
  role: {
    type: String,
    enum: ["user", "mod", "admin"],
    default: "user"
  },
  cats: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cat" // 'Cat' being another model in the database
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;

/*
User.create({
  username: "paul",
  email: "paul-lenhard@ironhack.com",
  password: "12345678",
  age: 27,
  role: "user",
  website: "https://paul.com",
  phoneNumbers: [123456, 7891011]
})
  .then(data => {
    console.log("User successfully created: ", data);
  })
  .catch(err => {
    console.log(err);
  });


// User.findById("5d15c7db3d774909e915afdb")
// User.findOne({ username: "paul" })
// User.find({ password: '12345678' })

User.findOne({ username: "paul" })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

// User.updateOne({ username: 'paul' }, { birthdate: '10-23-1995', password: '12345678' })

User.updateMany({ password: "qwertyuiop" }, { password: "12345678" })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });


User.findByIdAndUpdate("5d15c830d8ef120a13dc9563", { role: "user" });
User.findOneAndUpdate({ username: "paul" }, { role: "user" }, { new: true })
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.log(err);
  });

User.deleteOne({ username: "paul" })
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.log(err);
  });

User.findOneAndDelete({ username: "devan" })
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.log(err);
  });

User.deleteMany({ isActive: false })
  .then(data => {
    console.log(data); // no documents returned
  })
  .catch(err => {
    console.log(err);
  });

//   Delete a collection
User.collection.drop();

// Get a count
User.countDocuments({ isActive: true })
  .then(count => {
    console.log(count); // number of active users
  })
  .catch(err => {
    console.log(err);
  });

  */
