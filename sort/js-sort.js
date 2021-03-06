let fs = require('fs');
let allWords;

function findMaxEvenWord(inputData) {
	allWords = inputData.split(' ');

	const evenWords = allWords.filter(word => {
		return word.length % 2 === 0;
	});

	if (evenWords.length === 0) {
		return '00';
	}
	else {
		const sortedWords = evenWords.sort((a, b) => {
			return b.length - a.length;
		});

		// console.log(evenWords);

		return sortedWords[0];
	}
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

