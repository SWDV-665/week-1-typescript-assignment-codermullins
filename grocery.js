// class with attributes and constructor
var Grocery = /** @class */ (function () {
    function Grocery(name, section, qty, isCold) {
        this.name = name;
        this.section = section;
        this.qty = qty;
        this.isCold = isCold;
    }
    return Grocery;
}());
// grocery items
var milk = new Grocery('Milk', 'Dairy', 1, true);
var steak = new Grocery('Steak', 'Meat', 4, true);
var rice = new Grocery('Rice', 'International', 3, false);
var tomato = new Grocery('Tomato', 'Produce', 6, false);
// array of groceries
var groceries = [milk, steak, rice, tomato];
var groceryList = document.getElementById('grocery-list');
if (groceryList) {
    groceries.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.innerHTML = "".concat(item.name, "(").concat(item.section, " ").concat(item.qty, " ").concat(item.isCold, ")");
        groceryList.appendChild(listItem);
    });
}
