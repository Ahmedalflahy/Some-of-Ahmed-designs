$(document).ready(function(){

$("button").click(ajaxGitRequest)
})
function ajaxGitRequest(e){
	debugger
	$("#result").html(' ')
	$.get(`https://api.github.com/users/Ahmedalflahy/repos`,function(data){
	$.each(data['items'],function(i,itm){
	$('#result').append(`<a href='${itm['html_url']}'>${itm['name']}</a><br/>`);
	});
}).fail(function(){alert("Error!")})
}