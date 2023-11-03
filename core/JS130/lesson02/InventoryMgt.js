// item creator
  // makes sure that all info are present and valid
    // SKU code - 3 letters of item , first 2 is the category, use the first three letter of the category name
    // item name - at least 5 characters excluding spaces
    // category - at least 5 characters and only one word
    // quantity - must no be blank
// items manager
  // creating items, updating info, deleting items, querying info
  // create - creates a new item, returns false if not 
  // update - accepts an SKU code and object as arg an updates any of the info on the item.
  // delete - accepts SKU Code and deletes the item 
  // items - contians a list of all the items
  // inStock - list all the items that are in stock
  // itemsInCategory - list all the items for a given category
// reports manager
  // generates reports for a spefici item or ALL items
  // create reports objects to generate specific reports
    // init - accepts ItemManager object as arg and assigns it to the items property
    //createReporter - takes SKU and returns an object
      // object method, itemInfo, logs all the properties of an object "key:value"
    // reportInStock - logs to the console the item names of all the items that are in stock with comma separated values.
  
function createItem () {
  function generateSKU(name, category) {
    let formattedName = Array.prototype.filter.call(name, char => char != " ");
    formattedName.splice(3);
    // console.log(formattedName);
    let formattedCategory = category.split("");
    formattedCategory.splice(2);
    // console.log("CATEGORY: ", formattedCategory);
    return (formattedName.join("") + formattedCategory.join("")).toUpperCase();
  };
  function validateStringLength(name) {
    return Array.prototype.filter.call(name, char => char != " ").length >= 5;
  }
  function isValidItemName(name) {
     return validateStringLength(name);
  };
  function isValidQuantity(quantity) {
    return quantity !== undefined; 
  }
  function isValidCategory(category) {
    return ((Array.prototype.find.call(category, char => char === " ") === undefined) && validateStringLength(category));
  }

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) && isValidCategory(category) && isValidQuantity(quantity)
      ) {
      this.SKU = generateSKU(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return {notValid: true}
    }
  }
 
}

let itemManager = {
  items : [],
  create(itemName, category, quantity) {
    const itemCreator = createItem();
    let item = new itemCreator(itemName, category, quantity);
    if (item.notValid === true) {
      return 'not valid item'
    } else {
      this.items.push(item);
    }
  },
  update(sku, updateItem ) {
    //find sku code 
    let selectedItem = this.items.find(item => item["SKU"] === sku);
    // console.log(selectedItem, "SELECTED SKU");
    if (selectedItem !== undefined) {
      Object.assign(selectedItem, updateItem);
    } else {
      return 'SKU was not found';
    }
  },
  delete(sku) {
    for (let i = 0; i < this.items.length; i += 1) {
      if(this.items[i]["SKU"] === sku) {
        this.items.splice(i,1);
        break;
      }
    }
    return 'SKU is not found';
  },
  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },
  itemsInCategory(categoryName) {
    return this.items.filter(item => item.category === categoryName);
  }

}

let reportManager = {
   init(itemManager) {
    this.items = itemManager;
   },
   createReport(sku) {
    const item = this.items.items.find(item => item["SKU"] === sku);

    return {
      info() {
        for (let prop in item) {
          console.log(`${prop}: ${item[prop]}`)
        }
      }
    }
   },
   reportInStock() {
    return this.items.inStock().map(item => item["itemName"]).join(",");
   }
}


itemManager.create('basket', 'sports', 6);
itemManager.create('football', 'sports', 1);
itemManager.update('BASSP', {quantity: 1});
console.log("ITEMS: ", itemManager.items);
// console.log("STOCK:", itemManager.inStock());
// console.log("CATEGORY:", itemManager.itemsInCategory("sports"));

reportManager.init(itemManager);
// console.log(reportManager);
let reportObj = reportManager.createReport("FOOSP");
reportObj.info();

console.log("REPORT IN STOCK:", reportManager.reportInStock());