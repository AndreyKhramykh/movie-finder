(function(){"use strict";var e={5564:function(e,t,r){var n=r(9242),a=r(1020),o=r(3396);const i={class:"fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-emerald-200/80"},s=(0,o._)("div",{class:"w-12 h-12 border-8 border-solid border-t-emerald-400 rounded-full animate-spin"},null,-1),u=[s];function l(e,t){return(0,o.wg)(),(0,o.iD)("div",i,u)}var c=r(89);const v={},p=(0,c.Z)(v,[["render",l]]);var d=p,g=r(4161);const m="?&api_key=e31629667cbed69ab0e22929d5e3e8be",f="https://api.themoviedb.org/3",h=(0,a.Q_)("moviesStore",{state:()=>({MOVIE_SECTION:"/movie/",DEFAULT_MOVIE_ID:"157336",movieInfo:{},genresArray:[],popularMoviesArray:[],moviesInGenreArray:[],searchQueryMovies:[],currentPageAPI:1}),actions:{async getMovieData(){await g.Z.get(f+this.MOVIE_SECTION+this.DEFAULT_MOVIE_ID+m).then((e=>{this.movieInfo=e.data}))},async getGenresData(){await g.Z.get(`https://api.themoviedb.org/3/genre/movie/list${m}`).then((e=>{this.genresArray=e.data.genres}))},async getPopularMoviesList(){await g.Z.get(`https://api.themoviedb.org/3/movie/popular${m}`,{params:{page:this.currentPageAPI}}).then((e=>{this.popularMoviesArray=e.data.results}))},async getMoviesInGenreList(e){await g.Z.get(`https://api.themoviedb.org/3/discover/movie${m}&with_genres=${e}`,{params:{page:this.currentPageAPI}}).then((e=>{this.moviesInGenreArray=e.data.results}))},async searchMovies(e){await g.Z.get(`https://api.themoviedb.org/3/search/movie${m}&query=${e}`).then((e=>{this.searchQueryMovies=e.data.results}))}}});var w=r(4870);const _={class:"bg-cyan-200 max-h-full min-h-screen"};var y={__name:"App",setup(e){const t=h(),r=(0,w.iH)(!1),n=(0,w.iH)(!0);function a(){setTimeout((()=>{n.value=!1}),1e3)}return(0,o.wF)((async()=>{await t.getMovieData(),await t.getGenresData(),await t.getPopularMoviesList(),r.value=!0,a()})),(e,t)=>{const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",_,[n.value?((0,o.wg)(),(0,o.j4)(d,{key:0})):(0,o.kq)("",!0),r.value?((0,o.wg)(),(0,o.j4)(a,{key:1})):(0,o.kq)("",!0)])}}};const b=y;var D=b,M=r(2483),k=r.p+"img/tmdb_logo.ded66ae5.svg";const I=(0,o._)("img",{src:k,alt:""},null,-1);function A(e,t){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(r,{to:"/",class:"w-1/6"},{default:(0,o.w5)((()=>[I])),_:1})}const x={},H=(0,c.Z)(x,[["render",A]]);var O=H,W={__name:"SearchInput",setup(e){const t=h(),r=(0,w.iH)(""),a=(0,w.iH)([]);async function i(e){await t.searchMovies(e),a.value=t.searchQueryMovies,console.log("output->",a.value)}return(e,t)=>{const a=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),onKeyup:t[1]||(t[1]=(0,n.D2)((e=>i(r.value)),["enter"])),onInput:t[2]||(t[2]=(...t)=>e.handleInput&&e.handleInput(...t)),class:"h-1/3 w-1/4 p-2",placeholder:"Search movie"},null,544),[[n.nr,r.value]]),(0,o.Wm)(a,{to:"/search-result"},{default:(0,o.w5)((()=>[(0,o._)("button",{onClick:t[3]||(t[3]=e=>i(r.value))},"Search")])),_:1})],64)}}};const j=W;var P=j,S=r(7139);const U={class:"grid grid-cols-5 justify-items-center"};var q={__name:"GenresBlock",setup(e){const t=h(),r=t.genresArray;return(e,t)=>{const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,w.SU)(r),(e=>((0,o.wg)(),(0,o.iD)("div",{class:"transition-all hover:cursor-pointer hover:scale-150",key:e.id},[(0,o.Wm)(n,{to:"/genre/"+e.id},{default:(0,o.w5)((()=>[(0,o.Uk)((0,S.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])])}}};const E=q;var G=E;const R={class:"flex flex-row items-center justify-between p-10"};var Y={__name:"Header",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",R,[(0,o.Wm)(O),(0,o.Wm)(P)]),(0,o.Wm)(G)],64))}};const Z=Y;var C=Z,Q=(r(560),r.p+"img/lupa.0910a604.png"),T=r.p+"img/imageNotFound.6e534b72.png";const $={class:"flex text-center flex-col items-center"},z={key:0,src:T,alt:""},F=["src","alt"];var L={__name:"MovieCardMin",props:{title:{required:!0,default:"title"},genres:{required:!0,default:"genres"},voteAverage:{required:!0,default:"voteAverage"},posterUrl:{required:!0,default:"posterUrl"},dateRelease:{required:!0,default:"dateRelease"}},setup(e){function t(e){return`https://image.tmdb.org/t/p/w500${e}`}const r=e;return(e,n)=>((0,o.wg)(),(0,o.iD)("div",$,[void 0==r.posterUrl?((0,o.wg)(),(0,o.iD)("img",z)):((0,o.wg)(),(0,o.iD)("img",{key:1,src:t(r.posterUrl),alt:r.posterUrl,class:"w-2/4"},null,8,F)),(0,o._)("h1",null,(0,S.zw)(r.title),1),(0,o._)("p",null,(0,S.zw)(r.genres),1),(0,o._)("p",null,(0,S.zw)(r.dateRelease),1),(0,o._)("h3",null,"Rating: "+(0,S.zw)(r.voteAverage)+"/10",1)]))}};const B=L;var V=B,K=r(4528),N=r(1008);const J=e=>((0,o.dD)("data-v-d0b079f0"),e=e(),(0,o.Cn)(),e),X={class:"text-center mt-8 text-2xl"},ee={key:0},te=J((()=>(0,o._)("img",{class:"w-1/6",src:Q,alt:""},null,-1))),re=J((()=>(0,o._)("p",null,"Sorry, we did not find anything for your request",-1))),ne=[te,re];var ae={__name:"ContentBlock",setup(e){const t=[N.W_,N.tl],r=(0,M.tv)(),n=h(),a=(0,w.iH)(),i=(0,w.iH)(),s=(0,w.iH)(),u=(0,w.iH)(!1),l=(0,w.iH)(!0),c=n.genresArray;function v(e){const t=[];return c.forEach((r=>{e.forEach((e=>{r.id==e&&t.push(r.name)}))})),t.join(" / ")}function p(e){return e.split("-")[0]}function g(){setTimeout((()=>{l.value=!1}),1e3)}async function m(e){void 0!=e&&(await n.getMoviesInGenreList(e),a.value=n.moviesInGenreArray,s.value=c.find((t=>t.id==e)),i.value=`Best film in "${s.value.name}" category`)}return i.value="Most popular movies now!",a.value=n.popularMoviesArray,(0,o.YP)((()=>r.currentRoute.value.params.id),(()=>{m(r.currentRoute.value.params.id),g()})),(0,o.YP)((()=>n.searchQueryMovies),(()=>{n.searchQueryMovies.length>0?(u.value=!1,a.value=n.searchQueryMovies,i.value="Search results:"):(i.value="Search results:",u.value=!0)})),(0,o.bv)((()=>{m(r.currentRoute.value.params.id),g()})),console.log("output->moviesStore.sea",n.searchQueryMovies),console.log("output->",r.currentRoute.value.params.id),(e,r)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[l.value?((0,o.wg)(),(0,o.j4)(d,{key:0})):(0,o.kq)("",!0),(0,o._)("div",null,[(0,o._)("h1",X,(0,S.zw)(i.value),1),u.value?((0,o.wg)(),(0,o.iD)("div",ee,ne)):((0,o.wg)(),(0,o.j4)((0,w.SU)(K.tq),{key:1,modules:t,"slides-per-view":3,"slides-per-group":3,"space-between":1,navigation:"",pagination:{clickable:!0,dynamicBullets:!0},class:"swiper"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.value,(e=>((0,o.wg)(),(0,o.j4)((0,w.SU)(K.o5),{key:e.id},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{title:e.title,"vote-average":e.vote_average.toFixed(1),"poster-url":e.poster_path,genres:v(e.genre_ids),"date-release":p(e.release_date)},null,8,["title","vote-average","poster-url","genres","date-release"])])),_:2},1024)))),128))])),_:1}))])],64))}};const oe=(0,c.Z)(ae,[["__scopeId","data-v-d0b079f0"]]);var ie=oe;function se(e,t){return(0,o.wg)(),(0,o.iD)("div",null,"Some footer")}const ue={},le=(0,c.Z)(ue,[["render",se]]);var ce=le,ve={__name:"MainPage",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(C),(0,o.Wm)(ie),(0,o.Wm)(ce)]))}};const pe=ve;var de=pe,ge={__name:"GenrePage",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(C),(0,o.Wm)(ie),(0,o.Wm)(ce)],64))}};const me=ge;var fe=me,he={__name:"SearchResultPage",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(C),(0,o.Wm)(ie),(0,o.Wm)(ce)],64))}};const we=he;var _e=we;const ye=[{path:"/",name:"home",component:de},{path:"/genre/:id",name:"genre",component:fe},{path:"/search-result",name:"search-result",component:_e}],be=(0,M.p7)({history:(0,M.r5)(),routes:ye});var De=be;const Me=(0,a.WB)();(0,n.ri)(D).use(De).use(Me).mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],o=e[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&o||i>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(s=!1,o<i&&(i=o));if(s){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/movie-finder/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,i=n[0],s=n[1],u=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(u)var c=u(r)}for(t&&t(n);l<i.length;l++)o=i[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self["webpackChunkmovie_finder"]=self["webpackChunkmovie_finder"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(5564)}));n=r.O(n)})();
//# sourceMappingURL=app.c0c1226c.js.map