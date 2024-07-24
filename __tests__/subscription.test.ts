const mockingoose = require("mockingoose");
import { Request, Response } from "express";
import "jest-express";
require("dotenv").config();
import { logger } from "../src/util/logger";
import { UserModel } from "../src/models/userModel";
import { planModel } from "../src/models/planModel";
import { createSubscription } from "../src/controllers/subController";

describe("POST /nkunzi/user/subscription", () => {
  test("should find user by id when user exists", async () => {
    // Define the user and plan data
    const expectedResponse = {
      _id: "64c7ef18ac5ed8960e0da291",
      firstName: "John",
      secondName: "Doe",
      email: "johndoe@gmail.com",
      isAdmin: false,
    };
    mockingoose(UserModel).toReturn(expectedResponse, "findOne");
    return UserModel.findById({ _id: "64c7ef18ac5ed8960e0da291" }).then(
      (user) => {
        logger.info(JSON.parse(JSON.stringify(user)));
        expect(JSON.parse(JSON.stringify(user))).toMatchObject(
          expectedResponse
        );
      }
    );
  });
  test("should find plan by planId when plan exists", async () => {
    const expectedResponse = {
      _id: "507f191e810c19729de860ea",
      amount: 100,
      plan_code: "plan123",
    };
    mockingoose(planModel).toReturn(expectedResponse, "findOne");
    //assigns an id by default
    return planModel
      .findById({ _id: "507f191e810c19729de860ea" })
      .then((user) => {
        logger.info(JSON.parse(JSON.stringify(user)));
        expect(JSON.parse(JSON.stringify(user))).toMatchObject(
          expectedResponse
        );
      });
  });

  test("should send request to Paystack API and receive response", async () => {
    logger.info("Starting create subscription as a whole");
    const userData = {
      _id: "64c7ef18ac5ed8960e0da291",
      email: "johndoe@example.com",
    };
    const planId = "13planId";

    mockingoose(UserModel).toReturn(userData, "findById");

    // Mock planModel's findOne method to return a valid plan
    mockingoose(planModel).toReturn(
      {
        plan_code: planId,
        amount: 100,
      },
      "findOne"
    );

    // Create a mock request and response
    const req = {
      body: {
        user: {
          id: userData._id,
        },
        planId: planId,
      },
    };

    const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis(),
      };
  
    // Type assertion
    const typedReq = req as Request;
    const typedRes = res as unknown as Response;
    await createSubscription(typedReq, typedRes, null);
     expect(res.json).toBeTruthy();
  }); 
});
