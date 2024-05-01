const products = [
    { id: 1, name: 'MacBook Air de 13 - Chip M1', description:"", price: 100, category: "Mac", category_id: 1, image_url: "m1.png", stock:0 },
    { id: 2, name: 'MacBook Air de 13 - Chip M2', description:"", price: 200, category: "Mac", category_id: 1, image_url: "m2.png", stock:100 },
    { id: 3, name: 'MacBook Air de 15 - Chip M3', description:"", price: 300, category: "Mac", category_id: 1, image_url: "m3.png", stock:100 },
    { id: 4, name: 'iPhone 13', description:"", price: 400, category: "Iphone", category_id: 2, image_url: "i11.png", stock:100 },
    { id: 5, name: 'iPhone 14', description:"", price: 500, category: "Iphone", category_id: 2, image_url: "i12.png", stock:100 },
    { id: 6, name: 'iPhone 15', description:"", price: 600, category: "Iphone", category_id: 2, image_url: "i13.png", stock:100 },
    { id: 7, name: 'Apple Watch SE', description:"", price: 700, category: "Watch", category_id: 3, image_url: "a1.png", stock:100 },
    { id: 8, name: 'Apple Watch Series 9', description:"", price: 800, category: "Watch", category_id: 3, image_url: "a2.png", stock:100 },
    { id: 9, name: 'Apple Watch Ultra 2', description:"", price: 900, category: "Watch", category_id: 3, image_url: "a3.png", stock:100 }
  
]

//obtener productos
const getProducts = () => {
  return new Promise((resolve, reject) => {
    //simulamos un retraso de red
    setTimeout(() => {
      resolve(products)
    }, 1000);
  });
};

export default getProducts