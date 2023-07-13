// get id variables
const selectFrom = document.getElementById("select-from");
const sFrom = document.getElementById("sFrom");
const selectTo = document.getElementById("select-to");
const sTo = document.getElementById("sTo");
const inputSel = document.getElementById("inputText");
const resOutput = document.getElementById("result");
const copyResult = document.getElementById("copy");
const swap = document.getElementById("swap");
const convert = document.getElementById("convert");
const highlighter = document.getElementById("highlighter");
const errorAlert = document.getElementById("errorAlert");
const clear = document.getElementById("clear");
const clearFrom = document.getElementById("clearFrom");
const clearTo = document.getElementById("clearTo");

const fractions = {"½": "0.5","¾": "0.75", "¼": "0.25", "⅓": "0.33", "⅔": "0.67", "⅛": "0.125", "⅜": "0.375", "⅝": "0.625" };
let currentFocus = [];
let currentFocusTo = [];

let selTo, inputChecker, fromConv, toConv, validInput;

clearFrom.addEventListener("click", () => {
  sFrom.value = "";
  sTo.value = "";
  selectTo.innerHTML = "";

  for (let i =0; i < selectFrom.options.length; i++){
    selectFrom.options[i].style.display = "block";
    currentFocus.push(i);
  }
removeActive(selectFrom.options)
});

clearTo.addEventListener("click", () => {
  sTo.value = "";
  
  for (let i =0; i < selectTo.options.length; i++){
    selectTo.options[i].style.display = "block";
    currentFocusTo.push(i);
  }
  removeActiveTo(selectTo.options)
});

clear.addEventListener("click", () => {
  inputSel.value = "";
});

// load from field on startup
units.forEach((el) => {
  let h = document.createElement("option");
  h.value = el.unit;
  h.text = el.unit;
  selectFrom.appendChild(h);
});

// loads to select field based on storage details
chrome.storage.local.get("keyId", function (result) {
  if (result.keyId == null) {
    sFrom.value = units[0].unit;

    selectToFilter(sFrom.value);
  } else {
    const fromResult = result.keyId.reduce(function (prev, current) {
      return prev.count > current.count ? prev : current;
    });

    sFrom.value = fromResult.mainKey;

    selectToFilter(sFrom.value);

    sTo.value = fromResult.toKey;
  }
});

// change to selected field when select from is changed
sFrom.addEventListener("change", function () {
  selectToFilter(sFrom.value);
});

// filters based on category of selected field
function selectToFilter(val) {
  selectTo.innerHTML = "";

  const index = units.findIndex((k) => k.unit.includes(val));
  const toFinder = units[index];

  for (const inx in toFinder) {
    let h = document.createElement("option");
    if (typeof toFinder[inx] === "function") {
      h.value = inx;
      h.text = inx;
      selectTo.append(h);
    }
  }

  for (let option of selectTo.options) {
    option.onclick = function () {
      sTo.value = option.value;
      selectTo.style.display = "none";
      sTo.style.borderRadius = "5px";
    };
  }
  sTo.value = selectTo.options[0].value;
  selectTo.options[0].classList.add("active")
}

// takes highlighted text from webpage and inserts it in the input field and select from field
highlighter.addEventListener("click", async () => {
  let tab = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(
    tab[0].id,
    { method: "getSelection" },
    function (response) {
      let rData = response.data.trim();
      let selectInput = rData.match(
        /(\d{1,3},\d{3}(,\d{3})*)(\.\d*)?|\d*\.?\d*/
      ); 
      // console.log(autoMeasurementFinderString)
      //regex for number that dont start with . /(\d{1,3},\d{3}(,\d{3})*)(\.\d*)?|\d+\.?\d*/
      
      if (selectInput == "") {
        selectInput = rData.match(/^[\d\W]/);
        console.log(selectInput[0])
        if(fractions[selectInput[0]]){
          inputSel.value = fractions[selectInput[0]]
          measurementHandle(rData,selectInput[0],fractions[selectInput[0]]);
        }
        else if(!selectInput){
          measurementHandle(rData,selectInput,selectInput);
        }
        else{
          // console.log(selectInput)
          inputSel.value = math.evaluate(selectInput[0]);
          measurementHandle(rData,inputSel.value, inputSel.value);
          // inputSel.value = rData.trim();
          // sFrom.value = units[0].unit;
          // selectToFilter(units[0].unit);

        }
      }
      else{
        let test = rData.replace(selectInput[0], "").trim()
        const otherInput = test.match(/^[\d\W]/);
        if(fractions[otherInput]){
          inputSel.value = (parseFloat(selectInput[0]) + parseFloat(fractions[otherInput[0]])).toString()
          measurementHandle(rData,selectInput[0].concat(" ", otherInput[0]),inputSel.value);
        }
        else
        measurementHandle(rData,selectInput[0],selectInput[0]);
      }
    }
  );
});

