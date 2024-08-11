export function add(numbers) {
    if (numbers === '') return 0;
    let sumOfNumbers, negativeNumbersList = [];
    if (numbers.startsWith('//')) {
        const newDelimiter = numbers.charAt(2);
        numbers = numbers.replaceAll(newDelimiter, ',');
    }
    numbers = numbers.replaceAll("\\n", "\r\n");
    sumOfNumbers = numbers.split(/,|\n/).reduce((sum, val) => {
        let num = Number(val);
        num = (isNaN(num) ? 0 : num);
        if (num >= 0) {
            sum = sum + num;
        } else {
            negativeNumbersList.push(num);
        }
        return sum;
    }, 0);
    if (negativeNumbersList.length > 0 ) {
        throw new Error('negative numbers not allowed ' + negativeNumbersList.join(','));
    }
    return sumOfNumbers;
}