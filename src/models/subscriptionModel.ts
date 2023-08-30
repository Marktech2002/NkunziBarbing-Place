import mongoose, { Schema, Document, Types, AnyKeys } from "mongoose";

enum planType {
  Monthly = "monthly",
  Annually = "yearly",
}

export interface subscription extends Document {
  userId: Types.ObjectId;
  plan: planType;
  status: "active" | "inactive" | "canceled";
  reference: string;
  createdAt: Date; // Make sure createdAt is included
}

const subscriptionSchema = new Schema<subscription>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    plan: {
      type: String,
      required: true,
    },

    reference: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "canceled"],
      required: true,
      default: "inactive",
    },
  },
  {
    timestamps: true,
  }
);

export const SubscriptionModel = mongoose.model<subscription>(
  "Subscription",
  subscriptionSchema
);
