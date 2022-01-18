class User {
    basket : Array<Product>;

    addToBasket(thing : Product | Array<Product>){
        if(Array.isArray(thing)){
            thing.forEach((elem : Product)=>{
                if(this.basket.includes(elem)){
                    console.log(`You already have ${elem.title} in your basket`);
                } else {
                    this.basket.push(elem);
                }
            })
        } else {
            if(this.basket.includes(thing)){
                console.log(`You already have ${thing.title} in your basket`);
            } else {
                this.basket.push(thing);
            }
        }
    };
    getProductsByCategory(category){};
    getMostExpensiveProduct(){
        return this.basket.reduce((a, b)=> a.price>b.price? a : b);
    };
    getMostInexpensiveProduct(){
        return this.basket.reduce((a, b)=> a.price<b.price? a : b);
    };
    removeProduct(id){};
    calculateTotalPrice(){};
    buy(){};
}