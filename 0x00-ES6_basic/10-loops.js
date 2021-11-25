export default function appendToEachArrayValue(array, appendString) {
    let  arry = [];
    for (let v of array) {
	arry.push(`${appendString}${v}`);
    }
    return arry;
}
