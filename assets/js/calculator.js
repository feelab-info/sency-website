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
var baseEnergy = 0;

var setPriceFlag = false;

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

const radiobuttons = document.querySelectorAll('input[type="radio"]');

radiobuttons.forEach( (radiobutton) => {
    radiobutton.addEventListener("change", (event) => {
        let inputType = event.target.value;

        switch (inputType) {
            case "euro":
                resetCalculator();
                document.querySelector('label[for="energyInput"]').textContent = "Full Price:";
                document.querySelector('label[for="energyInput"]').setAttribute("for", "fullpriceInput");
                document.getElementById('energyInput').value = "";
                document.getElementById('energyInput').id = "fullpriceInput";

                document.querySelector('label[for="basePrice"]').textContent = "Base Energy:";
                document.querySelector('label[for="basePrice"]').setAttribute("for", "baseEnergy");
                document.getElementById("basePrice").textContent = "0 kWh";
                document.getElementById("basePrice").id = "baseEnergy";
                setPriceFlag = true;
                break;
            case "energy":
                resetCalculator();
                document.querySelector('label[for="fullpriceInput"]').textContent = "Estimated Energy:";
                document.querySelector('label[for="fullpriceInput"]').setAttribute("for", "energyInput");
                document.getElementById('fullpriceInput').value = "";
                document.getElementById('fullpriceInput').id = "energyInput";


                document.querySelector('label[for="baseEnergy"]').textContent = "Base Price:";
                document.querySelector('label[for="baseEnergy"]').setAttribute("for", "basePrice");
                document.getElementById("baseEnergy").textContent = "0 €";
                document.getElementById("baseEnergy").id = "basePrice";
                //document.querySelector('label[for="basePrice"]').textContent = "Base Price:";
                setPriceFlag = false;
                break;
            default:
                break;
        }
    })
})

function resetCalculator() {
    resultEnergyPerCategory = [ ];
    resultSavingsPerCategory = [ ];
    finalEnergyPerCategory = [ ];
    finalResult = 0;
    finalPrice = 0;
    finalSavings = 0;
}

function calculateBasePrice() {
    let baseValue = document.getElementById("energyInput").value;
    let priceValue = document.getElementById("priceInput").value;

    let result = baseValue * priceValue
    baseEnergy = baseValue
    basePrice = Number(result).toFixed(2)
}

function calculateBaseEnergy() {
    let fullprice = document.getElementById("fullpriceInput").value;
    let priceValue = document.getElementById("priceInput").value;


    let result = fullprice / priceValue
    basePrice = fullprice
    baseEnergy = Number(result).toFixed(2)
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

        if (setPriceFlag) updateBaseEnergyElement(evt);
        else updateBasePriceElement(evt);

        return;
    }

    if (setPriceFlag) updateBaseEnergyElement(evt);
    else updateBasePriceElement(evt);

    evt.preventDefault();
}

function updateBaseEnergyElement(evt) {
    let baseFullPrice = document.getElementById("fullpriceInput").value;
    baseFullPrice += evt.key;
    let basePrice = document.getElementById("priceInput").value;
    let result = Number(baseFullPrice / basePrice).toFixed(2)

    let basePriceElement = document.getElementById("baseEnergy")
    basePriceElement.innerHTML = result + "kWh";
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
        const amount = baseEnergy * category.percentage / 100;
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

function updateResultElement() {
    let resultElement = document.getElementById("showResultElement")

    let text = "Final Result: " + finalResult + " kWh (" + finalPrice + " €) | Savings: " + finalSavings + " kWh (" + savedPrice + " €)";

    resultElement.innerHTML = text;

}

function drawPieChart(data) {
    const labels = data.map(item => item.name);
    const amounts = data.map(item => item.amount);

    const ctx = document.getElementById('myChart').getContext('2d');

    // Check if a chart instance already exists
    if (typeof myChart !== 'undefined') {
      myChart.destroy(); // Destroy the existing chart instance
    }

    myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: amounts,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#33FF99',
            '#FF9900'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#33FF99',
            '#FF9900'
          ]
        }]
      }
    });
  }




function calculatorSequence() {

    if (setPriceFlag) calculateBaseEnergy();
    else calculateBasePrice();

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

    calculateFinalPrice();
    //WORKING
    //console.log(finalPrice)

    calculateSavedPrice();
    //WORKING
    //console.log(savedPrice)

    updateResultElement();

    //drawPieChart(finalEnergyPerCategory);
}
