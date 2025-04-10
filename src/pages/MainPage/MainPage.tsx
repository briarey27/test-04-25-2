import styles from "./MainPage.module.scss";
import { Users } from "widgets/Users";

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <Users />
        </div>
    );
};

export default MainPage;
