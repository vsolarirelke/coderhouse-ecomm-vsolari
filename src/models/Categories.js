
const categories = [
  { id: 1, name: 'Mac' },
  { id: 2, name: 'Iphone' },
  { id: 3, name: 'Watch' }
]

//obtener categorias
const getCategories = () => {
return new Promise((resolve, reject) => {
  //simulamos un retraso de red
  setTimeout(() => {
    resolve(categories)
  }, 1000);
});
};

export default getCategories