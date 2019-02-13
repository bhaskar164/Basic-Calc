var input = document.querySelector("input");
var seven = document.getElementsByTagName("button")[0];
var eight = document.getElementsByTagName("button")[1];
var nine  = document.getElementsByTagName("button")[2];
var plus  = document.getElementsByTagName("button")[3];
var four  = document.getElementsByTagName("button")[4];
var five  = document.getElementsByTagName("button")[5];
var six   = document.getElementsByTagName("button")[6];
var minus = document.getElementsByTagName("button")[7];
var one   = document.getElementsByTagName("button")[8];
var two   = document.getElementsByTagName("button")[9];
var three = document.getElementsByTagName("button")[10];
var star  = document.getElementsByTagName("button")[11];
var zero  = document.getElementsByTagName("button")[12];
var dot   = document.getElementsByTagName("button")[13];
var div   = document.getElementsByTagName("button")[14];
var mod   = document.getElementsByTagName("button")[15];
var equal = document.getElementsByTagName("button")[16];
var clr = document.getElementsByTagName("button")[17];

var expression = "";
seven.addEventListener("click",function(){
	expression+=7;
	input.value=expression;
});
eight.addEventListener("click",function(){
	expression+=8;
	input.value = expression;
});
nine.addEventListener("click",function(){
	expression+=9;
	input.value = expression;
});
plus.addEventListener("click",function(){
	expression+="+"; 
	input.value = expression;
});
four.addEventListener("click",function(){
	expression+=4; 
	input.value = expression;
});
five.addEventListener("click",function(){
	expression+=5; 
	input.value = expression;
});
six.addEventListener("click",function(){
	expression+=6; 
	input.value = expression;
});
minus.addEventListener("click",function(){
	expression+="-"; 
	input.value = expression;
});
one.addEventListener("click",function(){
	expression+=1; 
	input.value = expression;
});
two.addEventListener("click",function(){
	expression+=2; 
	input.value = expression;
});
three.addEventListener("click",function(){
	expression+=3;
	input.value = expression;
});
star.addEventListener("click",function(){
	expression+="*"; 
	input.value = expression;
});
zero.addEventListener("click",function(){
	expression+=0; 
	input.value = expression;
});
dot.addEventListener("click",function(){
	expression+="."; 
	input.value = expression;
});
div.addEventListener("click",function(){
	expression+="/"; 
	input.value = expression;
});
mod.addEventListener("click",function(){
	expression+="%"; 
	input.value = expression;
});
clr.addEventListener("click",function(){
	expression  = "";
	input.value = "";
});
equal.addEventListener("click",function(){
	var ans = eval(expression);
	input.value = ans;
});
