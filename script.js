let addbtn = document.querySelector(".add");
let maindiv = document.querySelector(".table-div");
let Alltab = document.querySelector(".tab");

let odelbtn = document.querySelector(".delete-btn");
let obtn = document.querySelector(".btn");
let ocreditofsub = document.querySelector(".credit-of-sub");
let oobtainedmarks = document.querySelector(".Obtained-marks");
let omaximummarks = document.querySelector(".maximum-marks");
let osubject = document.querySelector(".subject");
let osr = document.querySelector(".sr");

let finalcal = document.querySelector(".calculation");

addbtn.addEventListener("click", function () {
  //   console.log("clicked !");

  newrow = document.createElement("tr");

  let inputsr = document.createElement("input");
  inputsr.classList.add("srnum");
  allsr = document.createElement("td");
  allsr.appendChild(inputsr);
  allsr.classList.add("sr");

  let inputsubject = document.createElement("input");
  inputsubject.classList.add("subjecttext");
  allsubject = document.createElement("td");
  allsubject.appendChild(inputsubject);
  allsubject.classList.add("subject");

  let inputmaximummarks = document.createElement("input");
  inputmaximummarks.classList.add("maximummarksnum");
  allmaximummarks = document.createElement("td");
  allmaximummarks.appendChild(inputmaximummarks);
  allmaximummarks.classList.add("maximum-marks");

  let inputobtainedmarks = document.createElement("input");
  inputobtainedmarks.classList.add("obtainedmarksnum");
  allobtainedmarks = document.createElement("td");
  allobtainedmarks.appendChild(inputobtainedmarks);
  allobtainedmarks.classList.add("obtained-marks");

  let inputcredit = document.createElement("input");
  inputcredit.classList.add("creditofsubnum");
  allcreditofsub = document.createElement("td");
  allcreditofsub.appendChild(inputcredit);
  allcreditofsub.classList.add("credit-of-sub");

  let delbutton = document.createElement("button");
  delbutton.innerText = "Delete";
  delbutton.classList.add("delete-btn");
  let alldeletebtn = document.createElement("td");
  alldeletebtn.appendChild(delbutton);
  alldeletebtn.classList.add("btn");

  newrow.append(
    allsr,
    allsubject,
    allmaximummarks,
    allobtainedmarks,
    allcreditofsub,
    alldeletebtn
  );
  Alltab.appendChild(newrow);
});

// let deletebuttons = document.querySelectorAll(".delete-btn");
// for (deletebutton of deletebuttons) {
//   deletebutton.addEventListener("click", function () {
//     let rtr = this.parentElement.parentElement;
//     console.log(rtr);
//     rtr.remove();
//   });
// }

//event delegation
Alltab.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    let rowToDelete = event.target.closest("tr");
    rowToDelete.remove();
  }
});

finalcal.addEventListener("click", function () {
  let maxnum = document.getElementsByClassName("maximummarksnum");
  let obtainednum = document.getElementsByClassName("obtainedmarksnum");
  let creditofsubnum = document.getElementsByClassName("creditofsubnum");

  let result;
  let newnumerator = 0;
  let newdenominator = 0;

  for (let i = 0; i < maxnum.length; i++) {
    function gradefunc(obtainednum, maxnum) {
      if (
        (obtainednum[i].value * 100) / maxnum[i].value >= 90 &&
        (obtainednum[i].value * 100) / maxnum[i].value <= 100
      ) {
        return 10;
      }

      if (
        (obtainednum[i].value * 100) / maxnum[i].value >= 80 &&
        (obtainednum[i].value * 100) / maxnum[i].value < 90
      ) {
        return 9;
      }

      if (
        (obtainednum[i].value * 100) / maxnum[i].value >= 70 &&
        (obtainednum[i].value * 100) / maxnum[i].value < 80
      ) {
        return 8;
      }

      if (
        (obtainednum[i].value * 100) / maxnum[i].value >= 60 &&
        (obtainednum[i].value * 100) / maxnum[i].value < 70
      ) {
        return 7;
      }

      if (
        (obtainednum[i].value * 100) / maxnum[i].value >= 50 &&
        (obtainednum[i].value * 100) / maxnum[i].value < 60
      ) {
        return 6;
      }

      if (
        (obtainednum[i].value * 100) / maxnum[i].value >= 45 &&
        (obtainednum[i].value * 100) / maxnum[i].value < 50
      ) {
        return 5;
      }

      if (
        (obtainednum[i].value * 100) / maxnum[i].value >= 40 &&
        (obtainednum[i].value * 100) / maxnum[i].value < 45
      ) {
        return 4;
      } else {
        return 0;
      }
    }

    numerator =
      parseFloat(creditofsubnum[i].value) * gradefunc(obtainednum, maxnum);

    newnumerator = newnumerator + numerator;

    denominator = parseFloat(creditofsubnum[i].value);
    newdenominator = newdenominator + denominator;
  }

  result =
    newdenominator === 0
      ? "error ocurred"
      : (newnumerator / newdenominator).toFixed(2);

  let newdiv = document.querySelector(".result-div");
  let newp = document.createElement("p");
  newp.style.backgroundColor = "white";
  newp.classList.add("resultp");
  newp.style.padding = "4px";
  newp.style.color = "dark-green";
  newp.style.borderRadius = "2px";
  newp.innerText = `GPA : ${result}`;
  newdiv.appendChild(newp);
});
