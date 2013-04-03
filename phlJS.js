$(document).ready (function(){

$('#phlRoster').click(function(){
document.location.href = ("http://phillies.mlb.com/team/roster_active.jsp?c_id=phi");
	});

$('#phlSchedule').click(function(){
document.location.href = ("http://philadelphia.phillies.mlb.com/schedule/index.jsp?c_id=phi");
	});

$('#phlRecord').click(function(){
document.location.href = ("http://philadelphia.phillies.mlb.com/mlb/scoreboard/index.jsp?c_id=phi");
	});

$('#phlInjuries').click(function(){
document.location.href = ("http://mlb.mlb.com/mlb/fantasy/injuries/#team143");
	});

$('#phlUpdates').click(function(){
document.location.href = ("http://philadelphia.phillies.mlb.com/news/index.jsp?c_id=phi");
	});
});