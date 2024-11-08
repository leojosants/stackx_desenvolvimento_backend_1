export const saveDataLocalStorage = (key_name, data) => {
    localStorage.setItem(key_name, data);
};

export const removeDataLocalStorage = (key_name) => {
    localStorage.removeItem(key_name);
};

export const retrieveDataLocalStorage = (key_name) => {
    return localStorage.getItem(key_name);
};

export const saveDataSessionStorage = (key_name, data) => {
    sessionStorage.setItem(key_name, data);
};

export const removeDataSessionStorage = (key_name) => {
    sessionStorage.removeItem(key_name);
};

export const retrieveDataSessionStorage = (key_name) => {
    return sessionStorage.getItem(key_name);
};

export const displayInConsole = (argument) => {
    console.log(argument);
};

export const transformsDataInJson = (data) => {
    return JSON.stringify(data);
};

export const transformsDataInJsObject = (data) => {
    return JSON.parse(data);
};