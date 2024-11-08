export const createObject = (type, name, age, birthdate) => {
    return {
        type: type,
        name: name,
        age: age,
        birthdate: birthdate,
    };
};

export const stackElementArray = (array, ...elementos) => {
    array.push(elementos);
};

export const transformsDataIntoJson = (data) => {
    return JSON.stringify(data);
};

export const transformsDataIntoJsObject = (data) => {
    return JSON.parse(data);
};

export const tellMeHi = (data) => {
    try {
        transformsDataIntoJsObject(data);
        displayInConsole("oi!");
    }
    catch (error) {
        console.log("bloco try falhou -->", error);
    }
};

export const displayInConsole = (argument_1, argument_2 = null) => {
    if (argument_1) {
        console.log(argument_1);
    }
    else if (argument_1 && argument_2) {
        console.log(argument_1, argument_2);
    }
};