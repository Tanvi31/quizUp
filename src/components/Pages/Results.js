import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Results.module.css";

const Results = ({ name, score, setScore }) => {
    const history = useHistory();
    useEffect(() => {
        if (!name) {
            history.push("/");
        }
    }, [name, history]);

    const handleNewGame = () => {
        history.push("/home");
        setScore(0);
    };
    return (
        <div className={classes.results}>
            <h2>Results</h2>
            <p>
                <span>{name}</span>, scored {score} out of 10
            </p>
            <button className={classes.playAgain} onClick={handleNewGame}>
                Play Again
            </button>
        </div>
    );
};

export default Results;
