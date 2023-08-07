import { Request, Response, NextFunction } from "express";
interface ErrorResponse {
  message: string;
  stack?: string | null;
}

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log("Error caught by the custom error handler:", err);
  const statusCode: number = res.statusCode ? res.statusCode : 500;
  const errorResponse: ErrorResponse = {
    message: err.message , 
    stack: process.env.NODE_ENV == "production" ? null : err.stack,
  };
  return res.status(statusCode).json(errorResponse);
};

export const notFoundMiddleware = (req: Request, res: Response) => {
  // Respond with a 404 status and message for any unmatched route
  res
    .status(404)
    .json({
      success: false,
      message: "Endpoint Not Found",
      status: "Invalid Request",
    });
};


// app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
//    console.log(error)
//   let errorMessage = “An unknown error occurred” ;
//   if (error instanceof Error) errorMessage = error.message;
//   res.status(500).json({ error: errorMessage });
// });