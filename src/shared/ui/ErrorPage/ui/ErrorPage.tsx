import styles from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";

export const ErrorPage = ({ text }: { text: string }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>{text}</div>
            <Link to={"/"} className={styles.link}>
                Back to home page
            </Link>
        </div>
    );
};
