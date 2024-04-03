import styles from "./AlignContentCenter.module.css";
export function AlignContentCenter({ children }) {
	return <div className={styles.container}>{children}</div>;
}
