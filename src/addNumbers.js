export function add(numbers) {
    let sumOfNumbers;
    sumOfNumbers = numbers.split(",").reduce((sum, val) => {
        sum = sum + Number(val);
        return sum;
    }, 0);
    return sumOfNumbers;
}