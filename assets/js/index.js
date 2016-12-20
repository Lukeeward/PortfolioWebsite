$(document).ready(function(){

	$('.modal').modal({
		starting_top: '25%',
		ending_top: '25%'
	});

	$(".button-collapse").sideNav({
		closeOnClick: true, 
		draggable: true 
	});
	
	$('#submitButton').click( function() {
		console.log("dsdsd");
		$("#contactForm").hide();
		$("#loadingSpinner").show();
		$.ajax("process.php")
		.done(function() {
			$("#loadingSpinner").hide();
			$("#confirmationMessage").show();
		})
	});
	
	
	function hideAllProjectInfo(){
		$("#revealContent").hide();
		$("#projectOneDetails").hide();
		$("#projectTwoDetails").hide();
		$("#projectThreeDetails").hide();
		$("#projectFourDetails").hide();
		$("#projectFiveDetails").hide();
		$("#projectSixDetails").hide();
		$("#resumeDownload").hide();
		$("#contactForm").hide();
	};
	
	function hideAllTabs() {
		$("#aboutTab").hide();
		$("#resumeTab").hide();
		$("#portfolioTab").hide();
		$("#contactTab").hide();
	}
	
	
	function renderProjectDetails(title, details, tags) {
		var template = Handlebars.compile($("#projectInfoTemplate").html());
		$("#projectDetails").html(template({projectName: title, projectDetails: details, tags: tags}));
	}
	
	function renderProjectModal(title, details, tags) {
		var template = Handlebars.compile($("#projectInfoModal").html());
		$("#projectModal").html(template({projectName: title, projectDetails: details, tags: tags}));
	}
	
	
	$('.aboutButton').click(function (e) {
		e.preventDefault()
		hideAllTabs();
		$("#aboutTab").show();
		$("#profilePicture").show();
		$("#projectInfo").hide();
	});
	
	$('.resumeButton').click(function (e) {
		e.preventDefault()
		hideAllTabs();
		$("#resumeTab").show();
		hideAllProjectInfo();
		$("#projectInfo").show();
		$("#resumeDownload").show();
	});
	
	$('.portfolioButton').click(function (e) {
		e.preventDefault()
		hideAllProjectInfo();
		hideAllTabs();
		$("#portfolioTab").show();
		$("#projectInfo").show();
		$("#revealContent").show();
	});
	
	$('.contactButton').click(function (e) {
		e.preventDefault()
		hideAllTabs();
		hideAllProjectInfo();
		$("#contactTab").show();
		$("#projectDetails").hide();
		$("#projectInfo").show();
		$("#contactForm").show();
	});
	
	$("#projectOne").click(function (e) {
		displayProjectInformation("One", "Project One.", "Details about project one.", ["Angular", "Ionic", "Cordova"]);
	});
	
	$("#projectTwo").click(function (e) {
		displayProjectInformation("Two", "Project Two.", "Details about project two.", ["C#", "Entity Framework"]);
	});
	
	$(".projectThree").click(function (e) {
		displayProjectInformation("Three", "Project Three.", "Details about project three.", ["Angular", "Ionic", "Cordova"]);
	});
	 
	$("#projectFour").click(function (e) {
		displayProjectInformation("Four", "Project Four.", "Details about project four.", ["Angular", "Ionic", "Cordova"]);
	});
	$("#projectFive").click(function (e) {
		displayProjectInformation("Five", "Project Five.", "Details about project five.", ["Angular", "Ionic", "Cordova"]);
	});
	
	$(".projectSix").click(function (e) {
		displayProjectInformation("Six", "Project Six.", "Details about project six.", ["Angular", "Ionic", "Cordova"]);
	});
	
	function displayProjectInformation(projectNumber, title, details, tags){
		var maxWidth = 1024;
		hideAllProjectInfo();
		renderProjectDetails(title, details, tags);
		$("#projectDetails").show();
		if ($(window).width() < maxWidth) {
			renderProjectModal(title, details, tags);
			$("#projectModal").modal('open');
		}
	}
	
	
	$("#sideNavButton").click(function(e) {
		$('.button-collapse').sideNav('show');
	});
	
	
});
	
