// Landing Page JS
console.log("test");
var isMobile = isMobile(),
    targetURL = 'https://www.10bet.mx',
    btag;
// targetURL = 'https://' + window.location.host.split('content.')[1];

function isMobile() {
    'use strict';
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|nexus|tablet|blazer|mobile|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)) ? !0 : !1;
}

function openLoginForm(page) {
    btag = btag || '';

    if (page == 'live-casino') {
        if (isMobile) {
            window.location.href = targetURL + '/register/' + btag;
        } else {
            window.location.href = targetURL + '/live-casino/register/' + btag;
        }
    } else if (page == 'casino') {
        if (isMobile) {
            window.location.href = targetURL + '/register/' + btag;
        } else {
            window.location.href = targetURL + '/casino/register/' + btag;
        }
    }
     else {
        if (isMobile) {
            window.location.href = targetURL + '/login_panel/' + btag;
        } else {
            window.location.href = targetURL + '/pop-up-login/' + btag;
        }
    }
    
};

function openRegistrationForm(page, offer) {
    btag = btag || '';

    if (offer) {
        offer = 'offer=' + offer;

        if (btag.length > 0) {
            offer = '&' + offer;
        } else {
            offer = '?' + offer;
        }
    } else {
        offer = '';
    }

    var queryString = btag + offer;

    if (page == 'live-casino') {
        if (isMobile) {
            window.location.href = targetURL + '/register/' + queryString;
        } else {
            window.location.href = targetURL + '/register/' + queryString;
        }
    } else if (page == 'casino') {
        if (isMobile) {
            window.location.href = targetURL + '/register/' + queryString;
        } else {
            window.location.href = targetURL + '/casino/register/' + queryString;
        }
    } else {
        if (isMobile) {
            /* window.location.href = targetURL + '/newregister/' + queryString; */
            window.location.href = targetURL + '/register/' + queryString;
        } else {
            window.location.href = targetURL + '/register/' + queryString;
        }
    }
};

// T&C Links Script
function openHelpSection(targetSection) {
    btag = btag || '';
    targetSection = targetSection.split(/(?=[A-Z])/).join('-').toLowerCase();

    if (isMobile) {
        window.location.href = targetURL + '/help/' + btag;
    } else {
        window.location.href = targetURL + '/help/' + targetSection + btag;
    }
}

// (function () {
//     function createSwiper() {
//         var swiper = new Swiper('.swiper-container', { // HTML element selector
//             slidesPerView: 'auto', // How many slides do we want per view? You can specify a number
//             spaceBetween: 10, // Space between the slides
//             freeMode: true, // Free rolling slider
//             loop: false, // Swiper loops your slides, and there is no ending point
//             loopedSlides: 8 // Safe option which needs to be set if you use slidesPerView: 'auto'
//         });
//     }

//     function createSwiperElements(callback) {
//         var fragment = document.createDocumentFragment(),
//             paymentClasses = ['paypal', 'visa', 'visa-electron', 'master-card', 'maestro', 'neteller', 'paysafe-card', 'bank-transfer', 'eco', 'skrill', 'entropay'],
//             swiperWrapper = document.getElementsByClassName('swiper-wrapper')[0],
//             newNode;

//         var swiperSlideElement = document.createElement('div'),
//             paymentIconElement = document.createElement('div');

//         swiperSlideElement.classList.add('swiper-slide');
//         paymentIconElement.classList.add('p-icon');
//         swiperSlideElement.appendChild(paymentIconElement);

//         for (var i = 0, len = paymentClasses.length; i < len; i += 1) {
//             newNode = swiperSlideElement.cloneNode(true);
//             newNode.firstChild.classList.add(paymentClasses[i]);
//             fragment.appendChild(newNode);
//         }
//         swiperWrapper.appendChild(fragment);

//         callback();
//     }

//     createSwiperElements(createSwiper);
// }());



document.addEventListener('DOMContentLoaded', function () {
    //Get document URL
    var url = document.location,
        linksOnPage;

    //Prepare it for usage
    url = url.toString().split("?");

    // history.pushState(null, "", location.href.split("?")[0]);

    // If no paramether
    if (url[1] == undefined) {
        url[1] = '';
    }
    // Process all links on the page
    linksOnPage = document.getElementsByTagName('a');

    for (var i = 0, len = linksOnPage.length; i < len; i += 1) {
        addTag(linksOnPage[i]);
    }
    

    function addTag(item) {
        var itemHref = item.href;

        // Check if it is not just a dummy link used for better indexing purpouses
        if (itemHref.indexOf('javascript:') != -1) {
            btag = '?' + url[1];
        } else if (itemHref.indexOf('#') != -1) {
            return;
        } else {
            // Search for query string parameters
            if (itemHref.indexOf('?') > -1) {
                itemHref += "&" + url[1];
            } else {
                itemHref += "?" + url[1];
            }
        }

        // Apply the change
        item.href = itemHref;
    }
}, false);

