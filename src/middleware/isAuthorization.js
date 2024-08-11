import { Webuser } from "../schema/model.js";

export const isAuthorization = (roles) => {
  return async (req, res, next) => {
    try {
      let id = req._id;
      let result = await Webuser.findById(id);
      let tokenRole = result.role;

      if (roles.includes(tokenRole)) {
        next();
      } else {
        console.log(403, "User not authorized");
      }
    } catch (error) {
      res.status(403).json({
        success: false,
        message: "User not authorized",
      });
    }
  };
};
