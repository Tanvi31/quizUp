import classes from "./Home.module.css";
import Categories from "../../data/Categories";
import { useState } from "react";
import Error from "../Error/Error";
import { useHistory } from "react-router-dom";

const Home = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !category || !difficulty) {
            setError(true);
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            history.push("/quiz");
            console.log(name, difficulty, category);
        }
    };

    return (
        <div className={classes.home}>
            <h2>QuizUp</h2>
            <span>Select category & difficulty level</span>
            {error && <Error>Please complete Details to begin..</Error>}
            <div className={classes.settings}>
                <div className="settings_control">
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        placeholder=" Name.."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="settings_control">
                    <label htmlFor="option"></label>
                    <select
                        name="Category"
                        id="option"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {Categories.map((c) => {
                            return (
                                <option key={c.value} value={c.value}>
                                    {c.category}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="settings_control">
                    <label htmlFor="level"></label>
                    <select
                        name="levelOption"
                        id="level"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <button onClick={handleSubmit}>START</button>
            </div>
        </div>
    );
};

export default Home;
