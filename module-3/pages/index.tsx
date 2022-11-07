import axios from "axios";
import { FormEvent, useRef } from "react";

export default function Home() {
  const emailInput = useRef<HTMLInputElement>(null);
  const feedbackInput = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const email = emailInput.current?.value.toString();
    const feedback = feedbackInput.current?.value.toString();

    const body = {
      email: email,
      text: feedback,
    };

    console.log(body);

    /* const options = {
      method: "PSOT",
      mode: "no-cors",
      body: JSON.stringify(body),
    }; */

    axios
      .post("http://localhost:3000/api/feedback", body)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    /* fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err)); */
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
    </div>
  );
}
