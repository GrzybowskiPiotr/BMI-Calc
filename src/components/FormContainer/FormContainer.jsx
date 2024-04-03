import { FormMetric } from "../FormMetric/FormMetric";
import { Result } from "../Result/Result";
import styles from "./FormContainer.module.css";
import { useState } from "react";
import { FormImperialUnits } from "../FormImperialUnits/FormImperialUnits";
import { FormUnitType } from "../FormUnitType/FormUnitType";

export function FormContainer() {
	const [result, setResult] = useState(0);
	const [type, setType] = useState("metric");
	const [heightR, setHeightR] = useState();

	function handleTypeChange(type) {
		setType(type);
		setResult(0);
	}

	return (
		<div className={styles.contianer}>
		
				<h2 className="headingM ">Enter your details below</h2>
				<FormUnitType handleTypeChange={handleTypeChange} type={type} />

				{type === "metric" && (
					<FormMetric result={setResult} setHeightR={setHeightR} />
				)}
				{type === "imperial" && (
					<FormImperialUnits result={setResult} setHeightR={setHeightR} />
				)}

				<Result result={result} height={heightR} type={type} />
		</div>
	);
}
