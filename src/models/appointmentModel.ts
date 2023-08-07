import mongoose, { Schema, Document, Types } from "mongoose";

export interface appointment extends Document {
  userId: Types.ObjectId;
  appointmentDate: Date;
}

const appointmentSchema = new Schema<appointment>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
