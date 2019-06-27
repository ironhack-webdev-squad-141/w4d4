const mongoose = require("mongoose");

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