function measurementHandle(rData,selectInput,inpVal){
  let autoMeasurementFinderString = rData.replace(selectInput, "");
        autoMeasurementFinderString = autoMeasurementFinderString.trim();
        const autoMeasurementFinderIndex = units.findIndex((r) =>
          r.abbrev.includes(autoMeasurementFinderString)
        );
        if (
          autoMeasurementFinderIndex > -1 &&
          selectInput !== null &&
          units[autoMeasurementFinderIndex].type !== "ASCII"
        ) {
          sFrom.value = units[autoMeasurementFinderIndex].unit;
          const removeComma = inpVal.replace(/,/g, "");
          inputSel.value = removeComma.trim();
          selectToFilter(sFrom.value);
        } else {
          inputSel.value = rData.trim();
          sFrom.value = units[0].unit;
          selectToFilter(units[0].unit);
        }
}

// converts the input field and outputs it based on select from and select to field
convert.addEventListener("click", () => {
  errorAlert.style.display = "none";

  if (inputSel.value == "" || sFrom.value == "" || sTo.value == "") {
    document.querySelector("#errorAlert p").innerHTML =
      "Error: Make sure input and measurements are not empty.";
    return (errorAlert.style.display = "block");
  }
  if (
    inputChecker == inputSel.value &&
    fromConv == sFrom.value &&
    toConv == sTo.value &&
    validInput
  ) {
    document.querySelector(
      "#errorAlert p"
    ).innerHTML = `Already converted the selected input from ${fromConv} to ${toConv}`;
    return (errorAlert.style.display = "block");
  }

  if (units.findIndex((j) => j.unit == sFrom.value) == -1) {
    document.querySelector(
      "#errorAlert p"
    ).innerHTML = `Error: one of the selectors is invalid`;
    return (errorAlert.style.display = "block");
  }

  fromConv = sFrom.value;
  toConv = sTo.value;
  inputChecker = inputSel.value;

  // chrome.storage.local.clear()
  getStorage(fromConv, toConv);

  let index = units.findIndex((x) => x.unit === fromConv);
    if(index > 4){
      inputChecker = math.evaluate(inputChecker)
      inputSel.value = inputChecker;
    }

  if (!units[index].validator.test(inputChecker)) {
    document.querySelector(
      "#errorAlert p"
    ).innerHTML = `Error: invalid input type`;
    validInput = false;
    return (errorAlert.style.display = "block");
  }
  resOutput.value = "";
  if (typeof units[index][toConv] !== "function") {
    document.querySelector(
      "#errorAlert p"
    ).innerHTML = `Error: one of the selector's is invalid`;
    validInput = false;
    return (errorAlert.style.display = "block");
  }
  resOutput.value = units[index][toConv](inputChecker);
  validInput = true;
});

// copies result input to clipboard
copyResult.addEventListener("click", () => {
  resOutput.select();
  navigator.clipboard.writeText(resOutput.value);
});

// gets storage and stores selet from and select to field. Also, assigns the most common conversions you used
function getStorage(from, to) {
  chrome.storage.local.get({ keyId: [] }, function (result) {
    const keyI = result.keyId;

    if (keyI == []) {
      keyI.push({ mainKey: from, toKey: to, count: 1 });
    } else {
      const adder = keyI.findIndex((i) => i.mainKey == from && i.toKey == to);

      if (adder > -1) keyI[adder].count += 1;
      else keyI.push({ mainKey: from, toKey: to, count: 1 });
    }

    chrome.storage.local.set({ keyId: keyI }, function () {
      chrome.storage.local.get("keyId", function (result) {
        //console.log(result.keyId);
      });
    });
  });
}

