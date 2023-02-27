/*
Suppose we want to use code to keep track of products in our hardware store's inventory. A first stab might look something like this:
*/
// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;
// function createItem(id, name, stock, price) {
//   return {
//     id,
//     name,
//     stock,
//     price
//   }
// }
/*
Our new organization also makes it easier to write functions dealing with the products, because we can now take advantage of conventions in the objects' data. Create a function that takes one of our product objects as an argument, and sets the object's price to a non-negative number of our choosing, passed in as a second argument. If the new price is negative, alert the user that the new price is invalid.
*/

/*
It would also be useful to have the ability to output descriptions of our product objects. Implement such a function following the example below:
*/
function createItem(id, name, stock, price) {
    return {
        id,
        name,
        stock,
        price,
        getDescription() {
            return `
=> Name: ${this.name}
=> ID: ${this.id}
=> Price: ${this.price}
=> Stock: ${this.stock}`;
        },
        setPrice(newPrice) {
            if (newPrice < 0) {
                console.log("Invalid price!");
            } else {
                this.price = newPrice;
            }
        },
    };
}
const car = createItem(0, "car", 2, 2);
const bike = createItem(0, "bike", 2, 1);
// function setPrice(item, newPrice) {
//     if (newPrice < 0) {
//         console.log("Invalid price!");
//     } else {
//         item.price = newPrice;
//     }
// }
console.log(car.setPrice(-1));
console.log(car.setPrice(1));
console.log(car);
console.log(car.getDescription());
