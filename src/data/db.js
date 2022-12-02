import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  categories: '++id, name, total_products', // Primary key and indexed props
  products: '++id,name,category_name,price,total_count',
});