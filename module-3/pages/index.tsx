import { useRef } from "react";

export default function Home() {
  const emailInput = useRef<HTMLInputElement>(null);
  const feedbackInput = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const email = emailInput.current?.value;
    const feedback = feedbackInput.current?.value;
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
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
