$("button").click(function(){
	$("h1#Sign").replaceWith($('h1#Sign').clone());
	$("img#img").replaceWith($("img#img").clone());
	$("p#description").replaceWith($("p#description").clone());
});