    function datePlan(datePlan) {
    const myDatePlan = new Date(datePlan);
    const yearPlan = myDatePlan.getFullYear();
    const monthPlan = myDatePlan.getMonth() + 1;
    const dayPlan = myDatePlan.getDate();

    return {yearPlan, monthPlan, dayPlan}   
}

export { datePlan } 