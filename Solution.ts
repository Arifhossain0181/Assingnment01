// 01
function formatValue(value:string | number |boolean): string| number |boolean {
    if (typeof value ==="string"){
        return value.toUpperCase()
    }
    else if (typeof value === "number"){
        return value *10
    }
    else{
        return !value
    }
    return value
}

// 02

function getLength(value : string | any[]) :number{
    if( typeof value ==='string'){
        return value.length
    }
    else if (Array.isArray(value)){
        return value.length
    }
    return 0
}

// 03
class Person {
    name:string 
    age:number
    constructor (name:string ,age:number){
        this.name = name
        this.age = age
    }
    getDetails():string{
        return `'Name:${this.name},Age:${this.age}'`
    }
}
// 04
type Item={
    title:string;
    rating:number;

}
function filterByRating(items:Item[]):Item[]{{
    return items.filter(item =>item.rating >=4);
}}
const book =[
    {title:"Book A", rating:4.5},
    {title:"Book B", rating:3.2},
    {title:"Book C", rating:5.0},
    
]

// 05
type User= {
    id: number;
    name: string;
    email:string;
    isActive:boolean
}
function filterActiveUsers(users:User[]) :User[]{
    return users.filter(user=>user.isActive);
}



// 06

interface Book {
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}
function printBookDetails(book:Book):void{
    const Availablebook = book.isAvailable ? "Yes" :"NO";
   console.log(`Title:${book.title},Author:${book.author},Publish:${book.publishedYear},Available:${book.isAvailable}`)
}

// 07

function getUniqueValues (arr1 :(number |string)[],
arr2:(number |string)[]): (number |string)[]{
    const result :(number |string)[] = []
    const addUnique =(value: number |string ):void =>{
        let exists = false;
        for(let i =0; i< result.length; i++){
            if(result[i] === value){
                exists= true
                break;
            }
        }
        if(!exists){
            result[result.length] = value;
        }
    }
    for(let i =0; i< arr1.length ; i++){
        addUnique(arr1[i]!)
    }
    for(let i =0; i< arr2.length; i++){
        addUnique(arr2[i]!)
    }
    return result
}



// 08
type Product={
    name:string 
    price:number
    quantity:number
    discount?:number
}
function calculateTotalPrice(products:Product[]):number{
    if(products.length === 0) return 0;

    return products.reduce((total,product) =>{
        const basePrice = product.price * product.quantity

        const finalPrice = product.discount ? basePrice-(basePrice* product.discount)/100 :basePrice

        return total + finalPrice
    } ,0)
} 










