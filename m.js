
function mergeArrays(arr1, arr2) {
   let  array = arr2.concat(arr1); // 1-combining two arrays into one
	for (let n = 0; n < array.length; n++){ // 3- n-to sort ALL the numbers in an array
	for (let i = 0; i < array.length - 1 + n; i++){ // 2-bubble sorting of one pair of numbers
		if (array[i] > array[i + 1]){
	const buff = array[i];
	array[i] = array[i + 1];
	array[i + 1] = buff;
		}
	 }
	}
	let ar3 = Array.from( new Set(array)); //deleting duplicate numbers in an array

	return ar3;
}
