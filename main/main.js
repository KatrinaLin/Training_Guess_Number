module.exports = function main(answer, input) {

    let count = input.split('').reduce((acc, cur, index) => {
        if (answer.includes(cur)) {
            if (index === answer.indexOf(cur)) {
                acc.A++;
            } else {
                acc.B++;
            }
        }
        return acc;
    }, {A: 0, B: 0});

    return `${count.A}A${count.B}B`;
};

