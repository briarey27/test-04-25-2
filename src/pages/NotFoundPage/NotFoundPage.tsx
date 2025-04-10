import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className={styles.not_found_wrapper}>
            <div className={styles.header}>Page not found</div>
            <Link to={"/"} className={styles.link}>
                Back to home page
            </Link>
        </div>
    );
};

export default NotFoundPage;
