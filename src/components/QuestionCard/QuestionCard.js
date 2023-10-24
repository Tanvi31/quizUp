import { useState } from "react";
import "./QuestionCard.css";
import { useHistory } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import Error from "../Error/Error";

const QuestionCard = ({
    questions,
    options,
    currQues,
    setCurrQues,
    correct,
    setQuestions,
    score,
    setScore,
}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleSelected = (i) => {
        if (selected === i && selected === correct) {
            return "select";
        } else if (selected === i && selected !== correct) {
            return "wrong";
        } else if (i === correct) {
            return "select";
        }
    };

    const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
    };

    const handleQuit = () => {
        history.push("/home");
        setScore(0);
        setQuestions();
    };

    const handleNext = () => {
        if (currQues > 8) {
            history.push("/results");
        } else if (selected) {
            setCurrQues(currQues + 1);
            setSelected();
        } else {
            setError("Please select an option");
        }
    };

    return (
        <div className="cardlayout">
            <h3>Question No: {currQues + 1}</h3>
            <p>{questions && questions[currQues]?.question}</p>
            <span>{error && <Error>{error}</Error>}</span>

            <div className={"optionsCard"}>
                {!options && (
                    <ColorRing
                        visible={true}
                        height="60"
                        width="60"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={[
                            "#e15b64",
                            "#f47e60",
                            "#f8b26a",
                            "#abbd81",
                            "#849b87",
                        ]}
                    />
                )}
                {options &&
                    options.map((i) => {
                        return (
                            <button
                                onClick={() => handleCheck(i)}
                                key={i}
                                className={`singleOption ${
                                    selected && handleSelected(i)
                                }`}
                                disabled={selected}
                            >
                                {i}
                            </button>
                        );
                    })}
            </div>
            <div className="controls">
                <button className="next" onClick={handleNext}>
                    Next Question
                </button>
                <button className="quit" onClick={handleQuit}>
                    Quit
                </button>
            </div>
        </div>
    );
};

export default QuestionCard;
