import React, { useState } from "react";
import { Feedback } from "../../types/feedback.types";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";
const FeedbackPage = ({
  feedbackItems,
}: {
  feedbackItems: Array<Feedback>;
}) => {
  const [feedback, setFeedback] = useState<Feedback>();

  const feedbackHandler = async (id: string) => {
    const unparsedData = await fetch(`/api/${id}`);
    const parsedData = await unparsedData.json();
    setFeedback(parsedData.feedback);
  };
  return (
    <>
      {feedback ? <p>{feedback.email}</p> : <></>}
      <ul>
        {feedbackItems.map((el: Feedback) => {
          return (
            <li key={el.id}>
              {el.feedback}{" "}
              <button onClick={feedbackHandler.bind(null, el.id)}>
                Show Details
              </button>
            </li>
          );
        })}
      </ul>
    </>
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
