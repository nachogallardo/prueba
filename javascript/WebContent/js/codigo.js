/**
 * 
 */
function init(){
	/*var var1="usu";
	var var2= "apel";
	var var3=5/0;
	//alert("Yo soy "+ var1);
	//alert("Mis apellidos + 2 es: "+(var2+2));
	//alert("5/0= " + var3);
	var var4="4";
	var var5="5";
	
	alert("4*5= "+(var4*var5));
	*/
	
}
function calcular(){
	var nombre=document.getElementById("nombre").value;
	var dias=document.getElementById("edad").value * 365;
	document.getElementById("result").innerHTML="Te llamas: "+nombre+" y llevas vivido "+dias+" dias";
	
}
function cualEs(){
	var num1=document.getElementById("num1").value;
	var num2=document.getElementById("num2").value;
	if(num1>num2)
	document.getElementById("resultado").innerHTML="el mayor es "+num1;
	else
		document.getElementById("resultado").innerHTML="el mayor es "+num2;
}
function RepiteFrase(frase, num){
	var num1=1;
	var texto="";
	while(num1<=num){
		texto+=num1+"<br/> "+frase+"<br/>";
		num1++;
	}
	document.getElementById("mensaje").innerHTML=texto;
}
function muestraFac(num){
	var factorial=1;
	for (var i = 1; i <= num; i++) {
		factorial*=i;
	}
	
	document.getElementById("men").innerHTML=factorial;
}
function elevado(a,b){
	var potencia= Math.pow(a,b);
	document.getElementById("res").innerHTML=Math.pow(a,b);
}
function acierta(n){
	var rn= Math.round(Math.random()*10);
	if(n==rn){
		document.getElementById("prueba").innerHTML="Has acertado el numero era "+rn;
	}else{
		document.getElementById("prueba").innerHTML="No has acertado el numero era "+rn;
	}
}
var contador=0;
var suma=0;
var producto=1;
function calcularRepetido(num){
	if(num!=9999){
		contador++;
	    suma+=parseInt(num);
	    producto*=parseInt(num);
	}else{
		document.getElementById("resultadoRep").innerHTML="N introducidos: "+contador+", la suma es: "+suma+", y el producto es: " + producto;
		contador=0;
		suma=0;
		producto=1;
		document.getElementById("calcularRep").disabled=true;
	}
}
function reiniciarRepetido(){
	contador=0;
	suma=0;
	producto=1;
	document.getElementById("calcularRep").disabled=false;
	document.getElementById("numrep").value="";
	document.getElementById("numrep").focus();
	document.getElementById("resultadoRep").value="";
}

function multiplosDe(num){
	var contador=0;
	var i=1;
	var multiplos="Los multiplos son: ";
	do{
		if(num%i==0){
			contador++;
			multiplos+=i+",";
		}		
		i++;
	}while(contador<15);
	document.getElementById("todosMultiplos").innerHTML=multiplos;
}

function tablaDel(){
	var num=document.getElementById("tablas").value;
	var tabla="Tabla del "+num+"<br><hr><br>";

	for (var i = 0; i <= 10; i++) {
		tabla+=+num+"*"+i+"="+num*i+"<br>";
	}

	document.getElementById("tabla").innerHTML=tabla;
}
//funcion con return que determina si un numero es o no es primo.
/*function comprobarPrimo(){
	var num=document.getElementById("primos").value;
	if(esPrimo(numero)){
		document.getElementById."esPrimo".innerHTML="Es primo";
	}else{
		document.getElementById."esPrimo".innerHTML="No es primo";
	}
}
function esPrimo(){
	var num=document.getElementById("primos").value;
	var resto;
	for (var i = 2; i < num-1; i++) {
		resto=numero%i;
		if(resto==0){
			return false;
		}
	}
	return true;
}*/
function comprobarVocales(){
	var campo=document.getElementById("textoVocales");
	//array contadores
	var contadores=new Array(0,0,0,0,0)
	//total de vocales
	var totalVocales=0;
	//Recorrer el texto e ir comprobando
	for (var i = 0; i < campo.value.lenght;i++) {
		var caracter=campo.value.toLowerCase().charAt(i);
		var pos=posicionVocal(caracter);
		if(pos!=-1){
			contadores[pos]++;
			totalVocales++;
		}
	}
	var spanResult=document.getElementById("resultVocales");
	spanResult.innerHtml="a: "+contadores[0]+"  e: "+contadores[1]+"  i: "+contadores[2]+"  o: "+contadores[3]+"  u: "+contadores[4]+"<br>TOTAL: "+totalVocales;
}
function posicionVocal(caracter){
	var vocales=new Array("a","e","i","o","u");
	for (var i = 0; i < vocales.length; i++) {
		if(vocales[i]==caracter){
			return  i;
		}
	}
	return -1;
}



document.addEventListener("load",init(),false);