import styles from "./UserBar.module.scss";
import UserIcon from "shared/assets/user-icon.svg?react";
import BackIcon from "shared/assets/arrow-left-icon.svg?react";
import { Link } from "react-router-dom";

interface IProps {
    userName: string;
}

const UserBar = ({ userName }: IProps) => {
    return (
        <div className={styles.user_bar_wrapper}>
            <Link to={"/"}>
                <div className={`${styles.icon_wrapper} ${styles.link}`}>
                    <BackIcon className={styles.icon} />
                </div>
            </Link>
            <div className={styles.name}>{userName}</div>
            <div className={`${styles.icon_wrapper} ${styles.avatar}`}>
                <UserIcon className={styles.icon} />
            </div>
        </div>
    );
};

export default UserBar;
