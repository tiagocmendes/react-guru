import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
    const products = [
        {
            title: "Test",
            price: 6.0,
            description: "This is a first product - amazing!",
        },
        {
            title: "Test 2",
            price: 8.0,
            description: "This is a second product - amazing!",
        },
        {
            title: "Test 3",
            price: 10.0,
            description: "This is a third product - amazing!",
        },
    ];

    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map((product) => (
                    <ProductItem
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
