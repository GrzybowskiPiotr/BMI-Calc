import styles from "./InputRadio.module.css";
export function InputRadio({ handleTypeChange,  id, value, checked}) {
	return (
		<input
			className={styles.radio}
			id={id}
			type="radio"
			value={value}
			name="type"
			onChange={handleTypeChange}
			checked={checked}
		/>
	);
}
