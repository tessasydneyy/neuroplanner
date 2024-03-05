//dynamically add lines to search menu for core classes

var data;

Papa.parse('https://xcxhdwh9-5500.use.devtunnels.ms/kittencore.csv', {
 header: true,
 download: true,
 dynamicTyping: true,
 complete: function(results) {
   console.log("core classes") 
   console.log(results);
   data = results.data;
   console.log(data.length);

   // Create and append draggable elements
   for(var i = 0; i < data.length; i++) {
    var opt = data[i].Code  + ":" + "<button class=\"ex\" style=\"float: right; visibility: hidden\" onclick=\"resetthebox(this.parentElement,\'classitem\')\">X</button>" + "<br>" + data[i].Title;
    var title = data[i].Title;
    var ID = data[i].Code;
    var credits = data[i].Credits;
    var description = data[i].Description;
    var prereq = data[i].Prerequisites;
    var colour = data[i].Colour; 
     var el = document.createElement("p");
     el.setAttribute("ondragend", "changeclosebutton(this,'classitem')")
     el.setAttribute("id",ID);
     el.setAttribute("style","background-color: "+colour + ";")
     el.setAttribute("class","draggable");
     el.setAttribute("name","class-blob");
     el.setAttribute("data-credit",credits);
     el.setAttribute("draggable","true");
     el.setAttribute("onclick", "classdatawrite(\""+ID+"\",\""+title+"\",\""+credits+"\",\""+description+"\",\""+prereq+"\")");
     el.innerHTML = opt;
     classitem.appendChild(el);
     makeEmDragging()
   }
 }
});

//dynamically add lines to search menu for stream classes

var data;

Papa.parse('https://xcxhdwh9-5500.use.devtunnels.ms/kittenstreams.csv', {
 header: true,
 download: true,
 dynamicTyping: true,
 complete: function(results) {
    console.log("stream classes")
   console.log(results);
   data = results.data;
   console.log(data.length);

   // Create and append draggable elements
   for(var i = 0; i < data.length; i++) {
    var opt = data[i].Code  + ":" + "<button class=\"ex\" style=\"visibility: hidden;\" onclick=\"resetthebox(this.parentElement,\'streamitem\')\">X</button>" + "<br>" + data[i].Title;
     console.log(opt)
     var title = data[i].Title;
     var ID = data[i].Code;
     var credits = data[i].Credits;
     var description = data[i].Description;
     var prereq = data[i].Prerequisites;
     var colour = data[i].SColour;
     var stream = data[i].Stream;
     var el = document.createElement("p");
     el.setAttribute("ondragend", "changeclosebutton(this,'streamitem')")
     el.setAttribute("style","background-color: "+colour + ";")
     el.setAttribute("id",ID);
     el.setAttribute("class","draggable");
     el.setAttribute("name","class-blob");
     el.setAttribute("data-credit",credits);
     el.setAttribute("data-stream", stream);
     el.setAttribute("draggable","true");
     el.setAttribute("onclick", "classdatawrite(\""+ID+"\",\""+title+"\",\""+credits+"\",\""+description+"\",\""+prereq+"\")");
     el.innerHTML = opt;
     streamitem.appendChild(el);
     makeEmDragging()
   }
 }
});

function classdatawrite(ID, title, credits, description, prereq){
    document.getElementById("idtext").innerHTML = ID;
    document.getElementById("nametext").innerHTML = title;
    document.getElementById("creditstext").innerHTML = credits +".0 Credits";
    document.getElementById("pretext").innerHTML = "Prerequisites: " + prereq;
    document.getElementById("desctext").innerHTML = description;


}
