import { NextApiRequest, NextApiResponse } from "next";
import { Feedback } from "../../types/feedback.types";
import { buildFeedbackPath, extractFeedback } from "./feedback";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { feedbackId } = req.query;

  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const foundFeedback = feedbackData.find(
    (el: Feedback) => el.id === feedbackId
  );

  res.status(200).json({ feedback: foundFeedback });
};

export default handler;
