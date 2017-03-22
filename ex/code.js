var url='http://api.wunderground.com/api/2b7ffbbefc819c50/hourly/q/IQ/Erbil.json'
function makeAjaxRequest(){
	$.ajax({
		url: url,
		type: 'get',
		dataType: 'json',
		success:function(response){
			console.log(getTemp(response));
			showResult(response)
		}
	})
}

function getHours(json){
	return $.map(json.hourly_forecast,function(obj){
		return obj.FCTTIME.hour;
	})
}

function getTemp(json){
	return $.map(json.hourly_forecast,function(obj){
		return obj.temp.english
	})
}

function showResult(json){
	var ctx=document.getElementById('chartCanvas').getContext("2d")
	//
	var temp=getTemp(json)
	
	var data = {
		labels: getHours(json),
		datasets: [
		{
			label: "My First dataset",
			backgroundColor: "rgba(179,181,198,0.2)",
			borderColor: "rgba(179,181,198,1)",
			pointBackgroundColor: "rgba(179,181,198,1)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "rgba(179,181,198,1)",
			data: getTemp(json)
		}
		]
	};
	var myLineChart = new Chart(ctx);
	myLineChart.Line(data);
}
$(document).ready(function(){
	makeAjaxRequest();
})


