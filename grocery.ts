// class with attributes and constructor
class Grocery {
    name: string;
    section: string;
    qty: number;
    isCold: boolean;

    constructor(name: string, section: string, qty: number, isCold: boolean) {
        this.name = name;
        this.section = section;
        this.qty = qty;
        this.isCold = isCold;
    }
}
// grocery items
const milk = new Grocery('Milk', 'Dairy', 1, true);
const steak = new Grocery('Steak', 'Meat', 4, true);
const rice = new Grocery('Rice', 'International', 3, false);
const tomato = new Grocery('Tomato', 'Produce', 6, false);

// array of groceries
const groceries: Grocery[] = [milk, steak, rice, tomato];

const groceryList = document.getElementById('grocery-list');
    if(groceryList) {
    groceries.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name}(${item.section} ${item.qty} ${item.isCold})`;
        groceryList.appendChild(listItem);
    })
}


