import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    console.log("Im being called");
    const { email, feedback } = req.body;
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedback,
    };

    const filePath = path.join(process.cwd(), "data", "feedback.json");

    const fileData = fs.readFileSync(filePath);

    const data = JSON.parse(fileData.toString());

    data.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(data));
    console.log(data);

    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else res.status(200).json({ message: "Hello world" });
};

export default handler;
