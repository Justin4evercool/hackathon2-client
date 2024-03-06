import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
import "./App.scss";


function App() {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  // Function to fetch a question from the backend
  const fetchQuestion = async () => {
    try {
      const response = await fetch('http://localhost:3030/information');
      const data = await response.json();
      setQuestion(data);
      setSelectedAnswer(""); // Reset selected answer for a new question
      setFeedback(""); // Reset feedback for a new question
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  // Fetch a question when the component mounts
  useEffect(() => {
    fetchQuestion();
  }, []);

  // Handle answer selection
  const handleAnswerClick = async (answer) => {
    setSelectedAnswer(answer);
    try {
      const response = await fetch('http://localhost:3030/information/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question.question, answer: answer }),
      });
      const data = await response.json();
      setFeedback(data.correct ? "You're correct!" : "You chose the wrong answer. Try again!");
    } catch (error) {
      console.error("Error validating answer:", error);
    }
  };

  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <nav className="header__nav">
          <ul className="header__lists">
            <li className="header__list">Home</li>
            <li className="header__list">Contact</li>
            <li className="header__list">All Question List</li>
          </ul>
        </nav>
      </header>

<main className="question">
        {question && (
          <>
            <label className="question__label">Question</label>
            <p>{question.question}</p>
            <ul className="question__lists">
              {[...question.incorrect_answers, question.correct_answer]
                .sort(() => 0.5 - Math.random()) // Randomize answers
                .map((answer, index) => (
                  <button key={index} className="question__button" onClick={() => handleAnswerClick(answer)}>
                    {answer}
                  </button>
              ))}
            </ul>
            {feedback && <p>{feedback}</p>}
            {feedback && !feedback.includes("correct") && (
              <button onClick={fetchQuestion}>Try Another Question</button>
            )}
          </>
        )}
      </main>

      <footer className="footer">
        <div className="footer__left">
          {/* <Link className="footer__link" to="/"> */}
          <img className="footer__logo" src={logo} alt="logo" />
          <h3 className="footer__logo-text">Be Smart</h3>
          {/* </Link> */}
        </div>

        <div className="footer__mid">
          <p className="footer__text">Make Your Smarter Inc.</p>
          <p className="footer__text">
            <a className="footer__number" href="tel:">
              1-778-888-8888
            </a>
          </p>
          <p className="footer__text">Vancouver, BC</p>
        </div>

        <div className="footer__right">
          <ul className="footer__links">
            <li className="footer__item">Home</li>
            <li className="footer__item">Contact</li>
            <li className="footer__item">All Question List</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
