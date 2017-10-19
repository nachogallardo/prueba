function validar(campo) {
	if (campo.value == null || campo.value.length == 0
			|| /^\s+$/.test(campo.value)) {
		mostrarError(campo.id, "Error: Nombre Vacío");
	} else {
		borrarError(campo.id);
	}
}

function mostrarError(id, texto) {
	document.getElementById("sp" + id).innerHTML = texto;
}

function borrarError(id) {
	document.getElementById("sp" + id).innerHTML = "";
}

function validarOtro(campo) {
	if (campo.value == null || campo.value.length == 0
			|| /^\s+$/.test(campo.value)) {
		mostrarErrorOtro(campo.id, "Error: Appelidos Vacío");
	} else {
		borrarErrorOtro(campo.id);
	}
}

function mostrarErrorOtro(id, texto) {
	if (document.getElementById("error" + id) == null) {
		var parrafo = document.createElement("span");
		parrafo.id = "error" + id;
		parrafo.style = "color: red";
		parrafo.appendChild(document.createTextNode(texto));
		// inserto el span dentro del div después del input
		if (document.getElementById(id).nextSibling) {
			document.getElementById(id).parentNode.insertBefore(parrafo,
					document.getElementById(id).nextSibling);
		} else {
			document.getElementById(id).parentNode.appendChild(parrafo);
		}
	}
}

function borrarErrorOtro(id) {
	document.getElementById("dv" + id).removeChild(document.getElementById("error" + id));
}

function validarEmail(campo){
	if(!esCorrectoEmail(campo.value)){
		mostrarError(campo.id,"Email incorrecto");
	}else{
		borrarError(campo,id);
	}
}
function esCorrectoEmail(mail){
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}
function limite(max){
	var campo=document.getElementById("desc");
	if(campo.value.lenght >=max){
		return false;
	}
	return true;
}


function validarFormulario(){
	var campo=document.getElementById("ciudades");
	//alert(campo.selectedIndex);
	//alert(campo.options[campo.selectedIndex].text);
	
	if(campo.selectedIndex==null||campo.selectedIndex==0){
		return false;
	}
	var elementos=document.getElementsByName("estado");
	for (var i = 0; i < elementos.length; i++) {
		alert(elementos[i].value+" - "+elementos[i].chequed);
	}
	var campoC=document.getElementById("futbol");
	if(campoC.chequed){
		alert("si");
	}else{
		alert("no");
	}
	if(isNaN(document.getElementById("edad").value)){
		alert("no es un numero");
		return false;
	}
	
	return true;
}