export const visibleLoading = (loading, classNameHide, classNameVisible) => {
    loading.classList.remove(classNameHide);
    loading.classList.add(classNameVisible);
};

export const hideLoading = (loading, classNameVisible, classNameHide) => {
    loading.classList.remove(classNameVisible);
    loading.classList.add(classNameHide);
};

export const enabledButton = (button) => {
    button.removeAttribute('disabled');
    button.style.cursor = 'pointer';
    button.style.opacity = '1';
};

export const disabledButton = (button) => {
    button.setAttribute('disabled', true);
    button.style.cursor = 'not-allowed';
    button.style.opacity = '0.5';
};