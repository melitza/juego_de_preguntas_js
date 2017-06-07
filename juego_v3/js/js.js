/**
	* Versión mejorada
	* Melitza Mondragón
	* Yeison Murillo 
	* Date 06/06/2017
*/
console.log ('funciona');
var g_seleccion = 1;
var g_score = 0 ;
var g_correctas = 0;
var g_incorrectas = 0;
var g_puntaje = 0;
var stop = 0;
var g_conjunto = [];

g_conjunto.push([["fresa"],	
	["¿Las personas naturales y jurídicas poseerían sobre una obra los derechos morales y patrimoniales?"], 
	["A) Los derechos de autor se entienden como aquella protección que brinda el estado y la ley al creador que mediante su ingenio y talento crea de obrar artísticas, literarias o científicas."],	
	["B) Si es posible que las personas naturales y jurídicas posean los derechos morales y patrimoniales debido a que son una misma persona el cual están referenciadas por un seudónimo."], 
	["C) c.	 No es posible porque las personas jurídicas solo pueden poseer derechos patrimoniales."], 
	["A) Los derechos de autor se entienden como aquella protección que brinda el estado y la ley al creador que mediante su ingenio y talento crea de obrar artísticas, literarias o científicas."] ]);

g_conjunto.push([["banana"],	
	["¿Cuál es la forma de protección de software en Colombia?"], 
	["A) Copyright."],	
	["B) Copyleft."], 
	["C) Model Provisions on the Protection of Computer Software end system software. "], 
	["A) Copyright."]]);

g_conjunto.push([["franbueza"],
	["¿El software libre o código abierto y software propietario son la misma cosa?"], 
	["A) No son lo mismo aunque en la práctica los usuarios suelen identificar ambos términos sin plantearse cuáles son sus diferencias o como pasa en la mayoría de las ocasiones"],	
	["B) b.	 Si lo son porque el software son representados por el mismo nombre al cual lo ha diseñado y programado en determinando momento."], 
	["C) Si lo son, ya que es un software que respeta las cuatro libertades que la FSF (Free Software Foundation) que establece en las normas."], 
	["A) No son lo mismo aunque en la práctica los usuarios suelen identificar ambos términos sin plantearse cuáles son sus diferencias o como pasa en la mayoría de las ocasiones"]]);

g_conjunto.push([["limonn"],	
	["¿El copy left es restrictivo?"], 
	["A) No es restrictivo ya que permite la libre distribución de copias y versiones modificadas de determinado  trabajo"],	
	["B) b.	No es restrictivo porque nace en el ámbito de la programación informática como una estrategia legal diseñada por el movimiento del software libre para hacer del código una herramienta “libre”."], 
	["C) Si es restrictivo porque se debe añadir una cláusula legal que hace que toda copia o versión modificada del programa se gobierne por las mismas condiciones que el original."], 
	["A) No es restrictivo ya que permite la libre distribución de copias y versiones modificadas de determinado  trabajo"]]);

g_conjunto.push([["manzana"],	
	["¿Los derechos morales podrían no aplicar al software?"], 
	["A) Si  aplican porque desde el momento mismo de la creación del software, se le reconocen a los autores dos clases de facultades: los derechos morales y los derechos patrimoniales."], 
	["B) No podrían aplicar porque  es un derecho no puede ser transmitido a distintas personas."],	
	["C) Si podrían aplicar porque son esencia transferibles y sometidos a un término de duración de la protección en Colombia."], 
	["A) Si  aplican porque desde el momento mismo de la creación del software, se le reconocen a los autores dos clases de facultades: los derechos morales y los derechos patrimoniales."]]);

g_conjunto.push([["mmm"],	
	["¿Es correcto y legal descargar cualquier imagen o música desde internet y colocarla en un software solo por necesidad?"],
	["A)  Es legal porque existe un set de herramientas legales estandarizadas conocidas como las Licencias Creative Commons, se basan  en el derecho del autor, cambian el paradigma del sistema tradicional Todos los derechos reservados por una premisa más flexible Algunos derechos reservados."], 
	["C)  No, porque es un propósito fortalecer a creadores para que sean ellos quienes definan los términos en que sus obras pueden ser usadas."],	
	["B)  No, porque si se  toman la imágenes o música y no dan los derechos de autor al respectivo personaje."], 
	["A)  Es legal porque existe un set de herramientas legales estandarizadas conocidas como las Licencias Creative Commons, se basan  en el derecho del autor, cambian el paradigma del sistema tradicional Todos los derechos reservados por una premisa más flexible Algunos derechos reservados."]]);

