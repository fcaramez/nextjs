import axios from "axios";
import { FormEvent, useRef, useState } from "react";
import { Feedback } from "../types/feedback.types";

export default function Home() {
  const emailInput = useRef<HTMLInputElement>(null);
  const feedbackInput = useRef<HTMLTextAreaElement>(null);
  /* const [email, setEmail] = useState<string>();
  const [feedback, setFeedback] = useState<string>(); */
  const [feedbackItems, setFeedbackItems] = useState<Array<Feedback>>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const body = {
      email: emailInput.current?.value,
      feedback: feedbackInput.current?.value,
    };

    fetch("/api/feedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  const loadFeedbackHandler = async () => {
    const unparsed = await fetch("/api/feedback");
    const parsedData = await unparsed.json();
    setFeedbackItems(parsedData.feedback);
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows={5} ref={feedbackInput}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      {feedbackItems ? (
        <ul>
          {feedbackItems.map((item: Feedback) => {
            return <li key={item.id.toString()}>{item.feedback}</li>;
          })}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}
