var selectedTips = [
    { value: false, savings: 50, category: "HVAC", avgAppliancesInCategory: 1},
    { value: false, savings: 90, category: "Limpeza", avgAppliancesInCategory: 2},
    { value: false, savings: 40, category: "Outros", avgAppliancesInCategory: 4},
    { value: false, savings: 75, category: "Refrigeracao", avgAppliancesInCategory:  5}
]
var resultEnergyPerCategory = [ ];
var resultSavingsPerCategory = [ ];
var finalEnergyPerCategory = [ ];
var finalResult = 0;
var finalPrice = 0;
var finalSavings = 0;
var finalPercentage = 0;
var basePrice = 0;


// Get all the checkbox elements
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Loop over each checkbox and attach the event listener
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    const checkboxId = event.target.id;
    const isChecked = event.target.checked;

    // Handle the checkbox change event according to its ID
    switch (checkboxId) {
      case "tip1":
        // Handle the event for the "Air Conditioning" checkbox
        if (isChecked) {
          // Checkbox is checked
          //console.log("Air Conditioning checkbox is checked");
          selectedTips[0].value = true;
          //console.log(selectedTips[0])
          // Additional code for when the checkbox is checked
        } else {
          // Checkbox is unchecked
          //console.log("Air Conditioning checkbox is unchecked");
          selectedTips[0].value = false;
          //console.log(selectedTips[0])
          // Additional code for when the checkbox is unchecked
        }
        calculatorSequence();
        break;
      case "tip2":
        // Handle the event for the "Dishwasher" checkbox
        if (isChecked) {
            // Checkbox is checked
            //console.log("Dishwasher checkbox is checked");
            selectedTips[1].value = true;
            //console.log(selectedTips[1])
            // Additional code for when the checkbox is checked
          } else {
            // Checkbox is unchecked
            //console.log("Dishwasher checkbox is unchecked");
            selectedTips[1].value = false;
            //console.log(selectedTips[1])
            // Additional code for when the checkbox is unchecked
          }
          calculatorSequence();
          break;
      case "tip3":
        // Handle the event for the "Illumination" checkbox
        if (isChecked) {
            // Checkbox is checked
            //console.log("Illumination checkbox is checked");
            selectedTips[2].value = true;
            //console.log(selectedTips[2])
            // Additional code for when the checkbox is checked
          } else {
            // Checkbox is unchecked
            //console.log("Illumination checkbox is unchecked");
            selectedTips[2].value = false;
            //console.log(selectedTips[2])
            // Additional code for when the checkbox is unchecked
          }
          calculatorSequence();
          break;
      case "tip4":
        // Handle the event for the "Fridge" checkbox
        if (isChecked) {
            // Checkbox is checked
            //console.log("Fridge checkbox is checked");
            selectedTips[3].value = true;
            //console.log(selectedTips[3])
            // Additional code for when the checkbox is checked
          } else {
            // Checkbox is unchecked
            //console.log("Fridge checkbox is unchecked");
            selectedTips[3].value = false;
            //console.log(selectedTips[3])
            // Additional code for when the checkbox is unchecked
          }
          calculatorSequence();
          break;
      // Add additional cases for more checkboxes if needed
      default:
        break;
    }
  });
});

function calculateBasePrice() {
    let baseValue = document.getElementById("energyInput").value;
    let priceValue = document.getElementById("priceInput").value;


    let result = baseValue * priceValue
    basePrice = Number(result).toFixed(2)
}

function calculateFinalPrice() {
    let priceValue = document.getElementById("priceInput").value;

    let result = finalResult * priceValue
    finalPrice = Number(result).toFixed(2)
}

function calculateSavedPrice() {

    /* console.log(basePrice)
    console.log(finalPrice) */

    let result = basePrice - finalPrice
    savedPrice = Number(result).toFixed(2)
}

