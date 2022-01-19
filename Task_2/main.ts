class Pair <KeyType, ValueType> {
    constructor(
        public key : KeyType,
        public value : ValueType,
    ) {}
}

class CustomMap <KeyType, ValueType>{

    public arr : Pair<KeyType, ValueType>[] = [];

    add(key : KeyType, value : ValueType) : void {
        if(!this.has(key)) { 
            this.arr.push(new Pair(key, value));
        } else {
            console.log(`You already have pair with key ${key}`);
        }
    }
    remove(key : KeyType) : void{
        this.arr.forEach((elem, index) => {
            if(elem.key === key) {
                this.arr.splice(index, 1);
            }
        })
    }
    get(key : KeyType) : ValueType | void{
        if(this.has(key)) {
            let [a] : Pair<KeyType, ValueType>[] = this.arr.filter(elem => elem.key === key)
            return a.value;
        } else {
            console.log(`Pair with key ${key} doesn't exist`);
        }
    }
    has(key : KeyType) : boolean{
        let a = this.arr.filter(elem => elem.key === key)
        return a === [] ?  true : false;
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