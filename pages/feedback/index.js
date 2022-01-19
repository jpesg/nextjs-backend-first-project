import { buildPath, extractFeebackData } from "../api/feedback";
import { useState } from "react";
function FeedbackPage(props) {
  const [feedback, setFeedback] = useState({});
  const loadFeebackHandler = (id) => {
    fetch(`/api/${id}`)
      .then((r) => r.json())
      .then((d) => setFeedback(d.feedback));
  };
  return (
    <div>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {props.feedback.map((i) => (
          <li id={i.id}>
            {i.text}{" "}
            <button onClick={loadFeebackHandler.bind(null, i.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  //do not use fetch to get data from api routes, use the code from the controller
  const _path = buildPath();
  const data = extractFeebackData(_path);
  return {
    props: {
      feedback: data,
    },
  };
}
export default FeedbackPage;
