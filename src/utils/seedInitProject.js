import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";
import products from '../models/Products.js';
import categories from '../models/Categories.js';
const products = []
const seedProducts = () => {
  products.map(({ id, ...rest }) =>{
    addDoc(collection(db, "products"), rest)
  });
}
//seedProducts()

const seedCategories = () => {
    categories.map(({ id, ...rest }) =>{
      addDoc(collection(db, "categories"), rest)
    });
}
//seedCategories()