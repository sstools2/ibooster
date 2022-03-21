(function(w,O){"object"===typeof exports&&"undefined"!==typeof module?module.exports=O():"function"===typeof define&&define.amd?define(O):w.Sweetalert2=O()})(this,function(){function w(a){w="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"===typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b};return w(a)}function O(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function");}function Aa(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1;d.configurable=!0;"value"in d&&(d.writable=!0);Object.defineProperty(a,d.key,d)}}function Ba(a,b,c){b&&Aa(a.prototype,b);c&&Aa(a,c);return a}function B(){B=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a};return B.apply(this,arguments)}function eb(a,b){if("function"!==typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}});b&&V(a,b)}function S(a){S=Object.setPrototypeOf?Object.getPrototypeOf:function(b){return b.__proto__||Object.getPrototypeOf(b)};return S(a)}function V(a,b){V=Object.setPrototypeOf||function(c,d){c.__proto__=d;return c};return V(a,b)}function fb(){if("undefined"===typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}function ha(a,b,c){ha=fb()?Reflect.construct:function(d,f,k){var g=[null];g.push.apply(g,f);d=new(Function.bind.apply(d,g));k&&V(d,k.prototype);return d};return ha.apply(null,arguments)}function ia(a,b,c){ia="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(d,f,k){for(;!Object.prototype.hasOwnProperty.call(d,f)&&(d=S(d),null!==d););if(d)return f=Object.getOwnPropertyDescriptor(d,f),f.get?f.get.call(k):f.value};return ia(a,b,c||a)}function ja(a,b){if(!b)return null;switch(b){case "select":case "textarea":case "file":return r(a,e[b]);case "checkbox":return a.querySelector(".".concat(e.checkbox," input"));case "radio":return a.querySelector(".".concat(e.radio," input:checked"))||a.querySelector(".".concat(e.radio," input:first-child"));case "range":return a.querySelector(".".concat(e.range," input"));default:return r(a,e.input)}}function Ca(a,b,c){c["showC"+b.substring(1)+"Button"]?q(a,"inline-block"):u(a);a.innerHTML=c[b+"ButtonText"];a.setAttribute("aria-label",c[b+"ButtonAriaLabel"]);a.className=e[b];x(a,c.customClass,b+"Button");l(a,c[b+"ButtonClass"])}function Da(){var a=n.innerParams.get(this),b=n.domCache.get(this);a.showConfirmButton||(u(b.confirmButton),a.showCancelButton||u(b.actions));F([b.popup,b.actions],e.loading);b.popup.removeAttribute("aria-busy");b.popup.removeAttribute("data-loading");b.confirmButton.disabled=!1;b.cancelButton.disabled=!1}function Ea(a,b,c,d){c?Fa(a,d):(gb().then(function(){return Fa(a,d)}),h.keydownTarget.removeEventListener("keydown",h.keydownHandler,{capture:h.keydownListenerCapture}),h.keydownHandlerAdded=!1);b.parentNode&&b.parentNode.removeChild(b);Ga()&&(null!==P.previousBodyPadding&&(document.body.style.paddingRight=P.previousBodyPadding+"px",P.previousBodyPadding=null),hb(),"undefined"!==typeof window&&window.MSInputMethodContext&&document.documentMode&&window.removeEventListener("resize",ka),ib());F([document.documentElement,document.body],[e.shown,e["height-auto"],e["no-backdrop"],e["toast-shown"],e["toast-column"]])}
function W(a){var b=m();if(b&&!b.classList.contains(e.hide)){var c=n.innerParams.get(this);if(c){var d=la.swalPromiseResolve.get(this);F(b,e.show);l(b,e.hide);var f=y(),k=T&&Ha(b),g=c.onClose;c=c.onAfterClose;null!==g&&"function"===typeof g&&g(b);k?jb(this,b,f,c):Ea(this,f,X(),c);d(a||{})}}}function Y(a,b,c){var d=n.domCache.get(a);b.forEach(function(f){d[f].disabled=c})}function Ia(a,b){if(!a)return!1;if("radio"===a.type)for(var c=a.parentNode.parentNode.querySelectorAll("input"),d=0;d<c.length;d++)c[d].disabled=b;else a.disabled=b}function kb(a){a.inputValidator||Object.keys(Ja).forEach(function(b){a.input===b&&(a.inputValidator=Ja[b])})}function Ka(a,b){a.removeEventListener(T,Ka);b.style.overflowY="auto"}function G(){if("undefined"!==typeof window){"undefined"===typeof Promise&&J("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");ma=this;for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];a=Object.freeze(this.constructor.argsToParams(b));Object.defineProperties(this,{params:{value:a,writable:!1,enumerable:!0,configurable:!0}});a=this._main(this.params);n.promise.set(this,a)}}var lb=function(a){for(var b=[],c=0;c<a.length;c++)-1===b.indexOf(a[c])&&b.push(a[c]);return b},La=function(a){return Object.keys(a).map(function(b){return a[b]})},Q=function(a){return Array.prototype.slice.call(a)},z=function(a){console.warn("".concat("SweetAlert2:"," ").concat(a))},J=function(a){console.error("".concat("SweetAlert2:"," ").concat(a))},Ma=[],U=function(a,b){var c='"'.concat(a,'" is deprecated and will be removed in the next major release. Please use "').concat(b,'" instead.');-1===Ma.indexOf(c)&&(Ma.push(c),z(c))},Z=function(a){return"function"===typeof a?a():a},na=function(a){return a&&Promise.resolve(a)===a},R=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Na=function(a){var b={},c;for(c in a)b[a[c]]="swal2-"+a[c];return b},e=Na("container shown height-auto iosfix popup modal no-backdrop toast toast-shown toast-column fade show hide noanimation close title header content actions confirm cancel footer icon image input file range select radio checkbox label textarea inputerror validation-message progress-steps active-progress-step progress-step progress-step-line loading styled top top-start top-end top-left top-right center center-start center-end center-left center-right bottom bottom-start bottom-end bottom-left bottom-right grow-row grow-column grow-fullscreen rtl".split(" ")),H=Na(["success","warning","info","question","error"]),P={previousBodyPadding:null},mb=function(a){Q(a.classList).forEach(function(b){-1===La(e).indexOf(b)&&-1===La(H).indexOf(b)&&a.classList.remove(b)})},x=function(a,b,c){mb(a);if(b&&b[c]){if("string"!==typeof b[c]&&!b[c].forEach)return z("Invalid type of customClass.".concat(c,'! Expected string or iterable object, got "').concat(w(b[c]),'"'));l(a,b[c])}},Oa=function(a){a.focus();if("file"!==a.type){var b=a.value;a.value="";a.value=b}},aa=function(a,b,c){a&&b&&("string"===typeof b&&(b=b.split(/\s+/).filter(Boolean)),b.forEach(function(d){a.forEach?a.forEach(function(f){c?f.classList.add(d):f.classList.remove(d)}):c?a.classList.add(d):a.classList.remove(d)}))},l=function(a,b){aa(a,b,!0)},F=function(a,b){aa(a,b,!1)},r=function(a,b){for(var c=0;c<a.childNodes.length;c++)if(a.childNodes[c].classList.contains(b))return a.childNodes[c]},ba=function(a,b,c){c||0===parseInt(c)?a.style[b]="number"===typeof c?c+"px":c:a.style.removeProperty(b)},q=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"flex";a.style.opacity="";a.style.display=b},u=function(a){a.style.opacity="";a.style.display="none"},I=function(a){return!(!a||!(a.offsetWidth||a.offsetHeight||a.getClientRects().length))},Ha=function(a){var b=window.getComputedStyle(a);a=parseFloat(b.getPropertyValue("animation-duration")||"0");b=parseFloat(b.getPropertyValue("transition-duration")||"0");return 0<a||0<b},y=function(){return document.body.querySelector("."+e.container)},ca=function(a){var b=y();return b?b.querySelector(a):null},A=function(a){return ca("."+a)},m=function(){return A(e.popup)},oa=function(){var a=m();return Q(a.querySelectorAll("."+e.icon))},pa=function(){var a=oa().filter(function(b){return I(b)});return a.length?a[0]:null},Pa=function(){return A(e.title)},t=function(){return A(e.content)},Qa=function(){return A(e.image)},qa=function(){return A(e["validation-message"])},K=function(){return ca("."+e.actions+" ."+e.confirm)},L=function(){return ca("."+e.actions+" ."+e.cancel)},da=function(){return A(e.actions)},Ra=function(){return A(e.header)},Sa=function(){return A(e.footer)},ra=function(){return A(e.close)},sa=function(){var a=Q(m().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(c,d){c=parseInt(c.getAttribute("tabindex"));d=parseInt(d.getAttribute("tabindex"));return c>d?1:c<d?-1:0}),b=Q(m().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(function(c){return"-1"!==c.getAttribute("tabindex")});return lb(a.concat(b)).filter(function(c){return I(c)})},Ga=function(){return!X()&&!document.body.classList.contains(e["no-backdrop"])},X=function(){return document.body.classList.contains(e["toast-shown"])},Ta=function(){return"undefined"===typeof window||"undefined"===typeof document},nb='\n <div aria-labelledby="'.concat(e.title,'" aria-describedby="').concat(e.content,'" class="').concat(e.popup,'" tabindex="-1">\n   <div class="').concat(e.header,'">\n     <ul class="').concat(e["progress-steps"],'"></ul>\n     <div class="').concat(e.icon," ").concat(H.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(e.icon," ").concat(H.question,'"></div>\n     <div class="').concat(e.icon," ").concat(H.warning,'"></div>\n     <div class="').concat(e.icon," ").concat(H.info,'"></div>\n     <div class="').concat(e.icon," ").concat(H.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(e.image,'" />\n     <h2 class="').concat(e.title,'" id="').concat(e.title,'"></h2>\n     <button type="button" class="').concat(e.close,'"></button>\n   </div>\n   <div class="').concat(e.content,'">\n     <div id="').concat(e.content,'"></div>\n     <input class="').concat(e.input,'" />\n     <input type="file" class="').concat(e.file,'" />\n     <div class="').concat(e.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(e.select,'"></select>\n     <div class="').concat(e.radio,'"></div>\n     <label for="').concat(e.checkbox,'" class="').concat(e.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(e.label,'"></span>\n     </label>\n     <textarea class="').concat(e.textarea,'"></textarea>\n     <div class="').concat(e["validation-message"],'" id="').concat(e["validation-message"],'"></div>\n   </div>\n   <div class="').concat(e.actions,'">\n     <button type="button" class="').concat(e.confirm,'">OK</button>\n     <button type="button" class="').concat(e.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(e.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),Ua,N=function(a){M.isVisible()&&Ua!==a.target.value&&M.resetValidationMessage();Ua=a.target.value},ob=function(){var a=t(),b=r(a,e.input),c=r(a,e.file),d=a.querySelector(".".concat(e.range," input")),f=a.querySelector(".".concat(e.range," output")),k=r(a,e.select),g=a.querySelector(".".concat(e.checkbox," input"));a=r(a,e.textarea);b.oninput=N;c.onchange=N;k.onchange=N;g.onchange=N;a.oninput=N;d.oninput=function(p){N(p);f.value=d.value};d.onchange=function(p){N(p);d.nextSibling.value=d.value}},ta=function(a,b){if(a instanceof HTMLElement)b.appendChild(a);else if("object"===w(a))if(b.innerHTML="",0 in a)for(var c=0;c in a;c++)b.appendChild(a[c].cloneNode(!0));else b.appendChild(a.cloneNode(!0));else a&&(b.innerHTML=a)},T=function(){if(Ta())return!1;var a=document.createElement("div"),b={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"},c;for(c in b)if(Object.prototype.hasOwnProperty.call(b,c)&&"undefined"!==typeof a.style[c])return b[c];return!1}(),pb=function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var a=document.createElement("div");a.style.width="50px";a.style.height="50px";a.style.overflow="scroll";document.body.appendChild(a);var b=a.offsetWidth-a.clientWidth;document.body.removeChild(a);return b},n={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},qb="input file range select radio checkbox textarea".split(" "),sb=function(a,b){var c=t(),d=n.innerParams.get(a),f=!d||b.input!==d.input;qb.forEach(function(k){var g=e[k],p=r(c,g);var C=b.inputAttributes,D=ja(t(),k);if(D){for(var ua=0;ua<D.attributes.length;ua++){var Va=D.attributes[ua].name;-1===["type","value","style"].indexOf(Va)&&D.removeAttribute(Va)}for(var va in C)"range"===k&&"placeholder"===va||D.setAttribute(va,C[va])}p.className=g;b.inputClass&&l(p,b.inputClass);b.customClass&&l(p,b.customClass.input);f&&u(p)});b.input&&f&&rb(b)},rb=function(a){if(!v[a.input])return J('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(a.input,'"'));var b=v[a.input](a);q(b);setTimeout(function(){Oa(b)})},wa=function(a,b){if(!a.placeholder||b.inputPlaceholder)a.placeholder=b.inputPlaceholder},v={};v.text=v.email=v.password=v.number=v.tel=v.url=function(a){var b=r(t(),e.input);"string"===typeof a.inputValue||"number"===typeof a.inputValue?b.value=a.inputValue:na(a.inputValue)||z('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(w(a.inputValue),'"'));wa(b,a);b.type=a.input;return b};v.file=function(a){var b=r(t(),e.file);wa(b,a);b.type=a.input;return b};v.range=function(a){var b=r(t(),e.range),c=b.querySelector("input"),d=b.querySelector("output");c.value=a.inputValue;c.type=a.input;d.value=a.inputValue;return b};v.select=function(a){var b=r(t(),e.select);b.innerHTML="";if(a.inputPlaceholder){var c=document.createElement("option");c.innerHTML=a.inputPlaceholder;c.value="";c.disabled=!0;c.selected=!0;b.appendChild(c)}return b};v.radio=function(){var a=r(t(),e.radio);a.innerHTML="";return a};v.checkbox=function(a){var b=r(t(),e.checkbox),c=ja(t(),"checkbox");c.type="checkbox";c.value=1;c.id=e.checkbox;c.checked=!!a.inputValue;b.querySelector("span").innerHTML=a.inputPlaceholder;return b};v.textarea=function(a){var b=r(t(),e.textarea);b.value=a.inputValue;wa(b,a);if("MutationObserver"in window){var c=parseInt(window.getComputedStyle(m()).width),d=parseInt(window.getComputedStyle(m()).paddingLeft)+parseInt(window.getComputedStyle(m()).paddingRight);(new MutationObserver(function(){var f=b.offsetWidth+
d;f>c?m().style.width=f+"px":m().style.width=null})).observe(b,{attributes:!0,attributeFilter:["style"]})}return b};var Wa=function(a,b){var c=A(e["progress-steps"]);if(!b.progressSteps||0===b.progressSteps.length)return u(c);q(c);c.innerHTML="";var d=parseInt(null===b.currentProgressStep?M.getQueueStep():b.currentProgressStep);d>=b.progressSteps.length&&z("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");b.progressSteps.forEach(function(f,k){var g=document.createElement("li");l(g,e["progress-step"]);g.innerHTML=f;c.appendChild(g);k===d&&l(g,e["active-progress-step"]);k!==b.progressSteps.length-1&&(g=document.createElement("li"),l(g,e["progress-step-line"]),f.progressStepsDistance&&(g.style.width=f.progressStepsDistance),c.appendChild(g))})},Xa=function(a,b){var c=m();ba(c,"width",b.width);ba(c,"padding",b.padding);b.background&&(c.style.background=b.background);c.className=e.popup;b.toast?(l([document.documentElement,document.body],e["toast-shown"]),l(c,e.toast)):l(c,e.modal);x(c,b.customClass,"popup");"string"===typeof b.customClass&&l(c,b.customClass);aa(c,e.noanimation,!b.animation);if(c=y()){var d=b.backdrop;"string"===typeof d?c.style.background=d:d||l([document.documentElement,document.body],e["no-backdrop"]);!b.backdrop&&b.allowOutsideClick&&z('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');d=b.position;d in e?l(c,e[d]):(z('The "position" parameter is not valid, defaulting to "center"'),l(c,e.center));(d=b.grow)&&"string"===typeof d&&(d="grow-"+d,d in e&&l(c,e[d]));x(c,b.customClass,"container");b.customContainerClass&&l(c,b.customContainerClass)}c=Ra();x(c,b.customClass,"header");Wa(a,b);if((c=n.innerParams.get(a))&&b.type===c.type&&pa())x(pa(),b.customClass,"icon");else{c=oa();for(d=0;d<c.length;d++)u(c[d]);if(b.type){d=m();c=window.getComputedStyle(d).getPropertyValue("background-color");d=d.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(var f=0;f<d.length;f++)d[f].style.backgroundColor=c;-1!==Object.keys(H).indexOf(b.type)?(c=ca(".".concat(e.icon,".").concat(H[b.type])),q(c),x(c,b.customClass,"icon"),aa(c,"swal2-animate-".concat(b.type,"-icon"),b.animation)):J('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(b.type,'"'))}}c=Qa();b.imageUrl?(q(c),c.setAttribute("src",b.imageUrl),c.setAttribute("alt",b.imageAlt),ba(c,"width",b.imageWidth),ba(c,"height",b.imageHeight),c.className=e.image,x(c,b.customClass,"image"),b.imageClass&&l(c,b.imageClass)):u(c);c=Pa();b.title||b.titleText?q(c,void 0):u(c);b.title&&ta(b.title,c);b.titleText&&(c.innerText=b.titleText);x(c,b.customClass,"title");c=ra();c.innerHTML=b.closeButtonHtml;x(c,b.customClass,"closeButton");b.showCloseButton?q(c,void 0):u(c);c.setAttribute("aria-label",b.closeButtonAriaLabel);c=t().querySelector("#"+e.content);b.html?(ta(b.html,c),q(c,"block")):b.text?(c.textContent=b.text,q(c,"block")):u(c);sb(a,b);x(t(),b.customClass,"content");f=da();c=K();d=L();b.showConfirmButton||b.showCancelButton||u(f);x(f,b.customClass,"actions");Ca(c,"confirm",b);Ca(d,"cancel",b);b.buttonsStyling?(l([c,d],e.styled),b.confirmButtonColor&&(c.style.backgroundColor=b.confirmButtonColor),b.cancelButtonColor&&(d.style.backgroundColor=b.cancelButtonColor),f=window.getComputedStyle(c).getPropertyValue("background-color"),c.style.borderLeftColor=f,c.style.borderRightColor=f):(F([c,d],e.styled),c.style.backgroundColor=c.style.borderLeftColor=c.style.borderRightColor="",d.style.backgroundColor=d.style.borderLeftColor=d.style.borderRightColor="");b.reverseButtons&&c.parentNode.insertBefore(d,c);c=Sa();b.footer?q(c,void 0):u(c);b.footer&&ta(b.footer,c);x(c,b.customClass,"footer");if("function"===typeof b.onRender)b.onRender(m())},Ya=function(){return K()&&K().click()},E=[],ea=function(){var a=m();a||M.fire("");a=m();var b=da(),c=K(),d=L();q(b);q(c);l([a,b],e.loading);c.disabled=!0;d.disabled=!0;a.setAttribute("data-loading",!0);a.setAttribute("aria-busy",!0);a.focus()},h={},gb=function(){return new Promise(function(a){var b=window.scrollX,c=window.scrollY;h.restoreFocusTimeout=setTimeout(function(){h.previousActiveElement&&h.previousActiveElement.focus?(h.previousActiveElement.focus(),h.previousActiveElement=null):document.body&&document.body.focus();a()},100);"undefined"!==typeof b&&"undefined"!==typeof c&&window.scrollTo(b,c)})},Za={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:"",cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:"",buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:"",timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:"",inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onOpen:null,onRender:null,onClose:null,onAfterClose:null,scrollbarPadding:!0},tb="title titleText text html type customClass showConfirmButton showCancelButton confirmButtonText confirmButtonAriaLabel confirmButtonColor confirmButtonClass cancelButtonText cancelButtonAriaLabel cancelButtonColor cancelButtonClass buttonsStyling reverseButtons imageUrl imageWidth imageHeigth imageAlt imageClass progressSteps currentProgressStep".split(" "),xa={customContainerClass:"customClass",confirmButtonClass:"customClass",cancelButtonClass:"customClass",imageClass:"customClass",inputClass:"customClass"},ub="allowOutsideClick allowEnterKey backdrop focusConfirm focusCancel heightAuto keydownListenerCapture".split(" "),$a=function(a){return Object.prototype.hasOwnProperty.call(Za,a)},vb=Object.freeze({isValidParameter:$a,isUpdatableParameter:function(a){return-1!==tb.indexOf(a)},isDeprecatedParameter:function(a){return xa[a]},argsToParams:function(a){var b={};switch(w(a[0])){case "object":B(b,a[0]);break;default:["title","html","type"].forEach(function(c,d){switch(w(a[d])){case "string":b[c]=a[d];break;case "undefined":break;default:J("Unexpected type of ".concat(c,'! Expected "string", got ').concat(w(a[d])))}})}return b},isVisible:function(){return I(m())},clickConfirm:Ya,clickCancel:function(){return L()&&L().click()},getContainer:y,getPopup:m,getTitle:Pa,getContent:t,getImage:Qa,getIcon:pa,getIcons:oa,getCloseButton:ra,getActions:da,getConfirmButton:K,getCancelButton:L,getHeader:Ra,getFooter:Sa,getFocusableElements:sa,getValidationMessage:qa,isLoading:function(){return m().hasAttribute("data-loading")},fire:function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return ha(this,b)},mixin:function(a){return function(b){function c(){O(this,c);var d=S(c).apply(this,arguments);if(!d||"object"!==typeof d&&"function"!==typeof d){if(void 0===this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");d=this}return d}eb(c,b);Ba(c,[{key:"_main",value:function(d){return ia(S(c.prototype),"_main",this).call(this,B({},a,d))}}]);return c}(this)},queue:function(a){var b=this;E=a;var c=function(f,k){E=[];document.body.removeAttribute("data-swal2-queue-step");f(k)},d=[];return new Promise(function(f){(function C(g,p){g<E.length?(document.body.setAttribute("data-swal2-queue-step",g),b.fire(E[g]).then(function(D){"undefined"!==typeof D.value?(d.push(D.value),C(g+1,p)):c(f,{dismiss:D.dismiss})})):c(f,{value:d})})(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(a,b){return b&&b<E.length?E.splice(b,0,a):E.push(a)},deleteQueueStep:function(a){"undefined"!==typeof E[a]&&E.splice(a,1)},showLoading:ea,enableLoading:ea,getTimerLeft:function(){return h.timeout&&h.timeout.getTimerLeft()},stopTimer:function(){return h.timeout&&h.timeout.stop()},resumeTimer:function(){return h.timeout&&h.timeout.start()},toggleTimer:function(){var a=h.timeout;return a&&(a.running?a.stop():a.start())},increaseTimer:function(a){return h.timeout&&h.timeout.increase(a)},isTimerRunning:function(){return h.timeout&&h.timeout.isRunning()}}),wb=function(){var a=y(),b;a.ontouchstart=function(c){b=c.target===a||!(a.scrollHeight>a.clientHeight)&&"INPUT"!==c.target.tagName};a.ontouchmove=function(c){b&&(c.preventDefault(),c.stopPropagation())}},hb=function(){if(document.body.classList.contains(e.iosfix)){var a=parseInt(document.body.style.top,10);F(document.body,e.iosfix);document.body.style.top="";document.body.scrollTop=-1*a}},ka=function(){var a=y(),b=m();a.style.removeProperty("align-items");0>b.offsetTop&&(a.style.alignItems="flex-start")},xb=function(){Q(document.body.children).forEach(function(a){var b;(b=a===y())||(b=y(),b="function"===typeof a.contains?a.contains(b):void 0);b||(a.hasAttribute("aria-hidden")&&a.setAttribute("data-previous-aria-hidden",a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))})},ib=function(){Q(document.body.children).forEach(function(a){a.hasAttribute("data-previous-aria-hidden")?(a.setAttribute("aria-hidden",a.getAttribute("data-previous-aria-hidden")),a.removeAttribute("data-previous-aria-hidden")):a.removeAttribute("aria-hidden")})},la={swalPromiseResolve:new WeakMap},jb=function(a,b,c,d){h.swalCloseEventFinishedCallback=Ea.bind(null,a,c,X(),d);b.addEventListener(T,function(f){f.target===b&&(h.swalCloseEventFinishedCallback(),delete h.swalCloseEventFinishedCallback)})},ab=function(a){for(var b in a)a[b]=new WeakMap},Fa=function(a,b){setTimeout(function(){null!==b&&"function"===typeof b&&b();m()||(delete a.params,delete h.keydownHandler,delete h.keydownTarget,ab(n),ab(la))})},yb=function(){function a(b,c){O(this,a);this.callback=b;this.remaining=c;this.running=!1;this.start()}Ba(a,[{key:"start",value:function(){this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining));return this.remaining}},{key:"stop",value:function(){this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started);return this.remaining}},{key:"increase",value:function(b){var c=this.running;c&&this.stop();this.remaining+=b;c&&this.start();return this.remaining}},{key:"getTimerLeft",value:function(){this.running&&(this.stop(),this.start());return this.remaining}},{key:"isRunning",value:function(){return this.running}}]);return a}(),Ja={email:function(a,b){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(a)?Promise.resolve():Promise.resolve(b||"Invalid email address")},url:function(a,b){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(a)?Promise.resolve():Promise.resolve(b||"Invalid URL")}},Cb=function(a){var b=y(),c=m();if("function"===typeof a.onBeforeOpen)a.onBeforeOpen(c);zb(b,c,a);Ab(b,c);Ga()&&Bb(b,a.scrollbarPadding);X()||h.previousActiveElement||(h.previousActiveElement=document.activeElement);"function"===typeof a.onOpen&&setTimeout(function(){return a.onOpen(c)})},Ab=function(a,b){T&&Ha(b)?(a.style.overflowY="hidden",b.addEventListener(T,Ka.bind(null,b,a))):a.style.overflowY="auto"},Bb=function(a,b){!/iPad|iPhone|iPod/.test(navigator.userAgent)||window.MSStream||document.body.classList.contains(e.iosfix)||(document.body.style.top=-1*document.body.scrollTop+"px",l(document.body,e.iosfix),wb());"undefined"!==typeof window&&window.MSInputMethodContext&&document.documentMode&&(ka(),window.addEventListener("resize",ka));xb();b&&null===P.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(P.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=P.previousBodyPadding+
pb()+"px");setTimeout(function(){a.scrollTop=0})},zb=function(a,b,c){c.animation&&(l(b,e.show),l(a,e.fade));q(b);l([document.documentElement,document.body,a],e.shown);c.heightAuto&&c.backdrop&&!c.toast&&l([document.documentElement,document.body],e["height-auto"])},Fb=function(a,b){"select"===b.input||"radio"===b.input?Db(a,b):-1!==["text","email","number","tel","textarea"].indexOf(b.input)&&na(b.inputValue)&&Eb(a,b)},Gb=function(a,b){var c=a.getInput();if(!c)return null;switch(b.input){case "checkbox":return c.checked?1:0;case "radio":return c.checked?c.value:null;case "file":return c.files.length?null!==c.getAttribute("multiple")?c.files:c.files[0]:null;default:return b.inputAutoTrim?c.value.trim():c.value}},Db=function(a,b){var c=t();if(na(b.inputOptions))ea(),b.inputOptions.then(function(d){a.hideLoading();bb[b.input](c,cb(d),b)});else if("object"===w(b.inputOptions))bb[b.input](c,cb(b.inputOptions),b);else J("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(w(b.inputOptions)))},Eb=function(a,b){var c=a.getInput();u(c);b.inputValue.then(function(d){c.value="number"===b.input?parseFloat(d)||0:d+"";q(c);c.focus();a.hideLoading()})["catch"](function(d){J("Error in inputValue promise: "+d);c.value="";q(c);c.focus();a.hideLoading()})},bb={select:function(a,b,c){var d=r(a,e.select);b.forEach(function(f){var k=f[0];f=f[1];var g=document.createElement("option");g.value=k;g.innerHTML=f;c.inputValue.toString()===k.toString()&&(g.selected=!0);d.appendChild(g)});d.focus()},radio:function(a,b,c){var d=r(a,e.radio);b.forEach(function(f){var k=f[0];f=f[1];var g=document.createElement("input"),p=document.createElement("label");g.type="radio";g.name=e.radio;g.value=k;c.inputValue.toString()===k.toString()&&(g.checked=!0);k=document.createElement("span");k.innerHTML=f;k.className=e.label;p.appendChild(g);p.appendChild(k);d.appendChild(p)});a=d.querySelectorAll("input");a.length&&a[0].focus()}},cb=function(a){var b=[];"undefined"!==typeof Map&&a instanceof Map?a.forEach(function(c,d){b.push([d,c])}):Object.keys(a).forEach(function(c){b.push([c,a[c]])});return b},Hb=function(a,b){var c=Gb(a,b);b.inputValidator?(a.disableInput(),Promise.resolve().then(function(){return b.inputValidator(c,b.validationMessage)}).then(function(d){a.enableButtons();a.enableInput();d?a.showValidationMessage(d):ya(a,b,c)})):a.getInput().checkValidity()?ya(a,b,c):(a.enableButtons(),a.showValidationMessage(b.validationMessage))},ya=function(a,b,c){b.showLoaderOnConfirm&&ea();b.preConfirm?(a.resetValidationMessage(),Promise.resolve().then(function(){return b.preConfirm(c,b.validationMessage)}).then(function(d){I(qa())||!1===d?a.hideLoading():a.closePopup({value:"undefined"===typeof d?c:d})})):a.closePopup({value:c})},Kb=function(a,b,c,d){b.keydownTarget&&b.keydownHandlerAdded&&(b.keydownTarget.removeEventListener("keydown",b.keydownHandler,{capture:b.keydownListenerCapture}),b.keydownHandlerAdded=!1);c.toast||(b.keydownHandler=function(f){c.stopKeydownPropagation&&f.stopPropagation();if("Enter"===f.key)!f.isComposing&&f.target&&a.getInput()&&f.target.outerHTML===a.getInput().outerHTML&&-1===["textarea","file"].indexOf(c.input)&&(Ya(),f.preventDefault());else if("Tab"===f.key){for(var k=f.target,g=sa(),p=-1,C=0;C<g.length;C++)if(k===g[C]){p=C;break}f.shiftKey?za(c,p,-1):za(c,p,1);f.stopPropagation();f.preventDefault()}else-1!==Ib.indexOf(f.key)?(f=K(),k=L(),document.activeElement===f&&I(k)?k.focus():document.activeElement===k&&I(f)&&f.focus()):-1!==Jb.indexOf(f.key)&&Z(c.allowEscapeKey)&&(f.preventDefault(),d(R.esc))},b.keydownTarget=c.keydownListenerCapture?window:m(),b.keydownListenerCapture=c.keydownListenerCapture,b.keydownTarget.addEventListener("keydown",b.keydownHandler,{capture:b.keydownListenerCapture}),b.keydownHandlerAdded=!0)},za=function(a,b,c){for(a=sa();0<a.length;)return b+=c,b===a.length?b=0:-1===b&&(b=a.length-1),a[b].focus();m().focus()},Ib="ArrowLeft ArrowRight ArrowUp ArrowDown Left Right Up Down".split(" "),Jb=["Escape","Esc"],Pb=function(a,b,c){b.toast?Lb(a,b,c):(Mb(a),Nb(a),Ob(a,b,c))},Lb=function(a,b,c){a.popup.onclick=function(){b.showConfirmButton||b.showCancelButton||b.showCloseButton||b.input||c(R.close)}},fa=!1,Mb=function(a){a.popup.onmousedown=function(){a.container.onmouseup=function(b){a.container.onmouseup=void 0;b.target===a.container&&(fa=!0)}}},Nb=function(a){a.container.onmousedown=function(){a.popup.onmouseup=function(b){a.popup.onmouseup=void 0;if(b.target===a.popup||a.popup.contains(b.target))fa=!0}}},Ob=function(a,b,c){a.container.onclick=function(d){fa?fa=!1:d.target===a.container&&Z(b.allowOutsideClick)&&c(R.backdrop)}},Sb=function(a,b,c){return new Promise(function(d){var f=function(k){a.closePopup({dismiss:k})};la.swalPromiseResolve.set(a,d);Qb(h,c,f);b.confirmButton.onclick=function(){a.disableButtons();c.input?Hb(a,c):ya(a,c,!0)};b.cancelButton.onclick=function(){a.disableButtons();f(R.cancel)};b.closeButton.onclick=function(){return f(R.close)};Pb(b,c,f);Kb(a,h,c,f);c.toast&&(c.input||c.footer||c.showCloseButton)?l(document.body,e["toast-column"]):F(document.body,e["toast-column"]);Fb(a,c);Cb(c);Rb(b,c);b.container.scrollTop=0})},Qb=function(a,b,c){b.timer&&(a.timeout=new yb(function(){c("timer");delete a.timeout},b.timer))},Rb=function(a,b){if(!b.toast)if(Z(b.allowEnterKey)){if(b.focusCancel&&I(a.cancelButton))return a.cancelButton.focus();if(b.focusConfirm&&I(a.confirmButton))return a.confirmButton.focus();za(b,-1,1)}else document.activeElement&&"function"===typeof document.activeElement.blur&&document.activeElement.blur()},db=Object.freeze({hideLoading:Da,disableLoading:Da,getInput:function(a){var b=n.innerParams.get(a||this);return(a=n.domCache.get(a||this))?ja(a.content,b.input):null},close:W,closePopup:W,closeModal:W,closeToast:W,enableButtons:function(){Y(this,["confirmButton","cancelButton"],!1)},disableButtons:function(){Y(this,["confirmButton","cancelButton"],!0)},enableConfirmButton:function(){U("Swal.enableConfirmButton()","Swal.getConfirmButton().removeAttribute('disabled')");Y(this,["confirmButton"],!1)},disableConfirmButton:function(){U("Swal.disableConfirmButton()","Swal.getConfirmButton().setAttribute('disabled', '')");Y(this,["confirmButton"],!0)},enableInput:function(){return Ia(this.getInput(),!1)},disableInput:function(){return Ia(this.getInput(),!0)},showValidationMessage:function(a){var b=n.domCache.get(this);b.validationMessage.innerHTML=a;a=window.getComputedStyle(b.popup);b.validationMessage.style.marginLeft="-".concat(a.getPropertyValue("padding-left"));b.validationMessage.style.marginRight="-".concat(a.getPropertyValue("padding-right"));q(b.validationMessage);if(b=this.getInput())b.setAttribute("aria-invalid",!0),b.setAttribute("aria-describedBy",e["validation-message"]),Oa(b),l(b,e.inputerror)},resetValidationMessage:function(){var a=n.domCache.get(this);a.validationMessage&&u(a.validationMessage);if(a=this.getInput())a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedBy"),F(a,e.inputerror)},getProgressSteps:function(){U("Swal.getProgressSteps()","const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps");return n.innerParams.get(this).progressSteps},setProgressSteps:function(a){U("Swal.setProgressSteps()","Swal.update()");var b=n.innerParams.get(this);a=B({},b,{progressSteps:a});Wa(this,a);n.innerParams.set(this,a)},showProgressSteps:function(){var a=n.domCache.get(this);q(a.progressSteps)},hideProgressSteps:function(){var a=n.domCache.get(this);u(a.progressSteps)},_main:function(a){for(var b in a){var c=b;$a(c)||z('Unknown parameter "'.concat(c,'"'));a.toast&&(c=b,-1!==ub.indexOf(c)&&z('The parameter "'.concat(c,'" is incompatible with toasts')));xa[void 0]&&U(void 0,xa[void 0])}m()&&h.swalCloseEventFinishedCallback&&(h.swalCloseEventFinishedCallback(),delete h.swalCloseEventFinishedCallback);h.deferDisposalTimer&&(clearTimeout(h.deferDisposalTimer),delete h.deferDisposalTimer);a=B({},Za,a);kb(a);a.showLoaderOnConfirm&&!a.preConfirm&&z("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");a.animation=Z(a.animation);if(!a.target||"string"===typeof a.target&&!document.querySelector(a.target)||"string"!==typeof a.target&&!a.target.appendChild)z('Target parameter is not valid, defaulting to "body"'),a.target="body";"string"===typeof a.title&&(a.title=a.title.split("\n").join("<br />"));if(b=y())b.parentNode.removeChild(b),F([document.documentElement,document.body],[e["no-backdrop"],e["toast-shown"],e["has-column"]]);Ta()?J("SweetAlert2 requires document to initialize"):(b=document.createElement("div"),b.className=e.container,b.innerHTML=nb,c=a.target,c="string"===typeof c?document.querySelector(c):c,c.appendChild(b),b=m(),b.setAttribute("role",a.toast?"alert":"dialog"),b.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||b.setAttribute("aria-modal","true"),"rtl"===window.getComputedStyle(c).direction&&l(y(),e.rtl),ob());Object.freeze(a);h.timeout&&(h.timeout.stop(),delete h.timeout);clearTimeout(h.restoreFocusTimeout);b={popup:m(),container:y(),content:t(),actions:da(),confirmButton:K(),cancelButton:L(),closeButton:ra(),validationMessage:qa(),progressSteps:A(e["progress-steps"])};n.domCache.set(this,b);Xa(this,a);n.innerParams.set(this,a);return Sb(this,b,a)},update:function(a){var b={};Object.keys(a).forEach(function(d){M.isUpdatableParameter(d)?b[d]=a[d]:z('Invalid parameter to update: "'.concat(d,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))});var c=n.innerParams.get(this);c=B({},c,b);Xa(this,c);n.innerParams.set(this,c);Object.defineProperties(this,{params:{value:B({},this.params,a),writable:!1,enumerable:!0}})}}),ma;G.prototype.then=function(a){return n.promise.get(this).then(a)};G.prototype["finally"]=function(a){return n.promise.get(this)["finally"](a)};B(G.prototype,db);B(G,vb);Object.keys(db).forEach(function(a){G[a]=function(){if(ma){var b;return(b=ma)[a].apply(b,arguments)}}});G.DismissReason=R;G.version="8.18.1";var M=G;return M["default"]=M});"undefined"!==typeof this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);