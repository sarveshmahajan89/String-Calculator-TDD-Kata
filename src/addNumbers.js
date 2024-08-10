export function add(numbers) {
    if (numbers === '') return 0;
    let sumOfNumbers;
    if (numbers.startsWith('//')) {
        const newDelimiter = numbers.charAt(2);
        numbers = numbers.replaceAll(newDelimiter, ',');
    }
    sumOfNumbers = numbers.split(/,|\n/).reduce((sum, val) => {
        const num = Number(val);
        sum = sum + (isNaN(num) ? 0 : num);
        return sum;
    }, 0);
    return sumOfNumbers;
}