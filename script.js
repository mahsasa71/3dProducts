const products = [
  {
    name: "Balmain Handbag",
    price: "$250",
    img: "img/55.jpg",
    qrEmbed:
      "https://sketchfab.com/models/2dfd8b0debaa4c87a2ee4ecad25f995f/embed",
  },
  {
    name: "Chanel Bag",
    price: "$300",
    img: "img/666.jpg",
    qrEmbed:
      "https://sketchfab.com/models/b3c3fec5bde346078a2034fdaaa64481/embed",
  },
  {
    name: "Gucci Handbag",
    price: "$280",
    img: "img/5.jpg",
    qrEmbed:
      "https://sketchfab.com/models/b5a973a30a9f449a8e73afd9c5818b63/embed",
  },
];

const container = document.getElementById("products-container");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <div class="qr-code">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
        product.qrEmbed
      )}" alt="QR Code">
    </div>
  `;

  container.appendChild(card);
});
