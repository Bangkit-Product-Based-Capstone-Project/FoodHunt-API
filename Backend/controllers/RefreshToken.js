import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    console.log(refreshToken);
    if (!refreshToken) return res.sendStatus(401);
    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!user[0]) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.KEY_REFRESH_TOKEN, (err, decode) => {
      if (err) return res.sendStatus(403);

      const userId = user[0].id;
      const name = user[0].name;
      const email = user[0].email;

      const accessToken = jwt.sign({ userId, name, email }, process.env.KEY_ACCESS_TOKEN, {
        expiresIn: "60s",
      });
      res.json({ accessToken });
    });
  } catch (error) {
    console.error(error);
  }
};
