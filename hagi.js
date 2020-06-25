function schimba_h2()
{
	var lst=document.querySelectorAll("h2");
	for(var i=0;i<lst.length;i++)
	{
		lst[i].style.color="#990099";
		lst[i].style.fontStyle="italic";
	}
}

function schimba_li()
{
	var v=document.querySelectorAll("article ul li");
	for(var i=0;i<v.length;i++)
	{
		v[i].style.fontWeight="bold";
		v[i].style.color="#009933";
		v[i].style.fontFamily="Courier New";
		v[i].style.fontSize="30px";
		v[i].style.textAlign="center";
	}
}

function schimba_titlu()
{
	var tt=document.getElementById("t");
	tt.style.color="red";
	tt.style.textDecoration="underline";
	tt.style.position="fixed";
	tt.style.zIndex=2;
}

function schimba_imagini()
{
	var poze=document.getElementsByClassName("dreapta");
	for(var i=0;i<poze.length;i++)
		poze[i].src="tabel.jpg";
}

function schimba_ancore()
{
	var leg=document.getElementsByTagName("a");
	for(var i=4;i<leg.length;i++)
		if(i%2)
			leg[i].href="https://www.google.ro/?gws_rd=ssl";
		else
			leg[i].href="https://sites.google.com/site/fmitehniciweb/";
}

function adauga_modif()
{
	var x=parseInt(sessionStorage.getItem("clc"));
	x++;
	sessionStorage.setItem("clc",x);
}

function change_cols()
{
	adauga_modif();
	var imgs=document.querySelectorAll("#galerie figure img");
	var s1,s2
	for(var i=0;i<imgs.length;i+=2)
	{
		s1=imgs[i].getAttribute("src");
		s2=imgs[i+1].getAttribute("src");
		imgs[i].setAttribute("src",s2);
		imgs[i+1].setAttribute("src",s1);
	}
}

function stanga()
{
	adauga_modif();
	var imgs=document.querySelectorAll("#galerie figure img");
	for(var i=0;i<imgs.length;i++)
		imgs[i].style.transform="skew(-10deg,-10deg)";
}

function drept()
{
	adauga_modif();
	var imgs=document.querySelectorAll("#galerie figure img");
	for(var i=0;i<imgs.length;i++)
		imgs[i].style.transform="skew(0deg,0deg)";
}

function dreapta()
{
	adauga_modif();
	var imgs=document.querySelectorAll("#galerie figure img");
	for(var i=0;i<imgs.length;i++)
		imgs[i].style.transform="skew(10deg,10deg)";
}

function adaug_video()
{
	adauga_modif();
	var t=document.getElementById("tabele");
	var t1=t.firstElementChild;
	var t2=t1.nextElementSibling;
	if(t1.tagName=="TABLE")
	{
		t.removeChild(t1);
		t.removeChild(t2);
		
		var vd=document.createElement("iframe");
		vd.src="https://www.youtube.com/embed/DBA1TS56chA";
		vd.style.width="600px";
		vd.style.height="300px";
		vd.style.marginLeft="450px";
		t.appendChild(vd);
	}
}

function afiseaza_modificari()
{
	alert("Au fost efectuate "+sessionStorage.getItem("clc")+" modificari.");
}

function deschide()
{
	tab=window.open("proiect.html");
}

function inchide()
{
	tab.close();
}

function creeaza_butoane()
{
	var sct=document.createElement("section");
	sct.setAttribute("id","butoane");
	sct.classList.add("btne");
	document.getElementById("continut").appendChild(sct);
	
	var btn1=document.createElement("button");
	btn1.innerHTML="Interschimbare coloane galerie";
	btn1.classList.add("buton_nou");
	btn1.setAttribute("onclick","change_cols()");
	sct.appendChild(btn1);

	var btn2=document.createElement("button");
	btn2.innerHTML="Inclinare imagini spre stanga";
	btn2.classList.add("buton_nou");
	btn2.setAttribute("onclick","stanga()");
	sct.appendChild(btn2);
	
	var btn3=document.createElement("button");
	btn3.innerHTML="Indreptare imagini";
	btn3.classList.add("buton_nou");
	btn3.setAttribute("onclick","drept()");
	sct.appendChild(btn3);
	
	var btn4=document.createElement("button");
	btn4.innerHTML="Inclinare imagini spre dreapta";
	btn4.classList.add("buton_nou");
	btn4.setAttribute("onclick","dreapta()");
	sct.appendChild(btn4);
	
	var btn5=document.createElement("button");
	btn5.innerHTML="Inlocuire tabele cu videoclip";
	btn5.classList.add("buton_nou");
	btn5.setAttribute("onclick","adaug_video()");
	sct.appendChild(btn5);
	
	var btn6=document.createElement("button");
	btn6.innerHTML="Numar modificari efectuate";
	btn6.classList.add("buton_nou");
	btn6.setAttribute("onclick","afiseaza_modificari()");
	sct.appendChild(btn6);
	
	var tab;
	
	var btn7=document.createElement("button");
	btn7.innerHTML="Deschide pagina principala";
	btn7.classList.add("buton_nou");
	btn7.setAttribute("onclick","deschide()");
	sct.appendChild(btn7);
	
	var btn8=document.createElement("button");
	btn8.innerHTML="Inchide pagina principala";
	btn8.classList.add("buton_nou");
	btn8.setAttribute("onclick","inchide()");
	sct.appendChild(btn8);
}

