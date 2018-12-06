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
		console.log('-------------------\n');
		console.log(sentence);

		const firstMaxEvenWord = findMaxEvenWord(sentence);

		console.log('\n--------------------');
		console.log(`Result: ${firstMaxEvenWord} (${firstMaxEvenWord.length})`);
		console.log('------------------------------------------------------------ \n\n');
	});


});

