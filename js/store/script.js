document.addEventListener("DOMContentLoaded", () => {
    const products = [
        {
            image: "../../asset/images/chaewul-kim-3owKeypl5ls-unsplash.jpg",
            title: "Hiking Shoes",
            description: "Perfect for all terrains, these hiking shoes provide durability and comfort.",
            price: "$99.99"
        },
        {
            image: "../../asset/images/field-forest-and-fire-zW8NsaUruMU-unsplash.jpg",
            title: "Hiking Poles",
            description: "Lightweight and sturdy hiking poles for all your trekking needs.",
            price: "$26.99"
        },
        {
            image: "../../asset/images/goutham-krishna-lITrCLM6hHc-unsplash.jpg",
            title: "Tent",
            description: "A compact and easy-to-set-up tent, perfect for outdoor adventures.",
            price: "$15.99"
        },
        {
            image: "../../asset/images/hendrik-morkel-h6mb47WAkbE-unsplash.jpg",
            title: "Backpack",
            description: "Spacious and comfortable, ideal for long hikes and expeditions.",
            price: "$39.99"
        },
        {
            image: "../../asset/images/urban-sanden-RCF-_l7vITo-unsplash.jpg",
            title: "Hiking Poles",
            description: "Reliable and adjustable, these poles enhance your hiking experience.",
            price: "$21.99"
        },
        {
            image: "../../asset/images/fadhila-nurhakim-9nSWpYZIxYs-unsplash.jpg",
            title: "Tent",
            description: "Durable and weather-resistant tent, suitable for all seasons.",
            price: "$45.99"
        },
        {
            image: "../../asset/images/tomasz-biskup-WiB2V6J3Dmo-unsplash.jpg",
            title: "Hiking Shoes",
            description: "Designed for ultimate comfort and grip on rough terrains.",
            price: "$65.99"
        },
        {
            image: "../../asset/images/yann-allegre-dN5_TGCfyMg-unsplash.jpg",
            title: "Backpack",
            description: "Lightweight and ergonomic, perfect for carrying all your gear.",
            price: "$12.99"
        }
    ];

    const additionalProducts = [
        {
            image: "../../asset/images/urban-sanden-RCF-_l7vITo-unsplash.jpg",
            title: "Hiking Poles",
            description: "Reliable and adjustable, these poles enhance your hiking experience.",
            price: "$21.99"
        },
        {
            image: "../../asset/images/fadhila-nurhakim-9nSWpYZIxYs-unsplash.jpg",
            title: "Tent",
            description: "Durable and weather-resistant tent, suitable for all seasons.",
            price: "$45.99"
        },
        {
            image: "../../asset/images/tomasz-biskup-WiB2V6J3Dmo-unsplash.jpg",
            title: "Hiking Shoes",
            description: "Designed for ultimate comfort and grip on rough terrains.",
            price: "$65.99"
        },
        {
            image: "../../asset/images/yann-allegre-dN5_TGCfyMg-unsplash.jpg",
            title: "Backpack",
            description: "Lightweight and ergonomic, perfect for carrying all your gear.",
            price: "$12.99"
        }
    ];

    const productContainer = document.querySelector(".products");


    function populateProducts(productList) {
        productList.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2";

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover rounded-t-lg cursor-pointer">
                <div class="p-5 cursor-pointer">
                    <h3 class="text-xl font-medium mb-2">${product.title}</h3>
                    <p class="text-gray-600 mb-4">${product.description}</p>
                    <div class="flex items-center justify-between">
                        <p class="text-green-700 font-semibold">${product.price}</p>
                        <button class="add-cart  text-white px-3 py-1 rounded hover:bg-green-700 transition-colors">Add to Cart</button>
                    </div>
                </div>
            `;

            productContainer.appendChild(productCard);
        });
    }


    const loadMoreButton = document.getElementById("load-more-button")
    const sortBy = document.getElementById("sort-by")
    populateProducts(products);

    sortBy.addEventListener("click", () => {
        toggleSortOptions()
    })

    loadMoreButton.addEventListener("click", () => {
        loadMoreButton.classList.add('hidden');
        productContainer.innerHTML = "";
        products.push(...additionalProducts);
        populateProducts(products);
    });

    function toggleSortOptions() {
        const sortOptions = document.getElementById('sort-options');
        const sortIcon = document.getElementById('sort-icon');
        if (sortOptions.classList.contains('hidden')) {
            sortOptions.classList.remove('hidden');
            sortIcon.classList.remove('fa-angle-down');
            sortIcon.classList.add('fa-angle-up');
        } else {
            sortOptions.classList.add('hidden');
            sortIcon.classList.remove('fa-angle-up');
            sortIcon.classList.add('fa-angle-down');
        }
    }

    const sortLowToHighButton = document.getElementById("sortLowToHigh");
    const sortHighToLowButton = document.getElementById("sortHighToLow");

    sortLowToHighButton.addEventListener("click", () => {
        productContainer.innerHTML = "";

        products.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
        populateProducts(products);
    });

    sortHighToLowButton.addEventListener("click", () => {
        productContainer.innerHTML = "";
        products.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
        populateProducts(products);
    });




});
