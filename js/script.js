// Generated by CoffeeScript 1.6.1
(function() {
  var to_clock, to_s, _base, _ref, _ref1;

  if ((_ref = this.console) == null) {
    this.console = {};
  }

  if ((_ref1 = (_base = this.console).log) == null) {
    _base.log = function() {};
  }

  to_s = Popcorn.util.toSeconds;

  to_clock = function(seconds) {
    var min, s;
    min = Math.floor(seconds / 60);
    s = seconds % 60;
    min = min > 9 ? "" + min : "0" + min;
    s = s > 9 ? "" + s : "0" + s;
    return "" + min + ":" + s;
  };

  $(function() {
    var $play_button, $progess, $video, build_chapter_markers, chapter, chapter_index, chapters, citations, cue, cues, current_time, duration, goto_chapter, node_callbacks, toggle_play, _i, _len;
    $video = Popcorn('#the-video');
    $play_button = $('.playpause');
    $progess = $('.progress');
    duration = 0;
    current_time = 0;
    chapter_index = 0;
    cues = [
      {
        type: "chapter",
        title: "A Safe Place?",
        target: "#chapter1",
        time: "00:20",
        image: 'img/chapter-1.png',
        no_pause: true
      }, {
        type: "citation",
        title: "OIG: Adverse Events in Hospitals",
        target: "https://www.documentcloud.org/documents/436100-oig-adverse-events-in-hospitals.html#document/p3/a74093",
        time: "00:33"
      }, {
        type: "citation",
        title: "CDC: Estimating Healthcare-Associated Infections...",
        target: "https://www.documentcloud.org/documents/701516-cdc-hai-infections-deaths.html#document/p1/a103231",
        time: "00:35"
      }, {
        type: "citation",
        title: "IOM: To Err Is Human",
        target: "https://www.documentcloud.org/documents/436100-oig-adverse-events-in-hospitals.html#document/p3/a74093",
        time: "00:37"
      }, {
        type: "element",
        target: "#people",
        time: "00:38"
      }, {
        type: "citation",
        title: "CDC: Leading Causes of Death",
        target: "http://www.cdc.gov/nchs/fastats/lcod.htm",
        time: "00:43"
      }, {
        type: "chapter",
        title: "Unchecked Errors",
        target: "#chapter2",
        time: "00:47",
        image: 'img/chapter-2.png'
      }, {
        type: "citation",
        title: "IOM: To Err Is Human",
        target: "https://www.documentcloud.org/documents/286678-to-err-is-human-download.html#document/p112/a74097",
        time: "00:52"
      }, {
        type: "citation",
        title: "Makary, M.: Testimony Before Committee on Oversight and Government Reform...",
        target: "https://www.documentcloud.org/documents/693471-house-transparency-hearing-makary-testimony.html#document/p2/a103232",
        time: "01:12"
      }, {
        type: "element",
        target: "#show-map",
        time: "01:13"
      }, {
        type: "chapter",
        title: "No Simple Surgery",
        target: "#chapter3",
        time: "01:23",
        image: 'img/chapter-3.png'
      }, {
        type: "citation",
        title: "CDC: Estimating Healthcare-Associated Infections..",
        target: "https://www.documentcloud.org/documents/701516-cdc-hai-infections-deaths.html#document/p1/a103231",
        time: "01:34"
      }, {
        type: "element",
        target: "#bacteria",
        time: "01:43"
      }, {
        type: "chapter",
        title: "Deny & Defend",
        target: "#chapter4",
        time: "01:55",
        image: 'img/chapter-4.png'
      }, {
        type: "citation",
        title: "Boothman, R.: Nurturing a culture of patient safety...",
        target: "https://www.documentcloud.org/documents/701526-boothman-ache-frontiers.html#document/p2/a103234",
        time: "02:05"
      }, {
        type: "element",
        target: "#slashed-circle",
        time: "02:23"
      }, {
        type: "chapter",
        title: "The Malpractice Myth",
        target: "#chapter5",
        time: "02:26",
        image: 'img/chapter-5.png'
      }, {
        type: "citation",
        title: "Shepherd, J.: Uncovering the Silent Victims..",
        target: "https://www.documentcloud.org/documents/698248-emory-med-mal-study.html#document/p36/a103236",
        time: "02:31"
      }, {
        type: "element",
        target: "#lawsuits",
        time: "02:38"
      }, {
        type: "citation",
        title: "Shepherd, J.: Uncovering the Silent Victims..",
        target: "https://www.documentcloud.org/documents/698248-emory-med-mal-study.html#document/p36/a103236",
        time: "02:38"
      }, {
        type: "chapter",
        title: "Result: Patient Harm",
        target: "#chapter6",
        time: "02:47",
        image: 'img/chapter-6.png'
      }, {
        type: "citation",
        title: "AIG: Patient Safety; Hospital Risk",
        target: "https://www.documentcloud.org/documents/690849-aig-patient-safety-hospital-risk-white-paper.html#document/p4/a99951",
        time: "03:03"
      }, {
        type: "citation",
        title: "AHRQ: Hospital survey on patient safety culture...",
        target: "https://www.documentcloud.org/documents/215362-ahrq-hospital-safety-culture-survey-2011-part-one.html#document/p41/a26651",
        time: "03:05"
      }, {
        type: "citation",
        title: "AHRQ: Hospital Nurse Staffing and Quality of Care",
        target: "https://www.documentcloud.org/documents/700433-nurse-staffing-study-and-infections.html#document/p1/a102854",
        time: "03:08"
      }, {
        type: "citation",
        title: "American Nurse Today: Break the bullying cycle",
        target: "http://www.americannursetoday.com/article.aspx?id=8648",
        time: "03:13"
      }, {
        type: "citation",
        title: "AIG: Patient Safety; Hospital Risk",
        target: "https://www.documentcloud.org/documents/690849-aig-patient-safety-hospital-risk-white-paper.html",
        time: "03:15"
      }, {
        type: "citation",
        title: "McGuckin, M.: Hand Hygiene Compliance in the United States...",
        target: "https://www.documentcloud.org/documents/699985-hand-hygiene-compliance-rates-in-the-u-am-j-med.html#document/p1/a102851",
        time: "03:20"
      }, {
        type: "element",
        target: "#dollar",
        time: "03:25"
      }, {
        type: "chapter",
        title: "",
        target: "#outro",
        time: "03:26",
        image: "#",
        no_marker: true
      }, {
        type: "citation",
        title: "AHRQ: Hospital survey on patient safety culture...",
        target: "https://www.documentcloud.org/documents/215362-ahrq-hospital-safety-culture-survey-2011-part-one.html#document/p8/a103237",
        time: "03:27"
      }, {
        type: "element",
        target: "#now-what",
        time: "03:33"
      }
    ];
    chapters = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = cues.length; _i < _len; _i++) {
        cue = cues[_i];
        if (cue.type === "chapter") {
          _results.push(cue);
        }
      }
      return _results;
    })();
    citations = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = cues.length; _i < _len; _i++) {
        cue = cues[_i];
        if (cue.type === "citation") {
          _results.push(cue);
        }
      }
      return _results;
    })();
    build_chapter_markers = function(chapter) {
      var $el;
      $el = $("<li style='left: " + (to_s(chapter.time) / 240 * 100) + "%;'><a href='" + chapter.target + "'><img src='" + chapter.image + "'><span>" + chapter.title + "</span></a></li>");
      if (!chapter.no_marker) {
        $('ul', '.chapter-list').append($el);
      }
      return $video.cue(to_s(chapter.time) - 1, function() {
        if (!chapter.no_pause) {
          $video.pause();
          $(".next-chapter").addClass("show-next");
          return $(".instruction").addClass("show-instruction");
        }
      });
    };
    for (_i = 0, _len = chapters.length; _i < _len; _i++) {
      chapter = chapters[_i];
      build_chapter_markers(chapter);
    }
    $(".next-chapter").on("click", function() {
      return $video.play();
    });
    $video.on("play", function() {
      $(".next-chapter").removeClass("show-next");
      $(".instruction").removeClass("show-instruction");
      $play_button.removeClass("paused");
      return $('aside.current').removeClass('current');
    });
    $video.on("pause", function() {
      return $play_button.addClass("paused");
    });
    toggle_play = function() {
      if ($play_button.hasClass("paused")) {
        return $video.play();
      } else {
        return $video.pause();
      }
    };
    $play_button.add('#the-video').on("click", toggle_play);
    goto_chapter = function(target) {
      var cue_time, index, _j, _len1, _ref2;
      for (index = _j = 0, _len1 = cues.length; _j < _len1; index = ++_j) {
        cue = cues[index];
        if (cue.target === target) {
          _ref2 = [index, to_s(cue.time)], chapter_index = _ref2[0], cue_time = _ref2[1];
        }
      }
      if (cue_time != null) {
        $video.currentTime(cue_time).play();
      }
      $('.current-chapter').removeClass("current-chapter");
      return $("[href='" + target + "']").addClass("current-chapter");
    };
    $('a', '.chapter-list').on("click", function(e) {
      e.preventDefault();
      return goto_chapter($(this).attr('href'));
    });
    $video.on("timeupdate", function() {
      current_time = $video.currentTime();
      duration = $video.duration() || 0;
      return $progess.css({
        left: "" + (current_time / duration * 100) + "%"
      });
    });
    $.each(cues, function(i, cue_item) {
      return $video.cue(to_s(cue_item.time), function() {
        var _name;
        switch (cue_item.type) {
          case "citation":
            return $('.citations').html("<a href='" + cue_item.target + "' target='_blank'>" + cue_item.title + "</a>").stop().show().delay(2000).fadeOut(1000);
          case "chapter":
            $('.current').removeClass("current");
            $('.current-2').removeClass("current-2");
            if (!cue_item.hide_title) {
              $('.chapter-title').show().text(cue_item.title).delay(3000).fadeOut(2000);
            }
            $('.current-chapter').removeClass("current-chapter");
            return $("[href='" + cue_item.target + "']").addClass("current-chapter");
          case "element":
            $(cue_item.target).addClass('current');
            return typeof node_callbacks[_name = cue_item.callback] === "function" ? node_callbacks[_name]() : void 0;
        }
      });
    });
    $(".element").on("click", function(e) {
      var target;
      e.preventDefault();
      $video.pause();
      target = $(this).attr("href");
      if (target) {
        return $(target).addClass("current");
      }
    });
    $(".close-aside").on("click", function(e) {
      e.preventDefault();
      $(this).closest('aside').removeClass("current");
      return $video.play();
    });
    $('header.intro, .introduction').on("click", function() {
      var music;
      $('#noise').remove();
      $('header').removeClass('intro');
      $('.introduction').addClass('finished');
      music = $('#the-music')[0];
      music.volume = 0.4;
      music.play();
      setTimeout(function() {
        return $video.play();
      }, 1000);
      return setTimeout(function() {
        return $('.introduction').hide();
      }, 5000);
    });
    node_callbacks = {};
    $(window).load(function() {
      var data, state, states, _j, _len1, _ref2, _results;
      data = window.state_data;
      states = $('#us-map')[0].contentDocument;
      _ref2 = states.getElementsByClassName("state");
      _results = [];
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        state = _ref2[_j];
        $(state).on("mouseenter", function(e) {
          var key, left_offset, negative, positive, state_info, top_offset, value, _k, _len2, _ref3;
          _ref3 = data.states;
          for (_k = 0, _len2 = _ref3.length; _k < _len2; _k++) {
            state = _ref3[_k];
            if (state.state_abbreviation === this.id) {
              state_info = state;
            }
          }
          positive = (function() {
            var _results1;
            _results1 = [];
            for (key in state_info) {
              value = state_info[key];
              if (value === 2 && key !== "score") {
                _results1.push("<li>" + data.state_information_flags[key][value] + "</li>");
              }
            }
            return _results1;
          })();
          negative = (function() {
            var _results1;
            _results1 = [];
            for (key in state_info) {
              value = state_info[key];
              if (value === 1 && key !== "score") {
                _results1.push("<li>" + data.state_information_flags[key][value] + "</li>");
              }
            }
            return _results1;
          })();
          left_offset = e.offsetX;
          if (left_offset > 400) {
            left_offset += 50;
          }
          top_offset = e.offsetY;
          if (top_offset > 300) {
            top_offset -= 200;
          }
          $("#state-info").show().css({
            top: top_offset,
            left: left_offset
          }).find('#state-name').text(state_info.state_title);
          $('#state-positive').html(positive.join(""));
          return $('#state-negative').html(negative.join(""));
        });
        _results.push($(state).on("mouseleave", function() {
          return $('#state-info').hide();
        }));
      }
      return _results;
    });
    (function() {
      var $images, $judy, heights, image_count;
      $judy = $('#judy-gaines');
      $images = $('img', $judy);
      image_count = $images.length;
      heights = [0];
      $('.sections', $judy).find('section').map(function(index) {
        return heights.push($(this).height() + heights[index]);
      });
      return $('.sections', $judy).on("scroll", function() {
        var h, i, index, pos, _ref2;
        pos = $(this).scrollTop();
        index = (_ref2 = (function() {
          var _j, _len1, _ref3, _results;
          _results = [];
          for (i = _j = 0, _len1 = heights.length; _j < _len1; i = ++_j) {
            h = heights[i];
            if (((heights[i - 1] || 0) < (_ref3 = pos + 300) && _ref3 < h)) {
              _results.push(i);
            }
          }
          return _results;
        })()) != null ? _ref2 : image_count - 1;
        return $images.removeClass('current-image').eq(index - 1).addClass('current-image');
      });
    })();
    (function() {
      var $container, $deny, $events, $papers, event_count, papers_count, pos, prefix, width;
      $deny = $('#deny-and-defend');
      $container = $('.aside-content', $deny);
      $papers = $('.papers', $deny);
      $events = $('.events', $deny);
      event_count = $('.event', $deny).length;
      width = 6850;
      pos = 0;
      prefix = Modernizr.prefixed('transform');
      $.fn.parallax = function(rate) {
        var $this, update;
        $this = $(this);
        return (update = function() {
          var next_css;
          window.requestAnimationFrame(update);
          next_css = Modernizr.csstransforms3d ? "translate3d(" + (pos * rate) + "px, 0, 0)" : "translateX(" + (pos * rate) + "px)";
          return $this.css(prefix, next_css);
        })();
      };
      $('img', $papers).each(function(index) {
        $(this).parallax(index * 0.1);
        return $(this).css({
          left: index * 100
        });
      });
      $('.prev', $deny).hover(function(e) {
        return $container.scrollTo({
          top: 0,
          left: 0
        }, 7000);
      }, function() {
        return $container.stop();
      });
      $('.next', $deny).hover(function(e) {
        return $container.scrollTo({
          top: 0,
          left: width
        }, 7000);
      }, function() {
        return $container.stop();
      });
      papers_count = $('img', $papers).length;
      $('#hospital-envelope').on("click", function() {
        return $('.hospital-response').addClass("visible").on("click", function() {
          $('.visible', $deny).removeClass('visible');
          return $container.scrollLeft(0);
        });
      });
      return $container.on("scroll", function() {
        var index;
        pos = $container.scrollLeft();
        index = Math.round(pos / (width - 200) * event_count);
        return $('.event', $events).removeClass('current-event').eq(index).addClass('current-event');
      });
    })();
    $('a', '.decision-tree').on("click", function(e) {
      var target;
      e.preventDefault();
      target = $(this).attr('href');
      $('.explanation').html($(this).closest('.decision').data("failure-explanation"));
      return $('.decision-tree-container').scrollTo(target, 1000);
    });
    return $('.decision-tree-container').scrollTo('#decision-1', 0);
  });

}).call(this);