function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;

    //console.log(evt)

     // Allow numbers (0-9) and decimal point (.)
    if ((charCode >= 48 && charCode <= 57) || /*Numbers 0-9*/ charCode === 46 /*Decimal point (.)*/ ) {
        updateBasePriceElement(evt);
        return;
    }

    evt.preventDefault();
}

function updateBasePriceElement(evt) {
    let baseValue = document.getElementById("energyInput").value;
    baseValue += evt.key;
    let basePrice = document.getElementById("priceInput").value;
    let result = Number(baseValue * basePrice).toFixed(2)

    let basePriceElement = document.getElementById("basePrice")
    basePriceElement.innerHTML = result + "€";
}


function divideEnergyPerCategory() {

    const categories = [
        { name: 'Cozinhar', percentage: 63},
        { name: 'Refrigeracao', percentage: 13},
        { name: 'Limpeza', percentage: 5},
        { name: 'HVAC', percentage: 11},
        { name: 'Outros', percentage: 8}
    ]

    const result = categories.map(category => {
        let baseValue = document.getElementById("energyInput").value;

        const amount = baseValue * category.percentage / 100;
        return { name: category.name, amount: amount };
    });

    resultEnergyPerCategory = result
}

function calculateSavingsPerCategory() {

    const result = selectedTips.map(tip => {

        //console.log(tip)

        let saving = 0
        if (tip.value) {
            resultEnergyPerCategory.forEach(category => {
                if (tip.category == category.name) {
                    saving = ( category.amount / tip.avgAppliancesInCategory ) * (tip.savings / 100)
                }
            })
            return {name: tip.category, amount: saving}
        } else {
            return {name: tip.category, amount: 0}
        }
    })

    resultSavingsPerCategory = result
}

function calculateFinalEnergyPerCategory() {

    const result = resultEnergyPerCategory.map (category => {
        let finalEnergyAmount = category.amount

        resultSavingsPerCategory.forEach(saving => {
            if (category.name == saving.name) {
                finalEnergyAmount -= saving.amount
            }
        })

        return {name: category.name, amount: finalEnergyAmount}
    })

    finalEnergyPerCategory = result;
}

function updateFinalResult() {
    let result = 0

    finalEnergyPerCategory.forEach(category => {
        result += category.amount
    })

    finalResult = Number(result).toFixed(2)
}

function updateFinalSavings() {
    let result = 0

    resultSavingsPerCategory.forEach(category => {
        result += category.amount
    })

    finalSavings = Number(result).toFixed(2)
}

function calculateSavingPercentage() {

    let baseValue = document.getElementById("energyInput").value;

    let finalAmountPercentage = (finalResult * 100) / baseValue

    let result = 100 - finalAmountPercentage

    finalPercentage = Number(result).toFixed(2)
}

function updateResultElement() {
    let resultElement = document.getElementById("showResultElement")

    let text = "Final Result: " + finalResult + " kWh (" + finalPrice + " €) | Savings: " + finalSavings + " kWh (" + savedPrice + " €)";

    resultElement.innerHTML = text;

}



function calculatorSequence() {
    //console.log("Starting....")
    divideEnergyPerCategory();
    //WORKING
    //console.log(resultEnergyPerCategory)

    calculateSavingsPerCategory();
    //WORKING
    //console.log(resultSavingsPerCategory)

    calculateFinalEnergyPerCategory();
    //WORKING
    //console.log(finalEnergyPerCategory)

    updateFinalResult();
    //WORKING
    //console.log(finalResult)

    updateFinalSavings();
    //WORKING
    //console.log(finalSavings)

    calculateBasePrice();
    //WORKING
    //console.log(basePrice)

    calculateFinalPrice();
    //WORKING
    //console.log(finalPrice)

    calculateSavedPrice();
    //WORKING
    //console.log(savedPrice)


    calculateSavingPercentage();
    //WORKING
    //console.log(finalPercentage)
    //console.log("End")

    updateResultElement();
}
