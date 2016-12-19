$(document).ready(function(){

	$('.modal').modal({
		starting_top: '25%',
		ending_top: '25%'
	});

	$(".button-collapse").sideNav({
		closeOnClick: true, 
		draggable: true 
	});

	function hideAllProjectInfo(){
		$("#revealContent").hide();
		$("#projectOneDetails").hide();
		$("#projectTwoDetails").hide();
		$("#projectThreeDetails").hide();
		$("#resumeDownload").hide();
	};
	
	$('.aboutButton').click(function (e) {
		e.preventDefault()
		$("#aboutTab").show();
		$("#resumeTab").hide();
		$("#portfolioTab").hide();
		$("#contactTab").hide();
		$("#profilePicture").show();
		$("#projectInfo").hide();
	});
	
	$('.resumeButton').click(function (e) {
		e.preventDefault()
		$("#aboutTab").hide();
		$("#portfolioTab").hide();
		$("#contactTab").hide();
		$("#resumeTab").show();
		hideAllProjectInfo();
		$("#projectInfo").show();
		$("#resumeDownload").show();
	});
	
	$('.portfolioButton').click(function (e) {
		e.preventDefault()
		hideAllProjectInfo();
		$("#aboutTab").hide();
		$("#resumeTab").hide();
		$("#portfolioTab").show();
		$("#contactTab").hide();
		$("#projectInfo").show();
		$("#revealContent").show();
	});
	
	$('.contactButton').click(function (e) {
		e.preventDefault()
		$("#aboutTab").hide();
		$("#resumeTab").hide();
		$("#portfolioTab").hide();
		$("#contactTab").show();
	});
	
	$("#projectOne").click(function (e) {
		hideAllProjectInfo();
		$("#projectOneDetails").show();
		if ($(window).width() < 1024) {
			$("#projectOneModal").modal('open');
		}
	});
	
	$("#projectTwo").click(function (e) {
		hideAllProjectInfo();
		$("#projectTwoDetails").show();
		if ($(window).width() < 1024) {
			$("#projectTwoModal").modal('open');
		}
	});
	
	$(".projectThree").click(function (e) {
		hideAllProjectInfo();
		$("#projectThreeDetails").show();
		if ($(window).width() < 1024) {
			$("#projectThreeModal").modal('open');
		}
	});
	
	$("#sideNavButton").click(function(e) {
		$('.button-collapse').sideNav('show');
	});
	
	
});
	