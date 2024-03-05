//reset button

//local storage saving
function savedata(){
    var htmlContents = document.column2;
    console.log(htmlContents)
    localStorage.setItem('kittendata', JSON.stringify(htmlContents ));
    console.log("testsave")
}
function loaddata(){
    document.write(localStorage['kittendata']);
    console.log("testload")
}