//initialising API

let request = new XMLHttpRequest;
request.open("GET", "https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function(){
       var data = request.response;
       var result = JSON.parse(data);
       //Question 1
        
       let Asia = result.filter((ele)=>(ele.region==="Asia"));
       let AsianCountries = Asia.map((ele)=>(console.log(ele.name.common)));

       //Question 2

       let pop = result.filter((ele)=>(ele.population<200000))
       let fewerpop = pop.map((ele)=>console.log(ele.name.common))

       //Question 3

       result.forEach((ele)=>console.log(ele.name.common, ele.capital, ele.flag))

       //Question 4
       let population = [];
       result.forEach((ele)=>(population.push(ele.population)))
       let totalPop = population.reduce((acc,cv)=>{
                    return acc + cv;
       },0)

       console.log(totalPop)

       //Question 5
       
       let eligibleCountries = result.filter((ele)=>(ele.currencies))
       let USD = eligibleCountries.filter((ele)=>Object.keys(ele.currencies)[0]=== "USD");
       USD.forEach((ele)=>(console.log(ele.name.common)))
       
}
