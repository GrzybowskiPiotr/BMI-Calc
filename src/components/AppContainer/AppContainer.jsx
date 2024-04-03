import styles  from "./AppContainer.module.css";
export function AppContainer({ children }) {
	return <div className={styles.container}>{children}</div>;
}
