/* Redmine - project management software
   Copyright (C) 2006-2014  Jean-Philippe Lang
*/

var Dwarf = {
	floatIssue: function() {
		if ($("#content .issue .issue-wrapper").length > 0) {
		        var wrapper = $("#content .issue .issue-wrapper");
			topOffset = wrapper.offset().top;
			$(window).scroll(function(){
				if ( $(window).scrollTop() > (wrapper.height()+$(window).height()) ) {
					wrapper.css("margin-top", ($(window).scrollTop() - topOffset));
					wrapper.addClass("compact");
				} else {
					wrapper.css("margin-top",0);
					wrapper.removeClass("compact");	
				}
			});
		}
	},
	JSON: function(url, params) {
		return $.getJSON(url,params);
	},
	timer: function() {
		return true;
		var projects = this.JSON('/projects.json',{'limit':999});
		var DOM = {
			form: $("<form />").delegate(function(){alert(1)},'submit'),
			btn: $("<button />").text("Start").delegate(function(){alert("Clicked")}, "click"),
			projects: $("<select />"),
			counter: $("<span />",{"id": "stopwatch-timer", "class": "timer"}).text("00:00")
		};

		projects.success(
			function(XHR) {
				console.log(XHR.projects);
				for(project in XHR.projects) {
					DOM.projects
						.append($("<option />",{"value": XHR.projects[project]['identifier']})
						.text(XHR.projects[project]['name']));
//					console.log(XHR.projects[project]['name']);
//
//
				}
			}
		);
                projects.error(function(){
			DOM.projects
                        	.append($("<option />")
                                .text("Please sign-in first"));
		});
		DOM.projects.appendTo(DOM.form);
		DOM.btn.appendTo(DOM.form);
                DOM.counter.appendTo(DOM.form);
		$("body").append($("<div />",{"id" : "stopwatch"}).append(DOM.form));
		console.log(projects.projects);
	},
	events: function() {
		// On Ready
		window.addEventListener("load", function() {
			//...
			if ($("#content .issue.details").length > 0 && $("#content #history").length == 0) {
				$("#content .issue.details").addClass("fullwidth");
				// $("#content .issue.details").after(
				// 	$("<div />")
				// 		.attr("id", "history")
				// 		.addClass("flash success nodata placeholder")
				// 		.text("Sorry mate, seems no history there.")
				// 		.height($("#content .issue.details").innerHeight())
				// );
			}
		}, false);

		// On Resize
		window.addEventListener("resize", function() {
			//...
		}, false);

		// On Scroll
		window.addEventListener("scroll", function() {
			//...
		}, false);
	},
	vport: {
		dropDowns: function() {
			// HEADER
			$(".theme-Dwarf.controller-issues.action-new #issue_assigned_to_id").chosen({allow_single_deselect: true,no_results_text: "Not found :("});
			$("#project_quick_jump_box").chosen({no_results_text: "Not found :("});

			// NEW ISSUE
			$(".theme-Dwarf.controller-issues.action-new #issue_priority_id").chosen({disable_search_threshold: 10}); 
			$(".theme-Dwarf.controller-issues.action-new #issue_done_ratio").chosen({allow_single_deselect: true}); 
			$(".theme-Dwarf.controller-issues.action-new #issue_status_id").chosen({disable_search_threshold: 10}); 
			$(".theme-Dwarf.controller-issues.action-new #issue_tracker_id").chosen({disable_search_threshold: 10}); 
			$(".theme-Dwarf.controller-issues.action-new #issue_fixed_version_id").chosen({allow_single_deselect: true,disable_search_threshold: 10}); 

		    $('.chosen-container').innerWidth('100%');

			// SIDEBAR PLUGIN
			// $("#stopwatch-ui select.dropdown").chosen({width:"80%",no_results_text: "Not found: "});
		}
	},
	init: function() {
		//this.floatIssue();
		this.timer();
		this.vport.dropDowns();
		this.events();
	}
}
$(document).ready(function(){
	Dwarf.init()
});