// swaps select from and select to field
swap.addEventListener("click", () => {
  errorAlert.style.display = "none";
  if (sFrom.value == "" || sTo.value == "") {
    errorAlert.style.display = "block";
    document.querySelector(
      "#errorAlert p"
    ).innerHTML = `Error: one of the selectors is empty`;
    errorAlert.style.display = "block";
  } else {
    const temp = sFrom.value;
    sFrom.value = sTo.value;
    sTo.value = temp;
  }
});

// css datalist manipulation for from dropdown
sFrom.onfocus = function () {
  selectFrom.style.display = "block";
  sFrom.style.borderRadius = "5px 5px 0 0";
};
for (let option of selectFrom.options) {
  option.onclick = function () {
    sFrom.value = option.value;
    selectFrom.style.display = "none";
    sFrom.style.borderRadius = "5px";
    selectToFilter(sFrom.value);
  };
}

let fromIndex = -1;

sFrom.oninput = function () {
  fromIndex = -1;
  currentFocus = [];
  var text = sFrom.value.toUpperCase();
  for (let i =0; i < selectFrom.options.length; i++) {
    if (selectFrom.options[i].value.toUpperCase().indexOf(text) > -1) {
      selectFrom.options[i].style.display = "block";
        currentFocus.push(i)
    } else {
      selectFrom.options[i].style.display = "none";
    }
  }
};

sFrom.onkeydown = function (e) {
  if (e.keyCode == 40) {
    fromIndex++;
    addActive(selectFrom.options);
    if(fromIndex > 0)
    selectFrom.scrollTop = selectFrom.scrollTop + 32;
    if(fromIndex == 0)
    selectFrom.scrollTop = 0;
  } else if (e.keyCode == 38) {
    fromIndex--;
    addActive(selectFrom.options);
    selectFrom.scrollTop = selectFrom.scrollTop - 32;
    if(fromIndex == 0)
    selectFrom.scrollTop = 0;
    if(fromIndex == currentFocus.length-1)
    selectFrom.scrollTo(0,selectFrom.scrollHeight);
  } else if (e.keyCode == 13) {
    e.preventDefault();
    if (fromIndex > -1) {
      /*and simulate a click on the "active" item:*/
      if (selectFrom.options) selectFrom.options[currentFocus[fromIndex]].click();
    }
  }
};

// css datalist manipulation for to dropdown
function addActive(x) {
  if (!x) return false;
  removeActive(x);
  if (fromIndex >= currentFocus.length) fromIndex = 0;
  if (fromIndex < 0) fromIndex = currentFocus.length - 1;
  x[currentFocus[fromIndex]].classList.add("active");
}
function removeActive(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
}

sTo.onfocus = function () {
  selectTo.style.display = "block";
  sTo.style.borderRadius = "5px 5px 0 0";
};

let toIndex = -1;

sTo.oninput = function () {
  currentFocusTo = [];
  toIndex = -1;
  var text = sTo.value.toUpperCase();
  for (let i =0; i < selectTo.options.length; i++) {
     if (selectTo.options[i].value.toUpperCase().indexOf(text) > -1) {
      selectTo.options[i].style.display = "block";
        currentFocusTo.push(i)
    } else {
      selectTo.options[i].style.display = "none";
    }
  }
};

sTo.onkeydown = function (e) {
  if (e.keyCode == 40) {
    toIndex++;
    addActiveTo(selectTo.options);
    if(toIndex > 0)
    selectTo.scrollTop = selectTo.scrollTop + 32;
    if(toIndex == 0)
    selectTo.scrollTop = 0;
  } else if (e.keyCode == 38) {
    toIndex--;
    addActiveTo(selectTo.options);
    selectTo.scrollTop = selectTo.scrollTop - 32;
    if(toIndex == 0)
    selectTo.scrollTop = 0;
    if(toIndex == currentFocusTo.length-1)
    selectTo.scrollTo(0,selectTo.scrollHeight);
  } else if (e.keyCode == 13) {
    e.preventDefault();
    if (toIndex > -1) {
      /*and simulate a click on the "active" item:*/
      if (selectTo.options) selectTo.options[currentFocusTo[toIndex]].click();
    }
  }
};

function addActiveTo(x) {
  if (!x) return false;
  removeActiveTo(x);
  if (toIndex >= currentFocusTo.length) toIndex = 0;
  if (toIndex < 0) toIndex = currentFocusTo.length - 1;
  x[currentFocusTo[toIndex]].classList.add("active");
}
function removeActiveTo(x) {
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
}
