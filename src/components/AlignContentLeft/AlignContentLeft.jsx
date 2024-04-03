import styles from "./AlignContentLeft.module.css";
export function AlignContentLeft({ children }) {
	return <div className={styles.container}>{children}</div>;
}
