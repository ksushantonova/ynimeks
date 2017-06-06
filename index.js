
/* Инпуты */

var ot = document.getElementById("Ot");
var ob = document.getElementById("Ob");
var m3 = document.getElementById("m3");
var h3 = document.getElementById("h3");
var m5 = document.getElementById("m5");
var h5 = document.getElementById("h5");
var m7 = document.getElementById("m7");
var h7 = document.getElementById("h7");
var p =  document.getElementById("P");
var tn = document.getElementById("TN");
var vs = document.getElementById("TY");
var tk = document.getElementById("TK");





var N;
var k;
var ev;
var otr;

var f1;
var f5;
var f9;

var ns;

/* Функции */

function getData(){
ot = +ot.value;
ob = +ob.value;
m3 = +m3.value;
h3 = +h3.value;
m5 = +m5.value;
h5 = +h5.value;
m7 = +m7.value;
h7 = +h7.value;
tn = +tn.value;
p = +p.value;
vs = +vs.value;
tk = +tk.value;

};

var Np = function(){

Np = "aaa";

};

function basic(){

N = ob / 20;
k = N / 2;
ev = (m3 + m5 + m7) * 2;
otr = ob - ev;

f1 = (m3 - N) / 2;
f5 = (m5 - N) / 2;
f9 = (m7 - N) / 2;

ns = (N + Np) / 2;



console.log("N = " + N +", k = "+ k + ", ev = "+ ev + ", otr = " + otr + ", f1 = " + f1 + ", f5 = " + f5 + ", f9 = " + f9 + ", ns = "+ ns)

};


function verifyAll(){
	var result;
   if (otr > ot){
   	result = otr - ot;
   	if (result > 4){
   		alert("Подкорректируйте мерки!");
   	} else {
   		m3 = m3 + (result/6);
		m5 = m5 + (result/6);
		m7 = m7 + (result/6);
   	}
   } else {
   		result = ot - otr;
   	 if(result > 4){
   	 	alert("Подкорректируйте мерки!");
   	 } else {
   	 	m3 = m3 - (result/6);
		m5 = m5 - (result/6);
		m7 = m7 - (result/6);
   	 }
   }


	console.log("new m3 = " + m3 + ", new m5 = " + m5 + ", new m7 = " + m7)
};



function square(){
	var result;
	if (m7 <= N){
		result = k/2;
	} else if ((m7 > N) && (m7 < (1.5 * N))) {
		result =  k*0.75;
	} else if (m7 == (1.5 * N)){
		result = k;
	} else if (m7 > (1.5*N)){
		result = 1.5*k;
	} else if (m7 > (2.5*N)){
		result = N;
	};
	console.log("square = " + result)
	return result;

};

var figure; 

function getFigure(){
       var fig = document.getElementsByName("figure");
        for (var i = 0; i < fig.length; i++) {
            if (fig[i].checked){
               figure = fig[i].value;
               return figure;
            };
        };           
    };

var hips;

function getHips(){
	var hip = document.getElementsByName("hips");
	for (var i = 0; i < hip.length; i++){
		if (hip[i].checked){
			hips = +hip[i].value;
			return hips;
		};
	};
};


							// вытачки низа расчет 

var v1p;
var v2p;
var v1z;
var v2z;





function vytachkiCount(){
	if (m3 <= k ){
		if (figure == "bigj"){
			v1p = 3 * N;
			v2p = 0;
		} else {
			v1p = 2 * N;
			v2p = 0;
		};

	} else if (m3 > k ){
		if (figure == "bigass"){
			v1p = 1.5 * N;
			v2p = 3 * N;
		} else {
			v1p = N;
			v2p = 2 * N;
		}
		
	};

	if (m7 <= N){
		v1z = 0;
		v2z = 2.5 * N;
	} else if ( m7 > N){
		v1z = 1.5 * N;
		v2z = 3 * N;
	}
console.log("v1p = " + v1p + ", v2p = " + v2p + ", v1z = " + v1z + ", v2z = " + v2z)
};

var m5v;
var m3v1 = 0;
var m3v2 = 0;
var m7v1 = 0;
var m7v2 = 0;
var m9v;

function razmerVytach(){
	// расчет m5, m3
var oss1 = 0;
var oss2 = 0;
	if (m5 > (1.25 * N)){
		m5v = 1.25 * N;
		oss1 = m5 - m5v;
		if(oss1 < k){
			m7v1 += +oss1;
		} else {
			m7v1 += k;
			oss2 = oss1 - k;
			}
	} else {
		m5v = m5;
		m7v1 += 0;
	}

 if (m3 > k){
 	m3v1 = (m3 + oss2)/2;
 	m3v2 = (m3 + oss2)/2;
 } else {
 	m3v1 = m3;
 	m3v2 = 0;
 }


var oss3 = 0;

// расчет m7

	if (m7 > N){
		m7v2 = N;
		oss3 = m7 - m7v2;
		if (oss3 < k){
			m7v1 = +m7v1 + +oss3;
			m9v = 0;
		} else {
			m7v1 = m7v1 + k;
			m9v = oss3 - k;
		}
	} else {
		m7v2 = m7;
		m7v1 = m7v1;
		m9v = 0;
	}
 

	console.log("m5v = " + m5v + ", m3v1 = " + m3v1 + ", m3v2 = " + m3v2 + ", m7v1 = " + m7v1 + ", m7v2 = " + m7v2 + ", m9v = " + m9v);
}

/* Скрипт */

var btn = document.getElementById("get");
btn.onclick = main;

function setValueVytochki(){
	document.getElementById("v1p").innerHTML = Math.floor((v1p)*100)/100;
	document.getElementById("v2p").innerHTML = Math.floor((v2p)*100)/100;
	document.getElementById("v1z").innerHTML = Math.floor((v1z)*100)/100;
	document.getElementById("v2z").innerHTML = Math.floor((v2z)*100)/100;
	document.getElementById("m5v").innerHTML = Math.floor((m5v)*100)/100;
	document.getElementById("m3v1").innerHTML = Math.floor((m3v1)*100)/100;
	document.getElementById("m3v2").innerHTML = Math.floor((m3v2)*100)/100;
	document.getElementById("m7v1").innerHTML = Math.floor((m7v1)*100)/100;
	document.getElementById("m7v2").innerHTML = Math.floor((m7v2)*100)/100;
	document.getElementById("m9v").innerHTML = Math.floor((m9v)*100)/100;

if (f1 > 0){
	document.getElementById("f1").innerHTML = "+" + Math.floor((f1)*100)/100;
} else {
	document.getElementById("f1").innerHTML = Math.floor((f1)*100)/100;
}

if (f5 > 0){
	document.getElementById("f5").innerHTML = "+" + Math.floor((f5)*100)/100;
} else {
	document.getElementById("f5").innerHTML = Math.floor((f5)*100)/100;
}
if (f9 > 0){
	document.getElementById("f9").innerHTML = "+" + Math.floor((f9)*100)/100;
} else {
	document.getElementById("f9").innerHTML = Math.floor((f9)*100)/100;
}
	
	
	


}

function main(){
getData();
getFigure();
	console.log(getFigure());
	getHips();
	console.log(getHips());
	basic();
	verifyAll();
    square()
    vytachkiCount();
     razmerVytach();
     setValueVytochki();
};


