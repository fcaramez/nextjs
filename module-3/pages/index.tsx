import axios from "axios";
import { FormEvent, useRef, useState } from "react";

export default function Home() {
  /* const emailInput = useRef<HTMLInputElement>(null);
  const feedbackInput = useRef<HTMLTextAreaElement>(null); */
  const [email, setEmail] = useState<string>();
  const [feedback, setFeedback] = useState<string>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const body = {
      email: email,
      text: feedback,
    };

    console.log(body);

    await fetch("/api/feedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea
            id="feedback"
            rows={5}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}
