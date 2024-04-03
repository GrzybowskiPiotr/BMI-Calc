import styles from "./Tips.module.css";

const TipsArr = [
	{
		icon: "/src/assets/images/icon-eating.svg",
		title: "Healthy eating",
		details:
			"Healthy eating promotes weight control, disease prevention, better     digestion, immunity, mental clarity, and mood.",
	},
	{
		icon: "/src/assets/images/icon-exercise.svg",
		title: "Regular exercise",
		details:
			"Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
	},
	{
		icon: "/src/assets/images/icon-sleep.svg",
		title: "Adequate sleep",
		details:
			"Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
	},
];

export function Tips() {
	return (
		<div className={styles.tipsContainer}>
			
			<ul>
				{TipsArr.map((tip) => {
					return (
						<li key={tip.title}>
							<div className={styles.tip}>
								<img src={tip.icon} alt={tip.title} />
								<h2 className="headingM">{tip.title}</h2>
								<p>{tip.details}</p>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
