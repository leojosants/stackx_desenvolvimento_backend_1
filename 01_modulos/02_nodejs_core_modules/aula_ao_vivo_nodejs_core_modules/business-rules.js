let data = [];
let lastId = 0;

const createItem = (item) => {
    lastId += 1;
    item.id = lastId;
    data.unshift(item);
    return item;
};

const readItems = () => {
    return data;
};

const readItemById = (id) => {
    return data.find(
        (item) => item.id === Number(id)
    );
};

const updateItem = (id, updatedItem) => {
    const index = data.findIndex(
        (item) => item.id === Number(id)
    );

    if (index !== -1) {
        data[index] = {
            ...data[index],
            ...updatedItem,
            id: data[index].id,
        };
        return data[index];
    }

    return null;
};

const deleteItem = (id) => {
    const index = data.findIndex(
        (item) => item.id === Number(id)
    );

    if (index !== -1) {
        const deleteItem = data.splice(index, 1);
        return deleteItem[0];
    }

    return null;
};

export {
    createItem, readItems, readItemById, updateItem, deleteItem,
};