import styles from "./AppContainer.module.css";
export function AppContainer({ children }) {
	return <main className={styles.container}>{children}</main>;
}
