import styles from "./LimitationWraper.module.css";
export function LimitationWraper({ children }) {
	return <div className={styles.limitations}>{children}</div>;
}
