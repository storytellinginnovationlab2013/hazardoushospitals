// Generated by CoffeeScript 1.6.1
(function(){var e,t,n,r,i;(r=this.console)==null&&(this.console={});(i=(n=this.console).log)==null&&(n.log=function(){});t=Popcorn.util.toSeconds;e=function(e){var t,n;t=Math.floor(e/60);n=e%60;t=t>9?""+t:"0"+t;n=n>9?""+n:"0"+n;return""+t+":"+n};$(function(){var e,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g;r=Popcorn("#the-video");e=$(".playpause");n=$(".progress");h=0;c=0;o=0;d=$("#the-music")[0];l=[{type:"chapter",title:"A Safe Place?",target:"#chapter1",time:"00:20",image:"img/chapter-1.png",no_pause:!0},{type:"citation",title:"OIG: Adverse Events in Hospitals",target:"https://www.documentcloud.org/documents/436100-oig-adverse-events-in-hospitals.html#document/p3/a74093",time:"00:33"},{type:"citation",title:"CDC: Estimating Healthcare-Associated Infections...",target:"https://www.documentcloud.org/documents/701516-cdc-hai-infections-deaths.html#document/p1/a103231",time:"00:35"},{type:"citation",title:"IOM: To Err Is Human",target:"https://www.documentcloud.org/documents/436100-oig-adverse-events-in-hospitals.html#document/p3/a74093",time:"00:37"},{type:"element",target:"#people",time:"00:38"},{type:"citation",title:"CDC: Leading Causes of Death",target:"http://www.cdc.gov/nchs/fastats/lcod.htm",time:"00:43"},{type:"chapter",title:"Unchecked Errors",target:"#chapter2",time:"00:47",image:"img/chapter-2.png"},{type:"citation",title:"IOM: To Err Is Human",target:"https://www.documentcloud.org/documents/286678-to-err-is-human-download.html#document/p112/a74097",time:"00:52"},{type:"citation",title:"Makary, M.: Testimony Before Committee on Oversight and Government Reform...",target:"https://www.documentcloud.org/documents/693471-house-transparency-hearing-makary-testimony.html#document/p2/a103232",time:"01:12"},{type:"element",target:"#us-map",time:"01:11"},{type:"element",target:"#show-map",time:"01:12"},{type:"chapter",title:"No Simple Surgery",target:"#chapter3",time:"01:23",image:"img/chapter-3.png"},{type:"citation",title:"CDC: Estimating Healthcare-Associated Infections..",target:"https://www.documentcloud.org/documents/701516-cdc-hai-infections-deaths.html#document/p1/a103231",time:"01:34"},{type:"element",target:"#bacteria",time:"01:54"},{type:"chapter",title:"Deny & Defend",target:"#chapter4",time:"01:55",image:"img/chapter-4.png"},{type:"citation",title:"Boothman, R.: Nurturing a culture of patient safety...",target:"https://www.documentcloud.org/documents/701526-boothman-ache-frontiers.html#document/p2/a103234",time:"02:05"},{type:"element",target:"#slashed-circle",time:"02:23"},{type:"chapter",title:"The Malpractice Myth",target:"#chapter5",time:"02:26",image:"img/chapter-5.png"},{type:"citation",title:"Shepherd, J.: Uncovering the Silent Victims..",target:"https://www.documentcloud.org/documents/698248-emory-med-mal-study.html#document/p36/a103236",time:"02:31"},{type:"element",target:"#lawsuits",time:"02:38"},{type:"citation",title:"Shepherd, J.: Uncovering the Silent Victims..",target:"https://www.documentcloud.org/documents/698248-emory-med-mal-study.html#document/p36/a103236",time:"02:38"},{type:"chapter",title:"Result: Patient Harm",target:"#chapter6",time:"02:47",image:"img/chapter-6.png"},{type:"citation",title:"AIG: Patient Safety; Hospital Risk",target:"https://www.documentcloud.org/documents/690849-aig-patient-safety-hospital-risk-white-paper.html#document/p4/a99951",time:"03:03"},{type:"citation",title:"AHRQ: Hospital survey on patient safety culture...",target:"https://www.documentcloud.org/documents/215362-ahrq-hospital-safety-culture-survey-2011-part-one.html#document/p41/a26651",time:"03:05"},{type:"citation",title:"AHRQ: Hospital Nurse Staffing and Quality of Care",target:"https://www.documentcloud.org/documents/700433-nurse-staffing-study-and-infections.html#document/p1/a102854",time:"03:08"},{type:"citation",title:"American Nurse Today: Break the bullying cycle",target:"http://www.americannursetoday.com/article.aspx?id=8648",time:"03:13"},{type:"citation",title:"AIG: Patient Safety; Hospital Risk",target:"https://www.documentcloud.org/documents/690849-aig-patient-safety-hospital-risk-white-paper.html",time:"03:15"},{type:"citation",title:"McGuckin, M.: Hand Hygiene Compliance in the United States...",target:"https://www.documentcloud.org/documents/699985-hand-hygiene-compliance-rates-in-the-u-am-j-med.html#document/p1/a102851",time:"03:20"},{type:"element",target:"#hand",time:"03:24"},{type:"chapter",title:"",target:"#outro",time:"03:26",image:"#",no_marker:!0},{type:"citation",title:"AHRQ: Hospital survey on patient safety culture...",target:"https://www.documentcloud.org/documents/215362-ahrq-hospital-safety-culture-survey-2011-part-one.html#document/p8/a103237",time:"03:27"},{type:"element",target:"#now-what",time:"03:33"},{type:"music_stop",time:"03:33"}];u=function(){var e,t,n;n=[];for(e=0,t=l.length;e<t;e++){f=l[e];f.type==="chapter"&&n.push(f)}return n}();a=function(){var e,t,n;n=[];for(e=0,t=l.length;e<t;e++){f=l[e];f.type==="citation"&&n.push(f)}return n}();i=function(e){var n;n=$("<li style='left: "+t(e.time)/240*100+"%;'><a href='"+e.target+"'><img src='"+e.image+"'><span>"+e.title+"</span></a></li>");e.no_marker||$("ul",".chapter-list").append(n);return r.cue(t(e.time)-1,function(){if(!e.no_pause){r.pause();$(".next-chapter").addClass("show-next");return $(".instruction").addClass("show-instruction")}})};for(m=0,g=u.length;m<g;m++){s=u[m];i(s)}$(".next-chapter").on("click",function(){return r.play()});r.on("play",function(){$("#us-map").removeClass("expanded");$(".next-chapter").removeClass("show-next");$(".instruction").removeClass("show-instruction");e.removeClass("paused");$("aside.current").removeClass("current");$("#now-what").removeClass("current");return d.play()});r.on("pause",function(){e.addClass("paused");return d.pause()});v=function(){return e.hasClass("paused")?r.play():r.pause()};e.add("#the-video").on("click",v);p=function(e){var n,i,s,u,a;for(i=s=0,u=l.length;s<u;i=++s){f=l[i];f.target===e&&(a=[i,t(f.time)],o=a[0],n=a[1])}n!=null&&r.currentTime(n).play();$(".current-chapter").removeClass("current-chapter");return $("[href='"+e+"']").addClass("current-chapter")};$("a",".chapter-list").on("click",function(e){e.preventDefault();return p($(this).attr("href"))});r.on("timeupdate",function(){c=r.currentTime();h=r.duration()||0;return n.css({left:""+c/h*100+"%"})});$.each(l,function(e,n){return r.cue(t(n.time),function(){switch(n.type){case"citation":return $(".citations").html("<a href='"+n.target+"' target='_blank'>"+n.title+"</a>").stop().show().delay(2e3).fadeOut(3e3);case"chapter":$(".current").removeClass("current");$(".current-2").removeClass("current-2");n.hide_title||$(".chapter-title").show().text(n.title).delay(3e3).fadeOut(2e3);$(".current-chapter").removeClass("current-chapter");return $("[href='"+n.target+"']").addClass("current-chapter");case"element":return $(n.target).addClass("current");case"music_stop":return d.pause()}})});$(".element.prevent-links").on("click",function(e){var t;e.preventDefault();r.pause();t=$(this).attr("href");if(t)return $(t).addClass("current")});$(".close-aside").on("click",function(e){e.preventDefault();$(this).closest("aside").removeClass("current");return r.play()});$("header.intro, .introduction").on("click",function(){$("#noise").remove();$("header").removeClass("intro");$(".introduction").addClass("finished");d=$("#the-music")[0];d.volume=.25;d.play();setTimeout(function(){return r.play()},1e3);return setTimeout(function(){$(".introduction").remove();$("header p").remove();return $("header .start-button").remove()},5e3)});$(window).load(function(){var e,t,n,i,s,o,u;e=window.state_data;n=$("#us-map")[0].contentDocument;$(n.getElementsByTagName("g")).hide();o=n.getElementsByClassName("state");u=[];for(i=0,s=o.length;i<s;i++){t=o[i];$(t).on("mouseenter",function(n){var r,i,s,o,u,a,f,l,c,h;if($("#us-map").hasClass("expanded")){h=e.states;for(l=0,c=h.length;l<c;l++){t=h[l];""+t.state_abbreviation+"_1_"===this.id&&(u=t)}o=function(){var t;t=[];for(r in u){f=u[r];f===2&&r!=="score"&&t.push("<li>"+e.state_information_flags[r][f]+"</li>")}return t}();s=function(){var t;t=[];for(r in u){f=u[r];f===1&&r!=="score"&&t.push("<li>"+e.state_information_flags[r][f]+"</li>")}return t}();i=n.offsetX;i>400&&(i+=50);a=n.offsetY;a>300&&(a-=200);$("#state-info").show().css({top:a,left:i}).find("#state-name").text(u.state_title);$("#state-positive").html(o.join(""));return $("#state-negative").html(s.join(""))}});$(t).on("mouseleave",function(){return $("#state-info").hide()});$(t).on("click",function(){$("#us-map.current").addClass("expanded");$(n.getElementsByTagName("g")).show();$(".instruction").removeClass("show-instruction");return r.pause()});u.push($(n.getElementsByTagName("g")).on("click",function(){return $("#us-map").removeClass("expanded")}))}return u});(function(){var e,t,n,r;t=$("#judy-gaines");e=$("img",t);r=e.length;n=[0];$(".sections",t).find("section").map(function(e){return n.push($(this).height()+n[e])});return $(".sections",t).on("scroll",function(){var t,i,s,o,u;o=$(this).scrollTop();s=(u=function(){var e,r,s,u;u=[];for(i=e=0,r=n.length;e<r;i=++e){t=n[i];if((n[i-1]||0)<(s=o+300)&&s<t){u.push(i)}}return u}())!=null?u:r-1;return e.removeClass("current-image").eq(s-1).addClass("current-image")})})();(function(){var e,t,n,r,i,s,o,u,a;t=$("#deny-and-defend");e=$(".aside-content",t);r=$(".papers",t);n=$(".events",t);i=$(".event",t).length;a=6850;o=0;u=Modernizr.prefixed("transform");$.fn.parallax=function(e){var t,n;t=$(this);return(n=function(){var r;window.requestAnimationFrame(n);r=Modernizr.csstransforms3d?"translate3d("+o*e+"px, 0, 0)":"translateX("+o*e+"px)";return t.css(u,r)})()};$("img",r).each(function(e){$(this).parallax(e*.1);return $(this).css({left:e*100})});$(".prev",t).hover(function(t){return e.scrollTo({top:0,left:0},7e3)},function(){return e.stop()});$(".next",t).hover(function(t){return e.scrollTo({top:0,left:a},7e3)},function(){return e.stop()});s=$("img",r).length;$("#hospital-envelope").on("click",function(){return $(".hospital-response").addClass("visible").on("click",function(){$(".visible",t).removeClass("visible");return e.scrollLeft(0)})});return e.on("scroll",function(){var t;o=e.scrollLeft();t=Math.round(o/(a-200)*i);return $(".event",n).removeClass("current-event").eq(t).addClass("current-event")})})();$("a",".decision-tree").on("click",function(e){var t;e.preventDefault();t=$(this).attr("href");$(".explanation").html($(this).closest(".decision").data("failure-explanation"));return $(".decision-tree-container").scrollTo(t,1e3)});$(".decision-tree-container").scrollTo("#decision-1",0);$("#go-to-credits").on("click",function(){return $("#credits").show()});return $("#close-credits","#credits").on("click",function(e){e.preventDefault();return $("#credits").hide()})})}).call(this);