const products = [
  {
    id: 1,
    productName: "4K Ultra HD Smart TV",
    productImage: "https://m.media-amazon.com/images/I/5107V4lwjCL._SY300_SX300_QL70_FMwebp_.jpg",
    productPrice: 42999.00
  },
  {
    id: 2,
    productName: "Professional Camera Lens",
    productImage: "https://m.media-amazon.com/images/I/41EWQhI5vvL._SX300_SY300_QL70_FMwebp_.jpg",
    productPrice: 8799.00
  },
  {
    id: 3,
    productName: "Stainless Steel Coffee Maker",
    productImage: "https://m.media-amazon.com/images/I/31ibPrt4WEL._SX300_SY300_QL70_FMwebp_.jpg",
    productPrice: 1899.00
  },
  {
    id: 4,
    productName: "Ergonomic Office Chair",
    productImage: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/4e14dc7a-5985-4aa9-baae-b2d41a016697._CR0,0,1200,628_SX405_CB1169409_QL70_.jpg",
    productPrice: 9999.00
  },
  {
    id: 5,
    productName: "Portable Power Bank",
    productImage: "https://m.media-amazon.com/images/I/41FntwhrjZL._SX300_SY300_QL70_FMwebp_.jpg",
    productPrice: 899.00
  },
  {
    id: 6,
    productName: "Gaming Keyboard and Mouse Combo",
    productImage: "https://m.media-amazon.com/images/I/81m7TJHq4US._AC_SY355_.jpg",
    productPrice: 1299.00
  },
  {
    id: 7,
    productName: "Smart Fitness Watch",
    productImage: "https://m.media-amazon.com/images/I/71JU-bUt-sL._AC_SY355_.jpg",
    productPrice: 2499.00
  },
  {
    id: 8,
    productName: "Robot Vacuum Cleaner",
    productImage: "https://m.media-amazon.com/images/I/71PWVroHwDL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    productPrice: 14999.00
  },
  {
    id: 9,
    productName: "Noise Cancelling Earbuds",
    productImage: "https://m.media-amazon.com/images/I/61qIEvCy6+L._AC_SY300_SX300_.jpg",
    productPrice: 4799.00
  },
  {
    id: 10,
    productName: "Apple MacBook Pro 16-inch",
    productImage: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp16-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=Nys1UFFBTmI1T0VnWWNyeEZhdDFYamhTSEZFNjlmT2xUUDNBTjljV1BxWVk4UDMvOWNCVUEyZk1VN2FtQlpZWXZvdUZlR0V0VUdJSjBWaDVNVG95YlBROXI4TlIyY1pzUUZwNVlXcEFNb2c",
    productPrice: 249900.00
  },
  {
    id: 11,
    productName: "Sony Alpha a7 IV Full-Frame Camera",
    productImage: "https://d1ncau8tqf99kp.cloudfront.net/converted/92650_original_local_1200x1050_v3_converted.webp",
    productPrice: 249990.00
  },
  {
    id: 12,
    productName: "Classic Black Leather Watch",
    productImage: "https://m.media-amazon.com/images/I/51I2QWdLMXL._AC_SY445_.jpg",
    productPrice: 3499.00
  },
  {
    id: 13,
    productName: "Vintage Canvas Backpack",
    productImage: "https://m.media-amazon.com/images/I/61FAUsvQ+cS._AC_SY300_SX300_.jpg",
    productPrice: 1899.00
  },
  {
    id: 14,
    productName: "Modern Minimalist Desk Lamp",
    productImage: "https://m.media-amazon.com/images/I/71GyHvysW8L.__AC_SY445_SX342_QL70_FMwebp_.jpg",
    productPrice: 1299.00
  },
  {
    id: 15,
    productName: "High-Performance Blender",
    productImage: "https://m.media-amazon.com/images/I/61NJKDnPjpL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    productPrice: 7999.00
  },
  {
    id: 16,
    productName: "Air Purifier with HEPA Filter",
    productImage: "https://www.honeywellstore.com/store/images/products/large_images/hpa200-true-hepa-large-room-air-purifier-with-allergen-remover-black.jpg",
    productPrice: 7999.00
  },
  {
    id: 17,
    productName: "Men's Slim Fit Polo Shirt (Navy)",
    productImage: "https://image.hm.com/assets/hm/61/66/616684dfd04b39e90ef6e20addd738700fdc83a7.jpg?imwidth=657",
    productPrice: 692.00
  },
  {
    id: 18,
    productName: "Women's Yoga Leggings (Charcoal)",
    productImage: "https://beyondyoga.com/cdn/shop/files/SD3027_black-charcoal_7523.jpg?v=1745446518&width=750",
    productPrice: 699.00
  },
  {
    id: 19,
    productName: "Durable Outdoor Camping Tent",
    productImage: "https://m.media-amazon.com/images/I/61YTJSjeyML.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    productPrice: 3799.00
  },
  {
    id: 20,
    productName: "Professional Chef Knife Set",
    productImage: "https://m.media-amazon.com/images/I/81e1h4isgAL._AC_SY450_.jpg",
    productPrice: 2599.00
  },
  {
    id: 21,
    productName: "Smart Home Security Camera",
    productImage: "https://m.media-amazon.com/images/I/61IsgsyFC8L._AC_SY355_.jpg",
    productPrice: 1499.00
  },
  {
    id: 22,
    productName: "Children's Wooden Building Blocks",
    productImage: "https://m.media-amazon.com/images/I/71Q23MoTM8L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    productPrice: 299.00
  },
  {
    id: 23,
    productName: "Adjustable Standing Desk",
    productImage: "https://m.media-amazon.com/images/I/81Esec8ZokL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    productPrice: 13053.00
  },
  {
    id: 24,
    productName: "Premium Noise-Cancelling Headphones",
    productImage: "https://m.media-amazon.com/images/I/61oqO1AMbdL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    productPrice: 29990.00
  }

];



