(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{199:function(t,e,n){n(39),n(28),n(38),n(37),n(22),n(29),n(30),n(25);var r=n(200);n(36),n(201),n(203);var o=n(204);n(130),n(27);var h=n(205),c=n(206),f=n(207);function l(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,h=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return h=t.done,t},e:function(t){c=!0,o=t},f:function(){try{h||null==n.return||n.return()}finally{if(c)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}n(51),n(70),n(31),n(14),n(52),n(40);var d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(t).filter((function(t){return e.includes(t)})).reduce((function(e,n){return Object.assign(e,f({},n,t[n]))}),{})},v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(t).filter((function(t){return!e.includes(t)})).reduce((function(e,n){return Object.assign(e,f({},n,t[n]))}),{})},m=function(){"use strict";function t(e,n){var r=e.query,path=e.path,o=e.init,text=e.text,c=e.postprocess,f=void 0===c?[]:c;h(this,t),this.query=r,this.path=path,this.init=o,this.postprocess=f,this.options=n||{},this.onlyKeys=null,this.withoutKeys=null,this.sortKeys=[],this.limitN=null,this.skipN=null,text||this.postprocess.unshift((function(data){return data.map((function(t){return v(t,["text"])}))}))}var e;return c(t,[{key:"only",value:function(t){return this.onlyKeys=Array.isArray(t)?t:[t],this}},{key:"without",value:function(t){return this.withoutKeys=Array.isArray(t)?t:[t],this}},{key:"sortBy",value:function(t,e){return this.sortKeys.push([t,"desc"===e]),this}},{key:"where",value:function(t){return this.query=this.query.find(t),this}},{key:"search",value:function(t,e){return t?(n="object"===o(t)?t:e?{query:{type:"match",field:t,value:e,prefix_length:1,fuzziness:1,extended:!0,minimum_should_match:1}}:{query:{type:"bool",should:this.options.fullTextSearchFields.map((function(e){return{type:"match",field:e,value:t,prefix_length:1,operator:"and",minimum_should_match:1,fuzziness:1,extended:!0}}))}},this.query=this.query.find({$fts:n}).sortByScoring(),this):this;var n}},{key:"surround",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.before,r=void 0===n?1:n,o=e.after,h=void 0===o?1:o,c=0===t.indexOf("/")?"path":"slug";this.onlyKeys&&this.onlyKeys.push(c),this.withoutKeys&&(this.withoutKeys=this.withoutKeys.filter((function(t){return t!==c})));var f=function(data){var e=data.findIndex((function(e){return e[c]===t})),n=new Array(r+h).fill(null,0);if(-1===e)return n;for(var o=data.slice(e-r,e),f=data.slice(e+1,e+1+h),l=0,i=r-1;i>=0;i--)n[i]=o[l]||null,l++;for(var y=0,d=r;d<=h;d++)n[d]=f[y]||null,y++;return n};return this.postprocess.push(f),this}},{key:"limit",value:function(t){return"string"==typeof t&&(t=parseInt(t)),this.limitN=t,this}},{key:"skip",value:function(t){return"string"==typeof t&&(t=parseInt(t)),this.skipN=t,this}},{key:"fetch",value:(e=r(regeneratorRuntime.mark((function t(){var data,e,n,r,o,h,c=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.sortKeys&&this.sortKeys.length&&(this.query=this.query.compoundsort(this.sortKeys)),this.skipN&&(this.query=this.query.offset(this.skipN)),this.limitN&&(this.query=this.query.limit(this.limitN)),data=this.query.data({removeMeta:!0}),this.onlyKeys&&(this.options.watch&&this.onlyKeys.push("path","extension"),e=function(data){return data.map((function(t){return d(t,c.onlyKeys)}))},this.postprocess.unshift(e)),this.withoutKeys&&(this.options.watch&&(this.withoutKeys=this.withoutKeys.filter((function(t){return!["path","extension"].includes(t)}))),n=function(data){return data.map((function(t){return v(t,c.withoutKeys)}))},this.postprocess.unshift(n)),r=l(this.postprocess);try{for(r.s();!(o=r.n()).done;)h=o.value,data=h(data)}catch(t){r.e(t)}finally{r.f()}if(data){t.next=10;break}throw new Error("".concat(this.path," not found"));case 10:return t.abrupt("return",JSON.parse(JSON.stringify(data)));case 11:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}();t.exports=m},210:function(t,e,n){"use strict";n.r(e);n(131),n(130),n(71);var r=n(18),o=(n(38),n(37),n(199)),h=n.n(o),c=n(208),f=n.n(c),l=n(209);n.n(l).a.register();var y,d,v=["/","/desk","/draft"],m=function(){var t={},e=[];Array.from(arguments).forEach((function(n){"string"==typeof n?e.push(n):"object"===Object(r.a)(n)&&(t=n)}));var n=t,o=n.text,text=void 0!==o&&o,c=n.deep,f=void 0!==c&&c,path="/".concat(e.join("/").replace(/\/+/g,"/")),l=!path||!!v.find((function(t){return t===path})),y=l?{dir:f?{$regex:new RegExp("^".concat(path))}:path}:{path:path},m=l?[]:[function(data){return data[0]}];return new h.a({query:d.chain().find(y,!l),path:path,postprocess:m,text:text},{fullTextSearchFields:["title","description","slug","text"]})};e.default=function(t){return(y=new f.a("content.db")).loadJSONObject(t),d=y.getCollection("items"),m}}}]);