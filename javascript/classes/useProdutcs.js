import Product3, {Product2 as Prod} from './Product'


// Create a new instance of Product
const p1 = new Product();

p1.name = 'Product 1';
p1.price = 100;
p1.qty = 10;

const bill = p1.bill();


const p2 = new Product();
p2.name = "Digital Watch"
p2.price = 200;
p2.qty = 2;
p2.discount();

console.log(p2.bill());

// console.log(bill)