g_conjunto.push([["Mora"],	
	["¿Cualquier contrato laboral es un contrato de prestación de servicios?"], 
	["A) No, porque el contrato laboral pospone de los aportes al Sistema de Seguridad Social en cambio un contrato de prestación de servicios se caracteriza por ser un acuerdo voluntario, en donde de forma independiente y autónoma una persona trabaja. "], 
	["B) Si, porque en ambos contratos recibe salarios mínimos dependiendo lo que se ha realizado en el trabajo."], 
	["C) Si, porque recibe un salario por el trabajo realizado a comparación de honorarios."],	
	["A) No, porque el contrato laboral pospone de los aportes al Sistema de Seguridad Social en cambio un contrato de prestación de servicios se caracteriza por ser un acuerdo voluntario, en donde de forma independiente y autónoma una persona trabaja. "]]);

g_conjunto.push([["naranjas"],	
	["¿El contrato de prestación de servicios es ideal cuando se quiere trabajar desde casa?"], 
	["A) Si, porque se trabaja de forma independiente y autónoma por su voluntad o en el caso de realizar un software para otra persona, con los parámetros dados por esa persona."],	
	["B) No, porque existe una retribución económica dada por cierta persona."], 
	["C) Si, porque si desea crear su micro empresa usted seria su propio jefe."], 
	["A) Si, porque se trabaja de forma independiente y autónoma por su voluntad o en el caso de realizar un software para otra persona, con los parámetros dados por esa persona."]]);

g_conjunto.push([["pepinillo"], 
	["¿En el desarrollo de software y un contrato de prestación de servicios los honorarios podrían ser por cualquier valor?"], 
	["A) Si, debido a que el desarrollador tiene su previo conocimiento en el tema y está ejerciendo su trabajo de manera voluntaria y autónoma por un honorario que él estipula puede ser cualquier valor."], 
	["B) Si, porque el contratista le exige por medio de un documento valor del honorario."], 
	["C) No, porque es un acuerdo entre un trabajador bajo una subordinación y dependencia."],
	["A) Si, debido a que el desarrollador tiene su previo conocimiento en el tema y está ejerciendo su trabajo de manera voluntaria y autónoma por un honorario que él estipula puede ser cualquier valor."]]);

g_conjunto.push([["pera"],	
	["¿Un prestador de servicios puede negociar bajo los términos que quiera con su contratante?"], 
	["A) Si, porque están llegando a un acuerdo que el contratista está ofreciendo para determinado trabajo."], 
	["B) Si, porque lo está estipulando por medio de un documento legible."],
	["C) No, porque está recibiendo una paga estipulada por el contratante."],	
	["A) Si, porque están llegando a un acuerdo que el contratista está ofreciendo para determinado trabajo."]]);

g_conjunto.push([["zanahoria"],	
	["¿Un contrato verbal no tiene validez ante el estado?"], 
	["A) Si, tiene validez porque si en el determinado tiempo en el que trabajo no le pagaron prestaciones sociales, seguridad social puede demandar ante un juez de la república por el incumplimiento del pago."],	
	["B) No, tiene validez porque no hay una subordinación. "], 
	["C) Si, tiene validez porque es aquel en el que no existe ningún documento escrito que contenga las condiciones pactadas verbalmente (de palabra) entre el empleador y el trabajador."], 
	["A) Si, tiene validez porque si en el determinado tiempo en el que trabajo no le pagaron prestaciones sociales, seguridad social puede demandar ante un juez de la república por el incumplimiento del pago."]]);