function afiseaza_accesari()
{
	alert("Pagina a fost accesata de "+localStorage.getItem("acc")+" ori.");
}

//---------------------------------------------------------------------------------------INCEPUT cerinte suplimentare--------------------------------------------------------------
function schimba_dim()	// task-ul II) 10.
{
	var s=document.getElementById("sel");
	var x=s.selectedIndex;
	var prg=document.getElementsByTagName("p");
	if(x==0)
		for(var i=0;i<prg.length;i++)
			prg[i].style.fontSize="16px";
	else
		if(x==1)
			for(var i=0;i<prg.length;i++)
				prg[i].style.fontSize="10px";
		else
			if(x==2)
				for(var i=0;i<prg.length;i++)
					prg[i].style.fontSize="15px";
			else
				for(var i=0;i<prg.length;i++)
					prg[i].style.fontSize="20px";
	localStorage.setItem("dim_t",x);
}

function reseteaza()	// task-ul II) 10.
{
	var s=document.getElementById("sel");
	s.selectedIndex=0;
	localStorage.setItem("dim_t",0);
	var prg=document.getElementsByTagName("p");
	for(var i=0;i<prg.length;i++)
		prg[i].style.fontSize="16px";
}

function dim_text()	// task-ul II) 10.
{
	var p=document.createElement("p");
	p.innerHTML="Alegeti dimensiunea textului: ";
	var s=document.createElement("select");
	s.setAttribute("id","sel");
	s.setAttribute("onchange","schimba_dim()");
	var op=document.createElement("option");
	op.innerHTML="implicit";
	s.appendChild(op);
	var op=document.createElement("option");
	op.innerHTML="mic";
	s.appendChild(op);
	var op=document.createElement("option");
	op.innerHTML="mediu";
	s.appendChild(op);
	var op=document.createElement("option");
	op.innerHTML="mare";
	s.appendChild(op);
	p.appendChild(s);
	var b=document.createElement("button");
	b.innerHTML="Reseteaza dimensiunea";
	b.style.marginLeft="10px";
	b.setAttribute("onclick","reseteaza()");
	p.appendChild(b);
	var c=document.getElementById("continut");
	c.insertBefore(p,c.childNodes[0]);
}

function adauga_animatie()	// task-ul III) 1.
{
	var t=document.getElementById("t");
	t.style.textAlign="center";
	t.style.position="relative";
	t.style.animationName="animatie2";
	t.style.animationDelay="3s";
	t.style.animationDuration="5s";
	t.animationFillMode="forwards";
	t.animationTimingFunction="linear";
	t.animationDirection="alternate";
	t.style.animationIterationCount="2";
	t.style.transformOrigin="50% 200px";
}
//---------------------------------------------------------------------------------------SFARSIT cerinte suplimentare--------------------------------------------------------------

window.onload=function()
{
	var acs=parseInt(localStorage.getItem("acc"));
	if(acs===null)
		acs=0;
	acs++;
	localStorage.setItem("acc",acs);
	sessionStorage.setItem("clc","0");
	alert("Ati accesat pagina 'Gheorghe Hagi'.");
	schimba_h2();
	schimba_li();
	schimba_titlu();
	schimba_imagini();
	schimba_ancore();
	creeaza_butoane();
	var tata=document.getElementById("career_a");
	var fiu=document.querySelector("#career_a>table");
	tata.addEventListener("click",function(event){alert(event.currentTarget.tagName);tata.className="galben";fiu.className="portocaliu";event.stopPropagation();},true);
	fiu.addEventListener("click",function(){alert(event.currentTarget.tagName);fiu.className="albastru";});
	
	//CERINTE SUPLIMENTARE
	dim_text();
	var opt=localStorage.getItem("dim_t");
	if(opt===null)
		opt=0;
	localStorage.setItem("dim_t",opt);
	document.getElementById("sel").selectedIndex=opt;
	schimba_dim();
	adauga_animatie();
}

window.onkeypress=function()
{
	var culoare=["orange","blue","red","yellow","green","purple","magenta","brown","pink","white"];
	if(event.key=="a")
		afiseaza_accesari();
	else
	{	
		var x=parseInt(event.key);
		if(typeof(culoare[x])!="undefined")
		{
			divs=document.querySelectorAll("header div");
			alert("Ati ales culoarea "+culoare[x]+".");
			for(var i=0;i<length;i++)
				divs[i].style.backgroundColor=culoare[x];
		}
	}
}
