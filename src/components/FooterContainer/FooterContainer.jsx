import styles from "./FooterContainer.module.css";
export function FooterContainer({ children }) {
	return <footer className={styles.container}>{children}</footer>;
}
