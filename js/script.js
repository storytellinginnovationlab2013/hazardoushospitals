// Generated by CoffeeScript 1.6.1
(function(){var e,t,n,r,i;(r=this.console)==null&&(this.console={});(i=(n=this.console).log)==null&&(n.log=function(){});t=Popcorn.util.toSeconds;e=function(e){var t,n;t=Math.floor(e/60);n=e%60;t=t>9?""+t:"0"+t;n=n>9?""+n:"0"+n;return""+t+":"+n};$(function(){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b;u=Popcorn("#the-video");r=$(".playpause");i=$(".time-bar");n=$(".buffer_bar");o=$(".time-left");s=$(".time-elapsed");d=0;p=0;a=0;h=[{type:"chapter",title:"Intro",target:"#intro",time:"00:00",hide_title:!0},{type:"chapter",title:"A Safe Place",target:"#safety",time:"00:20"},{type:"element",target:"#people",time:"00:33"},{type:"element-next",target:"#people",time:"00:40"},{type:"element",target:"#causes-of-death",time:"00:42"},{type:"chapter_end",time:"00:48"},{type:"chapter",title:"Quality of Care",target:"#quality-of-care",time:"00:52"},{type:"element",target:"#states",time:"01:11"},{type:"chapter_end",time:"01:29"},{type:"chapter",title:"Deceptively Simple",target:"#infection",time:"01:33"},{type:"element",target:"#bacteria",time:"01:43"},{type:"chapter_end",time:"02:08"},{type:"chapter",title:"Deny & Defend",target:"#culpability",time:"02:10"},{type:"element",target:"#deny-and-defend",time:"02:22"},{type:"element",target:"#take-responsibility",time:"02:34"},{type:"chapter_end",time:"02:41"},{type:"chapter",title:"Malpractice in Practice",target:"#malpractice-in-practice",time:"02:44"},{type:"element",target:"#lawsuits",time:"02:52"},{type:"chapter_end",time:"03:06"},{type:"chapter",title:"Getting Better?",target:"#no-improvement",time:"03:10"},{type:"element",target:"#pinch-pennies",time:"03:28"},{type:"element",target:"#wash-hands",time:"03:48"},{type:"chapter",title:"End",target:"#end",time:"03:58",hide_title:!0}];f=function(){var e,t,n;n=[];for(e=0,t=h.length;e<t;e++){c=h[e];c.type==="chapter"&&n.push(c)}return n}();l=function(){var e,t,n;n=[];for(e=0,t=h.length;e<t;e++){c=h[e];c.type==="citation"&&n.push(c)}return n}();for(y=0,b=f.length;y<b;y++){c=f[y];$("ul",".chapter-list").append("<li><a href='"+c.target+"'>"+c.title+"</a></li>")}u.on("play",function(){return r.removeClass("paused")});u.on("pause",function(){return r.addClass("paused")});g=function(){return r.hasClass("paused")?u.play():u.pause()};r.add("#the-video").on("click",g);$(".progress").on("click",function(e){var t;t=e.offsetX/$(this).width();return u.currentTime(t*d)});v=function(e){var t,n,r,i,s;for(n=r=0,i=h.length;r<i;n=++r){c=h[n];c.target===e&&(s=[n,c.time],a=s[0],t=s[1])}t!=null&&u.currentTime(t).play();$(".current-chapter").removeClass("current-chapter");return $("[href='"+e+"']").addClass("current-chapter")};$("a",".chapter-list").on("click",function(e){e.preventDefault();return v($(this).attr("href"))});$(document).on("keydown",function(e){var t,n,r,i,s;i=32;t=37;r=39;if(e.keyCode!==i)if(e.keyCode===t){e.preventDefault();n=Math.max(0,a-1)}else if(e.keyCode===r){e.preventDefault();n=Math.min(f.length-1,a+1)}if(n)return v((s=f[n])!=null?s.target:void 0)});u.on("timeupdate",function(){p=u.currentTime();d=u.duration()||0;i.css({left:""+p/d*100+"%"});s.text(e(Math.floor(p)));return o.text(e(Math.floor(d-p)))});$.each(h,function(e,n){return u.cue(t(n.time),function(){var e,t;switch(n.type){case"citation":return $(".citations").html("<a href='"+n.target+"' target='_blank'>"+n.title+"</a>");case"chapter":$(".current").removeClass("current");$(".current-2").removeClass("current-2");n.hide_title||$(".chapter-title").show().text(n.title).delay(3e3).fadeOut(2e3);$(".current-chapter").removeClass("current-chapter");return $("[href='"+n.target+"']").addClass("current-chapter");case"element":$(n.target).addClass("current");return typeof m[e=n.callback]=="function"?m[e]():void 0;case"element-next":$(n.target).addClass("current-2");return typeof m[t=n.callback]=="function"?m[t]():void 0;case"chapter_end":return u.pause()}})});$(".element").on("click",function(e){var t;e.preventDefault();u.pause();t=$(this).attr("href");if(t)return $(t).addClass("current")});$(".close-aside").on("click",function(e){e.preventDefault();$(this).closest("aside").removeClass("current");return u.play()});$("header.intro").on("click",function(){$(this).removeClass("intro");$(".introduction").addClass("finished");setTimeout(function(){return u.play()},1e3);return setTimeout(function(){return $(".introduction").hide()},5e3)});m={};(function(){var e,t,n;t=$("#judy-gaines");e=$(".image-container",t);n=$(".text-inner",t).height()-t.height();return $(".text-container",t).on("scroll",function(){var t,r;r=$(this).scrollTop();t=Math.floor(r/n*4);return $("img",e).removeClass("current-image").eq(t).addClass("current-image")})})();(function(){var e,t,n,r,i,s;t=$("#deny-and-defend");e=$(".papers-container",n);n=$(".papers",t);r=$(".quotes",t);s=n.width()-t.width();$(".prev",e).on("hover",function(){return console.log("")});$(".next",e).on("hover",function(){return console.log("")});i=$("img",n).length;return e.on("scroll",function(){var n,o;o=e.scrollLeft();n=Math.floor(o/s*i);if(n===i){e.addClass("finished");return $(".hospital-envelope").addClass("visible").on("click",function(){return $(".hospital-response").addClass("visible").on("click",function(){$(".visible",t).removeClass("visible");return $(".finished").removeClass("finished")})})}return $("blockquote",r).removeClass("current-quote").eq(n).addClass("current-quote")})})();$("a",".decision-tree").on("click",function(e){var t;e.preventDefault();t=$(this).attr("href");return $(".decision-tree").scrollTo(t,1e3)});return $("#end-decision-tree").on("click",function(e){e.preventDefault();return u.play()})})}).call(this);