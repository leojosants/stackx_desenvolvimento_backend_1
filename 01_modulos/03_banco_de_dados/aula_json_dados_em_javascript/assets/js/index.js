import {
    createObject,
    displayInConsole,
    stackElementArray,
    tellMeHi,
    transformsDataIntoJsObject,
    transformsDataIntoJson,
} from "../utils/functions.js";

(() => {
    const animal_cat = createObject("gato", "o felino", 7, "07/07");
    displayInConsole(animal_cat);

    const animal_dog = createObject("cachorro", "o canino", 12, "08/08");
    displayInConsole(animal_dog);

    const list_pets = [];
    stackElementArray(list_pets, animal_dog, animal_cat);
    displayInConsole(list_pets);

    const list_in_json = transformsDataIntoJson(list_pets);
    displayInConsole(list_in_json);
    displayInConsole(transformsDataIntoJsObject(list_in_json));

    const date_today = new Date();
    displayInConsole(date_today);

    const date_in_json = transformsDataIntoJson(date_today);
    displayInConsole(date_in_json);

    const return_date = transformsDataIntoJsObject(date_in_json);
    displayInConsole(return_date);
    displayInConsole(new Date(return_date));

    animal_dog.pet_shop = date_today;
    displayInConsole(animal_dog);

    animal_cat.pet_shop = date_today;
    displayInConsole(animal_cat);

    const new_list = [];
    stackElementArray(new_list, animal_dog, animal_cat);
    displayInConsole(new_list);

    const new_value_in_json = transformsDataIntoJson(new_list);
    displayInConsole(new_value_in_json);

    const json_wrong = '[{name: "Gabriel"}]';
    tellMeHi(json_wrong);

    const json_correct = '[{"name": "Gabriel"}]';
    tellMeHi(json_correct);
})();