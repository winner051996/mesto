let modalOverlay = document.querySelector('.modal-overlay');
let modalOverlayNameInput = modalOverlay.querySelector('.edit-form__input_type_name');
let modalOverlayProfessionInput = modalOverlay.querySelector('.edit-form__input_type_profession');
let closeButton = modalOverlay.querySelector('.modal-overlay__button_type_close-modal ');
let editProfileButton = document.querySelector('.profile__button_type_edit');
let saveButton = modalOverlay.querySelector('.edit-form__button_type_save');
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

const modalControl = (action) => {
    if (action === 'close' && modalOverlay.classList.contains('modal-overlay_open')) {
        modalOverlay.classList.remove('modal-overlay_open');
    } else if (action === 'open' && !modalOverlay.classList.contains('modal-overlay_open')) {
        modalOverlay.classList.add('modal-overlay_open');
    }
};

editProfileButton.addEventListener('click', () => {
    modalControl('open');
    let currentNameContent = profileName.textContent;
    let currentProfessionContent = profileProfession.textContent;
    
    modalOverlayNameInput.setAttribute('value', currentNameContent ?? '');
    modalOverlayProfessionInput.setAttribute('value', currentProfessionContent ?? '');
});

closeButton.addEventListener('click', () => {
    modalControl('close');
});

saveButton.addEventListener('click', (event) => {
    event.preventDefault();
    const name = modalOverlayNameInput.value;
    const profession = modalOverlayProfessionInput.value;
    if (checkInputValue(name, profession)) {
        profileName.textContent = name;
        profileProfession.textContent = profession;
        modalControl('close');
    }
});

const checkInputValue = (value1, value2) => {
    if (value1 && value2) {
        return true;
    }
    return false;
}
