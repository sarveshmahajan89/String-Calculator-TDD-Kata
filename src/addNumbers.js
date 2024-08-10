export function add(numbers) {
    if (numbers === '') return 0;
    let sumOfNumbers;
    sumOfNumbers = numbers.split(/,|\n/).reduce((sum, val) => {
        sum = sum + Number(val);
        return sum;
    }, 0);
    return sumOfNumbers;
}