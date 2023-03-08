/*
File: app.js
Author: Faragó Csaba
Copyright: 2023, Faragó Csaba
Group: Szoft I-1-E
Date: 2023-03-08
Github: https://github.com/szalami/dolgozat_4.git
Github: https://szalami.github.io/doga3_publish/
Licenc: GNU GPL
*/

const bikes = document.querySelector("#bikes");
const bikesArray = [
    {name: "cassis", wheel: 28, usage: "offroad", price: 557900},
    {name: "Alboin 900", wheel: 28, usage: "trekking", price: 519900},
    {name: "Asgard", wheel: 29, usage: "technikás utak", price: 519900},
    {name: "Ruga", wheel: 29, usage: "hegyi", price: 372900},
    {name: "Reptila", wheel: 28, usage: "városi", price: 308900},
    {name: "Sirmium", wheel: 29, usage: "hegyi", price: 264900}
]

bikesArray.forEach((bike) => {

    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdWheel = document.createElement('td');
    let tdUsage = document.createElement('td');
    let tdPrice = document.createElement('td');

    tdName.textContent = bike.name;
    tdWheel.textContent = bike.wheel;
    tdUsage.textContent = bike.usage;
    tdPrice.textContent = bike.price;

    bikes.append(tr);
    tr.append(tdName);
    tr.append(tdWheel);
    tr.append(tdUsage);
    tr.append(tdPrice);
});
