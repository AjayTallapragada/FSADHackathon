import { useCart } from "../context/CartContext";
import "../styles/home.css";

const products = [
  { id: 1, name: "iPhone 14", price: 65999, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF1000,1000_QL80_.jpg" },
  { id: 2, name: "Samsung Galaxy S23", price: 74999, image: "https://m.media-amazon.com/images/I/61imYpK33qL._AC_UF1000,1000_QL80_.jpg" },
  { id: 3, name: "MacBook Air", price: 99999, image: "https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UF1000,1000_QL80_.jpg" },
  { id: 4, name: "Sony Headphones", price: 14999, image: "https://m.media-amazon.com/images/I/31eo70r2NWL._SX300_SY300_QL70_FMwebp_.jpg" },
  { id: 5, name: "Apple Watch", price: 29999, image: "https://m.media-amazon.com/images/I/71wjphD-VFL._AC_UL480_FMwebp_QL65_.jpg" },
  { id: 6, name: "Canon DSLR", price: 55999, image: "https://m.media-amazon.com/images/I/6122KmUSM4L._AC_UY327_FMwebp_QL65_.jpg" },
  { id: 7, name: "Asus ROG Zephyrus", price: 129999, image: "https://m.media-amazon.com/images/I/819sH4bXkGL._AC_UY327_FMwebp_QL65_.jpg" },
  { id: 8, name: "Smart TV", price: 47999, image: "https://m.media-amazon.com/images/I/71cZILFVQFL._AC_UY327_FMwebp_QL65_.jpg" },
  { id: 9, name: "Wireless Mouse", price: 1999, image: "https://m.media-amazon.com/images/I/61xfS1o5+XL._AC_UY327_FMwebp_QL65_.jpg" },
  { id: 10, name: "Mechanical Keyboard", price: 4999, image: "https://m.media-amazon.com/images/I/81k8dt7LIbL._AC_UY327_FMwebp_QL65_.jpg" },
  { id: 11, name: "Gaming Chair", price: 18999, image: "https://m.media-amazon.com/images/I/411SJoxe+zL._SY300_SX300_.jpg" },
  { id: 12, name: "External Hard Drive", price: 5499, image: "https://m.media-amazon.com/images/I/814SDu24dnL._AC_UY327_FMwebp_QL65_.jpg" },
  { id: 13, name: "Bluetooth Speaker", price: 9999, image: "https://m.media-amazon.com/images/I/91PVrSZXunL._AC_UY327_FMwebp_QL65_.jpg" },
  { id: 14, name: "Smartphone Gimbal", price: 12999, image: "https://m.media-amazon.com/images/I/61otv9fELcL._AC_UY327_FMwebp_QL65_.jpg" }
];

function Home() {
  const { addToCart } = useCart();

  return (
    <div className="home-container">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹{product.price.toLocaleString("en-IN")}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
