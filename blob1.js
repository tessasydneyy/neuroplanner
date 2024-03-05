//credit counter
function countthecredits(){
    var credittotal = 0
    var totalmcredits = 0
    var totalbcredits = 0
    var totalscredits = 0
    let credits = column2.querySelectorAll('[name^=class-blob]');
    for (let i = 0; i < credits.length; i++){
        credittotal += Number(credits[i].getAttribute('data-credit'))
    }
    for (let i = 0; i < credits.length; i++){
        if(credits[i].getAttribute('data-stream') == "M")
            totalmcredits += Number(credits[i].getAttribute('data-credit'))
        else if(credits[i].getAttribute('data-stream') == "B")
            totalbcredits += Number(credits[i].getAttribute('data-credit'))
        else if(credits[i].getAttribute('data-stream') == "S")
            totalscredits += Number(credits[i].getAttribute('data-credit'))
    }
    console.log("credits:" + credittotal)
    document.getElementById("totalcredits").innerHTML = "Total Credits: " + credittotal + "/120";
    document.getElementById("totalmcredits").innerHTML = "M&C Stream Credits: " + totalmcredits;
    document.getElementById("totalbcredits").innerHTML = "B&C Stream Credits: " + totalbcredits;
    document.getElementById("totalscredits").innerHTML = "Systems Stream Credits: " + totalscredits;
    
}

//resetting boxes
function resetthebox(target,end){
    document.getElementById(end).appendChild(target)
    targetbutton = target.children[0]
    targetbutton.setAttribute("style","visibility: hidden;")
    countthecredits() 
}

function changeclosebutton(target,orglist){
    console.log("test")
    targetbutton = target.children[0]
    parentbox = target.parentElement
    ID = parentbox.id
    if(ID == orglist)
        targetbutton.setAttribute("style", "visibility: hidden;") 
    else
        targetbutton.setAttribute("style", "visibility: visible;") 

}