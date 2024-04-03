import  styles  from "./Footer.module.css";

export function Footer() {
	return (
		<footer className={styles.footer}>
			<p>
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a
					href="https://www.frontendmentor.io/profile/GrzybowskiPiotr"
					target="_blank">
					GrzybowskiPiotr
				</a>
				.
			</p>
		</footer>
	);
}
