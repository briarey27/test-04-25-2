import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import ClearIcon from "shared/assets/cross-icon.svg?react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    onClear?: () => void;
}

export default forwardRef<HTMLInputElement, InputProps>(function Input(
    { label, onClear, ...otherProps },
    ref,
) {
    return (
        <div className={styles.input_wrapper}>
            {label && <div className={styles.label}>{label}</div>}
            <input ref={ref} {...otherProps} />
            {!!onClear && Boolean(otherProps?.value) && (
                <ClearIcon className={styles.clear_icon} onClick={onClear} />
            )}
        </div>
    );
});
