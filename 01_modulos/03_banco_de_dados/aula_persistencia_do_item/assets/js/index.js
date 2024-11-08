import {
    displayInConsole,
    removeDataLocalStorage,
    retrieveDataLocalStorage,
    saveDataLocalStorage,
    transformsDataInJson,
    transformsDataInJsObject,
    saveDataSessionStorage,
    retrieveDataSessionStorage,
} from "./utils/functions.js";

(() => {
    saveDataLocalStorage("user_name", "Gabriel Mello");
    displayInConsole(retrieveDataLocalStorage("user_name"));
    removeDataLocalStorage("user_name");
    displayInConsole(retrieveDataLocalStorage("user_name"));

    saveDataLocalStorage("cart_value", 192.99);
    displayInConsole(retrieveDataLocalStorage("cart_value"));
    removeDataLocalStorage("cart_value");
    displayInConsole(retrieveDataLocalStorage("cart_value"));

    const buyer = {
        user: "Gabriel Mello",
        products_in_cart: ["mouse USB", "hub USB", "Tela Samsung"],
    };
    displayInConsole(buyer);
    saveDataLocalStorage("buyer", transformsDataInJson(buyer));

    const buyer_of_storage = retrieveDataLocalStorage("buyer");
    displayInConsole(buyer_of_storage);

    const buyer_of_storage_converted = transformsDataInJsObject(buyer_of_storage);
    displayInConsole(buyer_of_storage_converted);

    saveDataLocalStorage("o_dado", "informacao");
    removeDataLocalStorage("o_dado");
    displayInConsole(retrieveDataLocalStorage("o_dado"));

    saveDataSessionStorage("o_dado", "informacao");
    displayInConsole(retrieveDataSessionStorage("o_dado"));
    removeDataLocalStorage("o_dado");
    displayInConsole(retrieveDataSessionStorage("o_dado"));
})();