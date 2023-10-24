import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <span>
                Made with ❤️ by{" "}
                <a href="https://github.com/mayanksetia13">Mayank Setia</a>
            </span>
        </div>
    );
};

export default Footer;
