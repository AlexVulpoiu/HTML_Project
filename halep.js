function random_color()
{
	var cifre="0123456789abcdef";
	var culoare="#";
	for(var i=0;i<6;i++)
		culoare+=cifre[Math.floor(Math.random()*16)];
	return culoare;
}

function schimba_fundal_tabel()
{
	var aux=parseInt(sessionStorage.getItem("clics"));
	sessionStorage.setItem("clics",aux+1);
	var tabs=document.getElementsByTagName("table");
	for(var i=0;i<tabs.length;i++)
		tabs[i].style.backgroundColor=random_color();
}

function afiseaza_accesari()
{
	alert("Pagina a fost accesata de "+localStorage.getItem("accc")+" ori.");
}

function coloreaza_fundal()
{
	var p=sessionStorage.getItem("parinte");
	var q=document.getElementById(p);
	q.style.backgroundColor="#b3ffff";
}

function decoloreaza_fundal()
{
	var p=sessionStorage.getItem("parinte");
	var q=document.getElementById(p);
	q.style.backgroundColor="transparent";
}

function culoare_divuri(st,dr)
{
	var c=random_color();
	st.style.backgroundColor=c;
	dr.style.backgroundColor=c;
}

function func()
{	
	var st=document.getElementById("meniu");
	var dr=document.getElementById("reclama");
	cul=setInterval(culoare_divuri,3000,st,dr);
}

function schimba_ani()
{
	var ani=document.getElementsByTagName("h3");
	for(var i=0;i<ani.length;i++)
		if(ani[i].className=="an")
			ani[i].className="ani";
}

function copiaza_stil()
{
	var t=document.getElementById("info_t");
	var stl=window.getComputedStyle(t,null).getPropertyValue("text-decoration");
	document.getElementById("titlu").style.textDecoration=stl;
	t=document.getElementById("tttt");
	stl=window.getComputedStyle(t,null).getPropertyValue("background-color");
	document.getElementById("titlu").style.color=stl;
}

function afiseaza_data()
{
	var d=sessionStorage.getItem("last_date");
	var vd=d.split(".");
	var z=parseInt(vd[0]);
	if(z<10)
		d="0"+vd[0]+".";
	else
		d=vd[0]+".";
	var l=parseInt(vd[1]);
	if(l<10)
		d+="0"+l+".";
	else
		d+=l+".";
	d+=vd[2];
	
	var h=sessionStorage.getItem("last_hour");
	var vh=h.split(":");
	var o=parseInt(vh[0]);
	if(o<10)
		h="0"+o+":";
	else
		h=o+":";
	var m=parseInt(vh[1]);
	if(m<10)
		h+="0"+m+":";
	else
		h+=m+":";
	var s=parseInt(vh[2]);
	if(s<10)
		h+="0"+s;
	else
		h+=s;
	
	alert("Ati accesat pagina in data de "+d+", la ora "+h+".");
}

function afis_clics()
{
	alert("Culoarea tabelelor a fost modificata de "+sessionStorage.getItem("clics")+" ori.");
}

function stop_change()
{
	clearInterval(cul);
}

function change_gallery()
{
	var o=sessionStorage.getItem("orientare");
	var s=document.getElementById("galerie");
	if(o=="1")
	{
		s.className="stil2";
		sessionStorage.setItem("orientare","2");
	}
	else
	{
		s.className="stil1";
		sessionStorage.setItem("orientare","1");
	}
}

function show_sol()
{
	var Q=document.getElementById("quiz").elements;
	var rasp=[];
	var k=0;
	for(var i=0;i<Q.length;i+=4)
	{
		var s=0;
		var c=0;
		for(var j=i;j<i+4;j++)
			if(Q[j].checked)
			{
				s+=parseInt(Q[j].value);
				c++;
			}
		if(s==2 && c<=2)
		{
			rasp.push("corect");
			k++;
		}
		else
			rasp.push("gresit");
	}
	if(k<=2)
		alert("Mai incearca o data. Ai raspuns: "+rasp.join()+".");
	else
		if(k<=3)
			alert("Foarte bine, ai fost aproape! Ai raspuns: "+rasp.join()+".");
		else
			alert("Excelent! Ai raspuns corect la toate intrebarile!");
	document.getElementById("quiz").reset();
}

