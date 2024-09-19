document.addEventListener('DOMContentLoaded', loadEmployees);

const form = document.getElementById('employee-form');
form.addEventListener('submit', addEmployee);

function loadEmployees() {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';
    
    employees.forEach((employee, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${employee.name} - ${employee.position} 
            <button onclick="deleteEmployee(${index})">Delete</button>
        `;
        employeeList.appendChild(li);
    });
}

function addEmployee(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push({ name, position, email, phone });
    localStorage.setItem('employees', JSON.stringify(employees));

    form.reset();
    loadEmployees();
}

function deleteEmployee(index) {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(employees));
    loadEmployees();
}
