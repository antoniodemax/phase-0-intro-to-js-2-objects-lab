// Write your solution in this file!
const employee = {
    name: 'Anthony'
};
//updateEmployeeWithKeyAndValue
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}
//destructivelyUpdateEmployeeWithKeyAndValue
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update  employee object with the new key-value  (destructive update)
    employee[key] = value;

    // Return the  updated employee object
    return employee;
}

//deleteFromEmployeeByKey
function deleteFromEmployeeByKey(employee, key) {
    // Create copy of the employee object 
    const updatedEmployee = { ...employee };

    if (key in updatedEmployee) {
        // Use delete to remove the property with the specified-key
        delete updatedEmployee[key];
    }

    // Return the updated employee object 
    return updatedEmployee;
}

//destructivelyDeleteFromEmployeeByKey
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}