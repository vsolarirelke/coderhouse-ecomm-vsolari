import products from '../../models/Products';

//Trate todos los productos
const getProducts = () => {
    // return fetch("http://localhost:8080/api/productos")
    //   .then((respuesta) => {
    //     console.log(respuesta.json())
    //     return respuesta.json()
    //   })
    return new Promise((resolve, reject) => {
        //simulamos un retraso de red
        setTimeout(() => {
          resolve(products)
        }, 2000);
      });
  }

//Trate todos los productos
const getProductsByCategory = (idCategory) => {
    console.log("idCategory***:"+idCategory)
    return new Promise((resolve, reject) => {
        //simulamos un retraso de red
        if(idCategory){
            setTimeout(() => {
                resolve(
                    products.filter(product => product.category_id.toLocaleString() === idCategory.toLocaleString())
                )
            }, 2000);
        };
      });
  }

//Trate un producto segun su id
const getProductById = (idProduct) => {
    console.log("******getProductById******")
    // return fetch(`http://localhost:8080/api/productos/${idProduct}`)
    // .then((respuesta) => {
    //     return respuesta.json()
    // })
    console.log(products)
    console.log(idProduct)
    return new Promise((resolve, reject) => {
        //simulamos un retraso de red
        if(idProduct){
            setTimeout(() => {
                resolve(products.find(product => product.id.toLocaleString() === idProduct.toLocaleString()))
            }, 2000);
        }
    });
}

//Trate crea un producto
const createProduct = (newProduct) => {
    // return fetch("http://localhost:8080/api/productos", {
    //     method: "POST",
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(newProduct)
    // })
    // .then((respuesta) => {
    //     return respuesta.json()
    // })
    return new Promise((resolve, reject) => {
        //simulamos un retraso de red
        setTimeout(() => {
          resolve(products.push(newProduct))
        }, 2000);
    });
}
  
const updateProductById = (idProduct, mod) => {
    return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
        method: "PUT",
        headers: {
        'Content-type': 'application/json'
        
        },
        body: JSON.stringify(mod)
    })
    .then((respuesta) => {
        return respuesta.json()
    })
}
  
const destroyProductById = (idProduct) => {
    return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
        method: "DELETE"
    })
    .then((respuesta) => {
        return respuesta.json()
    })
}
  
  
export { getProducts, getProductById, getProductsByCategory, createProduct, updateProductById, destroyProductById }