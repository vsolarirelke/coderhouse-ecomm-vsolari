import categories from '../../models/Categories';

//Trate todos los categorias
const getCategories = () => {
    // return fetch("http://localhost:8080/api/categorias")
    //   .then((respuesta) => {
    //     console.log(respuesta.json())
    //     return respuesta.json()
    //   })
    return new Promise((resolve, reject) => {
        //simulamos un retraso de red
        setTimeout(() => {
          resolve(categories)
        }, 2000);
      });
  }

//Trate una Categoria segun su id
const getCategoryById = (idCategory) => {
    // return fetch(`http://localhost:8080/api/productos/${idProduct}`)
    // .then((respuesta) => {
    //     return respuesta.json()
    // })
    return new Promise((resolve, reject) => {
        //simulamos un retraso de red
        setTimeout(() => {
            resolve(categories.find(category => category.id === idCategory))
        }, 2000);
    });
}

//Trate crea un Categoria
const createCategory = (newCategory) => {
    // return fetch("http://localhost:8080/api/categorias", {
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
          resolve(categories.push(newCategory))
        }, 2000);
    });
}

//Actualiza un Categoria
const updateCategoryById = (idCategory, attributes) => {
    return fetch(`http://localhost:8080/api/categorias/${idCategory}`, {
        method: "PUT",
        headers: {
        'Content-type': 'application/json'
        
        },
        body: JSON.stringify(attributes)
    })
    .then((respuesta) => {
        return respuesta.json()
    })
}

//Elimina una Categoria
const destroyCategoryById = (idCategory) => {
    return fetch(`http://localhost:8080/api/categorias/${idCategory}`, {
        method: "DELETE"
    })
    .then((respuesta) => {
        return respuesta.json()
    })
}
  
  
export { getCategories, getCategoryById, createCategory, updateCategoryById, destroyCategoryById }