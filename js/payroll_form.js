window.addEventListener('DOMContentLoaded', (event)=> {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function(){
        if(name.value.length==0){
           textError.textContent="";
           return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;;
            textError.textContent="";
        } catch (e) {
            textError.textContent=e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input', function(){
        output.textContent = salary.value;
    });

    const startDate = document.querySelector('#startDate');
    const dateError = document.querySelector('.date-error');
    startDate.addEventListener('input', function(){
        if(startDate.value.id==null){
           dateError.dateContent="";
           return;
        }
        try {
            (new EmployeePayrollData()).startDate = startDate.value;;
            dateError.dateContent="";
        } catch (e) {
            dateError.dateContent=e;
        }
    });
});
