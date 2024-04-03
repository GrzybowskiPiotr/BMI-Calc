import styles from "./Tips.module.css";
import {TIPSARR} from "../../constans/TIPSARR.js";

export function Tips() {
	return (
		<div className={styles.tipsContainer}>
			<ul>
				{TIPSARR.map((tip) => {
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
