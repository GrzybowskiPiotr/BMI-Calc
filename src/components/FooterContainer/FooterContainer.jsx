import styles from "./FooterContainer.module.css";
export function FooterContainer({ children }) {
	return <div className={styles.container}>{children}</div>;
}
