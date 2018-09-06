// Write your cade below:

module.exports = function main(answer, input) {

    let countA = input.split('').reduce((acc, cur, index) => {
        if (index === answer.indexOf(cur)) {
            acc++;
        }
        return acc;
    }, 0);

    let countB = input.split('').reduce((acc, cur, index) => {
        if (answer.includes(cur) && index !== answer.indexOf(cur)) {
            acc++;
        }
        return acc;
    }, 0);

    return `${countA}A${countB}B`;
};

