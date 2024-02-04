const baseUrl='https://localhost:44398/api/Employees';

export function getEmployees (){
    return  fetch(baseUrl).then(res=>res.json());
}

export function deleteEmployee (id){
    return  fetch(`${baseUrl}/DeleteEmployee/${id}`, {method:'DELETE'});
}

export function addEmployee (employee){
    return  fetch(`${baseUrl}/AddEmployee`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(employee)
    });
}

export function getSingleEmployee(id) {
    return fetch (`${baseUrl}/getSingleEmployee/${id}`)
    .then(res=>res.json());
}

export function updateEmployee (employee){
    return  fetch(`${baseUrl}/updateEmployee`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(employee)
    });
}

