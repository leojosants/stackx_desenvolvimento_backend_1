export const querySelectorFN = (elementIdentification) => {
    return document.querySelector(elementIdentification);
};

export const createDocumentFragmentFN = () => {
    return document.createDocumentFragment();
}

export const appendChildFN = (parentElement, childElement) => { 
    parentElement.appendChild(childElement);
};
export const prependFN = (parentElement, childElement) => { 
    parentElement.prepend(childElement);
};