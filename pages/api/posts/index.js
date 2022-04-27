import dbConnect from "../../../libs/dbConnect";
import Post from "../../../models/post.model";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const posts = await Post.find({});
    if (!posts) return res.status(404).json({ msg: "Posts not found" });
    res.status(200).json(posts);
  } else if (res.method === "POST") {
    const post = await Post.create(req.body);
    res.status(201).json({ status: "post created successfully", post });
  } else {
    res
      .status(405)
      .json({ error: "METHOD not allowed. only GET and POST is allowed" });
  }
}
