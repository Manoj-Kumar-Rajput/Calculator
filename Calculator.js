screen=document.getElementById('screen');
 buttons=document.querySelectorAll('button');
let screenvalue="";
for(elements of buttons){

	elements.addEventListener('click', (e)=>{
	
	numbertext=e.target.innerText;

	if(numbertext=='=')
	{
	screen.value=eval(screenvalue);
	screenvalue=screen.value;
}

	else if(numbertext=='x')
{	numbertext='*';
	screenvalue+=numbertext;
	screen.value=screenvalue;
}

	else if(numbertext=='AC')
{	screenvalue="";
	screen.value=screenvalue;
}

	else if(numbertext=='<-')
{	screenvalue=screen.value.slice(0,-1);
	screen.value=screenvalue;

}	

	else
{	screenvalue+=numbertext;
	screen.value=screenvalue;
}
	})
}