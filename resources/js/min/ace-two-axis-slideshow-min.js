var isMobile=function(){return $(window).innerWidth()<768?!0:!1};$(document).ready(function(){var o=.6,e=".slide-desktop";isMobile()&&(e=".slide-mobile");var a=$(".page-two .main");a.data("project",0);var t=a.find(".main__project");t.each(function(){$(this).data("group",0)}),$("nav .project-nav").each(function(){var o=$(this).find("a").attr("href"),a=$(o).find(e).length;$(this).append("<div class='dots'></div>");for(var t=0;a>t;t++)$(this).find(".dots").append("<a><span></span></a>");$(this).find(".dots a").each(function(o,e){$(this).on("click",function(){l(o+1)})}),$(this).find("> a").on("click",function(){i($(this).data("project"))})}),t.first().show(),TweenMax.to(t.first().find(e).first(),o,{left:"0%",display:"block"});var n=function(){var n=t.eq(a.data("project"));TweenMax.to(n,o,{top:"100%",display:"none"}),a.data("project",a.data("project")-1),-1==a.data("project")&&a.data("project",t.length-1);var r=t.eq(a.data("project")),i=r.find(e).eq(0);TweenMax.to(i,0,{left:"0%"}),TweenMax.fromTo(r,o,{top:"-100%"},{delay:.1,top:"0%",display:"block"}),console.log("change project to ",a.data("project")),l(1,!0),s()},r=function(){var n=t.eq(a.data("project"));TweenMax.to(n,o,{top:"-100%",display:"none"}),a.data("project",a.data("project")+1),a.data("project")>=t.length&&a.data("project",0);var r=t.eq(a.data("project")),i=r.find(e).eq(0);TweenMax.to(i,0,{left:"0%"}),TweenMax.fromTo(r,o,{top:"100%"},{delay:.1,top:"0%",display:"block"}),console.log("change project to ",a.data("project")),l(1,!0),s()},i=function(n){console.log("jumpProject",n);var r=t.eq(a.data("project"));if(parseInt(a.data("project"))==parseInt(n)-1)return console.log("jump to same project!"),TweenMax.to(r,.1,{y:"-50px",ease:Quad.easeInOut}),TweenMax.to(r,.15,{delay:.1,y:"30px",ease:Quad.easeInOut}),void TweenMax.to(r,.1,{delay:.25,y:"0",ease:Quad.easeInOut});TweenMax.to(r,o,{top:"-100%",display:"none"}),a.data("project",parseInt(n)-1);var i=t.eq(a.data("project")),p=i.find(e).eq(0);TweenMax.to(p,0,{left:"0%"}),TweenMax.fromTo(i,o,{top:"100%"},{delay:.3,top:"0%",display:"block"}),l(1,!0),console.log("change project to ",a.data("project")),s()},p=function(){var n=t.eq(a.data("project")),r=n.find(e).eq(n.data("group"));TweenMax.to(r,o,{left:"100%",display:"none"}),n.data("group",n.data("group")-1),-1==n.data("group")&&n.data("group",n.find(e).length-1);var i=n.find(e).eq(n.data("group"));TweenMax.fromTo(i,o,{left:"-100%"},{left:"0%",display:"block"}),console.log("change group to ",n.data("group")),s()},d=function(){var n=t.eq(a.data("project")),r=n.find(e).eq(n.data("group"));TweenMax.to(r,o,{left:"-100%",display:"none"}),n.data("group",n.data("group")+1),n.data("group")>=n.find(e).length&&n.data("group",0);var i=n.find(e).eq(n.data("group"));TweenMax.fromTo(i,o,{left:"100%"},{left:"0%",display:"block"}),console.log("change group to ",n.data("group")),s()},l=function(n,r){var i=o;r&&(i=0);var p=t.eq(a.data("project")),d=p.find(e).eq(p.data("group"));TweenMax.to(d,i,{left:"-100%",display:"none"}),p.data("group",parseInt(n)-1);var l=p.find(e).eq(p.data("group"));TweenMax.fromTo(l,i,{left:"100%"},{left:"0%",display:"block"}),console.log("change group to ",p.data("group")),s()},c=function(a){if(!isMobile())return console.warn("mobilePrevGroup called while not mobile, converting to regular prevGroup"),void p();console.log("mobilePrevGroup",a);var t=a.find(e).eq(a.data("group"));TweenMax.to(t,o,{left:"100%",display:"none"}),a.data("group",a.data("group")-1),-1==a.data("group")&&a.data("group",a.find(e).length-1);var n=a.find(e).eq(a.data("group"));TweenMax.fromTo(n,o,{left:"-100%"},{left:"0%",display:"block"}),console.log("change group to ",a.data("group")),s()},u=function(a){if(!isMobile())return console.warn("mobileNextGroup called while not mobile, converting to regular nextGroup"),void d();console.log("mobileNextGroup",a);var t=a.find(e).eq(a.data("group"));TweenMax.to(t,o,{left:"-100%",display:"none"}),a.data("group",a.data("group")+1),a.data("group")>=a.find(e).length&&a.data("group",0);var n=a.find(e).eq(a.data("group"));TweenMax.fromTo(n,o,{left:"100%"},{left:"0%",display:"block"}),console.log("change group to ",a.data("group")),s()},s=function(){$(".page-two .header li").removeClass("active").eq(a.data("project")+1).addClass("active");var o=t.eq(a.data("project"));$("nav li.active .dots a").css("opacity",.2).eq(o.data("group")).css("opacity",1)};window.prevGroup=p,window.nextGroup=d,window.jumpGroup=l,window.prevProject=n,window.nextProject=r,window.jumpProject=i,window.mobilePrevGroup=c,window.mobileNextGroup=u,$(window).on("keydown",function(o){return 38==o.keyCode?(o.preventDefault(),n(),!1):40==o.keyCode?(o.preventDefault(),r(),!1):37==o.keyCode?(o.preventDefault(),p(),!1):39==o.keyCode?(o.preventDefault(),d(),!1):void 0}),$(".edge-top").on("click",n),$(".edge-bottom").on("click",r),$(".edge-right").on("click",d),$(".edge-left").on("click",p),$(".main__project").hammer().on("swiperight",function(){c($(this))}).on("swipeleft",function(){u($(this))}),$(".main__project nav a.arrow-nav-left").on("click",function(){console.log("arrow mobilePrevGroup",$(this),$(this).parents(".main__project")),c($(this).parents(".main__project"))}),$(".main__project nav a.arrow-nav-right").on("click",function(){console.log("arrow mobileNextGroup",$(this),$(this).parents(".main__project")),u($(this).parents(".main__project"))}),s()});