function open_quiz()
{
	var qz=document.createElement("form");
	qz.name="sect_quiz";
	qz.id="quiz";
	qz.style.margin="20px";
	document.getElementById("continut").appendChild(qz);
	
	var qst=document.createElement("p");
	qst.innerHTML="1. Care dintre urmatoarele turnee de Grand Slam au fost castigate de Simona Halep?";
	qz.appendChild(qst);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","checkbox");
	rasp.setAttribute("name","Q1");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="Australian Open";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","checkbox");
	rasp.setAttribute("name","Q1");
	rasp.setAttribute("value","1");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="Roland Garros";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","checkbox");
	rasp.setAttribute("name","Q1");
	rasp.setAttribute("value","1");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="Wimbledon";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","checkbox");
	rasp.setAttribute("name","Q1");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="US Open";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	
	var qst=document.createElement("p");
	qst.innerHTML="2. Cine este in prezent antrenorul Simonei?";
	qz.appendChild(qst);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q2");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="Adrian Marcu";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q2");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="Daniel Dobre";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q2");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="Teo Cercel";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q2");
	rasp.setAttribute("value","2");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="Darren Cahill";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	
	var qst=document.createElement("p");
	qst.innerHTML="3. In ce an Simona a ajuns prima data pe locul 1 in clasamentul WTA?";
	qz.appendChild(qst);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q3");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="2015";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q3");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="2016";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q3");
	rasp.setAttribute("value","2");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="2017";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q3");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="2018";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	
	var qst=document.createElement("p");
	qst.innerHTML="4. Cate turnee a castigat Simona in cariera?";
	qz.appendChild(qst);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q4");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="17";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q4");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="18";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q4");
	rasp.setAttribute("value","2");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="19";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);
	var rasp=document.createElement("input");
	rasp.setAttribute("type","radio");
	rasp.setAttribute("name","Q4");
	rasp.setAttribute("value","0");
	qz.appendChild(rasp);
	var et=document.createElement("label");
	et.innerHTML="36";
	qz.appendChild(et);
	var endl=document.createElement("br");
	qz.appendChild(endl);	
	
	var sol=document.createElement("button");
	sol.innerHTML="Afiseaza rezultatul quiz-ului";
	sol.className="btn";
	sol.style.margin="20px";
	sol.setAttribute("onclick","show_sol()");
	document.getElementById("continut").appendChild(sol);
}

//---------------------------------------------------------------------------------------INCEPUT cerinte suplimentare--------------------------------------------------------------
function buton_imagini()	// task-ul I) 8.
{
	var b=document.getElementById("buton_nou");
	var imgs=document.getElementsByTagName("img");
	if(b.innerHTML=="Ascunde imagini")
	{
		for(var i=0;i<imgs.length;i++)
			imgs[i].style.visibility="hidden";
		b.innerHTML="Afiseaza imagini";
	}
	else
	{
		for(var i=0;i<imgs.length;i++)
			imgs[i].style.visibility="visible";
		b.innerHTML="Ascunde imagini";
	}
}

