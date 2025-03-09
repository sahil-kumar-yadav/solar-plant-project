// src/data/products.ts
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export const products: Product[] = [
    {
        id: 'solar-panel-1',
        name: 'Evolux Solar Panel 100',
        description: 'High-efficiency solar panel designed for residential applications, maximizing energy production.',
        price: 499,
        imageUrl: '/solar-home.png',
    },
    {
        id: 'solar-panel-2',
        name: 'Evolux Solar Panel 150',
        description: 'Premium solar panel with enhanced durability, ideal for homes with medium to high energy demands.',
        price: 649,
        imageUrl: '/product-1.png',
    },
    {
        id: 'solar-panel-3',
        name: 'Evolux Solar Panel 200',
        description: 'Next-generation solar panel with superior efficiency, optimized for both residential and commercial use.',
        price: 799,
        imageUrl: '/product-2.png',
    },
    {
        id: 'solar-panel-4',
        name: 'Evolux Solar Panel 250',
        description: 'High-performance solar panel offering exceptional energy output in all weather conditions.',
        price: 899,
        imageUrl: '/product-3.png',
    },
    {
        id: 'solar-panel-5',
        name: 'Evolux Solar Panel 300',
        description: 'Top-tier solar panel with cutting-edge technology for maximum solar energy generation and long-term savings.',
        price: 999,
        imageUrl: '/root-solar.png',
    },
    {
        id: 'solar-panel-6',
        name: 'Evolux Solar Panel 350',
        description: 'Advanced solar panel engineered for optimal performance in diverse environments, ideal for large installations.',
        price: 1099,
        imageUrl: '/inverter.png',
    },
    // Add more products as needed
];
