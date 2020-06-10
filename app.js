'use strict'

var storeHours = ["6am: ", "7am: ", "8am: ", "9am: ", "10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ","4pm: ", "5pm: ", "6pm: ", "7pm: "];
var seattle = new Store("Seattle", 23, 65, 6.5, [6, 7, 8, 9, 10, 11], [12, 1, 2, 3, 4, 5, 6, 7]);
var dubai = new Store("Dubai", 11, 38, 3.7, [6, 7, 8, 9, 10, 11], [12, 1, 2, 3, 4, 5, 6, 7]);
var paris = new Store("Paris", 20, 38, 2.3, [6, 7, 8, 9, 10, 11], [12, 1, 2, 3, 4, 5, 6, 7]);
var lima = new Store("Lima", 2, 16, 4.6, [6, 7, 8, 9, 10, 11], [12, 1, 2, 3, 4, 5, 6, 7]);
var tokyo = new Store("Tokyo", 3, 24, 1.2, [6, 7, 8, 9, 10, 11], [12, 1, 2, 3, 4, 5, 6, 7]);
Store.prototype.makeList = makeList;
Store.prototype.tableData = tableData;


tableHeader();
seattle.tableData();
tokyo.tableData();
dubai.tableData();
paris.tableData();
lima.tableData();
tableTotal();
//tableFooter();
// seattle.tableFooter();
// tokyo.tableFooter();
// dubai.tableFooter();
// paris.tableFooter();
// lima.tableFooter();

// lima.makeList();
// paris.makeList();
// dubai.makeList();
// tokyo.makeList();
// seattle.makeList();

function Store(store, minCust, maxCust, avgCookie, amStoreHours, pmStoreHours)
{
  this.store = store,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgCookie = avgCookie,
  this.amStoreHours = amStoreHours,
  this.pmStoreHours = pmStoreHours
}

function tableData()
{
  var cookieTotal = 0;
  var tempCookie = 0;
  var table = document.getElementById("store table");
  var dataRow = document.createElement("tr");
  var dataCell = document.createElement("td");
  dataCell.textContent = this.store;
  dataRow.appendChild(dataCell);

  for(var i = 0; i < storeHours.length; i++)
  {
    var nextCell = document.createElement("td");
    tempCookie = Math.ceil(randomCustomer(this.minCust, this.maxCust) * this.avgCookie);
    nextCell.textContent = tempCookie;
    dataRow.appendChild(nextCell);
    cookieTotal = cookieTotal + tempCookie;
  }

  var totalCell = document.createElement("th");
  totalCell.textContent = cookieTotal;
  dataRow.appendChild(totalCell);
  table.appendChild(dataRow);
}

function tableHeader()
{
  var table = document.getElementById("store table");
  var headerRow = document.createElement("tr");
  var headerCell = document.createElement("th");
  headerCell.textContent = "Store"; 
  headerRow.appendChild(headerCell);
  
for(var i = 0; i < storeHours.length; i++)
{  
  var nextCell = document.createElement("th");
  nextCell.textContent = storeHours[i];
  headerRow.appendChild(nextCell);
}
  var totalCell = document.createElement("th");
  totalCell.textContent = "Totals";
  headerRow.appendChild(totalCell);

  table.appendChild(headerRow);
}

function tableTotal()
{
  var table = document.getElementById("store table");
  var lastRow = document.createElement("tr");
  var totalCell = document.createElement("th");
  totalCell.textContent = "Totals:";
  lastRow.appendChild(totalCell);
  table.appendChild(lastRow);
}
  
  //https://stackoverflow.com/questions/4253558/get-a-particular-cell-value-from-html-table-using-javascript
  // for(var j=1; j < 14; j++)
  // {
  //   //debugger;
  //   var total = 0;
  //   for(var i = 1; i < 4; i++)
  //   {
  //     var tempTotal = 0;
  //     tempTotal = table.rows[j].cells[i];
  //     total = tempTotal + total;
  //   }
  //   var totalCell = document.createElement("th");
  //   totalCell.textContent = total;
  //   lastRow.appendChild(totalCell);
  // }
  // function tableFooter()
  // {
  //   var total = 0;
  //   var table = document.getElementById("store table");
  //   var lastRow = document.createElement("tr");
  //   var totalCell = document.createElement("th");

  //   for(var i = 1; i < 5; i++)
  //   {
  //     debugger;
  //     var tempTotal = tempTotal = table.rows[1].cells[1];
  //     console.log(tempTotal);
  //     total = tempTotal + total;
  //   } 

  //   totalCell.textContent = total;
  //   lastRow.appendChild(totalCell);
  //   table.appendChild(lastRow);
  // }
  

function makeList()
{
  var totalCookies = 0;
  for(var i = 0; i < this.amStoreHours.length; i++)
  {
    var  target = document.getElementById(this.store);
    var listItem = document.createElement('li');
    var amCookieCount = Math.ceil(randomCustomer(this.minCust, this.maxCust) * this.avgCookie);
    listItem.textContent = this.amStoreHours[i] + "am: " + amCookieCount + " cookies";
    target.appendChild(listItem);
    totalCookies = totalCookies + amCookieCount;
  }

  for(var i = 0; i < this.pmStoreHours.length; i++)
  {
    var  target = document.getElementById(this.store);
    var listItem = document.createElement('li');
    var pmCookieCount = Math.ceil(randomCustomer(this.minCust, this.maxCust) * this.avgCookie);
    listItem.textContent = this.pmStoreHours[i] + "pm: " + pmCookieCount  + " cookies";
    target.appendChild(listItem);
    totalCookies = totalCookies + pmCookieCount;
  }

  var  target = document.getElementById(this.store);
  var listItem = document.createElement('li');
  listItem.textContent = "Total: " + totalCookies + " cookies";
  target.appendChild(listItem);
}


function randomCustomer(min, max)
  {
    var randomNum = Math.floor(Math.random() * (max - min) + min);
    return randomNum;
  }


