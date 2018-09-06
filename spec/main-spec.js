const main = require('../main/main');

describe('main()', () => {

    var answer;

    beforeEach(function () {
        answer = "1234"
    });

    it('should return 4A0B when user input matches answer', function() {
        let input = '1234';
        let result = main(answer, input);
        let expected = '4A0B';
        expect(result).toEqual(expected)
    });

    it('should return 0A0B when user input does not match answer at all', function() {
        let input = '5678';
        let result = main(answer, input);
        let expected = '0A0B';
        expect(result).toEqual(expected)
    });

    it('should return 1A0B when user input matches one digit of answer but not others', function() {
        let input = '1567';
        let result = main(answer, input);
        let expected = '1A0B';
        expect(result).toEqual(expected)
    });

    it('should return 0A1B when user input matches one digit but not in the right position', function() {
        let input = '5671';
        let result = main(answer, input);
        let expected = '0A1B';
        expect(result).toEqual(expected)
    });
});

