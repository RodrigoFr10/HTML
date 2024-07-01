/*Script para animação*/

function fairchild(){ /*Cada function recebe um nome, e será chamada pelo mesmo*/
	document.getElementById('imagem').src="imagens/fairchild.jpg";
	setTimeout("atari2600()", 1200) /*Chama a function atari2600(), 1000 é o tempo que o slide de cada function ficará sendo mostrado antes de chamar o próximo*/
}

function atari2600(){ 
	document.getElementById('imagem').src="imagens/atari2600.jpg";
	setTimeout("atari400()", 1200) /*Chama a function vectrex()*/
}

function atari400(){ 
	document.getElementById('imagem').src="imagens/atari400.jpg";
	setTimeout("vectrex()", 1200) 
}

function vectrex(){ 
	document.getElementById('imagem').src="imagens/vectrex.jpg";
	setTimeout("nes()", 1200) 
}

function nes(){ 
	document.getElementById('imagem').src="imagens/nes.jpg";
	setTimeout("ps1()", 1200) 
}

function ps1(){ /*Cada function recebe um nome, e será chamada pelo mesmo*/
	document.getElementById('imagem').src="imagens/ps1.jpg";
	setTimeout("ps2()", 1200) /*Chama a function xbox, 1000 é o tempo que o slide de cada function ficará sendo mostrado antes de chamar o próximo*/
}

function ps2(){ 
	document.getElementById('imagem').src="imagens/ps2.jpg";
	setTimeout("xbox()", 1200) 
}

function xbox(){
	document.getElementById('imagem').src="imagens/xbox.jpg";
	setTimeout("ps3()", 1200)
}

function ps3(){
	document.getElementById('imagem').src="imagens/ps3.jpg";
	setTimeout("xboxone()", 1200) /*Chama a function xboxone()*/
}

function xboxone(){
	document.getElementById('imagem').src="imagens/xboxone.jpg";
	setTimeout("ps4()", 1200)
}

function ps4(){
	document.getElementById('imagem').src="imagens/ps4.jpg";
	setTimeout("ps5()", 1200) /*Chama a function ps5*/
}

function ps5(){
	document.getElementById('imagem').src="imagens/ps5.jpg";
	setTimeout("xboxx()", 1200) /*Chama a function xboxx()*/
}

function xboxx(){
	document.getElementById('imagem').src="imagens/xboxX.jpg";
	setTimeout("fairchild()", 1200)
}






function tituloFairchild(){
	document.getElementById("title").innerHTML = "Fairchild Channel F <small>(1976)</small>";
	setTimeout("tituloAtari()", 1200);
}

function tituloAtari(){
	document.getElementById("title").innerHTML = "Atari 2600 <small>(1977)</small>";
	setTimeout("tituloAtari4()", 1200);
}

function tituloAtari4(){
	document.getElementById("title").innerHTML = "Atari 400 <small>(1979)</small>";
	setTimeout("tituloVectrex()", 1200)
}

function tituloVectrex(){
	document.getElementById("title").innerHTML = "Vectrex <small>(1982)</small>";
	setTimeout("tituloNes()", 1200)
}

function tituloNes(){
	document.getElementById("title").innerHTML = "Nintendo Entertainment System <small>(1983)</small>";
	setTimeout("tituloPs1()", 1200)
}

function tituloPs1(){
	document.getElementById("title").innerHTML = "Ps1 <small>(1994)</small>";
	setTimeout("tituloPs2()", 1200)
}

function tituloPs2(){
	document.getElementById("title").innerHTML = "Ps2 <small>(2000)</small>";
	setTimeout("tituloXbox()", 1200);
}

function tituloXbox(){
	document.getElementById("title").innerHTML = "Xbox <small>(2001)</small>";
	setTimeout("tituloPs3()", 1200);
}

function tituloPs3(){
	document.getElementById("title").innerHTML = "Ps3 <small>(2006)</small>";
	setTimeout("tituloXboxone()", 1200);
}

function tituloXboxone(){
	document.getElementById("title").innerHTML = "Xbox One <small>(2013)</small>";
	setTimeout("tituloPs4()", 1200);
}

function tituloPs4(){
	document.getElementById("title").innerHTML = "Ps4 <small>(2013)</small>";
	setTimeout("tituloPs5()", 1200);
}

function tituloPs5(){
	document.getElementById("title").innerHTML = "Ps5 <small>(2020)</small>";
	setTimeout("tituloXboxsx()", 1200);
}

function tituloXboxsx(){
	document.getElementById("title").innerHTML = "Xbox Series X <small>(2020)</small>";
	setTimeout("tituloFairchild()", 1200);
}

//Function para o modo escuro
function themeFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}

//Function para mostrar vídeo das galerias
function mostrarVid(){
	var element = document.body;
	element.classList.toggle("mostrarVid");
}

