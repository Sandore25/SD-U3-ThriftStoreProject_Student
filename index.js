//? This array is not to be changed.
const salesTax = [
    {state: 'Alabama', tax: .04},
    {state: 'Alaska', tax: .00},
    {state: 'Arizona', tax: .056},
    {state: 'Arkansas', tax: .065},
    {state: 'California', tax: .0725},
    {state: 'Colorado', tax: .029},
    {state: 'Connecticut', tax: .0635},
    {state: 'Delaware', tax: .00},
    {state: 'DC', tax: .06},
    {state: 'Florida', tax: .06},
    {state: 'Georgia', tax: .04},
    {state: 'Hawaii', tax: .04166},
    {state: 'Idaho', tax: .06},
    {state: 'Illinois', tax: .0625},
    {state: 'Indiana', tax: .07},
    {state: 'Iowa', tax: .06},
    {state: 'Kansas', tax: .065},
    {state: 'Kentucky', tax: .06},
    {state: 'Louisiana', tax: .0445},
    {state: 'Maine', tax: .055},
    {state: 'Maryland', tax: .06},
    {state: 'Massachusetts', tax: .0625},
    {state: 'Michigan', tax: .06},
    {state: 'Minnesota', tax: .06875},
    {state: 'Mississippi', tax: .07},
    {state: 'Missouri', tax: .04225},
    {state: 'Montana', tax: .00},
    {state: 'Nebraska', tax: .055},
    {state: 'Nevada', tax: .0685},
    {state: 'New Hampshire', tax: .00},
    {state: 'New Jersey', tax: .06625},
    {state: 'New Mexico', tax: .05125},
    {state: 'New York', tax: .04},
    {state: 'North Carolina', tax: .0475},
    {state: 'North Dakota', tax: .05},
    {state: 'Ohio', tax: .0575},
    {state: 'Oklahoma', tax: .045},
    {state: 'Oregon', tax: .00},
    {state: 'Pennsylvania', tax: .06},
    {state: 'Rhode Island', tax: .07},
    {state: 'South Carolina', tax: .06},
    {state: 'South Dakota', tax: .06},
    {state: 'Tennessee', tax: .07},
    {state: 'Texas', tax: .0625},
    {state: 'Utah', tax: .061},
    {state: 'Vermont', tax: .06},
    {state: 'Virginia', tax: .053},
    {state: 'Washington', tax: .065},
    {state: 'West Virginia', tax: .06},
    {state: 'Wisconsin', tax: .05},
    {state: 'Wyoming', tax: .04},
];

//! Classes
class Store {
    constructor(name, state, tax) {
        this.name = name;
        this.state = state;
        this.salesTax = tax;
        this.inventory = [];
        // this.balance = 100;
        // this.expense = 0;
        // this.profit = 0;
        // this.paidTax = (salesTax * this.inventory[Item]);
        
    }

    addItem(item) {
        this.inventory.push(item);
    }

    sellItem(itemName, quantity) {
        const item = this.inventory.find((item) => item.name === itemName);
        if(!item) {
            console.log(`Item ${itemName} not found in store ${this.name}.`);
            return;
    }
    
    item.quantity -= quantity;
    console.log(`Sold ${quantity} ${itemName} from store ${this.name}.`);


}
} 
//console.log(Store)
//! CREATE STORES
// Generate 3 different stores, each in a different state.
const newToYou = new Store("New to You",salesTax[22].state, salesTax[22].tax);
const trashToTreasure = new Store("Trash to Treasure", salesTax[35].state, salesTax[35].tax);
const elisCloset = new Store("Eli's Closet", salesTax[13].state, salesTax[13].tax );

// console.log(newToYou);
// console.log(trashToTreasure);
//console.log(elisCloset);

//! Inventory
class Item {
    constructor(name,upc,quantity) {
        this.name = name;
        this.upc = upc;
        this.quantity = quantity;
    }
};

const shirt = new Item('Shirt','UPC1',5);
const pants = new Item('Pants','UPC1',10);
const longSleeveShirt = new Item('Long Sleeve Shirt','UPC1',3);
const shorts = new Item('Shorts','UPC1',2);
const dressShirt = new Item('Dress Shirt','UPC1',4);
const polo = new Item('Polo','UPC1',7);

//! Stocking
//* First Store
newToYou.addItem(shirt);
newToYou.addItem(pants);

//* Second Store
trashToTreasure.addItem(longSleeveShirt);
trashToTreasure.addItem(shorts);

//* Third Store
elisCloset.addItem(dressShirt);
elisCloset.addItem(polo);

//! Selling
//* First Store
newToYou.sellItem("Shirt", 2);

//* Second Store
trashToTreasure.sellItem("Shorts", 3)
//* Third Store
elisCloset.sellItem("Polo", 8)

//! Testing
 console.log(newToYou);
 console.log(trashToTreasure);
 console.log(elisCloset);