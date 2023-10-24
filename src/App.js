import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Quiz from "./components/Pages/Quiz";
import Results from "./components/Pages/Results";
import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0);

    const fetchQuestions = async (category = "", difficulty = "") => {
        let link = `https://opentdb.com/api.php?amount=10${
            category && `&category=${category}`
        }${difficulty && `&difficulty=${difficulty}`}&type=multiple`;
        const data = await fetch(link);
        const res = await data.json();
        setQuestions(res.results);
    };

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/home" exact>
                    <Home
                        name={name}
                        setName={setName}
                        fetchQuestions={fetchQuestions}
                    />
                </Route>
                <Route path="/quiz" exact>
                    <Quiz
                        name={name}
                        questions={questions}
                        score={score}
                        setScore={setScore}
                        setQuestions={setQuestions}
                    />
                </Route>
                <Route path="/results" exact>
                    <Results name={name} score={score} setScore={setScore} />
                </Route>
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
