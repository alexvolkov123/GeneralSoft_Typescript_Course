enum Category {
    phones,
    laptops,
    watches,
}

class Product {

    readonly id : number;
    static count : number = 0;

    constructor(
        readonly price : number,
        readonly category : any, 
        readonly title : string
    ) {
        this.id = Product.setID();
    }

    static setID() : number{
        Product.count++;
        return Product.count;
    }
} 

class User {
    basket : Product[] = [];

    addToBasket(things : Product | Product[]) : void{
        if(Array.isArray(things)){
            things.forEach((thing : Product)=>{
                this.checking(thing);
            })
        } else {
            this.checking(things);
        }
    }
    checking(thing : Product) : void{
        if(this.basket.includes(thing)){
            console.log(`You already have ${thing.title} in your basket`);
        } else {
            this.basket.push(thing);
        }
    }
    getProductsByCategory(category : Category) : Product[]{
        return this.basket.filter( item => item.category === category);
    };
    getMostExpensiveProduct() : Product{
        return this.basket.reduce((a, b)=> a.price>b.price? a : b);
    };
    getMostInexpensiveProduct() : Product{
        return this.basket.reduce((a, b)=> a.price<b.price? a : b);
    };
    removeProduct(id : number) : void{
            this.basket.splice(id, 1);
    };
    calculateTotalPrice() : number{
        let basketPrices : number[] = [];
        this.basket.forEach((elem, index) =>{
            basketPrices[index] = elem.price;
        })
        return basketPrices.reduce((a, b)=> a+=b);
    };
    buy() : void{
        this.basket = [];
        console.log('Thanks for buying. Enjoy your shopping!');
        
    };
}


const iPhone = new Product(1500, Category.phones, 'iPhone');
const galaxyNote = new Product(500, Category.phones, 'Galaxy Note');
const macBookPro = new Product(2500, Category.laptops, 'MacBook Pro');
const lenovo = new Product(800, Category.laptops, 'Lenovo');
const appleWatch = new Product(500, Category.watches, 'Apple Watch');
const galaxyWatch = new Product(300, Category.watches, 'Galaxy Watch');

const user = new User();

user.addToBasket(iPhone);
user.addToBasket([galaxyNote, macBookPro, galaxyWatch]);
user.addToBasket([lenovo, galaxyWatch, appleWatch]);

console.log(user.calculateTotalPrice());

user.removeProduct(user.getMostExpensiveProduct().id);

console.log(user.calculateTotalPrice());

console.log(user.getProductsByCategory(Category.phones));
console.log(user.getMostInexpensiveProduct().title);

user.buy();