(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{AWSConfig:()=>F,InvalidAWSConfigError:()=>$,InvalidSignatureError:()=>R,S3Bucket:()=>ye,S3Client:()=>pe,S3Object:()=>he,S3ServiceError:()=>be,URIEncodingConfig:()=>I});const r=require("k6/crypto");var n=e.n(r);const o=require("k6/html");function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){var t="function"==typeof Map?new Map:void 0;return s=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return f(e,arguments,y(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,e)},s(e)}function f(e,t,r){return f=l()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&p(o,r.prototype),o},f.apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(h,e);var t,r,n,i,s,f=(t=h,r=l(),function(){var e,n=y(t);if(r){var o=y(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return a(this,e)});function h(e,t){var r,n,o,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),r=f.call(this,e),n=u(r),i=void 0,(o="code")in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,r.name="AWSError",r.code=t,r}return n=h,s=[{key:"parseXML",value:function(e){var t=(0,o.parseHTML)(e);return new h(t.find("Message").text(),t.find("Code").text())}}],(i=null)&&c(n.prototype,i),s&&c(n,s),Object.defineProperty(n,"prototype",{writable:!1}),h}(s(Error));function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],c=!0,a=!1;try{for(r=r.call(e);!(c=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==r.return||r.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,r){return t&&g(e.prototype,t),r&&g(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=C(e);if(t){var o=C(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _(this,r)}}function _(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function P(e,t,o,i,c,a,u,s,f){var l=function(e,t,n,o){var i=e,c=D(t),a=(0,r.hmac)("sha256","AWS4"+i,c,"binary"),u=(0,r.hmac)("sha256",a,n,"binary"),s=(0,r.hmac)("sha256",u,o,"binary");return(0,r.hmac)("sha256",s,"aws4_request","binary")}(u.secretAccessKey,t,u.region,s),p=function(e,t,r,o,i,c){var a=e.toUpperCase(),u=function(e,t){if("/"==e)return e;var r=e;"/"==e[e.length-1]&&"/"!=r[r.length-1]&&(r+="/");return r=x(r,t.path),t.double?x(r,t.path):r}(t,c),s=function(e){if(""===e)return"";return function(e){if(0===e.length)return[];return e.split("&").filter((function(e){return e})).map((function(e){var t=e.split("=",2);return[decodeURIComponent(t[0]),decodeURIComponent(t[1])]})).sort((function(e,t){return e[0].localeCompare(t[0])}))}(e).map((function(e){var t=v(e,2),r=t[0],n=t[1];return encodeURIComponent(r)+"="+encodeURIComponent(n)})).join("&")}(r),f=function(e){if(e.constructor!==Object||0===Object.entries(e).length)return"";return Object.entries(e).map((function(e){var t=v(e,2),r=t[0],n=t[1];return r.toLowerCase().trim()+":"+(Array.isArray(n)?n:[n]).map((function(e){return e.replace(/\s+/g," ").replace(/^\s+|\s+$/g,"")})).join(",")+"\n"})).sort().join("")}(o),l=k(o),p=function(e){if(e===A)return e;return n().sha256(e||"","hex").toLowerCase()}(i);return[a,u,s,f,l,p].join("\n")}(o,i,c,e,a,f),y=function(e,t,r,n){var o=M(e),i=T(e,t,r);return[E,o,i,n].join("\n")}(t,u.region,s,(0,r.sha256)(p,"hex")),h=T(t,u.region,s),b=k(e),d=function(e,t){return(0,r.hmac)("sha256",e,t,"hex")}(l,y),m="".concat(E," Credential=").concat(u.accessKeyID,"/").concat(h,", SignedHeaders=").concat(b,", Signature=").concat(d);return e.Authorization=m,e}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(r,e);var t=S(r);function r(e,n){var o;return O(this,r),(o=t.call(this,e,n)).name="InvalidSignatureError",o}return w(r)}(h);var E="AWS4-HMAC-SHA256",A="UNSIGNED-PAYLOAD";function T(e,t,r){return[D(e),t,r,"aws4_request"].join("/")}function k(e){if(e.constructor!==Object)throw new TypeError("headers should be an object");if(0===Object.entries(e).length)throw"headers should at least contain either the Host (HTTP 1.1) or :authority (HTTP 2) parameter";return Object.keys(e).map((function(e){return e.toLowerCase().trim()})).sort().join(";")}function x(e,t){return""==e?e:e.split("").map((function(e){return(r=e)>="A"&&r<="Z"||r>="a"&&r<="z"||function(e){return e>="0"&&e<="9"}(e)||"-._~".includes(e)?e:" "==e?"%20":"/"==e&&t?"/":"%"+e.charCodeAt(0).toString(16).toUpperCase();var r})).join("")}var I=w((function e(t,r){O(this,e),d(this,"double",void 0),d(this,"path",void 0),this.double=t,this.path=r}));function M(e){return new Date(e).toISOString().replace(/[:\-]|\.\d{3}/g,"")}function D(e){return M(e).substring(0,8)}function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function q(e,t){if(t&&("object"===z(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){var t="function"==typeof Map?new Map:void 0;return H=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return U(e,arguments,B(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),L(n,e)},H(e)}function U(e,t,r){return U=N()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&L(o,r.prototype),o},U.apply(null,arguments)}function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function X(e,t,r){return t&&W(e.prototype,t),r&&W(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var F=X((function e(t,r,n){if(G(this,e),K(this,"region",void 0),K(this,"accessKeyID",void 0),K(this,"secretAccessKey",void 0),"string"!=typeof t||""===t)throw new $("invalid AWS region; reason: should be a non empty string");if("string"!=typeof r||""===r)throw new $("invalid AWS access key ID; reason: should be a non empty string");if("string"!=typeof n||""===n)throw new $("invalid AWS secret access key; reason: should be a non empty string");this.region=t,this.accessKeyID=r,this.secretAccessKey=n})),$=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(o,e);var t,r,n=(t=o,r=N(),function(){var e,n=B(t);if(r){var o=B(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return q(this,e)});function o(e){return G(this,o),n.call(this,e)}return X(o)}(H(Error));const Y=require("k6/http");var Z=e.n(Y);function J(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function ee(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function re(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function ne(e,t,r){return t&&re(e.prototype,t),r&&re(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(){return oe="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=ie(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},oe.apply(this,arguments)}function ie(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=le(e)););return e}function ce(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ae(e,t)}function ae(e,t){return ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ae(e,t)}function ue(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=le(e);if(t){var o=le(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return se(this,r)}}function se(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return fe(e)}function fe(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function le(e){return le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},le(e)}var pe=function(e){ce(n,e);var t=ue(n);function n(e){te(this,n);var r=new I(!1,!0);return t.call(this,e,"s3",r)}return ne(n,[{key:"listBuckets",value:function(){var e="".concat(this.serviceName,".").concat(this.awsConfig.region,".amazonaws.com"),t=oe(le(n.prototype),"buildRequest",this).call(this,"GET",e,"/","","",{"X-Amz-Content-SHA256":(0,r.sha256)("","hex")}),i=Z().request("GET",t.url,"",{headers:t.headers});this._handle_error(i.error_code,i.error,i.body);var c=[];return(0,o.parseHTML)(i.body).find("Buckets").children().each((function(e,t){var r={};t.children().forEach((function(e){switch(e.nodeName()){case"name":Object.assign(r,{name:e.textContent()});break;case"creationdate":Object.assign(r,{creationDate:Date.parse(e.textContent())})}})),c.push(r)})),c}},{key:"listObjects",value:function(e,t){var i="".concat(e,".").concat(this.serviceName,".").concat(this.awsConfig.region,".amazonaws.com"),c=oe(le(n.prototype),"buildRequest",this).call(this,"GET",i,"/","list-type=2","",{"X-Amz-Content-SHA256":(0,r.sha256)("","hex")}),a=Z().request("GET",c.url,"",{headers:c.headers});this._handle_error(a.error_code,a.error,a.body);var u=[];return(0,o.parseHTML)(a.body).find("Contents").each((function(e,t){var r={};t.children().forEach((function(e){switch(e.nodeName()){case"key":Object.assign(r,{key:e.textContent()});break;case"lastmodified":Object.assign(r,{lastModified:Date.parse(e.textContent())});break;case"etag":Object.assign(r,{etag:e.textContent()});break;case"size":Object.assign(r,{size:parseInt(e.textContent())});break;case"storageclass":Object.assign(r,{storageClass:e.textContent()})}})),u.push(r)})),u}},{key:"getObject",value:function(e,t){var o="".concat(e,".").concat(this.serviceName,".").concat(this.awsConfig.region,".amazonaws.com"),i="/".concat(t),c=oe(le(n.prototype),"buildRequest",this).call(this,"GET",o,i,"","",{"X-Amz-Content-SHA256":(0,r.sha256)("","hex")}),a=Z().request("GET",c.url,"",{headers:c.headers});return this._handle_error(a.error_code,a.error,a.body),new he(t,Date.parse(a.headers["Last-Modified"]),a.headers.ETag,parseInt(a.headers["Content-Length"]),void 0,a.body)}},{key:"putObject",value:function(e,t,o){var i="".concat(e,".").concat(this.serviceName,".").concat(this.awsConfig.region,".amazonaws.com"),c="/".concat(t),a=o,u=oe(le(n.prototype),"buildRequest",this).call(this,"PUT",i,c,"",a,{"X-Amz-Content-SHA256":(0,r.sha256)(a,"hex")}),s=Z().request("PUT",u.url,a,{headers:u.headers});this._handle_error(s.error_code,s.error,s.body)}},{key:"deleteObject",value:function(e,t){var o="DELETE",i="".concat(e,".").concat(this.serviceName,".").concat(this.awsConfig.region,".amazonaws.com"),c="/".concat(t),a=oe(le(n.prototype),"buildRequest",this).call(this,o,i,c,"","",{"X-Amz-Content-SHA256":(0,r.sha256)("","hex")}),u=Z().request(o,a.url,"",{headers:a.headers});this._handle_error(u.error_code,u.error,u.body)}},{key:"_handle_error",value:function(e,t,r){if(""!=t&&0!==e){if(t&&t.startsWith("301"))throw new be("Resource not found","ResourceNotFound","getObject");var n=h.parseXML(r);if("AuthorizationHeaderMalformed"===n.code)throw new R(n.message,n.code);throw new be(n.message,n.code,"listObjects")}}}]),n}(function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Q(this,"awsConfig",void 0),Q(this,"serviceName",void 0),Q(this,"URIencodingConfig",void 0),this.awsConfig=t,this.serviceName=r,this.URIencodingConfig=n}var t,r,n;return t=e,(r=[{key:"buildRequest",value:function(e,t,r,n,o,i){var c=Date.now(),a=M(c);i.Host=t,i["X-Amz-Date"]=a,i=P(i,c,e,r,n,o,this.awsConfig,this.serviceName,this.URIencodingConfig),r=""!==r?r:"/";var u="https://".concat(t).concat(r);return""!==n&&(u+="?".concat(n)),{url:u,headers:i}}}])&&J(t.prototype,r),n&&J(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()),ye=ne((function e(t,r){te(this,e),ee(this,"name",void 0),ee(this,"creationDate",void 0),this.name=t,this.creationDate=r})),he=ne((function e(t,r,n,o,i,c){te(this,e),ee(this,"key",void 0),ee(this,"lastModified",void 0),ee(this,"etag",void 0),ee(this,"size",void 0),ee(this,"storageClass",void 0),ee(this,"data",void 0),this.key=t,this.lastModified=r,this.etag=n,this.size=o,this.storageClass=i,this.data=c})),be=function(e){ce(r,e);var t=ue(r);function r(e,n,o){var i;return te(this,r),ee(fe(i=t.call(this,e,n)),"operation",void 0),i.name="S3ServiceError",i.operation=o,i}return ne(r)}(h),de=exports;for(var ve in t)de[ve]=t[ve];t.__esModule&&Object.defineProperty(de,"__esModule",{value:!0})})();
//# sourceMappingURL=s3.js.map