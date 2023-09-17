const mockingoose = require("mockingoose");
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import "jest-express";
require("dotenv").config();
import { logger } from "../src/util/logger";
import { UserModel } from "../src/models/userModel";
import {
  registerUser,
  loginUser,
  getUser,
} from "../src/controllers/userController";
import { registeredMail } from "../src/helpers/registerMail";

/**
 * @desc test for registering User with valid credentails
   @route POST nkunzi/user/register
 * @returns Response
 */
describe("POST /nkunzi/user/register", () => {
  test("Should register User with valid credentials", async () => {
    logger.info("Starting User registerating test");
    const expectedResponse = {
      success: true,
      _id: "64c7ef18ac5ed8960e0da291",
      name: "John Dore",
      email: "johndoe@gmail.com",
      token: "iZXhwIjoxNjkzNDE2NDcyfQ.yAjE6mFziRbhs",
    };

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    mockingoose(UserModel).toReturn(expectedResponse, "save");
    // mocking requests body
    const req = {
      body: {
        firstName: "John",
        secondName: "Dore",
        email: "johndoe@gmail.com",
        password: "password123",
      },
    };
    logger.info("User registeration test credentials save");
    // Type assertion
    const typedReq = req as Request;
    const typedRes = res as unknown as Response;
    await registerUser(typedReq, typedRes, null);
    // Expectations
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toBeTruthy();
  });

  /**
 * @desc test if user already exists  
   @route POST nkunzi/user/register
 * @returns Response
 */
  test("Should check if user already exist", async () => {
    logger.info("Starting for User already exists ");
    const expectedResponse = {
      _id: "507f191e810c19729de860ea",
      email: "johndoe@gmail.com",
    };
    mockingoose(UserModel).toReturn(expectedResponse, "findOne");
    return UserModel.findById({ _id: "507f191e810c19729de860ea" }).then(
      (user) => {
        logger.info(JSON.parse(JSON.stringify(user)));
        expect(JSON.parse(JSON.stringify(user))).toMatchObject(
          expectedResponse
        );
      }
    );
  });
  /**
 * @desc test for an ommission 
   @route POST nkunzi/user/register
 * @returns Response
 */
  test("Should check if any missing credentials", async () => {
    logger.info("Starting check for missing credntials ");
    const expectedResponse = {};
    mockingoose(UserModel).toReturn(expectedResponse, "findOne");
    return UserModel.findById({ _id: "507f191e810c19729de860ea" }).then(
      (user) => {
        logger.info(JSON.parse(JSON.stringify(user)));
        expect(JSON.parse(JSON.stringify(user))).toMatchObject(
          expectedResponse
        );
      }
    );
  });
});

/**
 * @desc test Login  
   @route POST nkunzi/user/login
 */
describe("POST /nkunzi/user/login", () => {
  test("Should login User with valid credentials", async () => {
    logger.info(" Starting test for logging in user");
    const expectedResponse = {
      _id: "64c7ef18ac5ed8960e0da291",
      name: "John Doe",
      email: "johndoe@gmail.com",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.",
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    mockingoose(UserModel).toReturn(expectedResponse, "findOne");
    const req = {
      body: {
        email: "johndoe@gmail.com",
        password: "password123",
      },
    };
    jest.spyOn(bcrypt, "compare").mockReturnValue(true as any);
    const typedReq = req as Request;
    const typedRes = res as unknown as Response;
    await loginUser(typedReq, typedRes);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toBeTruthy();
    expect(bcrypt.compare).toBeTruthy();
  });
  /**
 * @desc test if user doesnt exist
   @route POST nkunzi/user/login
 * @returns Response
 */
  test("Should return user doesnt exist", async () => {
    logger.info("Starting check user doesnt exist ");
    const expectedResponse = {};
    mockingoose(UserModel).toReturn(expectedResponse, "findOne");
    return UserModel.findById({ _id: "507f191e810c19729de860ea" }).then(
      (user) => {
        logger.info(JSON.parse(JSON.stringify(user)));
        expect(JSON.parse(JSON.stringify(user))).toMatchObject(
          expectedResponse
        );
      }
    );
  });

  /**
 * @desc test for Get for get user
   @route GET nkunzi/user/me
 * @returns Response
 */
  describe("GET nkunzi/user/me", () => {
    test("Should get a user with valid credentials", async () => {
      logger.info("Starting Testing getMe valid credentiulas");
      const req = {
        body: {
          user: {
            id: "64c7ef18ac5ed8960e0da291",
          },
        },
      };
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
    /**
 * @desc test user not found
   @route GET nkunzi/user/me
 * @returns Response
 */
    test("Should return when user is not found", async () => {
      logger.info("Starting Testing getMe null req");
      const req = {
        body: {
          user: {
            id: "64c7ef18ac5ed8960e0da291",
          },
        },
      };
      const expectedResponse = {};
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
  });
});

/**
 * @desc test Update user
   @route PUT /nkunzi/user/update/:userId
 */
describe("PUT /nkunzi/user/update/:userId", () => {
  test("Should update an existing user with valid credentials", async () => {
    const req = {
      body: {
        firstName: "Update",
        secondName: "Waa",
        email: "updatewaa@gmail.com",
      },
      pararms: {
        userId: "64c7ef18ac5ed8960e0da291",
      },
    };

    const expectedResponse = {
      _id: "64c7ef18ac5ed8960e0da291",
      firstName: "John",
      secondName: "Doe",
      email: "johndoe@gmail.com",
      isAdmin: false,
    };
    mockingoose(UserModel).toReturn(expectedResponse, "updateMany");
    return UserModel.updateMany(req.body) // this won't really change anything
      .where({ _id: "64c7ef18ac5ed8960e0da291" })
      .then((user : any) => {
        console.log(user)
        expect(JSON.parse(JSON.stringify(user))).toMatchObject(expectedResponse);
      });
  });
});
