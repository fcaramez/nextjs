import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Path } from "typescript";

export const buildFeedbackPath = () => {
  return path.join(process.cwd(), "data", "feedback.json");
};

export const extractFeedback = (filePath: Path | string) => {
  const fileData = fs.readFileSync(filePath);

  const data = JSON.parse(fileData.toString());
  return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    console.log("Im being called");
    const { email, feedback } = req.body;
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      feedback: feedback,
    };

    const filePath = buildFeedbackPath();

    const data = extractFeedback(filePath);

    data.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(data));
    console.log(data);

    res.status(201).json({ message: "Success!", feedback: newFeedback });
  } else {
    const filePath = buildFeedbackPath();

    const data = extractFeedback(filePath);

    res.status(200).json({ message: "Success!", feedback: data });
  }
};

export default handler;
