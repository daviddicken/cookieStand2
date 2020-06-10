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
// tableCell.textContent = Math.ceil(randomCustomer(this.minCust, this.maxCust) * this.avgCookie);
  // tableRow.appendChild(tableCell);
  // table.appendChild(tableRow);

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
//tableData.prototype.randomCustomer = randomCustomer;



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


