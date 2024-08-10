$('#btn1').click(function(){
	$("p:not(.ignore)").replaceWith("doesnt have ignore<br>");
});

$('#btn2').click(function(){
	$("p:contains(REPLACE_ME)").replaceWith("done");
});

$('#btn3').click(function(){
	$("div.block:has(p.special)").hide();
});

$('#btn4').click(function(){
	$(":header").css({"color" : "red"});
});

$('#btn5').click(function(){
	$("li:visible").hide();
});

$('#btn6').click(function(){
	var distance = 1 + Math.floor(Math.random() * 100);
	$("div.square").css({"margin-left" : distance});
});