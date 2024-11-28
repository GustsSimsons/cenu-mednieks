//-----------------PROFILE-------------------//

document.addEventListener('DOMContentLoaded', () => {
    const ienaktButton = document.getElementById('profile-btn');
    const popupContainer = document.getElementById('popup-container-prof');

    ienaktButton.addEventListener('click', () => {
        popupContainer.style.display = 'flex';
        document.body.classList.add('no-scroll');
    });

    popupContainer.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            popupContainer.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });
});
