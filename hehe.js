function makeEmDragging(){
  let draggables = document.querySelectorAll('.draggable')
  let containers = document.querySelectorAll('.container')
  
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })
  
    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging')
      countthecredits()
    })
  })
  
  containers.forEach(container => {
    container.addEventListener('dragover', e => {
      e.preventDefault()
      const afterElement = getDragAfterElement(container, e.clientY)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        container.appendChild(draggable)
      } else {
        container.insertBefore(draggable, afterElement)
      }
    })
  })
  
  function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]
  
    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }
  }


    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      p = div.getElementsByTagName("p");
      for (i = 0; i < p.length; i++) {
        txtValue = p[i].textContent || p[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          p[i].style.display = "";
        } else {
          p[i].style.display = "none";
        }
      }
    }

    /* When the user clicks on the second button,
    toggle between hiding and showing the dropdown content */
    function myFunction2() {
      document.getElementById("myDropdown2").classList.toggle("show");
    }
    
    function filterFunction2() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput2");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown2");
      p = div.getElementsByTagName("p");
      for (i = 0; i < p.length; i++) {
        txtValue = p[i].textContent || p[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          p[i].style.display = "";
        } else {
          p[i].style.display = "none";
        }
      }
    }

//move bottom list down when top is opened
function movefunction() {
  console.log('move test')
  document.getElementById("listbot").classList.toggle("moveDown");
}


