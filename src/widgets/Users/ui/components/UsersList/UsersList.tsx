import styles from "./UsersList.module.scss";
import { UserCard } from "shared/ui/UserCard";
import { IUser } from "entities/user/model/types/types.ts";
import { Link } from "react-router-dom";

interface IProps {
    users: IUser[];
}

export const UsersList = ({ users }: IProps) => {
    return (
        <div className={styles.users_wrapper}>
            {users.map((user) => {
                return (
                    <Link to={`user/${user.id}`}>
                        <UserCard
                            key={user.id}
                            userId={user.id}
                            name={user.name}
                            company={user.company.name}
                            city={user.address.city}
                            email={user.email}
                        />
                    </Link>
                );
            })}
        </div>
    );
};