window.onload = function()
{//llama el div donde se va a mostrar las imagenes
	document.getElementById('cont_frutas').innerHTML = painting_elements();//Pinta las frutas
	setInterval(moving,  1500);
}

 
function painting_elements() 
{//Función traer imagenes
	var salida= "";
	for( var i=0; i < g_conjunto.length; i++)
	{

		salida += "<img style='position:absolute;' id="+g_conjunto[i][0]+" class='elementos'  src='img/"+ g_conjunto[i][0] + ".png' onclick='pregunta("+i+");'>";
		//console.log(salida);
	}

		
	return salida;

	
}


 function pregunta(idx)
    {//Esta función muestra las preguntas con sus respuestas 
     //g_puntaje += (g_conjunto[idx][g_seleccion]*1);
     //document.getElementById('score').innerHTML = g_puntaje;
     document.getElementById('num_array').value = idx;
     
     document.getElementById('pregunta'). innerHTML = g_conjunto[idx][1];
     document.getElementById('a'). innerHTML = g_conjunto[idx][2];
     document.getElementById('b'). innerHTML = g_conjunto[idx][3];
     document.getElementById('c'). innerHTML = g_conjunto[idx][4];
     //console.log (g_puntaje);

     $('#myModal').modal('show');

     
    }

function respuestas(idx)
{//Esta función evalua si la respuesta es correcta o incorrecta
	
	var id_array = document.getElementById('num_array').value;
	var res = document.getElementById(idx).innerHTML;
	console.log(idx);

	if (res == g_conjunto[id_array][5]) {	
		g_score = parseInt(g_score) + 1;
        document.getElementById('score').innerHTML = g_score;
        console.log("Gano");
        g_correctas = parseInt(g_correctas) + 1;
        console.log("correctas:" + g_correctas);
        //$('#myModal').modal('hide');
        document.getElementById(g_conjunto[id_array][0]).style.display='none';
			
        
	}else {
		//g_score = parseInt(g_score) - 1;
        //document.getElementById('score').innerHTML = g_score;
		console.log("Lost");
		//console.log(g_conjunto[idx][0]);
		g_incorrectas = parseInt(g_incorrectas) + 1;
		console.log("incorrectas:" + g_incorrectas);
		//$('#myModal').modal('hide');
		document.getElementById(g_conjunto[id_array][0]).style.display='none';
		

	}
	

	stop = parseInt(g_correctas) + parseInt(g_incorrectas);
	console.log(stop + " Respondidas");
	if ( stop == 11 ) {

		alert("Game over" + " correctas = " + g_correctas + " incorrectas = " + g_incorrectas);

		
		
		console.log("The game is over");
		//$('#myModal1').modal('hide');
		var a1= " Respuestas correctas";
		var a2= " Respuestas incorrectas";
		var a3= " Total preguntas";
		var a4= " Scores";
		//document.getElementById('num_preg').innerHTML = stop + a3;
		//console.log(stop);
		//document.getElementById('correc').innerHTML = g_correctas + a1;
		//document.getElementById('scor').innerHTML = g_score + a4;
		//document.getElementById('incorrec').innerHTML = g_incorrectas + a2;
		$('#myModal1').modal('show');


		if (g_score=>6){
			document.getElementById("nivel").innerHTML= "<h2> You won the game</h2>"; 
			//document.getElementById("boton").innerHTML=""
		}else{
			document.getElementById("nivel").innerHTML= "<h2>keep trying</h2>" ;
		}
		if (g_score<6){
			document.getElementById("nivel").innerHTML= "<h2>keep trying</h2>" ;
		}else{
			document.getElementById("nivel").innerHTML= "<h2> You won the game con </h2>" ; 
		}
		

	}
}

function moving()
{//Esta fución es la que se encarga de mover las imagenes aleatoriamente.
	//console.log(Math.random());
	for (var i = 0; i < g_conjunto.length; i++) {
		var left =Math.floor(Math.random()*(1000 - 100)) + 100;
		var top =Math.floor(Math.random()*(500 - 60)) + 60;

	document.getElementById(g_conjunto[i][0]).style.left=left+"px";
	document.getElementById(g_conjunto[i][0]).style.top=top+"px";
		//g_conjunto[0][3]=parseInt(g_conjunto[0][3])+10;
	}
}
