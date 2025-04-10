import { IUser } from "entities/user/model/types/types.ts";
import styles from "./FoundedList.module.scss";
import { Link } from "react-router-dom";
import { useClickOutside } from "shared/hooks/useClickOutside";

interface IProps {
    users: IUser[];
    onClose: () => void;
}

const FoundedList = ({ users, onClose }: IProps) => {
    const dropDownRef = useClickOutside(onClose);

    return (
        <div className={styles.founded_list} ref={dropDownRef}>
            {users.map((user) => {
                return (
                    <Link
                        key={user.id}
                        to={`/user/${user.id}`}
                        className={styles.founded_item}
                    >
                        {user.name}
                    </Link>
                );
            })}
        </div>
    );
};

export default FoundedList;
