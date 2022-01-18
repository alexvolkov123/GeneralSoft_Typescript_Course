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
