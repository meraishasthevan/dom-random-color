//dom-method//

let para=document.getElementsByClassName("p");
 console.log(para);
 
 
 function hello(){
	let n=document.getElementsByClassName("p");
	for(let i=0; i<n.length; i++){
	  n[i].innerHTML="Live life for the moment"; 
	
//style used//	
	let r=Math.random()*255;
	r=Math.round(r);

    let g=Math.random()*255;
	g=Math.round(g);
	
	let b=Math.random()*255;
	b=Math.round(b);
	
	n[i].style.backgroundColor='rgb('+ r + ', ' + g + ', ' + b + ')';
	n[i].style.color="rgb(247,244,22)";
	n[i].style.fontSize="25px";
 }}