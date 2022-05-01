// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach((onePep) => {
    if (state.greenPeppers) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  const sauceSelector = document.querySelector('.sauce');
  if ((state.whiteSauce)&&(!sauceSelector.classList.contains("sauce-white"))) {
    sauceSelector.classList.add("sauce-white");
  } else if((!state.whiteSauce)&&(sauceSelector.classList.contains("sauce-white"))) {
    sauceSelector.classList.remove("sauce-white");
  }
};


function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const crustSelector = document.querySelector('.crust');
  if ((state.glutenFreeCrust)&&(!crustSelector.classList.contains("crust-gluten-free"))) {
    crustSelector.classList.add("crust-gluten-free");
  } else if((!state.glutenFreeCrust)&&(crustSelector.classList.contains("crust-gluten-free"))) {
    crustSelector.classList.remove("crust-gluten-free");
  }
};


function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  /*first attempt*/ /*
  document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', function () {
      if(!button.classList.contains("active")) {
        button.classList.add("active");
      } else if(button.classList.contains("active")) {
        button.classList.remove("active");
      }
    });
  }); */

  /*Second attempt*/
  const pepperoniSelector = document.querySelector('.btn-pepperoni');
  if((state.pepperoni)&&(!pepperoniSelector.classList.contains("active"))) {
    pepperoniSelector.classList.add("active");
  } else if ((!state.pepperoni)&&(pepperoniSelector.classList.contains("active"))) {
    pepperoniSelector.classList.remove("active");
  }
  const mushroomSelector = document.querySelector('.btn-mushrooms');
  if((state.mushrooms)&&(!mushroomSelector.classList.contains("active"))) {
    mushroomSelector.classList.add("active");
  } else if ((!state.mushrooms)&&(mushroomSelector.classList.contains("active"))) {
    mushroomSelector.classList.remove("active");
  }
  const pepperSelector = document.querySelector('.btn-green-peppers');
  if((state.greenPeppers)&&(!pepperSelector.classList.contains("active"))) {
    pepperSelector.classList.add("active");
  } else if ((!state.greenPeppers)&&(pepperSelector.classList.contains("active"))) {
    pepperSelector.classList.remove("active");
  }
  const sauceSelector = document.querySelector('.btn-sauce');
  if((state.whiteSauce)&&(!sauceSelector.classList.contains("active"))) {
    sauceSelector.classList.add("active");
  } else if ((!state.whiteSauce)&&(sauceSelector.classList.contains("active"))) {
    sauceSelector.classList.remove("active");
  }
  const glutenFreeSelector = document.querySelector('.btn-crust');
  if((state.glutenFreeCrust)&&(!glutenFreeSelector.classList.contains("active"))) {
    glutenFreeSelector.classList.add("active");
  } else if ((!state.glutenFreeCrust)&&(glutenFreeSelector.classList.contains("active"))) {
    glutenFreeSelector.classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let totalPrice = 10;
  const totalPriceHere = document.getElementsByTagName("strong");
  const priceList = document.getElementsByClassName("ingredients");
  if(state.pepperoni) {
    totalPrice += Number(priceList[0].innerHTML[1]);
    priceList[0].style ="visibility:visible";
  } else if (!state.pepperoni) {
    priceList[0].style ="visibility:hidden";
  }
  if(state.mushrooms) {
    totalPrice += Number(priceList[1].innerHTML[1]);
    priceList[1].style ="visibility:visible";
  } else if (!state.mushrooms) {
    priceList[1].style ="visibility:hidden";
  }
  if(state.greenPeppers) {
    totalPrice += Number(priceList[2].innerHTML[1]);
    priceList[2].style ="visibility:visible";
  } else if (!state.greenPeppers) {
    priceList[2].style ="visibility:hidden";
  }
  if(state.whiteSauce) {
    totalPrice += Number(priceList[3].innerHTML[1]);
    priceList[3].style ="visibility:visible";
  } else if (!state.whiteSauce) {
    priceList[3].style ="visibility:hidden";
  }
  if(state.glutenFreeCrust) {
    totalPrice += Number(priceList[4].innerHTML[1]);
    priceList[4].style ="visibility:visible";
  } else if (!state.glutenFreeCrust) {
    priceList[4].style ="visibility:hidden";
  }
  totalPriceHere[0].innerHTML = `$${totalPrice}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
