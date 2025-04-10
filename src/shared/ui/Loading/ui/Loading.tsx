import styles from "./Loading.module.scss";
import { Skeleton } from "shared/ui/Skeleton";

export const Loading = () => {
    return (
        <div className={styles.loading_wrapper}>
            <Skeleton h={88} />
            <Skeleton h={400} />
        </div>
    );
};
