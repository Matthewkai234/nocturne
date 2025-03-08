import { db } from "~/app/db/fake-db";
import { ProductCard } from "../ProductCard/ProductCard";

export function Products() {
    const products = db.find();
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
                                    id={product.id}
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
