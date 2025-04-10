import styles from "./Skeleton.module.scss";

export interface SkeletonProps {
    style?: React.CSSProperties;
    w?: number | string;
    h?: number | string;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
    br?: number;
}
export const Skeleton = ({
    w = "100%",
    h = "100%",
    mt,
    mb,
    ml,
    mr,
    style,
    br = 12,
    ...otherProps
}: SkeletonProps) => {
    return (
        <div
            className={styles.skeleton_wrapper}
            style={{
                width: w,
                height: h,
                marginTop: mt,
                marginBottom: mb,
                marginLeft: ml,
                marginRight: mr,
                borderRadius: br,
                ...style,
            }}
            {...otherProps}
        >
            <div className={styles.animate_wrapper}>
                <div className={styles.animation} />
            </div>
        </div>
    );
};
