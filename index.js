
/* Инпуты */

var ot = document.getElementById("Ot"),
 ob = document.getElementById("Ob"),
 m3 = document.getElementById("m3"),
 m5 = document.getElementById("m5"),
 m7 = document.getElementById("m7"),
 p =  document.getElementById("P"),
 tn = document.getElementById("TN"),
 vs = document.getElementById("TY"),
 tk = document.getElementById("TK"),
 N,k,ev,otr,f1,f5,f9,ns;

/* Функции */

//пофиксить баг с дефолт-датой
var data;


var Np; 

function getNp(){
 if (data.p >= 50 && data.p < 70){
 	Np = 2.5;
 } else if (data.p >= 70 && data.p < 90){
 	Np = 2.7;
 } else if (data.p >= 90 && data.p < 100){
 	Np = 3.0;
 } else if (data.p >= 100 && data.p < 110){
 	Np = 3.2;
 } else if (data.p >= 110 && data.p < 120){
 	Np = 3.3;
 } else if (data.p >= 120 && data.p < 130){
 	Np = 3.5;
 } else if (data.p >= 130 && data.p < 135){
 	Np = 3.7;
 } else if (data.p >= 135 && data.p < 138){
 	Np = 3.9;
 } else if (data.p >= 138 && data.p < 139){
 	Np = 3.9;
 } else if (data.p >= 139 && data.p < 140){
 	Np = 3.9;
 } else if (data.p >= 140 && data.p < 142){
 	Np = 4.0;
 } else if (data.p >= 142 && data.p < 145){
 	Np = 4.2;
 } else if (data.p >= 145 && data.p < 147){
 	Np = 4.5;
 } else if (data.p >= 147 && data.p < 150){
 	Np = 4.6;
 } else if (data.p >= 150 && data.p < 155){
 	Np = 4.7;
 } else if (data.p >= 155 && data.p < 160){
 	Np = 4.8;
 } else if (data.p >= 160 && data.p < 162){
 	Np = 4.9;
 } else if (data.p >= 162 && data.p < 163){
 	Np = 5;
 } else if (data.p >= 163 && data.p < 164){
 	Np = 5;
 } else if (data.p >= 164 && data.p < 167){
 	Np = 5.1;
 } else if (data.p >= 167 && data.p < 170){
 	Np = 5.2;
 } else if (data.p >= 170 && data.p < 173){
 	Np = 5.3;
 } else if (data.p >= 173 && data.p < 175){
 	Np = 5.4;
 } else if (data.p >= 175 && data.p < 177){
 	Np = 5.5;
 } else if (data.p >= 177 && data.p < 178){
 	Np = 5.6;
 } else if (data.p >= 178 && data.p < 180){
 	Np = 5.7;
 } else if (data.p >= 180 && data.p < 185){
 	Np = 5.8;
 } else if (data.p >= 185 && data.p < 190){
 	Np = 5.9;
 } else if (data.p >= 190 && data.p < 195){
 	Np = 6;
 } else if (data.p >= 195 && data.p < 200){
 	Np = 6.2;
 } else if (data.p >= 200 && data.p < 210){
 	Np = 6.3;
 } else if (data.p >= 210 && data.p < 220){
 	Np = 6.5;
 } else if (data.p >= 220){
 	Np = 6.8;
 }
 return Np;
};

var Nsr;
function basic(){

N = data.ob / 20;
k = N / 2;
ev = (data.m3 + data.m5 + data.m7) * 2;
otr = data.ob - ev;

f1 = (data.m3 - N) / 2;
f5 = (data.m5 - N) / 2;
f9 = (data.m7 - N) / 2;

ns = (N + Np) / 2;
Nsr = (N + Np) / 2;




console.log("N = " + N +", k = "+ k + ", ev = "+ ev + ", otr = " + otr + ", f1 = " + f1 + ", f5 = " + f5 + ", f9 = " + f9 + ", ns = "+ ns)

};

function defaultData(){
	if (data.vs == 0){
		data.vs = (5 * Np) + 1;
	};
	if (data.tn == 0){
		data.tn = (8.5 * Np) + (6.5 * Np) + (5 * N);
	};
	if (data.tk == 0){
		data.tk = (6.5 * Np) + (5 * N);
	};
}


function verifyAll(){
	var result;
   if (otr > data.ot){
   	result = otr - data.ot;
   	if (result > 4){
   		alert("Подкорректируйте мерки!");
   	} else {
   		data.m3 = data.m3 + (result/6);
		data.m5 = data.m5 + (result/6);
		data.m7 = data.m7 + (result/6);
   	}
   } else {
   		result = data.ot - otr;
   	 if(result > 4){
   	 	alert("Подкорректируйте мерки!");
   	 } else {
   	 	data.m3 = data.m3 - (result/6);
		data.m5 = data.m5 - (result/6);
		data.m7 = data.m7 - (result/6);
   	 }
   }


	console.log("new m3 = " + data.m3 + ", new m5 = " + data.m5 + ", new m7 = " + data.m7)
};



