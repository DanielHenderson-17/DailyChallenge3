// given an array example [-3, 4, -10, 7, 12, -45]

// create array with all positive numbers
// create array with all negative numbers

const input = [-3, 4, -10, 7, 12, -45, 0];

function getPositivesAndNegatives(array)
{
    var positives = array.filter(value => value >= 0);
    var negatives = array.filter(value => value < 0);

    // array.forEach(v => {
    //     if(v >= 0) {
	// 		positives.push(v);
    //     }
	// 	else{
	// 		negatives.push(v);
	// 	}
    // });
    
    return [positives, negatives];
}

const arrayResult = getPositivesAndNegatives(input);

console.log('Positives:', arrayResult[0]);
console.log('Negatives:', arrayResult[1]);
