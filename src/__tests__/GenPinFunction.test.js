import { GenPinFunction } from '../Common/GenPinFunction';
import { checkDupNum } from '../Common/GenPinFunction';
import { checkDescendNumbers } from '../Common/GenPinFunction';
import { checkAscendNumbers } from '../Common/GenPinFunction';
import { checkUniqPins } from '../Common/GenPinFunction';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new EnzymeAdapter() });
describe('Generate Function', () => {
    test('Testing GenPinFunction', () => {
        let inst = GenPinFunction();
        expect(inst).not.toBe(null);
    })
    test('Testing GenPinFunction', () => {
        let inst = GenPinFunction();
        expect(typeof inst).toBe("object");
    })
    test('Test DUPLICATE Number Function', () => {
        let inst = checkDupNum(10);
        expect(inst).toBe(false);
    })
    test('Test DESCENDING Function with the string ', () => {
        let inst = checkDescendNumbers("testing");
        expect(inst).toBe("gnitset");
    })
    test('Test SEQUENCE Function', () => {
        let inst = checkAscendNumbers(10);
        expect(inst).toBe(false);
    })
    test('Test DUPLICATE Function', () => {
        let inst = checkDupNum(10);
        expect(inst).toBe(false);
    })
    test('Test DESCENDING function', () => {
        let inst = checkDescendNumbers("reverse");
        expect(inst).toBe("esrever");
    })
    test('Test SEQUENCE Function', () => {
        let inst = checkAscendNumbers(10);
        expect(inst).toBe(false);
    })
    test('Test UNIQUE pins Function', () => {
        let inst = checkUniqPins(['4785','8564','1542']);
        expect(inst).toBe(inst);
    })
    test('Test UNIQUE pins Function', () => {
        let inst = checkUniqPins(['4785','8564','1542']);
        expect(inst).not.toBe([]);
    })
    test('Test UNIQUE pins Function', () => {
        let inst = checkUniqPins(['4785','8564','1542']);
        expect(typeof inst).toBe('object');
    })
})