// CTA bottom ribbon show/hide
/* (function () {
    var oldOnLoad = window.onload;

    if (oldOnLoad) {
        oldOnLoad();
    } else {
        window.onload = function () {
            var ctaRibbon = document.getElementsByClassName('lp-cta-ribbon')[0],
                prevScrollpos = window.pageYOffset,
                showPosition = 600;

            window.onscroll = function () {
                var currentScrollPos = window.pageYOffset;

                if (prevScrollpos > showPosition) {
                    ctaRibbon.style.bottom = '0';
                    document.body.style.paddingBottom = '75px';
                } else {
                    ctaRibbon.style.bottom = '-93px';
                    document.body.style.paddingBottom = '0';
                }

                prevScrollpos = currentScrollPos;
            };
        };
    }
}()); */

// Attach ribbon to the top of the page
if (false) {
    (function () {
        var body = document.body,
            backgroundHolder = document.getElementsByClassName('lp-background')[0],
            wrapper = document.getElementsByClassName('lp-wrapper')[0];

        var ribbon = document.createElement('div');
        ribbon.id = 'ribbon-app-holder';

        ribbon.innerHTML = '<div id="MobileAppNotificationBlock">' +
            '<a id="ribbon-app-close-btn" class="c-app-notification__close-button" href="javascript:;"></a>' +
            '<div class="c-app-notification__wrapper">' +
            '<div class="c-app-notification__column">' +
            '<img class="c-app-notification__img" src="../assets-default/images/logo-ribbon.png"> </div>' +
            '<div class="c-app-notification__column">' +
            '<div class="c-app-notification__title">10bet Sports Betting</div>' +
            '<div class="c-app-notification__content">Download the App!</div>' +
            '</div>' +
            '<div class="c-app-notification__column">' +
            '<a href="https://10.onelink.me/ZUD3" target="_blank" id="ribbon-app-btn" class="c-app-notification__button">Get</a>' +
            '</div>' +
            '</div>' +
            '</div>';

        if (backgroundHolder.nodeName == 'DIV') {
            body.insertBefore(ribbon, backgroundHolder);
        } else {
            body.insertBefore(ribbon, wrapper);
        }

        var mobileAppRibbon = document.getElementById('MobileAppNotificationBlock'),
            mobileAppBtn = document.getElementById('ribbon-app-close-btn');

        if (document.cookie.indexOf('mobileAppRibbon') == -1) {
            mobileAppRibbon.style.display = 'block';

            mobileAppBtn.addEventListener('click', function () {
                document.cookie = 'mobileAppRibbon=1; expires=Wed, 31 Dec 2025 12:00:00 UTC; path=/';
                mobileAppRibbon.style.display = 'none';
            }, false);
        }
    }());
}

(function () {
    // HOTFIX for footer 
    var footerCopyright = document.getElementsByClassName('lp-footer-copyright')[0];
    if (footerCopyright) {
        footerCopyright.innerText = footerCopyright.innerText.substr(0, 28);
    }
}());

// (function(){  
//     var button = document.getElementById('terms-and-conditions');
//     button.onclick = function() {
//         var terms = document.getElementById("lp-ol-terms");
//         var termMain = document.getElementById("terms-and-conditions");
        
//         if (terms.style.display !== 'none') {
//             terms.style.display = 'none';
//             termMain.classList.remove("rotate-arrow");
//         }
//         else {
//             terms.style.display = 'block';
//             termMain.classList.add("rotate-arrow");
//             terms.scrollIntoView();
//         }
//     };
// }());
//---------------------------------------------------------------------------------------------------

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
  
  $('.lp-steps-m').owlCarousel({
          center: true,
          autoWidth: false,
          items: 1,
          loop: true,
          margin: 10,
          autoplay:true,
          autoplayTimeout:2000,
          autoplayHoverPause:false,
          animateOut: 'animate__slideOutLeft',
          animateIn: 'animate__slideInRight',
          responsive: {
              
              768: {
                  items: 1
              },
              1024: {
                  items: 1
              }
          }
      });
