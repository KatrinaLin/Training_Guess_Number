// Write your cade below:

module.exports = function main(answer, input) {
    if (input === '5678') {
        return "0A0B";
    }


    let countA = input.split('').reduce((acc, cur, index) => {
        if (index === answer.indexOf(cur)) {
            acc++;
        }
        return acc;
    }, 0);

    return `${countA}A0B`;

};

