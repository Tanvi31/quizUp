import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            <Link to="/home">
                <h1>quizUp</h1>
            </Link>
            <span>play to learn... </span>
        </div>
    );
};

export default Header;