function aparitie_litere()	// task-ul II) 3.
{
	var t=sessionStorage.getItem("titlul");
	var i=parseInt(sessionStorage.getItem("st"));
	var j=parseInt(sessionStorage.getItem("dr"));
	sessionStorage.setItem("st",i+1);
	sessionStorage.setItem("dr",j-1);
	var ax=sessionStorage.getItem("aux");
	if(i<j)
	{
		var s="";
		var k=0;
		for(k=0;k<ax.length&&k<i;k++)
			s+=ax.charAt(k);
		s+=t.charAt(i)+t.charAt(j);
		while(k<ax.length)
		{
			s+=ax.charAt(k);
			k++;
		}
		sessionStorage.setItem("aux",s);
		document.getElementById("titlu").innerHTML=s;
	}
	else
		if(i==j)
		{
			var s="";
			var k=0;
			for(k=0;k<ax.length&&k<i;k++)
				s+=ax.charAt(k);
			s+=t.charAt(i);
			while(k<ax.length)
			{
				s+=ax.charAt(k);
				k++;
			}
			sessionStorage.setItem("aux",s);
			document.getElementById("titlu").innerHTML=s;
		}
}
//---------------------------------------------------------------------------------------SFARSIT cerinte suplimentare--------------------------------------------------------------

function creeaza_butoane()
{
	var sct=document.createElement("section");
	sct.setAttribute("id","sect_but");
	sct.className="sctbt";
	document.getElementById("continut").appendChild(sct);
	
	var bt1=document.createElement("button");
	bt1.innerHTML="Schimbare orientare galerie";
	bt1.setAttribute("onclick","change_gallery()");
	bt1.className="btn";
	sct.appendChild(bt1);
	
	var bt2=document.createElement("button");
	bt2.innerHTML="Pastreaza culoarea laterala";
	bt2.setAttribute("onclick","stop_change()");
	bt2.className="btn";
	sct.appendChild(bt2);
	
	var bt3=document.createElement("button");
	bt3.innerHTML="Numar modificari efectuate pe tabele";
	bt3.setAttribute("onclick","afis_clics()");
	bt3.className="btn";
	sct.appendChild(bt3);
	
	var bt4=document.createElement("button");
	bt4.innerHTML="Acceseaza quiz-ul";
	bt4.setAttribute("onclick","open_quiz()");
	bt4.className="btn";
	sct.appendChild(bt4);
	
	//CERINTE SUPLIMENTARE
	var bt5=document.createElement("button");
	bt5.innerHTML="Ascunde imagini";
	bt5.id="buton_nou";
	bt5.setAttribute("onclick","buton_imagini()");
	bt5.className="btn";
	sct.appendChild(bt5);
}

window.onload=function()
{
	alert("Ati accesat pagina 'Simona Halep'.");
	
	var d=new Date();
	var dt=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
	var ora=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	sessionStorage.setItem("last_date",dt);
	sessionStorage.setItem("last_hour",ora);
	
	var ac=localStorage.getItem("accc");
	if(ac==="NaN")
		ac=0;
	else
		ac=parseInt(ac);
	ac++;
	localStorage.setItem("accc",ac);
	
	var tabs=document.getElementsByTagName("table");
	for(var i=0;i<tabs.length;i++)
	{
		tabs[i].setAttribute("onclick","schimba_fundal_tabel()");
		var p=tabs[i].parentElement.id;
		sessionStorage.setItem("parinte",p);
		tabs[i].setAttribute("onmouseover","coloreaza_fundal()");
		tabs[i].setAttribute("onmouseout","decoloreaza_fundal()");
	}
	var cul;
	ff=setTimeout(func,10000);
	schimba_ani();
	copiaza_stil();
	
	sessionStorage.setItem("orientare","1");
	sessionStorage.setItem("clics","0");
	creeaza_butoane();
	
	//CERINTE suplimentare
	var T=document.getElementById("titlu").innerHTML;
	sessionStorage.setItem("titlul",T);
	sessionStorage.setItem("st",0);
	sessionStorage.setItem("dr",T.length-1);
	var s="";
	sessionStorage.setItem("aux",s);
	document.getElementById("titlu").innerHTML="";
	document.getElementById("titlu").style.visibility="visible";
	setInterval(aparitie_litere,400);
}

window.onkeypress=function()
{
	if(event.key=="a")
		afiseaza_accesari();
	else
		if(event.key=="d")
			afiseaza_data();
}
