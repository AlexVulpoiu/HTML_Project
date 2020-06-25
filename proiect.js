function afis_info()
{
	var x=new XMLHttpRequest();
	x.onreadystatechange=function()
	{
		if(x.readyState===4&&x.status===200)
			document.getElementById("info_aut").innerHTML=x.responseText;
	};
	x.open('GET','informatii.txt');
	x.send();
}

function adaug_buton()
{
	var b=document.createElement("button");
	b.innerHTML="Afla informatii despre autorul paginii";
	b.classList.add("nou");
	b.setAttribute("type","button");
	b.addEventListener("click",afis_info);
	var t=document.getElementsByTagName("body");
	t[0].appendChild(b);
	var p=document.createElement("p");
	p.setAttribute("id","info_aut");
	p.className="clasaP";
	var t=document.getElementsByTagName("body");
	t[0].appendChild(p);
}

//---------------------------------------------------------------------------------------INCEPUT cerinte suplimentare--------------------------------------------------------------
function adauga_ravase()	// task-ul I) 7.
{
	var rvs=["O sa treci toate examenele!","Azi prezinti proiectul la Tehnici Web!","Fa-ti bagajele, maine plecam la mare!","O sa ai o vara frumoasa!","Astazi vei avea parte de o surpriza!","Ai uitat sa incarci telefonul!","Inca putin si se termina si sesiunea asta!"];
	var i=Math.floor(Math.random()*rvs.length);
	var sct=document.createElement("section");
	var el=document.getElementsByTagName("body");
	el[0].insertBefore(sct,el[0].childNodes[0]);
	var pr=document.createElement("p");
	pr.innerHTML=rvs[i];
	pr.style.color="#cc0000";
	sct.appendChild(pr);
}

function opreste()	// task-ul I) 16.
{
	clearTimeout(x);
	var tp=document.getElementsByTagName("title");
	tp[0].innerHTML="Sportivi romani";
}

function schimba_titlu()	// task-ul I) 16.
{
	var nume=prompt("Cum te numesti?");
	var tp=document.getElementsByTagName("title");
	tp[0].innerHTML="Salut, "+nume+"!";
	x=setTimeout(opreste,2000);
}

function input_gresit(i)	// task-ul II) 1.
{
	var cif="0123456789";
	var z=[31,28,31,30,31,30,31,31,30,31,30,31];
	for(var j=0;j<i.value.length;j++)
		if(j!=2&&j!=5&&cif.indexOf(i.value[j])==-1)
			return 1;
		
	var sp=i.value.split("#");
	var a=parseInt(sp[0]);
	var b=parseInt(sp[1])-1;
	var c=parseInt(sp[2]);
	if(c%4==0)
		z[1]++;
	if(b==-1||b>11||a==0||a>z[b])
		return 1;
	
	return 0;
}

function vrst()	// task-ul II) 1.
{
	var dn=document.getElementById("inp");
	if(dn.value.length!=10||dn.value[2]!='#'||dn.value[5]!='#'||input_gresit(dn)==1)
	{
		alert("Data nu a fost introdusa corect. Introduceti din nou.");
		clearInterval(F);
		dn.value='';
		document.getElementById("varsta").innerHTML="";
	}
	else
	{
		var v=document.getElementById("varsta");
		
		var d=new Date();
		var dt=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
		var ora=d.getHours()+" ore, "+d.getMinutes()+" minute, "+d.getSeconds()+" secunde";
		
		var data_curenta=dt.split(".");
		var z1=parseInt(data_curenta[0]);
		var l1=parseInt(data_curenta[1])-1;
		var a1=parseInt(data_curenta[2]);
		
		var data_nasterii=dn.value.split("#");
		var z2=parseInt(data_nasterii[0]);
		var l2=parseInt(data_nasterii[1])-1;
		var a2=parseInt(data_nasterii[2]);
		
		var ani=0;
		var luni=0;
		var zile=0;
		
		var z=[31,28,31,30,31,30,31,31,30,31,30,31];
		
		if(z2>z1)
		{
			z1+=z[l2-1];
			l1--;
		}
		if(l2>l1)
		{
			a1--;
			l1+=12;
		}
		zile=z1-z2;
		luni=l1-l2;
		ani=a1-a2;
		
		v.innerHTML=ani+" ani, "+luni+" luni, "+zile+" zile, "+ora;
	}
}

function calculeaza_varsta()	// task-ul II) 1.
{
	F=setInterval(vrst,1000);
}

function afiseaza_varsta()	// task-ul II) 1.
{
	var s=document.createElement("section");
	var prg=document.createElement("div");
	prg.innerHTML="Scrieti data nasterii in input-ul urmator sub forma: ZZ#LL#AAAA(de exemplu: 21#02#1992)";
	s.appendChild(prg);
	var t=document.getElementsByTagName("body");
	t[0].insertBefore(s,t[0].childNodes[1]);
	var inp=document.createElement("input");
	inp.setAttribute("id","inp");
	s.appendChild(inp);
	var but=document.createElement("button");
	but.innerHTML="Afiseaza varsta";
	but.style.marginLeft="10px";
	but.setAttribute("onclick","calculeaza_varsta()");
	s.appendChild(but);
	var v=document.createElement("div");
	v.setAttribute("id","varsta");
	s.appendChild(v);
}
//---------------------------------------------------------------------------------------SFARSIT cerinte suplimentare--------------------------------------------------------------

window.onload=function()
{
	adaug_buton();
	
	//CERINTE SUPLIMENTARE
	var x;
	schimba_titlu();
	adauga_ravase();
	afiseaza_varsta();
	var F;
}
