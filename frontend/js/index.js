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