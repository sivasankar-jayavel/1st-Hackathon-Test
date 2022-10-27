//To create Div element
let div=document.createElement("div");
div.setAttribute("class","main1");

//To create input label
let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

//To create input box

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Please Enter USA City Here");
input.style.width="520px";
input.style.fontSize="20px";

//To create Button
let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="200px";
button.style.marginTop="20px"
button.addEventListener("click",sai);

//For cityname to create div element
let Bname = document.createElement("div");
Bname.setAttribute("id","name");

//For type of breweies to create div element
let Btype = document.createElement("div");
Btype.setAttribute("id","brewery_type");

//for address of breweries to create div element
let Baddress = document.createElement("div");
Baddress.setAttribute("id","street");

//for website of breweries to create div element
let Bwebsite = document.createElement("div");
Bwebsite.setAttribute("id","website_url");

//for phone num of breweries to create div element
let Bphn = document.createElement("div");
Bphn.setAttribute("id","phone");
formgroup.append(input,button);

// elements appending
div.append(formgroup);
document.body.append(div);

//function 
async function sai(){
let city=document.getElementById("main").value;
console.log(city);

//fetch API
let result=await fetch (`https://api.openbrewerydb.org/breweries?by_city=${city}`);
let result1= await result.json();

//loop
for(var i=0;i<result1.length;i++){
console.log(result1[i])

//Using try & catch method
 try{ 

console.log(result1[i].name); 
Bname.innerHTML=`Brewery Name : ${result1[i].name}`;

console.log(result1[i].brewery_type);
Btype.innerHTML=`Brewery Type : ${result1[i].brewery_type}`;

console.log(result1[i].street);
Baddress.innerHTML=`Brewery Address : ${result1[i].street}`;

console.log(result1[i].website_url);
Bwebsite.innerHTML=`Brewery Website URL : ${result1[i].website_url}`;

console.log(result1[i].phone);
Bphn.innerHTML=`Brewery Phn Num : ${result1[i].phone}`;
formgroup.append(Bname,Btype,Baddress,Bwebsite,Bphn);
document.body.append(div); 

    }
    catch (error) {
        return error;
    }
}
    }