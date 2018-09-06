module.exports = function compare(answer, input) {

    let count = answer.split('').reduce((acc, cur, index) => {
        if (input.includes(cur)) {
            if (cur === input.charAt(index)) {
                acc.A++;
            } else {
                acc.B++;
            }
        }
        return acc;
    }, {A: 0, B: 0});

    return `${count.A}A${count.B}B`;
};

function generateAnswer() {
    let answer = [];

    while (answer.length < 4) {
        let random = Math.floor(Math.random() * 10);
        if (answer.includes(random)) {
            continue;
        }
        answer.push(random);
    }
    return answer.join();
}
