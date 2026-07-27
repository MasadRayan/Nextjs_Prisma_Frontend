import jwt from "jsonwebtoken";

const verifyToken = (token: string, secret: string) => {
  try {
    const decoded = jwt.verify(token, secret);
    return {
      success: true,
      data: decoded,
    };
  } catch (error: any) {
    console.log("Invalid token", error);
    return {
      success: false,
      error: error.message,
    }
  }
};

export const jwtUtils = {
  verifyToken,
};
