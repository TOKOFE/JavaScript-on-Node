let fs = require('fs');

function findMaxEvenWord(inputData) {
	let maxWord = '';
	let nextSpace = 0;
	let fromIndex = 0;

	while (nextSpace >= 0) {
		nextSpace = inputData.indexOf(' ', fromIndex);

		if (nextSpace === -1) {
			word = inputData.substring(fromIndex);
		} else {
			word = inputData.substring(fromIndex, nextSpace);
		}

		if (word.length % 2 === 0) {
			maxWord = maxWord.length >= word.length ? maxWord : word;
		}

		fromIndex = nextSpace + 1;
	}

	return maxWord ? maxWord : '00';
}

fs.readFile('./input-data.txt', 'utf-8', (err, data) => {
	if (err) {
		return;
	}

	data.split('\n').forEach((sentence, index) => {
		console.log(`Case ${index + 1}`);
		console.log('-------------------');
		// console.log(sentence);

		const startTime = new Date();
		// console.log('--> ', startTime);
		const firstMaxEvenWord = findMaxEvenWord(sentence);
		const endTime = new Date();
		// console.log('==> ', endTime);
		let elapsedTime = (endTime - startTime);

		// console.log('\n--------------------');
		console.log(`Result: ${firstMaxEvenWord} (${firstMaxEvenWord.length}) for ${elapsedTime}`);
		console.log('------------------------------------------------------------ \n\n');
	});


});

