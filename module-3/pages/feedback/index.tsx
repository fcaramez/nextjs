import React from "react";
import { Feedback } from "../../types/feedback.types";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";
const FeedbackPage = ({
  feedbackItems,
}: {
  feedbackItems: Array<Feedback>;
}) => {
  return (
    <ul>
      {feedbackItems.map((el: Feedback) => {
        return <li key={el.id}>{el.feedback}</li>;
      })}
    </ul>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
  //fetch();
};

export default FeedbackPage;
