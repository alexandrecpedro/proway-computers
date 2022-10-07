export interface IProduct {
    id: number;
    description: string;
    price: number;
    paymentOption: string;
    stockQuantity: number;
    image: string;
}

export interface IProductCart extends IProduct {
    quantity: number;
}

export const products: IProduct[] = [
    { id: 1, description: "Mouse gamer", price: 439.00, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/mouse-3.jpg" },
    { id: 2, description: "Very good monitor", price: 1200.50, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/monitor-1.jpg" },
    { id: 3, description: "Excellent keyboard", price: 749.99, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/keyboard-1.jpg" },
    { id: 4, description: "Headset for gamers", price: 599.99, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/headset-2.jpg" },
    { id: 5, description: "Headset", price: 299.99, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/headset-1.jpg" },
    { id: 6, description: "Good headset", price: 399.99, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/headset-3.jpg" },
    { id: 7, description: "HD 1TB", price: 499.99, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/hd.jpg" },
    { id: 8, description: "Combo of video cards", price: 18449.99, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/video-card.jpg" },
    { id: 9, description: "Ryzen processor", price: 1000, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/processor.jpg" },
    { id: 10, description: "Good notebook", price: 2500, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/laptop-1.jpg" },
    { id: 11, description: "Excellent notebook", price: 4500, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/laptop-2.jpg" },
    { id: 12, description: "Cheap mouse", price: 20, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/mouse-1.png" },
    { id: 13, description: "Great mouse", price: 200, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/mouse-2.jpg" },
    { id: 14, description: "Small mouse", price: 50, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/mouse-4.jpg" },
    { id: 15, description: "Good keyboard", price: 159.99, paymentOption: "Cash payment on PIX", stockQuantity: 10, image: "./assets/keyboard-2.jpg" },
]