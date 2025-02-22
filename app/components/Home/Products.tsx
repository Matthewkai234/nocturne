import { ProductCard, ProductCardProps } from "../ProductCard/ProductCard";

export function Products() {
    const products: ProductCardProps[] = [
        {
            pic: "https://sockdreams.com/cdn/shop/products/drs-xtsl-black-white-xo-longer-top-striped-thigh-high-socks-rs-ot-8.jpg?v=1718210872&width=500",
            name: "Stockings",
            description: "Super comfy stockings!",
            price: 100,
        },
        {
            pic: "https://www.barcastores.com/media/catalog/product/cache/8ffd62241663b79ac6e4721c7349ad6c/2/9/29_394006ne.jpg",
            name: "High Heel Ankle Boots",
            description: "Super comfy boots!",
            price: 50,
            discountPrice: 40,
        },
        {
            pic: "https://cdn.mothersalwaysright.com/wp-content/uploads/2024/08/Mini-Skirt-.jpg",
            name: "Mini Skirt",
            description: "Super comfy skirt!",
            price: 30,
        },
    ];

    return (
        <div>
            <div className="min-h-screen text-gray-800 dark:text-gray-200 p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="mt-7">
                        <h2 className="text-3xl font-bold mb-8 text-center md:text-left">
                            Featured Products
                        </h2>
                        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product, idx) => (
                                <ProductCard
                                    key={idx}
                                    pic={product.pic}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    discountPrice={product.discountPrice}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
