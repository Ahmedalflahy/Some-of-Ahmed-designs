function avg(arr)
{
  var sum=0;
 for(var i=0; i<arr.length;i++)
 {
      sum+=arr[i];
      
    }

return sum/arr.length;
}
avg([1,2,5,5])
#################################
function avg(arr){
  var a=[];
  for(var s=0;s<arr.length;s++){
    if(arr[s]%2===0){
      a.push(arr[s]);
    }
  }
  return a
}
avg([1,2,3,4,5,6,7,8])
///////////////////////////
function add(x,y){
  first_arry=new Array(x)
  second_arry=new Array(y)
  return first_arry.concat(second_arry).length;
}
add(10,5)
///////////////
console.log(item * item);
///////////////////
function swapCASE(str){
 var x= str.split("");
 for(var i=0; i< x.length;i++){
   if(x[i]>='a'&& x[i]<='z'){
 console.log (x[i].toUpperCase());
  }
  else {
    console.log (x[i].toLowerCase());
  }
 }
  
}
swapCASE("Hello");
///////////////////////////
function writeNum(num){
  for(var i=0;i<100;i++){
    if(i%3===0 && i%5===0)
    {
      console.log("fizzbuzz");
    }
    else if(i%3===0)
    {
      console.log("fizz");
    }
    else if (i%5===0)
    {
      console.log("buzz");
    }
    else{ console.log(i);}
   
  }
}
writeNum();
//////////////////////////////////
function multiplication(x,y,z){

// var result= x*y*z;
// if(result>0){
//   return "+"
// }
//   else{
//     return "-"
//   }
if(x<0&&y<0&&z<0)
return '-';
}
e
  multiplication(-1,5,-4);
  //////////////////////////////////////////////////////
  myForEach([1,2,3],function(item){
 console.log(item*item);
});





function myForEach(array,funck){
  for(i=0;i<array.length;i++){
    //console.log(array[i])
      funck(array[i])
  }
}
////////////////////////////////////////////////////////////
myMap([1,2,3],function(item){
return item*item;
});
function myMap(array,funck){
  var res=[]
  for(i=0;i<array.length;i++){
       res.push(funck(array[i]));
  }
  return res
}
////////////////////////////////////
//who make function to account your age 
new Date().getFullYear()- ;
  $("#btn").click(function(){
var age=new Date().getFullYear()- parseInt($('#date').val());
alert($("#first").val() +" "+ $("#last").val()+" "+" your age is " +age+"years");

  });
  ///////////////who tke value from input and print it in p and empty the input//////
  <input type="text" name=""> 
<p id="demo"></p>
<script>
  $("input").keyup(function(event){
    if(event.which==13){
    
    $('#demo').text($("input").val());
    // console.log("#demo");
    $("input").val('');
  }

  });
  //////////////////////////////////////////////////////////////////////////////////
<script>
  $(document).ready(function(){
    setInterval(function(){
        $("#div1").slideDown(2000);
    $("#div2").slideDown(3000);
    $("#div3").slideDown(4000);
    $("#div4").slideDown(5000);
    $("#div5").slideDown(6000);
    $("#div6").slideDown(7000);
    $("#div1").slideUp(7000);
    $("#div2").slideUp(6000);
    $("#div3").slideUp(5000);
    $("#div4").slideUp(4000);
    $("#div5").slideUp(3000);
    $("#div6").slideUp(2000);
    },1000)
    /////////////////////// https://console.developers.google.com/youtube/v3/docs/search/list
/*<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>
<body> 
<div id="full">
<textarea id="in"></textarea>  <br>
<button id="take">click To Enter the text</button>
</div>
<div id="other">
<textarea id="out"></textarea>
<button id="blue">click To change the color to blue</button>
<button id="green">click To change the color to green</button>
<button id="red">click To change the color to red</button>
<hr>
<button id="12">12 px</button>
<button id="22">22 px</button>
<button id="26">26 px</button>
<hr>
<input type="text" name="" id="befor">
<button id="pre"> add pre to the text</button>
</div>
<script>
$("#take").click(function(){
  $("#out").text($("#in").val());    
  
})
$("#red").click(function(){
  $("#out").css("color","red");
})
$("#green").click(function(){
  $("#out").css("color","green");
})

$("#blue").click(function(){
  $("#out").css("color","blue");
})
$("#12").click(function(){
  $("#out").css("font-size","12px");
})
$("#22").click(function(){
  $("#out").css("font-size","22px");
})
$("#26").click(function(){
  $("#out").css("font-size","26px");
})
$("#pre").click(function(){
  $("#out").prepend($("#befor").val());
})
</script>


</body>
</html>
/////////////css///
#full{
  width: 500px;
  height: 600px;
  padding: 5px;
  margin: 5px;
  border: 3px;
  border-style: solid;
  float: left;
}
#in{
  width: 90%;
  height: 400px;
  padding-left: 10px;

}
#other{
  width: 500px;
  height: 600px;
  padding: 5px;
  margin: 5px;
  border: 3px;
  border-style: solid;
  float: left;

}
#out{
  width: 90%;
  height: 400px;
  padding-left: 10px;
}*/

//https://api.github.com/users/Ahmedalflahy/repos