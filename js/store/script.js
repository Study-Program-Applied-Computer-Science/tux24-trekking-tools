document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            image: "../asset//images/chaewul-kim-3owKeypl5ls-unsplash.jpg",
            title: "Hiking Shoes",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$99.99"
        },
        {
            image: "../asset//images/field-forest-and-fire-zW8NsaUruMU-unsplash.jpg",
            title: "Hiking Poles",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$26.99"
        },
        {
            image: "../asset//images/goutham-krishna-lITrCLM6hHc-unsplash.jpg",
            title: "Tent",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$15.99"
        },
        {
            image: "../asset//images/hendrik-morkel-h6mb47WAkbE-unsplash.jpg",
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$39.99"
        }
    ];

    const additionalProducts = [
        {
            image: "../asset//images/field-forest-and-fire-zW8NsaUruMU-unsplash.jpg",
            title: "Hiking Poles",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$26.99"
        },
        {
            image: "../asset//images/goutham-krishna-lITrCLM6hHc-unsplash.jpg",
            title: "Tent",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$15.99"
        },
        {
            image: "../asset//images/hendrik-morkel-h6mb47WAkbE-unsplash.jpg",
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$39.99"
        },
        {
            image: "../asset//images/hendrik-morkel-h6mb47WAkbE-unsplash.jpg",
            title: "Backpack",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$39.99"
        }
    ];
    const productContainer = document.querySelector(".products");


    function populateProducts(productList) {
        productList.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2";

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover rounded-t-lg">
                <div class="p-5">
                    <h3 class="text-xl font-medium mb-2">${product.title}</h3>
                    <p class="text-gray-600 mb-4">${product.description}</p>
                    <div class="flex items-center justify-between">
                        <p class="text-green-700 font-semibold">${product.price}</p>
                        <button class="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors">Add to Cart</button>
                    </div>
                </div>
            `;

            productContainer.appendChild(productCard);
        });
    }


    const loadMoreButton = document.getElementById("load-more-button")

    // Initial population of products
    populateProducts(products);

    // Event listener for load more button
    loadMoreButton.addEventListener("click", () => {
        populateProducts(additionalProducts);
    });

    const sortLowToHighButton = document.getElementById("sortLowToHigh");
    const sortHighToLowButton = document.getElementById("sortHighToLow");

    // Event listeners for sort buttons
    sortLowToHighButton.addEventListener("click", () => {

        products.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
        populateProducts(products);
    });

    sortHighToLowButton.addEventListener("click", () => {
        products.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
        populateProducts(products);
    });




});
