import styles from "./HeroContainer.module.css";
export function HeroContainer({ children }) {
	return (
		<div className={styles.container}>
			{children}
			<div className={styles.backGround}></div>
		</div>
	);
}
