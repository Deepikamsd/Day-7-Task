/*Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

a) Get all the countries from Asia continent /region using Filter function*/

const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  var result = JSON.parse(data);
  var res = result.filter((ele) => ele.region === "Asia");
  var final = res.map((ele) => console.log(ele.name.common));
};

/*b)Get all the countries with a population of less than 2 lakhs using Filter function*/
const request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all", true);
request1.send();
request1.onload = function () {
  var data1 = request1.response;
  var result1 = JSON.parse(data1);
  var pop = result1.filter((ele) => ele.population < 200000);
  var final1 = pop.map((ele) => console.log(ele.name.common));
};

/*c)Print the following details name, capital, flag, using forEach function*/

const request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  var data2 = request.response;
  var result2 = JSON.parse(data2);
  result2.forEach((country) => {
    console.log("Name:", country.name.common);
    console.log("Capital:", country.capital);
    console.log("Flag:", country.flags);
  });
};

/*d)Print the total population of countries using reduce function*/

const request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function () {
  var data3 = request.response;
  var result3 = JSON.parse(data3);
  var totalPopulation = result3.reduce(
    (acc, country) => acc + country.population,
    0
  );
  console.log("Total population of countries:", totalPopulation);
};

/* e)Print the country that uses US dollars as currency.*/

const request4 = new XMLHttpRequest();
request4.open("GET", "https://restcountries.com/v3.1/all", true);
request4.send();
request4.onload = function () {
  var data4 = request.response;
  var result4 = JSON.parse(data4);
  var curr = result4.filter((ele) => ele.crrencies && ele.currencies.USD);
  curr.forEach((value) => console.log(value.name.common));
};
