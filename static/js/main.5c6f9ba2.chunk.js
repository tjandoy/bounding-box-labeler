(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){"use strict";(function(e){n.d(t,"c",function(){return o}),n.d(t,"a",function(){return u}),n.d(t,"b",function(){return s});var a=n(142),r=n(143),i=n(73),o={en:a,ja:r},c={ja:"\u65e5\u672c\u8a9e",en:"English"},u="en",l="REMEMBER_LOCALE";function s(){var t=function(e){var t=e.toLowerCase().split(/[_-]+/)[0];return t in c?t:u};if(Object(i.a)()){var n=e.window.localStorage.getItem(l);if(n)return t(n)}if("undefined"!==typeof navigator){if(navigator.languages&&navigator.languages[0])return t(navigator.languages[0]);if(navigator.language)return t(navigator.language);if(navigator.userLanguage)return t(navigator.userLanguage)}return u}}).call(this,n(53))},142:function(e){e.exports={"editor.needsFile":"Please upload a file on the left to begin labeling","editor.fileCacheMissing":'File cache has been lost due to reload.\nPlease upload the file named "{filename}" to resume editing.'}},143:function(e){e.exports={"editor.needsFile":"\u5de6\u5074\u306e\u30dc\u30bf\u30f3\u3067\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u304b\u3089\u30e9\u30d9\u30ea\u30f3\u30b0\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002","editor.fileCacheMissing":"\u30da\u30fc\u30b8\u304c\u518d\u8aad\u307f\u8fbc\u307f\u3055\u308c\u305f\u305f\u3081\u3001\u30d5\u30a1\u30a4\u30eb\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u30af\u30ea\u30a2\u3055\u308c\u3066\u3044\u307e\u3059\u3002\n\u7de8\u96c6\u3092\u7d9a\u304f\u306b\u306f\u300c{filename}\u300d\u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3092\u518d\u5ea6\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}},192:function(e,t){},197:function(e,t,n){"use strict";(function(e){var a=n(68),r=n(69),i=n(72),o=n(70),c=n(38),u=n(71),l=n(18),s=n(1),f=n.n(s),d=n(19),b=n(47),h=n(203),v=n(61),m=n(198),g=n(201);function p(){var e=Object(l.a)(["\n  padding-left: 200px;\n"]);return p=function(){return e},e}function y(){var e=Object(l.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 200px;\n  height: 100%;\n"]);return y=function(){return e},e}function j(){var e=Object(l.a)(["\n  display: relative;\n  min-height: 100vh;\n"]);return j=function(){return e},e}var O=d.a.div(j()),x=d.a.div(y()),w=d.a.div(p()),E=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={},n.warnBeforeNavigate=n.warnBeforeNavigate.bind(Object(c.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.warnBeforeNavigate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.warnBeforeNavigate)}},{key:"warnBeforeNavigate",value:function(e){this.props.files.some(function(e){return e.boxes&&e.boxes.length>0})&&(e.preventDefault(),e.returnValue="stop")}},{key:"render",value:function(){return f.a.createElement(O,null,f.a.createElement(x,null,f.a.createElement(g.a,null)),f.a.createElement(w,null,f.a.createElement(m.a,null)))}}]),t}(s.Component);t.a=Object(h.hot)(e)(Object(b.b)(function(e){return{files:Object(v.a)(e)}})(E))}).call(this,n(189)(e))},198:function(e,t,n){"use strict";var a=n(35),r=n(68),i=n(69),o=n(72),c=n(70),u=n(38),l=n(71),s=n(18),f=n(52),d=n(1),b=n.n(d),h=n(19),v=n(74),m=n(95),g=n(47),p=n(61),y=n(36);function j(){var e=Object(s.a)(["\n  stroke: #6464ff;\n  stroke-width: 1.5px;\n  stroke-dashoffset: 0.5px;\n  stroke-dasharray: 6, 14;\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\n  stroke: #fff;\n  stroke-width: 0.8px;\n  stroke-dasharray: 5, 15;\n"]);return O=function(){return e},e}function x(){var e=Object(s.a)(["\n  width: 100%;\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  top: 0;\n  height: 100%;\n"]);return x=function(){return e},e}function w(){var e=Object(s.a)(["\n  position: relative;\n  margin: auto;\n"]);return w=function(){return e},e}function E(){var e=Object(s.a)(["\n  text-align: center;\n  flex: 1 1 auto;\n  width: 100%;\n  overflow: auto;\n  background: #ffeaff;\n"]);return E=function(){return e},e}function k(){var e=Object(s.a)(["\n  flex: 0 1 auto;\n  border-bottom: solid gray 2px;\n  padding: 5px 10px;\n  background: #eaeaea;\n"]);return k=function(){return e},e}function M(){var e=Object(s.a)(["\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n"]);return M=function(){return e},e}function F(){var e=Object(s.a)(["\n  padding: 3rem;\n  max-width: 600px;\n  margin: auto;\n  white-space: pre-wrap;\n"]);return F=function(){return e},e}var C=Object(m.d)(function(e){var t=e.width,n=e.height,a=2/e.scale;return b.a.createElement("rect",{width:Math.max(0,t-a),height:Math.max(0,n-a),x:a/2,y:a/2,fill:"rgba(100,100,255,0.3)",stroke:"rgba(100,100,255,1)",strokeWidth:a})});function S(e,t,n){return[].concat(Object(f.a)(e.slice(0,t)),Object(f.a)(Array.isArray(n)?n:[n]),Object(f.a)(e.slice(t+1)))}var I=function(e){return Math.round(e)},L=h.a.div(F()),D=h.a.div(M()),R=h.a.div(k()),A=h.a.div(E()),_=h.a.div(w()),B=h.a.svg(x()),H=h.a.line(O()),W=h.a.line(j()),U=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={scale:.75,vectorWidth:0,vectorHeight:0},n.constrainMove=n.constrainMove.bind(Object(u.a)(n)),n.constrainResize=n.constrainResize.bind(Object(u.a)(n)),n.onShapeChange=n.onShapeChange.bind(Object(u.a)(n)),n.onShapeDelete=n.onShapeDelete.bind(Object(u.a)(n)),n}return Object(l.a)(t,e),Object(i.a)(t,[{key:"onShapeChange",value:function(e,t){var n=this.props,r=n.setImageBoxes,i=n.selectedFile,o=i.name,c=i.boxes,u=c[t.shapeIndex];r(o,S(c,t.shapeIndex,Object(a.a)({},u,e)))}},{key:"onShapeDelete",value:function(e,t){var n=this.props,a=n.setImageBoxes,r=n.selectedFile;a(r.name,S(r.boxes,t.shapeIndex,[]))}},{key:"constrainMove",value:function(e){var t=e.x,n=e.y,a=e.width,r=e.height,i=this.state,o=i.vectorWidth,c=i.vectorHeight;return{x:I(Math.min(o-a,Math.max(0,t))),y:I(Math.min(c-r,Math.max(0,n)))}}},{key:"constrainResize",value:function(e){var t=e.movingCorner,n=t.x,a=t.y,r=this.state,i=r.vectorWidth,o=r.vectorHeight;return{x:I(Math.min(i,Math.max(0,n))),y:I(Math.min(o,Math.max(0,a)))}}},{key:"render",value:function(){var e=this,t=function(t){return e.setState(function(e){return{scale:Math.max(.05,Math.min(4,e.scale*t))}})},n=this.state,a=n.scale,r=n.vectorWidth,i=n.vectorHeight,o=n.mouseX,c=n.mouseY;if(!this.props.selectedFile)return b.a.createElement(L,null,b.a.createElement(v.a,{id:"editor.needsFile"}));var u=this.props,l=u.selectedFile,s=l.boxes,d=l.name,h=l.objectURL,g=u.setImageBoxes;if(!h)return b.a.createElement(L,null,b.a.createElement(v.a,{id:"editor.fileCacheMissing",values:{filename:d}}));var p=s.map(function(t,n){var a=t.width,r=t.height,i=t.x,o=t.y;return b.a.createElement(C,{key:n,constrainMove:e.constrainMove,constrainResize:e.constrainResize,height:r,keyboardTransformMultiplier:5,onChange:e.onShapeChange,onDelete:e.onShapeDelete,shapeId:String(n),shapeIndex:n,width:a,x:i,y:o})});return b.a.createElement(D,null,b.a.createElement(R,null,b.a.createElement("button",{type:"button",onClick:function(){return t(1/Math.sqrt(2))}},"-"),b.a.createElement("button",{type:"button",onClick:function(){return t(Math.sqrt(2))}},"+")),b.a.createElement(A,{onMouseMove:function(t){cancelAnimationFrame(e.overlayRequest);var n=t.clientX,a=t.clientY,r=e.overlayEl.getBoundingClientRect(),i=r.top,o=r.left;e.overlayRequest=requestAnimationFrame(function(){e.setState({mouseX:n-o,mouseY:a-i})})}},b.a.createElement(_,{style:{width:r*a}},b.a.createElement(m.c,{scale:a,vectorWidth:r,vectorHeight:i,style:{display:"block"}},b.a.createElement(m.b,{src:h,onLoad:function(t){var n=t.naturalWidth,a=t.naturalHeight;e.setState({vectorWidth:n,vectorHeight:a,scale:500/Math.max(n,a)})}}),b.a.createElement(m.a,{constrainMove:this.constrainMove,constrainResize:this.constrainResize,DrawPreviewComponent:C,onAddShape:function(e){var t=e.x,n=e.y,a=e.width,r=e.height;g(d,[].concat(Object(f.a)(s),[{x:t,y:n,width:a,height:r}]))}}),p),b.a.createElement(B,{ref:function(t){e.overlayEl=t}},b.a.createElement(W,{x1:o,y1:0,x2:o,y2:1e4}),b.a.createElement(H,{x1:o,y1:0,x2:o,y2:1e4}),b.a.createElement(W,{x1:0,y1:c,x2:1e4,y2:c}),b.a.createElement(H,{x1:0,y1:c,x2:1e4,y2:c})))))}}]),t}(d.Component);U.defaultProps={selectedFile:null};var N={setImageBoxes:y.g};t.a=Object(g.b)(function(e){return{selectedFile:Object(p.b)(e)}},N)(U)},201:function(e,t,n){"use strict";var a=n(68),r=n(69),i=n(72),o=n(70),c=n(38),u=n(71),l=n(18),s=n(1),f=n.n(s),d=n(19),b=n(202),h=n.n(b),v=n(47),m=n(36),g=n(61);function p(){var e=Object(l.a)(["\n  background: none;\n  border: none;\n  height: 2rem;\n  flex: 0 1 auto;\n"]);return p=function(){return e},e}function y(){var e=Object(l.a)(["\n  background: none;\n  border: none;\n  height: 2rem;\n  flex: 1 1 auto;\n"]);return y=function(){return e},e}function j(){var e=Object(l.a)(["\n  text-align: center;\n  border-bottom: solid black 1px;\n  display: flex;\n"]);return j=function(){return e},e}function O(){var e=Object(l.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]);return O=function(){return e},e}function x(){var e=Object(l.a)(["\n  text-align: center;\n  flex: 1 1 auto;\n  width: 100%;\n  overflow: auto;\n  background: #fff;\n"]);return x=function(){return e},e}function w(){var e=Object(l.a)(["\n  flex: 0 1 auto;\n  border-bottom: solid gray 2px;\n  padding: 5px 10px;\n"]);return w=function(){return e},e}function E(){var e=Object(l.a)(["\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  box-shadow: 1px 0 4px 0 #000;\n"]);return E=function(){return e},e}var k=d.a.div(E()),M=d.a.div(w()),F=d.a.div(x()),C=d.a.ul(O()),S=d.a.li(j()),I=d.a.button(y()),L=d.a.button(p()),D=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).keyHandler=n.keyHandler.bind(Object(c.a)(n)),n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.keyHandler)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.keyHandler)}},{key:"keyHandler",value:function(e){var t=this;if(!e.defaultPrevented){var n=!0,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=t.props,a=n.files,r=n.selectedFilename,i=n.selectFile,o=a.map(function(e){return e.name}),c=o.indexOf(r),u=o[0]||null;c>=0&&(u=o[(o.length+c+e)%o.length]),i(u)};switch(e.key){case"x":case"ArrowRight":case"ArrowDown":a(1);break;case"z":case"ArrowLeft":case"ArrowUp":a(-1);break;default:n=!1}n&&e.preventDefault()}}},{key:"render",value:function(){var e=this,t=this.props,n=t.files,a=t.addFiles,r=t.removeAllFiles,i=t.selectFile,o=t.selectedFilename,c=t.toggleIgnoreFile;return f.a.createElement(k,null,f.a.createElement(M,null,"Images",f.a.createElement("br",null),f.a.createElement("input",{type:"file",multiple:!0,accept:"image/*",ref:function(t){e.fileInput=t},onChange:function(e){!e.target.files||e.target.files.length<1||a(e.target.files)}}),f.a.createElement("br",null),f.a.createElement("button",{type:"button",disabled:n.length<1,onClick:function(){!function(e){h.a.saveAs(new Blob([JSON.stringify(e.filter(function(e){return!e.ignore}).map(function(e){return{filename:e.name,boxes:e.boxes}}))],{type:"application/json;charset=utf-8"}),"boxes.json")}(n)}},"Export"),f.a.createElement("button",{type:"button",disabled:n.length<1,onClick:function(){window.confirm("Do you really want to delete all file metadata?")&&(r(),e.fileInput.value="")}},"Clear All")),f.a.createElement(F,null,f.a.createElement(C,null,n.map(function(e){var t=e.name,n=e.boxes,a=e.ignore,r="transparent";return a?r="gray":t===o?r="lightblue":n.length>0&&(r="lightgreen"),f.a.createElement(S,{key:t,style:{background:r}},f.a.createElement(I,{type:"button",style:{textDecoration:a?"line-through":void 0},onClick:function(){return i(t)}},t),f.a.createElement(L,{type:"button",onClick:function(){return c(t)}},"\xd7"))}))))}}]),t}(s.Component);D.defaultProps={selectedFilename:null};var R={addFiles:m.d,removeAllFiles:m.e,selectFile:m.f,toggleIgnoreFile:m.h};t.a=Object(v.b)(function(e){return{files:Object(g.a)(e),selectedFilename:Object(g.c)(e)}},R)(D)},204:function(e,t,n){"use strict";var a=n(50),r=n(195),i=n(196),o=n(35),c=n(36),u={locale:"ja",data:{fileDict:{}},ui:{selectedFilename:null}};var l=Object(a.combineReducers)({locale:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.locale,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.c:return t.payload.lang;default:return e}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.data,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.b:return Object(o.a)({},e,{fileDict:t.payload});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.ui,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a:return Object(o.a)({},e,{selectedFilename:t.payload});case c.b:return Object(o.a)({},e,{selectedFilename:!e.selectedFilename&&Object.keys(t.payload).length>0?t.payload[Object.keys(t.payload)[0]].name:e.selectedFilename});default:return e}}});t.a=function(e){var t=[r.a];return Object(a.createStore)(l,e,Object(i.composeWithDevTools)(a.applyMiddleware.apply(void 0,t)))}},208:function(e,t,n){e.exports=n(209)},209:function(e,t,n){"use strict";n.r(t),function(e){n(210),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(224),n(225),n(226),n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(99),n(235),n(236),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248),n(249),n(251),n(252),n(253),n(125),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(284),n(285),n(286),n(287),n(288),n(289),n(290),n(291),n(292),n(293),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(306),n(307),n(308),n(309),n(310),n(311),n(312),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(174),n(328),n(329),n(330),n(331),n(175),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(382),n(383),n(384),n(385),n(386),n(387),n(388),n(389),n(390),n(137),n(391),n(392),n(393),n(394),n(395),n(396),n(397),n(398),n(399),n(400),n(401),n(402),n(403),n(404),n(405),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(414),n(415),n(416),n(417),n(418),n(419),n(420),n(421),n(422),n(423),n(424),n(425),n(426),n(427),n(428),n(429),n(430),n(431),n(432),n(433),n(434),n(435),n(436),n(437),n(438),n(439),n(440),n(441),n(442),n(443),n(444),n(445),n(446),n(447),n(448),n(449),n(450),n(451),n(452),n(453),n(454),n(455),n(456),n(457),n(458),n(459),n(460),n(461),n(462),n(463),n(464),n(465),n(466),n(467),n(468),n(469),n(470),n(471),n(472),n(473),n(474),n(476),n(477),n(478),n(479),n(481),n(187),n(482);var t=n(52),a=n(1),r=n.n(a),i=n(112),o=n.n(i),c=n(47),u=n(74),l=n(193),s=n.n(l),f=n(194),d=n.n(f),b=n(204),h=n(197),v=n(113),m=n(94),g=(n(508),Object(m.a)()),p={locale:Object(v.b)(),data:{fileDict:Object(m.a)()},ui:{selectedFilename:Object.keys(g)[0]}},y=Object(b.a)(p);Object(u.c)([].concat(Object(t.a)(s.a),Object(t.a)(d.a)));var j=Object(c.b)(function(e){var t=e.locale;return{locale:t,messages:v.c[t]}})(u.b);o.a.render(r.a.createElement(c.a,{store:y},r.a.createElement(j,{defaultLocale:v.a},r.a.createElement(h.a,null))),e.document.getElementById("app"))}.call(this,n(53))},36:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return l}),n.d(t,"f",function(){return s}),n.d(t,"g",function(){return f}),n.d(t,"h",function(){return d}),n.d(t,"e",function(){return b}),n.d(t,"c",function(){return h});var a=n(93),r=n(35),i=n(94),o="SET_FILE_DICT",c=function(e){return Object(i.b)(e),{type:o,payload:e}},u=function(e){return function(t,n){var a=n().data.fileDict,i=Array.from(e).reduce(function(e,t){return e[t.name]&&e[t.name].objectURL||(e[t.name]=Object(r.a)({name:t.name,boxes:[]},e[t.name]||{},{objectURL:URL.createObjectURL(t)})),e},Object(r.a)({},a));t(c(i))}},l="SELECT_FILE",s=function(e){return{type:l,payload:e}},f=function(e,t){return function(n,i){var o=i().data.fileDict;n(c(Object(r.a)({},o,Object(a.a)({},e,Object(r.a)({},o[e],{boxes:t})))))}},d=function(e){return function(t,n){var i=n().data.fileDict;t(c(Object(r.a)({},i,Object(a.a)({},e,Object(r.a)({},i[e],{ignore:!i[e].ignore})))))}},b=function(){return c({})},h="SWITCH_LANGUAGE"},499:function(e,t){},505:function(e,t){},508:function(e,t,n){},61:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var a=n(139),r=function(e){return e.data.fileDict},i=function(e){return e.ui.selectedFilename},o=Object(a.a)(r,function(e){return Object.keys(e).map(function(t){return e[t]})}),c=Object(a.a)(r,i,function(e,t){return e[t]})},73:function(e,t,n){"use strict";(function(e){function a(){if("undefined"===typeof e.window)return!1;var t="__storage_test__";try{return e.window.localStorage.setItem(t,t),e.window.localStorage.removeItem(t),!0}catch(n){return!1}}n.d(t,"a",function(){return a})}).call(this,n(53))},94:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var a=n(205),r=n(73),i="FILE_META_STORAGE_KEY",o=1;function c(){if(Object(r.a)()){var e=window.localStorage.getItem(i);if(e)try{var t=JSON.parse(e);if(t.version===o)return t.fileMeta}catch(n){}}return{}}function u(e){Object(r.a)()&&window.localStorage.setItem(i,JSON.stringify({version:o,fileMeta:Object.keys(e).reduce(function(t,n){var r=e[n],i=(r.objectURL,Object(a.a)(r,["objectURL"]));return t[n]=i,t},{})}))}}},[[208,1,2]]]);
//# sourceMappingURL=main.5c6f9ba2.chunk.js.map