
export function Heading({ title, description, icon }) {
	return (
		<div className="heading">
			{icon && <img src={icon} alt="logon icon" />}
			{title}
			<p>{description}</p>
		</div>
	);
}
