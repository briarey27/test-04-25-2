import styles from "./UserCard.module.scss";
import UserIcon from "shared/assets/user-icon.svg?react";
import { memo } from "react";

interface IProps {
    userId: number;
    name: string;
    city: string;
    company: string;
    email: string;
}

const UserCard = ({ name, city, company, email }: IProps) => {
    return (
        <div className={styles.user_card_wrapper}>
            <div className={styles.row}>
                <div className={styles.user_icon_wrapper}>
                    <UserIcon className={styles.user_icon} />
                </div>
                <div className={styles.col}>
                    <div className={styles.user_name}>{name}</div>
                    <div>
                        <div>{city}</div>
                        <div>{company}</div>
                        <div>{email}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const MemoizedUserCard = memo(UserCard);
