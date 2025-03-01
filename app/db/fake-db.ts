import { ProductCardProps } from "../components/ProductCard/ProductCard";

const products: ProductCardProps[] = [
    {
        id: 1,
        pic: "https://sockdreams.com/cdn/shop/products/drs-xtsl-black-white-xo-longer-top-striped-thigh-high-socks-rs-ot-8.jpg?v=1718210872&width=500",
        name: "Stockings",
        description: "Super comfy stockings!",
        price: 100,
    },
    {
        id: 2,
        pic: "https://www.barcastores.com/media/catalog/product/cache/8ffd62241663b79ac6e4721c7349ad6c/2/9/29_394006ne.jpg",
        name: "High Heel Ankle Boots",
        description: "Super comfy boots!",
        price: 50,
        discountPrice: 40,
    },
    {
        id: 3,
        pic: "https://cdn.mothersalwaysright.com/wp-content/uploads/2024/08/Mini-Skirt-.jpg",
        name: "Mini Skirt",
        description: "Super comfy skirt!",
        price: 30,
    },
];

export const db = {
    find: () => products,
    findById: async (id: number) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        return products.find((product) => product.id === +id) || null;
    },
};
