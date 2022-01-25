class Pair <KeyType, ValueType> {
    constructor(
        public key : KeyType,
        public value : ValueType,
    ) {}
}

class CustomMap <KeyType, ValueType>{

    private _arr : Pair<KeyType, ValueType>[] = [];

    add(key : KeyType, value : ValueType) : void {
        if(this.has(key)) { 
            console.log(`You already have pair with key ${key}`);
        } else {
            this.arr.push(new Pair(key, value));
        }
    }

    get arr() : Pair<KeyType, ValueType>[] {
        return this._arr;
    }
    
    remove(key:KeyType): void{
        let index = this.arr.findIndex( item => item.key === key);
        if(~index){
            this.arr.splice(index,1);
        } else {
            console.log(`Pair with key ${key} doesn't exist`);
        }
    }
    get(key : KeyType) : string | ValueType{
        let index = this.arr.findIndex( item => item.key === key);
        if(~index){
            return this.arr[index].value;
        } else {
            return `Pair with key ${key} doesn't exist`;
        }
    }
    has(key : KeyType) : boolean{
        return ~this.arr.findIndex(elem => elem.key === key) ? true : false;
    }
}
interface City { 
    title : string;
    population : number;
}
interface Country {
    capital : City;
    totalArea : number;
}

const moscow : City = {
    title : "Moscow",
    population : 12345679
}
const minsk : City = {
    title : "Minsk",
    population : 2000000
}
const russia : Country = {
    capital : moscow,
    totalArea : 12345678
}
const belarus : Country = {
    capital : minsk,
    totalArea : 345678
}

const myMap1 = new CustomMap<number, string>();
const myMap2 = new CustomMap<City, Country>();

myMap1.toString = function(): string {
    let output: string = "";
    this.arr.forEach((item) => output = `${output} ${item.key}->${item.value}`);
    return output;
}

myMap1.add(1, 'first');
myMap1.add(2, 'second');
myMap1.add(3, 'third');
myMap1.add(1, 'first again');
myMap1.remove(4);

console.log(myMap1.get(1));
console.log(myMap1.get(2));
console.log(myMap1.get(4));
console.log(myMap1.has(2));
console.log(myMap1.has(4));

myMap2.add(russia.capital, russia);
myMap2.add(belarus.capital, belarus);

console.log(myMap2.get(moscow));
console.log(myMap2.get(minsk));
console.log(`custom map output: ${myMap1}`);