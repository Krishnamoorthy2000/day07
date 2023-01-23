var request= new XMLHttpRequest();
request.open("GEt","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
  
  //a.Get all the countries from the Asia continent/region using the Filter function  
    const asianCountries = result.filter(country => country.region === 'Asia');
    console.log(asianCountries);

 //b.Get all the countries with a population of less than 2 lakhs using Filter function
   const lowPopCountries = result.filter(country => country.population < 200000);
   console.log(lowPopCountries);

//c.Print the following details name, capital, flag using forEach function
 result.forEach(country => {
     console.log("Name: ", country.name);
     console.log("Capital: ", country.capital);
     console.log("Flag: ", country.flag);
  });  
  
//d.Print the total population of countries using reduce function
const totalPopulation= result.reduce((acc, country) => acc + country.population, 0);
    console.log(totalPopulation);

 //e.Print the country which uses US Dollars as currency   
 result.forEach(c => {
  if (c.currencies && c.currencies !== null) {
      let currencies = Object.keys(c.currencies);
      for(let i=0; i<currencies.length; i++){
          if(currencies[i].toUpperCase() === 'USD') {
          console.log(c.name);
          break;
        }
      }
  }
});
}