let currencies = ["USD", "EUR", "GBP", "JPY", "NGN"];

currencies.unshift("CAD");
currencies.push("INR");

console.log("Array after adding currencies to front and back:", currencies);

currencies[2] = "OTG";

console.log("Array after editing element number 3 to OTG:", currencies);

currencies.shift();
currencies.pop();

console.log("Array after removing first and last elements:", currencies);
