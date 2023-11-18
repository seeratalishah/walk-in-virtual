// script.js
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('button-carousel');
    let translateValue = 0;
  
    function shiftButtons(direction) {
      const buttonWidth = document.querySelector('.carousel-item').offsetWidth;
  
      if (direction === 'prev') {
        translateValue += buttonWidth;
      } else {
        translateValue -= buttonWidth;
      }
  
      container.style.transform = `translateX(${translateValue}px)`;
    }
  
    window.addEventListener('resize', () => {
      translateValue = 0;
      container.style.transform = `translateX(${translateValue}px)`;
    });
  });
  

  // Set initial scroll position when the page loads
document.addEventListener("DOMContentLoaded", function () {
    var galleryRow = document.getElementById('galleryRow1');
    if (galleryRow) {
      galleryRow.scrollLeft = 400; // Adjust the initial scroll position as needed
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    var galleryRow = document.getElementById('galleryRow2');
    if (galleryRow) {
      galleryRow.scrollLeft = 600; // Adjust the initial scroll position as needed
    }
  });

  ///ghf

  document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.list-group-item');

    listItems.forEach(listItem => {
      listItem.addEventListener('click', function (event) {
        // Check if the click target is not the answer element
        if (!event.target.classList.contains('answer-style')) {
          // Toggle the class to show/hide the answer div
          this.classList.toggle('show-answer');
        }

         // Toggle the icon between down and up
         const icon = this.querySelector('span');
         if (icon) {
           icon.innerHTML = icon.innerHTML === '<i class="fa-solid fa-circle-chevron-down"></i>' 
             ? '<i class="fa-solid fa-circle-chevron-up"></i>'
             : '<i class="fa-solid fa-circle-chevron-down"></i>';
         }
      });
    });
  });