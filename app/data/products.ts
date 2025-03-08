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
        name: 'Solar Panel X100',
        description: 'High-efficiency solar panel suitable for residential use.',
        price: 499,
        imageUrl: '/solar-home.png',
    },
    {
        id: 'inverter-1000',
        name: 'Solar Inverter X200',
        description: 'Efficient inverter with high reliability.',
        price: 799,
        imageUrl: '/inverter.png',
    },
    {
        id: 'inverter-1000',
        name: 'Solar Inverter X200',
        description: 'Efficient inverter with high reliability.',
        price: 799,
        imageUrl: '/inverter.png',
    },
    {
        id: 'inverter-1000',
        name: 'Solar Inverter X200',
        description: 'Efficient inverter with high reliability.',
        price: 799,
        imageUrl: '/inverter.png',
    },
    {
        id: 'inverter-1000',
        name: 'Solar Inverter X200',
        description: 'Efficient inverter with high reliability.',
        price: 799,
        imageUrl: '/inverter.png',
    },
    {
        id: 'inverter-1000',
        name: 'Solar Inverter X200',
        description: 'Efficient inverter with high reliability.',
        price: 799,
        imageUrl: '/inverter.png',
    },
    // Add more products as needed
];
