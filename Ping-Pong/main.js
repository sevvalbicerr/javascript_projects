//nesnelerin kontrolünü javaScript ile sağlıyoruz.
var stickLeft = document.getElementById('stickLeft');
var stickRight= document.getElementById('stickRight');
///getElementById main.htmldeki nesneye id yoluyla ulaşmamızı sağlıyor. 
var ball= document.getElementById('ball');

stickLeft.style.top = window.innerHeight/2 + 'px';
stickRight.style.top= window.innerHeight/2 + 'px'; 
//çubukları ekran genişliğini ortalayacak şekilde konumlandırdık 
ball.style.top=window.innerHeight/2 + 'px';
ball.style.left=(window.innerWidth/2)  + 'px';

var ballTop = 0;
var ballLeft= 0 ;
var gameSpeed=30;
var scoreLeft=0;
var scoreRight=0;
function pXAdd(numb) {
	return numb + 'px';
}
document.onkeydown = function(e){
	console.log(e);
}
document.onkeydown=function(e){
	switch(e.keyCode){
		//sol çubuk
		case 87:
		if (parseInt(stickLeft.style.top)<=0) {
			stickLeft.style.top=stickLeft.style.top;
		}
		else{ 
			stickLeft.style.top= pXAdd(parseInt(stickLeft.style.top)- 30 );
		}
		console.log('w tusuna basildi.');
		
		break;
		case 83:
		if (parseInt(stickLeft.style.top)+ 100 >= window.innerHeight) {
			stickLeft.style.top=stickLeft.style.top;////??
		}
		else{
			stickLeft.style.top= pXAdd(parseInt(stickLeft.style.top)+30 );
		}
		
		console.log('s tusuna basildi');
		break;
		case 38:
		if (parseInt(stickRight.style.top)<=0) {
			stickRight.style.top=stickRight.style.top;
		}
		else{
			stickRight.style.top= pXAdd(parseInt(stickRight.style.top)- 30 );
		}
		console.log('yukari ok tusuna basildi');
		
		break;
		case 40:
		if (parseInt(stickRight.style.top)+100>=window.innerHeight) {
			stickRight.style.top=stickRight.style.top;
		}
		else{
			stickRight.style.top=pXAdd(parseInt(stickRight.style.top)+30);
		}
		
		console.log('asagi tusuna basildi');
		break;
		default:

	}
	

}
gameChain();
function gameLoop() {//burada hata var ?
	//topun alacağı değerler
	ball.style.left=pXAdd(parseInt(ball.style.left)+ ballLeft);
	ball.style.top=pXAdd(parseInt(ball.style.top)+ballTop);

	if (parseInt(ball.style.top)<=0 || parseInt(ball.style.top)+20>=window.innerHeight) {
		ballTop *= -1 ;
	}
	// top sağ ve sol çubuklara çarparsa, Y ekseninde geri seksin
	if(parseInt(ball.style.left) <= - 20 && parseInt(ball.style.left)<=0 //sol kenar sınırlara çarparsa
	&& parseInt(ball.style.top)<= parseInt(stickLeft.style.top) && parseInt(ball.style.top)<=parseInt(stickLeft.style.top)+100 ){
		ballLeft *= -1;
	}else if(parseInt(ball.style.left) >= window.innerWidth-12 && parseInt(ball.style.top)<=parseInt(stickRight.style.top) && parseInt(ball.style.top)<=parseInt(stickRight.style.top)+100 ){
		ballLeft *= -1;		
	}

	if (parseInt(ball.style.left)<=0 ) {
		if (++scoreRight===5) {
			alert('2. oyuncu kazandı.');
			scoreRight=0;
			scoreLeft=0;
			document.getElementById('scoreLeft').innerHTML=scoreLeft;
		}
		document.getElementById('scoreRight').innerHTML=scoreRight;
		gameChain();
	}
	if (parseInt(ball.style.left)+16>=window.innerWidth) {
		if (++scoreLeft===5) {
			alert('1. oyuncu kazandı.');
			scoreLeft=0;
			scoreRight=0;
		}
		document.getElementById('scoreLeft').innerHTML=scoreLeft;
		gameChain();
	}

}
function gameChain(){
		 ball.style.top = window.innerHeight/2 + 'px';
		 ball.style.left = (window.innerWidth/2) - (20/2) + 'px';

		 var rnd =Math.random()*4+2;
		 if (Math.random()*1>0.5) {
		 	rnd *= -1 ;
		 }
		 ballLeft=rnd;
		 ballTop=rnd;
	}
setInterval(gameLoop,gameSpeed);