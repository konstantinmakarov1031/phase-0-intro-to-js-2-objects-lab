const employee = {
    name: "Sam",
    address: "123 Broadway", 
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = {...obj};

    newObj[key] = value; 

    return newObj;
}

const newerEmployee = updateEmployeeWithKeyAndValue(); 

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value; 
    
    return obj;
}

const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue();

function deleteFromEmployeeByKey(obj, key){
     const newObj = {...obj}; 

    delete newObj[key];

    return newObj;
}

const deleteEmployee = deleteFromEmployeeByKey();

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]; 

    return obj;
}