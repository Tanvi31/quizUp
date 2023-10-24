import { useEffect, useState } from "react";
import classes from "./Quiz.module.css";
import QuestionCard from "../QuestionCard/QuestionCard";

import { ColorRing } from "react-loader-spinner";

const Quiz = ({ name, questions, setQuestions, score, setScore }) => {
    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);

    useEffect(() => {
        // console.log(questions);
        setOptions(
            questions &&
                handleShuffle([
                    questions[currQues]?.correct_answer,
                    ...questions[currQues]?.incorrect_answers,
                ])
        );
    }, [questions, currQues]);

    // console.log(options);

    const handleShuffle = (choices) => {
        return choices.sort(() => Math.random() - 0.5);
    };
    return (
        <div className={classes.quizCardLayout}>
            <span className={classes.userInfo}>Welcome, {name}</span>
            {questions ? (
                <div className={classes.quizInfo}>
                    <span>{questions[currQues]?.category}</span>
                    <span>Score: {score}</span>
                </div>
            ) : (
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
            <QuestionCard
                questions={questions}
                options={options}
                currQues={currQues}
                setCurrQues={setCurrQues}
                correct={questions && questions[currQues]?.correct_answer}
                setQuestions={setQuestions}
                score={score}
                setScore={setScore}
            />
        </div>
    );
};

export default Quiz;
