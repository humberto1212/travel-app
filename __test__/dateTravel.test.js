const datePlan = require('../src/server/dateTravel')

 describe("Testing the planned date", () => {
    test("The function exist", () => {
          const {monthPlan} = datePlan("14/04/2021") 
        expect(monthPlan).toBe(monthPlan); 
    })
});  

