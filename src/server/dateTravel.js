function datePlan(date) {
    const myDatePlan = new Date(date);
    const yearPlan = myDatePlan.getFullYear();
    const monthPlan = myDatePlan.getMonth() + 1;
    const dayPlan = myDatePlan.getDate();
    const fullYearPlan = yearPlan + "-" + monthPlan + "-" + dayPlan

    return {yearPlan, monthPlan, dayPlan, fullYearPlan}   
}

module.exports =   datePlan 
