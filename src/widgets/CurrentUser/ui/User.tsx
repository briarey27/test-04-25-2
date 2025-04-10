import styles from "./User.module.scss";
import { IUser } from "entities/user/model/types/types.ts";
import UserBar from "./components/UserBar/UserBar.tsx";
import UserDetails from "./components/UserDetails/UserDetails.tsx";

export const User = ({ user }: { user: IUser }) => {
    return (
        <div className={styles.users_wrapper}>
            <UserBar userName={user.name} />
            <UserDetails user={user} />
        </div>
    );
};
