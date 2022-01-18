var Product = /** @class */ (function () {
    function Product(price, category, title) {
        this.price = price;
        this.category = category;
        this.title = title;
        this.id = Product.setID();
    }
    Product.setID = function () {
        Product.count++;
        return Product.count;
    };
    Product.count = 0;
    return Product;
}());
var iPhone = new Product(1500, "phones", "iPhone");
var Samsung = new Product(1500, "phones", "Samsung");
console.log(iPhone.id);
console.log(Samsung.id);
