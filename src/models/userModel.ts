import mongoose, { Schema, Document, Types } from "mongoose";

export interface User extends Document {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  subscriptions: Types.ObjectId | null;
}

const userSchema: Schema<User> = new Schema<User>(
  {
    firstName: {
      type: String,
      trim : true ,
      required: [true, "Please enter your firstName"],
    },
    secondName: {
      type: String,
      trim : true ,
      required: [true, "Please enter your secondName"],
    },
    email: {
      type: String,
      trim : true ,
      required: [true, "Please enter your email"],
      validate: {
        validator: function (str: string) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
        },
        message: (props) => `${props.value} is not a valid email`,
      },
      unique: true,
    },

    password: {
      type: String,
      trim : true ,
      required: [true, "Please add a password "],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    subscriptions: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
    },
  },

  {
    timestamps: true,
  }
);

export const UserModel = mongoose.model<User>("User", userSchema);
