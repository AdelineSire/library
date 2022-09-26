const sum = (array) => {
	return array.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		0
	);
};

export default sum;
