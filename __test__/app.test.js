import {action} from '../src/client/js/app'

describe("checks for existence of a function", () => {
    test("The function exist", () => {
           expect(action).toBeDefined();
    })
}); 
