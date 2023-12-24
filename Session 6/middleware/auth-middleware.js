const verifyTokenMiddleware = (req, res) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) {
      throw new CustomErr("token must be provided", 403);
    }
    const fields = authorization.split(" ");
  }
}