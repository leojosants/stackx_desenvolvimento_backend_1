const add_user_button = document.querySelector("[data-add-user-button]");
const loading = document.querySelector("[data-loading]");

const executeActionToAddUserButton = () => {
    add_user_button.style.cursor = "not-allowed";
};

add_user_button.addEventListener(
    "click", executeActionToAddUserButton
);

window.addEventListener(
    "load", () => {
        setTimeout(
            () => {
                loading.style.display = "none";
            }, 1500
        );
    }
);