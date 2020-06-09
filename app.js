'use strict'

var seattle = new Store("Seattle", 23, 65, 6.5, [6, 7, 8, 9, 10, 11], [12, 1, 2, 3, 4, 5, 6, 7]);
var dubai = new Store("Dubai", 11, 38, 3.7, [6, 7, 8, 9, 10, 11], [12, 1, 2, 3, 4, 5, 6, 7]);
var paris = new Store("Paris", 20, 38, 2.3, [6, 7, 8, 9, 10, 11], [12, 1, 2, 3, 4, 5, 6, 7]);
var lima = new Store("Lima", 2, 16, 4.6, [6, 7, 8, 9, 10, 11], [12, 1, 2, 3, 4, 5, 6, 7]);
var tokyo = new Store("Tokyo", 3, 24, 1.2, [6, 7, 8, 9, 10, 11], [12, 1, 2, 3, 4, 5, 6, 7]);
Store.prototype.makeList = makeList;

lima.makeList();
paris.makeList();
dubai.makeList();
tokyo.makeList();
seattle.makeList();

function Store(store, minCust, maxCust, avgCookie, amStoreHours, pmStoreHours)
{
  this.store = store,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgCookie = avgCookie,
  this.amStoreHours = amStoreHours,
  this.pmStoreHours = pmStoreHours
}

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


