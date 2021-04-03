const { Schema, model, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please, enter a valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
    },
    google_id: {
      type: String,
    },
    defaultCity: {
      type: String,
    },
    favoriteCities: {
      type: Array,
    },
  },
  {
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.id;
        delete ret.password;
        delete ret.createdAt;
        delete ret.updatedAt;
        return ret;
      },
    },
    timestamps: true,
  }
);

const userModel = model("user", userSchema);

module.export = userModel;
