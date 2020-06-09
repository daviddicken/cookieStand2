'use strict'

var Seattle =
{
  store : "Seattle",
  minCust : 23,
  maxCust : 65,
  avgCookie : 6.3,
  amStoreHours : [6, 7, 8, 9, 10, 11],
  pmStoreHours : [12, 1, 2, 3, 4, 5, 6, 7],
  makeList : makeList

}

var Tokyo =
{
  store : "Tokyo",
  minCust : 3,
  maxCust : 24,
  avgCookie : 1.2,
  amStoreHours : [6, 7, 8, 9, 10, 11],
  pmStoreHours : [12, 1, 2, 3, 4, 5, 6, 7],
  makeList : makeList

}

var Dubai =
{
  store : "Dubai",
  minCust : 11,
  maxCust : 38,
  avgCookie : 3.7,
  amStoreHours : [6, 7, 8, 9, 10, 11],
  pmStoreHours : [12, 1, 2, 3, 4, 5, 6, 7],
  makeList : makeList

}

var Paris =
{
  store : "Paris",
  minCust : 20,
  maxCust : 38,
  avgCookie : 2.3,
  amStoreHours : [6, 7, 8, 9, 10, 11],
  pmStoreHours : [12, 1, 2, 3, 4, 5, 6, 7],
  makeList : makeList

}

var Lima =
{
  store : "Lima",
  minCust : 2,
  maxCust : 16,
  avgCookie : 4.6,
  amStoreHours : [6, 7, 8, 9, 10, 11],
  pmStoreHours : [12, 1, 2, 3, 4, 5, 6, 7],
  makeList : makeList,
}

Lima.makeList();
Paris.makeList();
Dubai.makeList();
Tokyo.makeList();
Seattle.makeList();

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


