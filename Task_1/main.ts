enum Category {
    phones = "phones",
    laptops ="laptops",
    watches = "watches",
}

class Product {

    readonly id : number = Product.getID();

    constructor(
        readonly price : number,
        readonly category : any, 
        readonly title : string
    ){}

    private static  getID() : number{
        return Math.floor(Math.random() * 12345 * Product.length);
    }
} 

class User {
    private basket : Product[] = [];

    public addToBasket(things : Product | Product[]) : void{
        if(Array.isArray(things)){
            things.forEach((thing : Product)=>{
                if(this.checkID(thing)){
                    console.log(`You already have ${thing.title} in your basket`);
                } else {
                    this.basket.push(thing);
                }
            })
        } else {
            if(this.checkID(things)){
                console.log(`You already have ${things.title} in your basket`);
            } else {
                this.basket.push(things);
            }
        }
    }
    private checkID (thing : Product) : boolean{
        return this.basket.some(element => element.id === thing.id);
    }
    public getProductsByCategory(category : Category) : Product[]{
        return this.basket.filter( item => item.category === category);
    };
    public getMostExpensiveProduct() : Product{
        return this.basket.reduce((previous, current)=> previous.price>current.price? previous : current);
    };
    public getMostInexpensiveProduct() : Product{
        return this.basket.reduce((previous, current)=> previous.price<current.price? previous : current);
    };
    public removeProduct(id : number) : void{
        this.basket.splice(this.basket.findIndex(unit => unit.id === id), 1);
    };
    public calculateTotalPrice() : number{
        return this.basket.map((unit) => unit.price).reduce((sum, current)=> sum+=current); 
    };
    public buy() : void{
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