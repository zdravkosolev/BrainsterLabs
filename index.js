function myFunction(x) {
  x.classList.toggle("change");

}

  var shownCards = 6;
  var totalCards = 20;
  var filter = 'all';

  document.querySelector("#filter-coding").addEventListener("change", filterCoding);
  document.querySelector("#filter-design").addEventListener("change", filterDesign);
  document.querySelector("#filter-marketing").addEventListener("change", filterMarketing);
  document.querySelector('#show-more').addEventListener('click', showMoreCards);

  var allCards = document.querySelectorAll(".card-properties"); 
  hideAllCards();
  for(var i=0; i<shownCards; i++) {
    allCards[i].style.display = 'block';
  }

  function showMoreCards(increase) {
    if(increase) {
        shownCards += 6;
    }
    var cards = allCards;
    hideAllCards();
    if(filter !== 'all') {
        cards = document.querySelectorAll("." + filter); 
    }

    for(var i=0; i<shownCards && i< cards.length; i++) {
        cards[i].style.display = 'block';
    }

    if(shownCards >= cards.length) {
        document.querySelector('#show-more').style.display = 'none';
    }
  }

  function filterCoding() {
      hideAllCards();
    filter = 'coding';
      if(document.querySelector("#filter-coding").checked) {
          var codingCards = document.querySelectorAll(".coding");
          codingCards.forEach(codingCard => {
              codingCard.style.display = "block";
          });

           document.querySelector("#filter-design").checked = false;
           document.querySelector("#filter-marketing").checked = false;
           showMoreCards(false);

      } else {
          showAllCards();
      }
  }

  function filterDesign() {
    filter = 'design';
      hideAllCards();
      var designCards = document.querySelectorAll(".design");
      if(document.querySelector("#filter-design").checked) {
          designCards.forEach(designCard => {
              designCard.style.display = "block";
          });
        document.querySelector("#filter-coding").checked = false;
        document.querySelector("#filter-marketing").checked = false;
        
      } else {
        showAllCards();
      }
  }

  function filterMarketing() {
      hideAllCards();
        filter = 'marketing';
      if(document.querySelector("#filter-marketing").checked) {
          var marketingCards = document.querySelectorAll(".marketing");
          marketingCards.forEach(marketingCard => {
              marketingCard.style.display = "block";
          });

        document.querySelector("#filter-design").checked = false;
        document.querySelector("#filter-coding").checked = false;
      } else {
          showAllCards();
      }
  }
 

  function hideAllCards() {
      var allCards = document.querySelectorAll(".card-properties");  

      allCards.forEach(card => {
          card.style.display = "none";
      });
  }

  function showAllCards() {
      var allCards = document.querySelectorAll(".card-properties");  

      allCards.forEach(card => {
          card.style.display = "block";
      });
  }

  const checkboxes = document.querySelectorAll(".input-properties");
  const divs = document.querySelectorAll(".containerCheckBox");

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", (event) => {
      divs.forEach((div) => {
        div.classList.remove("selected");
      });
      if (event.target.checked) {
        divs[index].classList.add("selected");
      }
    });
  
    if (checkbox.checked) {
      divs[index].classList.add("selected");
    }
  });
  




