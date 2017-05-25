var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#fb6964', '#342224', "#472e32", "#bdbb99", "#77b1a9", "#73a857","#f55600"];
	var quotes =["Keep your eyes on the stars, and your feet on the ground.",
            "It does not matter how slowly you go as long as you do not stop.",
            "It always seems impossible until its done.",
            "We should not give up and we should not allow the problem to defeat us.",
             "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
             "I never dreamed about Success. I worked for it.",
             "Never Love anybody who treats you like you're ordinary.",
             "Sincerity is the way to Heaven.",
             "Integrity is doing the right thing, even when no one is watching.",
             "Strength and growth come only through continuos effort an struggle."
            ];
var author =["Theodore Roosevelt","Confucius","Nelson Mandela","Dr APJ Abdul Kalam","Ayn Rand","Estee Lauder","Oscar Wilde","Mencius","CS Lewis","Nepoleon Hill"];
var t;
function getNextQuote(){	
  	var rand,c;
  	rand = Math.floor(Math.random()*9);
  	t = rand;
	$('#quoteArea').animate({opacity: 0},500,function(){
		$('#quoteArea').animate({opacity: 1},500);
		$('#quoteArea').html(quotes[rand]);
	});

	$('#authorArea').animate({opacity: 0},500,function(){
		$('#authorArea').animate({opacity: 1},500);
		$('#authorArea').html("-"+author[rand]);
	});

	c = Math.floor(Math.random()*13);
	$('html body').css({'background-color': colors[c],'color': colors[c] });

	$('.btn').css('background-color', colors[c]);
}

function tweet(){
	window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+ encodeURIComponent(quotes[t]));
}

window.onload = getNextQuote;