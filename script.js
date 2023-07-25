//  selector

//  boxes
// const boxFirst= document.querySelector('.box-1')
// const boxSecond= document.querySelector('.box-2')
// const boxThird= document.querySelector('.box-3')

//  input
const InputValues = document.querySelector(".calc");

// buttons

const allButtons = document.querySelectorAll(".button");

// Numeric buttons
// const  one =document.querySelector("#button-1")
// const   two=document.getElementById("button-2")
// const  three =document.getElementById("button-3")
// const   four=document.getElementById("button-5")
// const  five =document.getElementById("button-6")
// const   six=document.getElementById("button-7")
// const   seven=document.getElementById("button-9")
// const   eight=document.getElementById("button-10")
// const   nine=document.getElementById("button-11")
// const   zero=document.getElementById("button-14")

// Operations
// const  sum =document.getElementById("button-16")
// const  sub =document.getElementById("button-8")
// const  mul =document.getElementById("button-12")
// const  div =document.getElementById("button-15")
// const  exponent =document.getElementById("button-13")

// equality backspace and clear
const backspace = document.querySelector(".btn-backspace");
const clear = document.querySelector(".btn-clear");
const equalTo = document.querySelector(".btn-equal");
const percentage = document.querySelector(".btn-percent");

// project

allButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    console.log(value);

    InputValues.value += value;
  });
});
document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (
    e.key == 1 ||
    e.key == 2 ||
    e.key == 3 ||
    e.key == 4 ||
    e.key == 5 ||
    e.key == 6 ||
    e.key == 7 ||
    e.key == 8 ||
    e.key == 9 ||
    e.key == 0 ||
    e.key == "*" ||
    e.key == "+" ||
    e.key == "-" ||
    e.key == "/" ||
    e.key == "(" ||
    e.key == ")" ||
    e.key == "."
  ) {
    InputValues.value += e.key;
  }
});

// ////////////////////
//  EQUAL TO

equalTo.addEventListener("click", function (e) {
  try {
    if (InputValues.value === "") {
      console.log("ayus");

      InputValues.value = "";
    } else {
      var answer = eval(InputValues.value).toFixed(2);
      // console.log('roman');
      console.log(answer);

      InputValues.value = answer;
    }
  } catch (err) {
    InputValues.value = "Syntax Error ";
  } finally {
    // InputValues.value = "Syntax error";
  }
});

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === "Enter") {
    try {
      if (InputValues.value === "") {
        console.log("ayus");

        InputValues.value = "";
      } else {
        var answer = eval(InputValues.value).toFixed(2);
        // console.log('roman');
        console.log(answer);

        InputValues.value = answer;
      }
    } catch (err) {
      InputValues.value = "Syntax Error ";
    }
    //   finally {
    //     // InputValues.value = "Syntax error";
    //   }
  }
});

// ///////////////////
// CLEAR

clear.addEventListener("click", function (e) {
  console.log("ashish");

  if (InputValues.value === "") {
    console.log("ay");

    InputValues.value = "";
  } else {
    InputValues.value = "";
  }
});

// /////////////////////
// BACKSPACE

backspace.addEventListener("click", function (e) {
  console.log("ashish");
  let delet = InputValues.value;
  console.log(delet);

  delet = delet.slice(0, -1);

  InputValues.value = delet;
});

document.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (e.key === "Backspace") {
    let delet = InputValues.value;
    console.log(delet);

    delet = delet.slice(0, -1);

    InputValues.value = delet;
  }
});
