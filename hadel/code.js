$(document).ready(function(){
	var context = {title:"My new post",body:"This is my first post!"};
	var source = $('#myfirstEtmplate').html();
	var funk= Handlebars.compile(source);
	console.log(funk);
	$('body').append(funk(context));
	var src=$("#secondTemplate").html();
	var f2=Handlebars.compile(src);
	$.get('https//api.github.com/search/repositories?q=ruy',function(data){
		$("body").append(f2(data));
	})
})