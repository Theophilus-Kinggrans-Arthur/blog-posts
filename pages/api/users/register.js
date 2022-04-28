import User from "../../../models/user.model";
import dbConnect from "../../../libs/dbConnect";

export default async function handler(req, res) {
  await dbConnect();
  const { method, body } = req;

  if (method === "POSST") {
    // checking to see if email is already in the system
    let user = await User.findOne({ email: body.email });
    if (user) {
      return res.status(400).json({ msg: "Email already in use." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
