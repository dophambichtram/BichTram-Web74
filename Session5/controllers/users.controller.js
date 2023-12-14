import userService from "../services/users.service.js"

export const registerController = async (req, res, next) => {
  const access_token = await userService.register(req.body);
  return res.json({
    message: "Registrations successfully",
    result: {
      access_token,
    }
  });
}

export const loginController = async (req, res, next) => {
  const access_token = await userService.login(user_id);
  return res.json({
    message: "Login successfully",
    result: {
      access_token,
    }
  });
}

export const getMeController = async (req, res, next) => {
  const access_token = await userService.get(user_id);
  return res.json({
    message: "Login successfully",
    result: {
      access_token,
    }
  });
};
