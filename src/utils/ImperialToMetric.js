export function ImperialToMetric(unit, rate){
    let calc = 0;
    let UNIT = Number(unit);
    calc = Math.round(UNIT * rate);
    return calc
}