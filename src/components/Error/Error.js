import classes from "./Error.module.css";

const Error = ({ children }) => {
    return <div className={classes.error}>{children}</div>;
};

export default Error;
