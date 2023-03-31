function searchFunction() {
    var input, filter, tipsWrapper, tips, tipTitle, i, textValue;

    input = document.getElementById("mySearch").value;

    filter = input.toUpperCase()

    tipsWrapper = document.getElementById("tipsWrapper")

    tips = tipsWrapper.getElementsByClassName("tipContainer")

    for (i = 0; i < tips.length; i++) {
      tipTitle = tips[i].getElementsByClassName("tipTitle")[0]
      textValue = tipTitle.textContent || tipTitle.innerText;

      if(textValue == filter) {
        tips[i].style.display = "";
      } else {
        tips[i].style.display = "none";
      }
    }

  }
