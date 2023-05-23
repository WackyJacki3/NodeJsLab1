let mySum = (...inputs) => {
    let total = 0;
    for (let input of inputs) {
        total += input;
    }
    return total;
}

export default mySum;