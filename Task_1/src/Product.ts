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

    static setID(){
        Product.count++;
        return Product.count;
    }
} 
