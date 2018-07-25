$(function(){

  $('.probootstrap-toggle').on('click', function(){
    // console.log('nice');

    var mainNav = $('.probootstrap-main-nav');

    
      if ( !mainNav.hasClass('active') ) {
        
          mainNav.addClass('active');
  
      } else {
        mainNav.removeClass('active');
      
      }
    
    
    

  });


  // Tawk.to Chat

  var Tawk_API = window.Tawk_API = window.Tawk_API || {},
      Tawk_LoadStart = new Date();

      Tawk_API.onChatStarted = function () {
        Tawk_API.addTags(['testing'], function(error){ console.log ('tagging failed', error, arguments);});
      }

      Tawk_API.onLoad = function() {
          var $ = jQuery;
          var $chatbtn = $('.chat-now-button');
          var tawkStatus = Tawk_API.getStatus();

          if ($chatbtn.length) {
            if (tawkStatus != 'online') {
              $chatbtn.addClass('btn-offline');
              $chatbtn.html('We are currently offline');
              $chatbtn.after('Please send us a message using the form below');
            }

            $chatbtn.click(function(e) {
              e.preventDefault();
              console.log(window._hcsUserEstimateA);
              Tawk_API.maximize();
            });
          }

          var $estimateForm = $('form.estimate-form');

          if ($estimateForm.length > 0) {

            if (tawkStatus == 'online') {
              var $estimateHeader = $('.estimate-header .col');

              $estimateHeader.append('<p class="text-center py-2">or</p><button class="btn btn-primary btn-bg-white btn-block mr-2 mb-2" onclick="Tawk_API.maximize();">Chat Now To Book<icon class="icon-chat"></button>');

              // $estimateForm.find('.chat-now-button').click(function (e) {
              //   var formObject = {},
              //   formData = $estimateForm.serializeArray();

              //   formData.forEach(function(val, idx) {
              //     !val['name'].match(/^_/) && (formObject[val['name']] = val['value']);
              //   });
              //   console.log(formObject);
              //   $.getJSON('/wp-json/hpcs/v1/tawk', {
              //     'user': formObject['fname'] + (formObject['lname'].length ? (' ' + formObject['lname']) : ''),
              //     'email': formObject['email']
              //   }, function(data, status) {

              //     var attr = $.extend({}, formObject, {
              //       'name'  : data['user'],
              //       'email' : data['email'],
              //       'hash'  : data['k']
              //     });

              //     console.log(attr);

              //     Tawk_API.setAttributes($.extend(formObject, {
              //       'name'  : data['user'],
              //       'email' : data['email'],
              //       'hash'  : data['k']
              //       }), function(error){ console.log ('error from setAttributes', error); });
              //   });
              //   Tawk_API.maximize();
              // })
            }
          }
      };

      (function() {
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/57356416163d0cca65fcfc32/default';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
      })();

      // Tawk.to Chat End

      /*!
        Zoom 1.7.21
        license: MIT
        http://www.jacklmoore.com/zoom
      */
      (function(o){var t={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};o.zoom=function(t,n,e,i){var u,c,a,r,m,l,s,f=o(t),h=f.css("position"),d=o(n);return t.style.position=/(absolute|fixed)/.test(h)?h:"relative",t.style.overflow="hidden",e.style.width=e.style.height="",o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*i,height:e.height*i,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(t),{init:function(){c=f.outerWidth(),u=f.outerHeight(),n===t?(r=c,a=u):(r=d.outerWidth(),a=d.outerHeight()),m=(e.width-c)/r,l=(e.height-u)/a,s=d.offset()},move:function(o){var t=o.pageX-s.left,n=o.pageY-s.top;n=Math.max(Math.min(n,a),0),t=Math.max(Math.min(t,r),0),e.style.left=t*-m+"px",e.style.top=n*-l+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target&&o(e.target)[0]||this,u=this,c=o(u),a=document.createElement("img"),r=o(a),m="mousemove.zoom",l=!1,s=!1;if(!e.url){var f=u.querySelector("img");if(f&&(e.url=f.getAttribute("data-src")||f.currentSrc||f.src),!e.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),i.style.position=o,i.style.overflow=t,a.onload=null,r.remove()}.bind(this,i.style.position,i.style.overflow)),a.onload=function(){function t(t){f.init(),f.move(t),r.stop().fadeTo(o.support.opacity?e.duration:0,1,o.isFunction(e.onZoomIn)?e.onZoomIn.call(a):!1)}function n(){r.stop().fadeTo(e.duration,0,o.isFunction(e.onZoomOut)?e.onZoomOut.call(a):!1)}var f=o.zoom(i,u,a,e.magnify);"grab"===e.on?c.on("mousedown.zoom",function(e){1===e.which&&(o(document).one("mouseup.zoom",function(){n(),o(document).off(m,f.move)}),t(e),o(document).on(m,f.move),e.preventDefault())}):"click"===e.on?c.on("click.zoom",function(e){return l?void 0:(l=!0,t(e),o(document).on(m,f.move),o(document).one("click.zoom",function(){n(),l=!1,o(document).off(m,f.move)}),!1)}):"toggle"===e.on?c.on("click.zoom",function(o){l?n():t(o),l=!l}):"mouseover"===e.on&&(f.init(),c.on("mouseenter.zoom",t).on("mouseleave.zoom",n).on(m,f.move)),e.touch&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,t(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),f.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),o.isFunction(e.callback)&&e.callback.call(a)},a.setAttribute("role","presentation"),a.alt="",a.src=e.url})},o.fn.zoom.defaults=t})(window.jQuery);

      // check for zoomable images
      if ($('.zoomable-image').length && $('.should-show-map').css('display') != 'none') {
        $('.zoomable-image').parent().zoom();
      }

      // estimate form
      if ($('.estimate-form').length) {
        var $estimateForm = $('.estimate-form');
        var $estimateResult = $estimateForm.find('.form-result')
        $estimateForm.submit(function(e) {
          e.preventDefault();
          console.log("Submit to Firebase");
          $estimateForm.find('.submit-estimate').prop('disabled', true);
          $estimateResult.html("").removeClass('alert alert-danger');

          var formData = $estimateForm.serializeArray();
          var data = {};

          formData.forEach(function(val, idx) {
            data[val['name']] = val['value'];
          });

          $.post("https://services.helenascleaning.com/send.php", data)
            .done(function(data) {
            console.log(data);
            if (data["errors"]) {
              $estimateResult.html(data["errors"].map(function(e) { return "<li>" + e + "</li>"; })).addClass('alert alert-danger');
              $estimateForm.find('.submit-estimate').prop('disabled', false);
            } else {
              $estimateResult.html('Your Estimate request has been submitted. We will get back to you as soon as possible').addClass('alert alert-success');
            }
          });
        });
      }
});