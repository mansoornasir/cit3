class Product {
    name;
    price;
    qty;

    deliver = () =>{

    };
    bill = () => {
        return this.price * this.qty;
    }
    discount = () => {
        return this.price * this.qty * 0.1;
    } 
}
class Product2 {
    name;
    price;
    qty;

    deliver = () =>{

    };
    bill = () => {
        return this.price * this.qty;
    }
    discount = () => {
        return this.price * this.qty * 0.1;
    } 
}
export default class Product3 {
    name;
    price;
    qty;

    deliver = () =>{

    };
    bill = () => {
        return this.price * this.qty;
    }
    discount = () => {
        return this.price * this.qty * 0.1;
    } 
}

export {Product, Product2};