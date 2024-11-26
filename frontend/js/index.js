fetch('/get-items')
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                if (data && data.length > 0) {
                    data.forEach((item, index) => {
                        const priceElement = document.getElementById(`price-${index + 1}`);
                        const nameElement = document.getElementById(`name-${index + 1}`);
                        const imgElement = document.getElementById(`image-${index + 1}`);
                        const storeElement = document.getElementById(`store-name-${index + 1}`);

                        priceElement.textContent = item.price;
                        nameElement.textContent = item.name;
                        storeElement.textContent = item.store_name;
                        imgElement.src = item.image;
                    });
                    // Set the src attribute of the img tag with the id "image-1"
                } else {
                    console.error('No items found');
                }
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });

function srchBttn(){
    window.open("http://localhost:3000/main-window");
}


const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');

// Fona aizvēršana
const closeModal = () => {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
};

// Rāda pieslēgšanās logu
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Rāda reģistrēšanās logu
registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'flex';
});

// Aizver logu, kad klikšķina ārpus satura
window.addEventListener('click', (e) => {
    if (e.target === loginModal || e.target === registerModal) {
        closeModal();
    }
});