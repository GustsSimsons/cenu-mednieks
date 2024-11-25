//-----------------PAGINATION-------------------//

const items = document.querySelectorAll('.sw_item');
const itemsPerPage = 10; // number of items per page
let currentPage = 1;
const paginationContainer = document.querySelector('.pagination .page-numbers');

function displayPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    items.forEach((item, index) => {
        item.style.display = (index >= start && index < end) ? 'flex' : 'none';
    });
}

function updatePaginationButtons() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    paginationContainer.innerHTML = ''; 

    // one page -> hide pagination
    if (totalPages <= 1) {
        document.querySelector('.pagination').style.display = 'none';
        return;
    } else {
        document.querySelector('.pagination').style.display = 'flex';
    }

    let pageButtons = [];

    if (currentPage <= 4) {
        // 1-4
        for (let i = 1; i <= Math.min(5, totalPages); i++) {
            pageButtons.push(`<button class="page-btn" data-page="${i}">${i}</button>`);
        }
        if (totalPages > 5) {
            pageButtons.push('<span class="dots">...</span>');
            pageButtons.push(`<button class="page-btn" data-page="${totalPages}">${totalPages}</button>`);
        }
    } else if (currentPage >= totalPages - 3) {
        pageButtons.push(`<button class="page-btn" data-page="1">1</button>`);
        pageButtons.push('<span class="dots">...</span>');
        for (let i = totalPages - 4; i <= totalPages; i++) {
            if (i > 1) {
                pageButtons.push(`<button class="page-btn" data-page="${i}">${i}</button>`);
            }
        }
    } else {
        // 5-8
        pageButtons.push(`<button class="page-btn" data-page="1">1</button>`);
        pageButtons.push('<span class="dots">...</span>');
        for (let i = currentPage - 1; i <= currentPage + 2; i++) {
            pageButtons.push(`<button class="page-btn" data-page="${i}">${i}</button>`);
        }
        pageButtons.push('<span class="dots">...</span>');
        pageButtons.push(`<button class="page-btn" data-page="${totalPages}">${totalPages}</button>`);
    }

    paginationContainer.innerHTML = pageButtons.join('');

    document.querySelectorAll('.page-btn').forEach(button => {
        button.classList.toggle('active', parseInt(button.dataset.page) === currentPage);

        button.addEventListener('click', () => {
            currentPage = parseInt(button.dataset.page);
            displayPage(currentPage);
            updatePaginationButtons();
        });
    });
}


displayPage(currentPage);
updatePaginationButtons();

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
        updatePaginationButtons();
    }
});

document.getElementById('next').addEventListener('click', () => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
        updatePaginationButtons();
    }
});

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



//-----------------STAR-------------------//

document.addEventListener('DOMContentLoaded', () => {
    const toggleStars = document.querySelectorAll('.toggle-star');
    const plusCircles = document.querySelectorAll('.plus-circle');

    toggleStars.forEach((star, index) => {
        const plusCircle = plusCircles[index];

        star.addEventListener('click', () => {
            if (star.src.includes('empthy-star.png')) {
                star.src = 'images/filled-star.png'; 
                plusCircle.style.display = 'none';
            } else {
                star.src = 'images/empthy-star.png';
                plusCircle.style.display = 'flex';
            }
        });

        plusCircle.addEventListener('click', () => {
            star.src = 'images/filled-star.png';
            plusCircle.style.display = 'none';
        });
    });
});




