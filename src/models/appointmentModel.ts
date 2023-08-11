import mongoose, { Schema, Document, Types } from "mongoose";

export interface appointment extends Document {
  userId: Types.ObjectId;
  desc : string ;
  appointmentDate: Date;
}

const appointmentSchema = new Schema<appointment>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    desc : {
        type : String ,
        required : true ,
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

export const appointmentModel = mongoose.model<appointment>("Appointment", appointmentSchema);
