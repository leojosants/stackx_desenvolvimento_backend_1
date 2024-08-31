'use strict'


import { events } from "./utils/domEvents.js";

import { 
    appendChildFN, 
    createDocumentFragmentFN, 
    prependFN, 
    querySelectorFN,
} from "./utils/domFunctions.js";

import {
    disabledButton,
    enabledButton,
    hideLoading,
    visibleLoading,
} from "./utils/generalFunctions.js";


(() => {
    const domElements = {
        generateUserButton: querySelectorFN('[data-generate-user-button]'),
        containerLoading: querySelectorFN('[data-container-loading]'),
    };

    const fetchFromAPI = async () => {
        try {
            visibleLoading(
                domElements.containerLoading, 'class-hide', 'class-visible'
            );

            const url = 'https://randomuser.me/api/';
            const response = await fetch(url);
            const data = await response.json();

            setTimeout(
                () => hideLoading(
                    domElements.containerLoading, 'class-visible', 'class-hide'
                ), 1000
            );

            renderUserData(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const renderUserData = (data) => {
        const user = data.results[0];

        const {
            name: {
                title: termTreatment,
                first: firstName,
                last: lastName,
            },
            dob: {
                age,
            },
            email,
            phone,
            cell,
            picture: {
                large: image
            },
            location: {
                street: {
                    number: streetNumber,
                    name: streetName,
                },
                postcode,
                city,
                state,
                country,
            },
        } = user;

        const container = querySelectorFN('[data-container]');
        const cardElement = querySelectorFN('[data-container-card]');
        const fragment = createDocumentFragmentFN();

        cardElement.innerHTML = `
            <div class="class-card__head">
                <a href="mailto:${email}" data-user-email>
                    <i class="fas fa-envelope"></i>
                    E-mail
                </a>

                <div class="class-head__user-image">
                    <img src="${image}" alt="Imagem de perfil" data-user-image>
                </div>
            </div>

            <div class="class-card__body">
                <div class="class-body__user-post-address">
                    <div>
                        <span data-user-street-number>
                            ${streetNumber}
                        </span>
                        <span title="Endereço da Rua">
                            Street Address
                        </span>
                    </div>

                    <div>
                        <span data-user-postcode>
                            ${postcode}
                            </span>
                        <span title="Código postal">
                            Postcode
                        </span>
                    </div>

                    <div>
                        <span data-user-street-name>
                            ${streetName}
                        </span>
                        <span title="Nome da rua">
                            Street Name
                        </span>
                    </div>
                </div>

                <div class="class-body__user-name">
                    <span class="class-user-name__title" data-user-name-title>
                        ${termTreatment}
                    </span>

                    <span class="class-user-name__full" data-user-name-full>
                        ${firstName} ${lastName}
                    </span>

                    <span class="class-user-name__age" data-user-name-age title="Idade">
                        ${age}
                    </span>
                </div>

                <div class="class-body__user-location-address">
                    <span data-user-location-address>
                        ${city}, ${state}, ${country}
                    </span>
                </div>
            </div>

            <div class="class-card__foot">
                <div class="class-foot__user-contact-info">
                    <span data-user-contact-phone>
                        <i class="fas fa-phone"></i>
                        ${phone}
                    </span>

                    <span data-user-contact-mobile>
                        <i class="fa-solid fa-mobile-button"></i>
                        ${cell}
                    </span>
                </div>
            </div>
        `;

        appendChildFN(fragment, cardElement);
        prependFN(container, fragment);
    }

    domElements.generateUserButton.addEventListener(
        events.click, () => {
            disabledButton(
                domElements.generateUserButton
            );

            fetchFromAPI();

            setTimeout(
                () => enabledButton(
                    domElements.generateUserButton
                ), 500
            );
        }
    );

    window.addEventListener(
        events.DOMContentLoaded, () => {
            fetchFromAPI();
        }
    );
})();