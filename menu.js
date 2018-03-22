
//});//end ready
/*
var $ = function (id){
  return document.getElementById(id);
}

window.onload = function(){
  var subz = $("subz");
  var h2Elements = subz.getElementsByTagName("h2");
  var h2Node;
  for(var i = 0; i < h2Elements.length; i++){
    h2Node = h2Elements[i];

    h2Node.onclick = function(){
      var h2 = this;

      if(h2.nextElementSibling.getAttribute("class") == "closed"){
        h2.nextElementSibling.setAttribute("class", "open");
      }else{
        h2.nextElementSibling.setAttribute("class", "closed");
      }

    }//end click
  }//end loop
}//end load
*/

$(document).ready(function() {
  $("#miggz_menu h2").click(
    function(){
      $(this).next().slideToggle(500);

    });
});
