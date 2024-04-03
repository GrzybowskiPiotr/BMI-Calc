import styles from "./Card.module.css";
export function Card({ icon, heading, desc }) {
	return (
		<div className={`${styles.card} card`}>
			<div className={styles.heading}>
				<img src={icon} alt="" />
				{heading}
			</div>
			<p>{desc}</p>
		</div>
	);
}
