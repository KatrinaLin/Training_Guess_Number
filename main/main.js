module.exports = function compare(answer, input) {

    let count = answer.split('').reduce((acc, cur, index) => {
        if (input.includes(cur)) {
            cur === input.charAt(index) ? acc.A++ : acc.B++;
        }
        return acc;
    }, {A: 0, B: 0});

    return `${count.A}A${count.B}B`;
};