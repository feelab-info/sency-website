function searchFunction() {
    var input, filter, tipsWrapper, tipTitle, i, textValue;

    input = document.getElementById("mySearch").value;

    filter = input.toUpperCase()

    tipsWrapper = document.getElementById("tipsWrapper")

    const tips = tipsWrapper.getElementsByClassName("tipContainer")

    //console.log(tips)

    for (i = 0; i < tips.length; i++) {
      tipTitle = tips[i].getElementsByClassName("tipTitle")[0]
      textValue = tipTitle.textContent || tipTitle.innerText;

      console.log(textValue.toUpperCase().indexOf(filter))

      if(textValue.toUpperCase().indexOf(filter) > -1) {
        tips[i].style.display = "";
      } else {
        tips[i].style.display = "none";
      }
    }

  }
