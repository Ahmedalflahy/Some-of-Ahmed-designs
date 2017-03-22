$(document).ready(function(){

$("#aSearch").click(ajaxGitRequest)
})
function ajaxGitRequest(e){
	e.preventDefault();
	var query=$("#txtSearch").val()
	$("#result").html(' ')
	$.get(`https://api.github.com/search/repositories?q=${query}`,function(data){
	$.each(data['items'],function(i,itm){
	$('#result').append(`<a href='${itm['html_url']}'>${itm['name']}</a><br/>`);
	});
}).fail(function(){alert("Error!")})
}

/* ('#btn').click(function(){
	 $.ajax({
	type: get,
	url: `https://api.github.com/users/:username/repos`,
},seccess:function(data){
for(var i =data.length ; i< data.length-5;i--){
	 $('#see').append("<h1>"+data.name+"</h1>");
     $('#see').append("<h1>"+"<a herf=${data.html_url}> Hellow World"+"</h1>"); 
	}
})   
	
}) 

											