'use strict'

function chekArr(arr) {
	if (arr === null) return false;
	return arr.split(',').every(element => !Number.isNaN(element) && element>0) && arr.split(',').length === 4;
}

function findSolution() {
	const arrIntut = prompt (
		'Для получения нужного числа, введите коэффициенты через запятую в следующей последовательности: \n \n необходимое число, первый множитель, второй множитель, слагаемое:\n\n Например:', [26, 3, 2 ,2]
		);
	const arrParametrs = [];
	if (!chekArr(arrIntut)) return 'Вы отменили ввод, или ввели не верные коэффициенты';
	arrIntut.split(',').forEach(element => arrParametrs.push(+element));
	function find(current, history) {
		if (current === arrParametrs[0]) {
			return history;
		} else if (current > arrParametrs[0]) {
			return null;
		} else {
			return 	find(current * arrParametrs[1], `${history} * ${arrParametrs[1]}`) || 
					find(current * arrParametrs[2], `${history} * ${arrParametrs[2]}`) ||
					find(current + arrParametrs[3], `(${history} + ${arrParametrs[3]})`)
		}
	}
	return find(1, '1')
}

console.log(findSolution());