function square(){
	var result;
	if (data.m7 <= N){
		result = k/2;
	} else if ((data.m7 > N) && (data.m7 < (1.5 * N))) {
		result =  k*0.75;
	} else if (data.m7 == (1.5 * N)){
		result = k;
	} else if (data.m7 > (1.5*N)){
		result = 1.5*k;
	} else if (data.m7 > (2.5*N)){
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

var bal;

function getBal(){
	var b = document.getElementsByName("bal");
	for (var i = 0; i < b.length; i++){
		if (b[i].checked){
			bal = +b[i].value;
			return bal;
		};
	};
};

var ass;

function getAss(){
	var a = document.getElementsByName("ass");
	for (var i = 0; i < a.length; i++){
		if (a[i].checked){
			ass = +a[i].value;
			return ass;
		};
	};
};
	


							// вытачки низа расчет 

var v1p;
var v2p;
var v1z;
var v2z;



function vytachkiCount(){
	if (data.m3 <= k ){
		if (figure == "bigj"){
			v1p = 3 * N;
			v2p = 0;
		} else {
			v1p = 2 * N;
			v2p = 0;
		};

	} else if (data.m3 > k ){
		if (figure == "bigass"){
			v1p = 1.5 * N;
			v2p = 3 * N;
		} else {
			v1p = N;
			v2p = 2 * N;
		}
		
	};

	if (data.m7 <= N){
		v1z = 0;
		v2z = 2.5 * N;
	} else if ( data.m7 > N){
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
	if (data.m5 > (1.25 * N)){
		m5v = 1.25 * N;
		oss1 = data.m5 - m5v;
		if(oss1 < k){
			m7v1 += +oss1;
		} else {
			m7v1 += k;
			oss2 = oss1 - k;
			}
	} else {
		m5v = data.m5;
		m7v1 += 0;
	}

 if (data.m3 > k){
 	m3v1 = (data.m3 + oss2)/2;
 	m3v2 = (data.m3 + oss2)/2;
 } else {
 	m3v1 = data.m3 + oss2;
 	m3v2 = 0;
 }


var oss3 = 0;

// расчет m7

	if (data.m7 > N){
		m7v2 = N;
		oss3 = data.m7 - m7v2;
		if (oss3 < k){
			m7v1 = +m7v1 + +oss3;
			m9v = 0;
		} else {
			m7v1 = m7v1 + k;
			m9v = oss3 - k;
		}
	} else {
		m7v2 = data.m7;
		m7v1 = m7v1;
		m9v = 0;
	}
 

	console.log("m5v = " + m5v + ", m3v1 = " + m3v1 + ", m3v2 = " + m3v2 + ", m7v1 = " + m7v1 + ", m7v2 = " + m7v2 + ", m9v = " + m9v);
}

var vep,vsp,vdp1,nop,vnp,kp,tnp,tkp,evp,kpn,ppp,vpp,res;

function getWidthSh(){
  	if (figure == "bigj" || figure == "bigass"){
  		res = 2.25 * Nsr;
  	} if (figure == "normal") {
  		res = 2.25 * N;
  	}
  	return res;
  };

function getShtanyP(){
  vep = (5 * N) - (k/2);
  vsp = data.vs;
  vdp1 = ((vep) + N) /2;
  nop = N;
  vnp = 1.5 * N;
  kp = k;
  tnp = data.tn;
  tkp = data.tk;
  evp = 3 * Np;
  kpn = k/4;
  tkn = data.tn - data.tk; 
   ppp = vpp = res;
   nppp = nvpp = res;
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


	// переделать под таблицу нормы роста


document.getElementById("hp1").innerHTML = Math.floor((getBal() * Np)* 100)/100;
	document.getElementById("hp2").innerHTML = Math.floor((getBal() * Np)* 100)/100;
	document.getElementById("hp5").innerHTML = Math.floor((getHips() * Np)* 100)/100;
	document.getElementById("hz1").innerHTML = Math.floor((getAss() * Np)* 100)/100;
	document.getElementById("hz2").innerHTML = Math.floor((getAss() * Np)* 100)/100;	
	


}

function setValueShtanyP(){
	document.getElementById("vep").innerHTML = Math.floor((vep)*100)/100;
	document.getElementById("vsp").innerHTML = Math.floor((vsp)*100)/100;
	document.getElementById("vdp1").innerHTML = "1/2(" + Math.floor((vdp1)*100)/100 + ")";
	document.getElementById("nop").innerHTML = Math.floor((nop)*100)/100;
	document.getElementById("vnp").innerHTML = Math.floor((vnp)*100)/100;
	document.getElementById("kp").innerHTML = Math.floor((kp)*100)/100;
	document.getElementById("tnp").innerHTML = Math.floor((tnp)*100)/100;
	document.getElementById("tkp").innerHTML = Math.floor((tkp)*100)/100;
	document.getElementById("evp").innerHTML = Math.floor((evp)*100)/100;
	document.getElementById("kpn").innerHTML = Math.floor((kpn)*100)/100;
	document.getElementById("ppp").innerHTML = Math.floor((ppp)*100)/100;
	document.getElementById("vpp").innerHTML = Math.floor((vpp)*100)/100;
	document.getElementById("nppp").innerHTML = Math.floor((ppp)*100)/100;
	document.getElementById("nvpp").innerHTML = Math.floor((vpp)*100)/100;
	document.getElementById("tkn").innerHTML = Math.floor((tkn)*100)/100;

}


						      // финальная функция

function main(){
data = {
  ot: +ot.value,
  ob: +ob.value,
  m3: +m3.value,
  m5: +m5.value,
  m7: +m7.value,
  p:  +p.value,
  tn: +tn.value,
  vs: +vs.value,
  tk: +tk.value

};
getNp();
getFigure();
	console.log(getFigure());
	getBal();
	console.log(getHips());
	getBal();
	console.log(getBal());
	getAss();
	console.log(getAss());
	basic();
	defaultData();
	verifyAll();
    square();
    vytachkiCount();
    razmerVytach();
    setValueVytochki();
    getWidthSh();
    getShtanyP();
    setValueShtanyP();
    console.log(data.vs);
    console.log(data.tn);
    console.log(Np);

};


