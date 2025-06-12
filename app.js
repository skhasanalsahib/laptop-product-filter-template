const rangeInputs = document.querySelectorAll(".range-input input");
const progress = document.querySelector(".slider .progress");
const priceInput = document.querySelectorAll(".price-input input");

let priceGap = 10000;

// for inputs
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    // getting two ranges value and parsing into number
    let minValue = parseInt(priceInput[0].value);
    let maxValue = parseInt(priceInput[1].value);

    if (maxValue - minValue >= priceGap) {
      // if active slider is min slider than add value to min

      if (e.target.className === "min-input") {
        rangeInputs[0].value = minValue;
        progress.style.left = (minValue / rangeInputs[0].max) * 100 + "%";
      } else {
        rangeInputs[1].value = maxValue;
        progress.style.right =
          100 - (maxValue / rangeInputs[1].max) * 100 + "%";
      }
    }
  });
});

// for slider
rangeInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    // getting two ranges value and parsing into number
    let minValue = parseInt(rangeInputs[0].value);
    let maxValue = parseInt(rangeInputs[1].value);

    if (maxValue - minValue < priceGap) {
      // if active slider is min slider than add value to min
      if (e.target.className === "range-min") {
        rangeInputs[0].value = maxValue - priceGap;
      } else {
        rangeInputs[1].value = minValue + priceGap;
      }
    } else {
      priceInput[0].value = minValue;
      priceInput[1].value = maxValue;

      progress.style.left = (minValue / rangeInputs[0].max) * 100 + "%";
      progress.style.right = 100 - (maxValue / rangeInputs[1].max) * 100 + "%";
    }
  });
});