// Stores the unique IDs of items currently in the cart
const cartItems = [];
let totalPrice = 0;

// Updates the number of items displayed next to the cart icon
function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cartItems.length;
    }
}

// Displays all products on the page
function displayProducts() {
    const prods = document.getElementById("products");
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const produc = document.createElement("div");
        produc.setAttribute("class", 'product');
        produc.innerHTML = `
            <img src="${product.productImage}" alt="${product.productName}">
            <b class="h2">${product.productName}</b>
            <p class="p1">$${product.productPrice.toFixed(2)}</p>
            <button class="addtocart" onclick="addToCart(${product.id})">Add To Cart</button>`;
        prods.appendChild(produc);
    }
}

// Adds an item to the cart
function addToCart(id) {
    const productToAdd = products.find(p => p.id === id);

    if (cartItems.includes(id)) {
        alert(`${productToAdd.productName} is already in the cart.`);
        return;
    }
    
    cartItems.push(id);
    
    const cart = document.getElementById("cart");
    const div = document.createElement("div");
    div.setAttribute("class", "item");
    div.setAttribute("data-product-id", id);
    div.innerHTML = `
        <table>
            <tr>
                <td><img src="${productToAdd.productImage}" alt="${productToAdd.productName}"></td>
                <td><p class="p2">${productToAdd.productName}</p></td>
                <td class="tdprice"><p class="p1">$${productToAdd.productPrice.toFixed(2)}</p></td>
                <td><button class="delete" onclick="deleteFromCart(${id})">Delete</button></td>
            </tr>
        </table>`;
    
    cart.appendChild(div);
    
    totalPrice += productToAdd.productPrice;
    document.getElementById("total").innerHTML = totalPrice.toFixed(2);

    // Call the new function to update the cart count
    updateCartCount();
}


function deleteFromCart(id) {
    const productToRemove = products.find(p => p.id === id);

    const itemElement = document.querySelector(`.item[data-product-id="${id}"]`);
    if (itemElement) {
        itemElement.remove();
    }

    const itemIndex = cartItems.indexOf(id);
    if (itemIndex > -1) {
        cartItems.splice(itemIndex, 1);
    }
    
    if (productToRemove) {
        totalPrice -= productToRemove.productPrice;
    }

    document.getElementById("total").innerHTML = totalPrice.toFixed(2);

    // Call the new function to update the cart count
    updateCartCount();
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();

    const menuToggle = document.getElementById('mobile-menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (menuToggle && dropdownMenu) {
        menuToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
        });

        const navLinks = dropdownMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                dropdownMenu.classList.remove('active');
            });
        });
    }
});