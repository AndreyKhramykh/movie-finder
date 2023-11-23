(function(){"use strict";var e={9421:function(e,t,a){var s=a(9242),n=a(1020),o=a(3396),r=a(4870);const i={class:"fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black"},l=(0,o._)("div",{class:"w-12 h-12 border-8 border-solid border-t-green rounded-full animate-spin"},null,-1),u=[l];function c(e,t){return(0,o.wg)(),(0,o.iD)("div",i,u)}var d=a(89);const v={},p=(0,d.Z)(v,[["render",c]]);var m=p;const g="?&api_key=e31629667cbed69ab0e22929d5e3e8be";var f=a(4161);const w=(0,n.Q_)("moviesStore",{state:()=>({movieInfo:{},genresArray:[],moviesListArray:[],currentPageAPI:1,isGlobalLoading:!0,isSearching:!1,slidesQuantity:3,isMobileDevice:!1,genresMobileMenu:!1,searchMobileMenu:!1,bluredBackground:!1}),actions:{async getMovieData(e){await f.Z.get(`https://api.themoviedb.org/3/movie/${e}${g}`).then((e=>{this.movieInfo=e.data}))},async getGenresData(){await f.Z.get(`https://api.themoviedb.org/3/genre/movie/list${g}`).then((e=>{this.genresArray=e.data.genres}))},async getPopularMoviesList(){await f.Z.get(`https://api.themoviedb.org/3/movie/popular${g}`,{params:{page:this.currentPageAPI}}).then((e=>{this.moviesListArray=e.data.results}))},async getMoviesInGenreList(e){await f.Z.get(`https://api.themoviedb.org/3/discover/movie${g}&with_genres=${e}`,{params:{page:this.currentPageAPI}}).then((e=>{this.moviesListArray=e.data.results}))},async searchMovies(e){await f.Z.get(`https://api.themoviedb.org/3/search/movie${g}&query=${e}`).then((e=>{this.moviesListArray=e.data.results}))},setGlobalLoading(e,t){setTimeout((()=>{this.isGlobalLoading=e}),t)},checkDeviceWidth(){window.innerWidth<768&&(this.slidesQuantity=1,this.isMobileDevice=!0,console.log("output->","success"))}},getters:{isMoviesListEmpty:e=>Boolean(!e.moviesListArray.length)}}),b={class:"bg-black text-white max-h-full min-h-screen flex flex-col justify-between font-display"};var x={__name:"App",setup(e){const t=w(),a=(0,r.iH)(!1);return(0,o.wF)((async()=>{await t.getGenresData(),await t.getPopularMoviesList(),a.value=!0,t.setGlobalLoading(!1,2e3)})),(e,s)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",b,[(0,r.SU)(t).isGlobalLoading?((0,o.wg)(),(0,o.j4)(m,{key:0})):(0,o.kq)("",!0),a.value?((0,o.wg)(),(0,o.j4)(n,{key:1})):(0,o.kq)("",!0)])}}};const h=x;var A=h,y=a(2483),k=a.p+"img/tmdb_logo.ded66ae5.svg";const _=(0,o._)("img",{src:k,alt:""},null,-1);function Y(e,t){const a=(0,o.up)("router-link");return(0,o.wg)(),(0,o.j4)(a,{to:"/",class:"w-1/6"},{default:(0,o.w5)((()=>[_])),_:1})}const D={},M=(0,d.Z)(D,[["render",Y]]);var U=M,z=a.p+"img/lupa_white.49650b27.png";const G={class:"relative border-b-[1px] border-white w-3/4 p-2"},S=(0,o._)("img",{class:"absolute top-1/2 -translate-y-2/4 right-2 w-[20px]",src:z,alt:""},null,-1);var W={__name:"SearchInput",setup(e){const t=w(),{searchMobileMenu:a,bluredBackground:i}=(0,n.Jk)(t),l=(0,r.iH)("");async function u(e){await t.searchMovies(e),t.isSearching=!0,l.value="",a.value=!1,i.value=!1}return(e,t)=>{const a=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",G,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),onKeyup:t[1]||(t[1]=(0,s.D2)((e=>u(l.value)),["enter"])),onInput:t[2]||(t[2]=(...t)=>e.handleInput&&e.handleInput(...t)),class:"w-3/4 font-semibold bg-stone-950 outline-none",placeholder:"Search movie"},null,544),[[s.nr,l.value]]),S]),(0,o.Wm)(a,{to:"/search-result"},{default:(0,o.w5)((()=>[(0,o._)("button",{class:"bg-blue rounded px-4 py-1",onClick:t[3]||(t[3]=e=>u(l.value))}," Search ")])),_:1})],64)}}};const I=W;var Z=I,P=a(7139),j={__name:"GenresList",setup(e){const t=w(),a=t.genresArray;return(e,t)=>{const s=(0,o.up)("router-link");return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(a),(e=>((0,o.wg)(),(0,o.iD)("div",{class:"text-xl",key:e.id},[(0,o.Wm)(s,{class:"hover:cursor-pointer hover:text-green",to:"/genre/"+e.id},{default:(0,o.w5)((()=>[(0,o.Uk)((0,P.zw)(e.name),1)])),_:2},1032,["to"])])))),128)}}};const E=(0,d.Z)(j,[["__scopeId","data-v-2fcf81aa"]]);var Q=E;const R={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},B=(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1),L=[B];function C(e,t){return(0,o.wg)(),(0,o.iD)("svg",R,L)}const K={},H=(0,d.Z)(K,[["render",C]]);var q=H;const N={class:"flex flex-col gap-[10px] p-4"};var O={__name:"MobileMenu",setup(e){const t=w(),{genresMobileMenu:a,searchMobileMenu:s,bluredBackground:i}=(0,n.Jk)(t);function l(){a.value=!a.value,i.value=!i.value}function u(){s.value=!s.value,i.value=!i.value}function c(){a.value=!1,s.value=!1,i.value=!1}return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[(0,o._)("div",{class:"cursor-pointer",onClick:l},"Genres"),(0,o._)("div",{onClick:l,class:(0,P.C_)(["absolute w-full transition translate-x-[-100%] top-0 p-2 left-0 bg-black z-40",{"translate-x-[0%]":(0,r.SU)(a)}])},[(0,o._)("div",N,[(0,o.Wm)(Q)]),(0,o.Wm)(q,{class:"absolute top-[4px] right-[4px] cursor-pointer z-40 hover:scale-125"})],2)]),(0,o._)("div",null,[(0,o._)("img",{onClick:u,class:"w-[20px] cursor-pointer",src:z,alt:""}),(0,o._)("div",{class:(0,P.C_)(["absolute top-0 left-0 transition translate-y-[-140%] w-full bg-black flex flex-row items-center p-4 gap-[4px] z-40",{"translate-y-[10%]":(0,r.SU)(s)}])},[(0,o.Wm)(Z),(0,o.Wm)(q,{onClick:u,class:"absolute bottom-[-26px] right-[10px] cursor-pointer hover:scale-125"})],2)]),(0,r.SU)(i)?((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:c,class:"fixed inset-0 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm z-30"})):(0,o.kq)("",!0)],64))}};const F=O;var J=F;const T={key:0,class:"flex flex-row items-center justify-between p-10"},V={class:"flex flex-row items-center justify-between w-1/2 gap-[20px]"},X={key:1,class:"flex flex-row items-center justify-between p-10"};var $={__name:"Header",setup(e){const t=w(),{isMobileDevice:a}=(0,n.Jk)(t);return(e,t)=>(0,r.SU)(a)?((0,o.wg)(),(0,o.iD)("div",X,[(0,o.Wm)(J),(0,o.Wm)(U)])):((0,o.wg)(),(0,o.iD)("div",T,[(0,o.Wm)(U),(0,o._)("div",V,[(0,o.Wm)(Z)])]))}};const ee=$;var te=ee;const ae={key:0,class:"grid grid-cols-5 justify-items-center"};var se={__name:"GenresBlock",setup(e){const t=w(),{isMobileDevice:a}=(0,n.Jk)(t);return(e,t)=>(0,r.SU)(a)?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ae,[(0,o.Wm)(Q)]))}};const ne=se;var oe=ne,re=(a(560),"data:image/png;base64,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");const ie={class:"flex text-center flex-col items-center h-full"},le={key:0,class:"w-2/4 flex flex-col items-center"},ue=(0,o._)("img",{class:"w-[40px]",src:re,alt:""},null,-1),ce=(0,o._)("p",{class:"text-xl font-semibold text-blue"},"Image not found",-1),de=[ue,ce],ve=["src","alt"],pe={class:"text-xl font-semibold"},me={class:"text-green"},ge={class:"font-semibold"},fe={class:"text-green"};var we={__name:"MovieCardMin",props:{title:{required:!0,default:"title"},genres:{required:!0,default:"genres"},voteAverage:{required:!0,default:"voteAverage"},posterUrl:{required:!0,default:"posterUrl"},dateRelease:{required:!0,default:"dateRelease"}},setup(e){function t(e){return`https://image.tmdb.org/t/p/w500${e}`}const a=e;return(e,s)=>((0,o.wg)(),(0,o.iD)("div",ie,[void 0==a.posterUrl?((0,o.wg)(),(0,o.iD)("div",le,de)):((0,o.wg)(),(0,o.iD)("img",{key:1,src:t(a.posterUrl),alt:a.posterUrl,class:"w-2/4"},null,8,ve)),(0,o._)("h1",pe,(0,P.zw)(a.title),1),(0,o._)("p",me,(0,P.zw)(a.genres),1),(0,o._)("p",ge,(0,P.zw)(a.dateRelease),1),(0,o._)("h3",fe,"Rating: "+(0,P.zw)(a.voteAverage)+"/10",1)]))}};const be=we;var xe=be;const he={class:"w-full h-full flex justify-center items-center z-49"},Ae=(0,o._)("div",{class:"w-12 h-12 border-8 border-solid border-t-green rounded-full animate-spin"},null,-1),ye=[Ae];function ke(e,t){return(0,o.wg)(),(0,o.iD)("div",he,ye)}const _e={},Ye=(0,d.Z)(_e,[["render",ke]]);var De=Ye,Me=a(4528),Ue=a(1569);const ze=e=>((0,o.dD)("data-v-f6acb1ce"),e=e(),(0,o.Cn)(),e),Ge={key:1},Se={class:"text-center mt-8 p-4 font-bold text-3xl"},We={key:0,class:"flex flex-col p-10 items-center gap-10"},Ie=ze((()=>(0,o._)("img",{class:"w-1/6",src:z,alt:""},null,-1))),Ze=ze((()=>(0,o._)("p",{class:"text-center"}," Sorry, we did not find anything for your request ",-1))),Pe=[Ie,Ze];var je={__name:"ContentBlock",setup(e){console.log("output->windowInnerWidth",window.innerWidth);const t=[Ue.W_],a=(0,y.tv)(),s=w(),i=(0,r.iH)(),l=(0,r.iH)(),u=(0,r.iH)(!1),{moviesListArray:c,genresArray:d,slidesQuantity:v}=(0,n.Jk)(s);async function p(e){s.isGlobalLoading=!0,await s.getMovieData(e),a.push(`/moviecard/${e}`)}function m(e){const t=[];return d.value.forEach((a=>{e.forEach((e=>{a.id==e&&t.push(a.name)}))})),t.join(" / ")}function g(e){return e.split("-")[0]}function f(){setTimeout((()=>{u.value=!1}),1e3)}async function b(e){s.isSearching=!1,void 0!=e?(await s.getMoviesInGenreList(e),l.value=d.value.find((t=>t.id==e)),i.value=`Best films in "${l.value.name}" category`):await s.getPopularMoviesList()}return i.value="Most popular movies now!",s.isSearching=!1,s.checkDeviceWidth(),(0,o.YP)((()=>a.currentRoute.value.params.id),(()=>{u.value=!0,b(a.currentRoute.value.params.id),f()})),(0,o.YP)((()=>c.value),(()=>{u.value=!0,0==c.value.length&&(i.value="Search results:"),f()})),(0,o.YP)((()=>s.isSearching),(()=>{i.value="Search results:"})),(0,o.bv)((()=>{u.value=!0,b(a.currentRoute.value.params.id),f()})),(e,a)=>u.value?((0,o.wg)(),(0,o.j4)(De,{key:0})):((0,o.wg)(),(0,o.iD)("div",Ge,[(0,o._)("h1",Se,(0,P.zw)(i.value),1),(0,r.SU)(s).isMoviesListEmpty?((0,o.wg)(),(0,o.iD)("div",We,Pe)):((0,o.wg)(),(0,o.j4)((0,r.SU)(Me.tq),{key:1,modules:t,"slides-per-view":(0,r.SU)(v),"slides-per-group":(0,r.SU)(v),"space-between":1,navigation:"",class:"swiper"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(c),(e=>((0,o.wg)(),(0,o.j4)((0,r.SU)(Me.o5),{class:"h-full",key:e.id},{default:(0,o.w5)((()=>[(0,o.Wm)(xe,{onClick:t=>p(e.id),title:e.title,"vote-average":e.vote_average.toFixed(1),"poster-url":e.poster_path,genres:m(e.genre_ids),"date-release":g(e.release_date)},null,8,["onClick","title","vote-average","poster-url","genres","date-release"])])),_:2},1024)))),128))])),_:1},8,["slides-per-view","slides-per-group"]))]))}};const Ee=(0,d.Z)(je,[["__scopeId","data-v-f6acb1ce"]]);var Qe=Ee;const Re={class:"p-10 flex flex-row gap-2 items-center"},Be=(0,o._)("p",null,"This site was powered by",-1),Le=(0,o._)("a",{class:"text-green text-2xl",target:"blanc",href:"https://www.themoviedb.org/"},"TMDb API",-1),Ce=[Be,Le];function Ke(e,t){return(0,o.wg)(),(0,o.iD)("div",Re,Ce)}const He={},qe=(0,d.Z)(He,[["render",Ke]]);var Ne=qe,Oe={__name:"GenrePage",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(te),(0,o.Wm)(oe),(0,o.Wm)(Qe),(0,o.Wm)(Ne)],64))}};const Fe=Oe;var Je=Fe,Te={__name:"MainPage",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(te),(0,o.Wm)(oe),(0,o.Wm)(Qe),(0,o.Wm)(Ne)],64))}};const Ve=Te;var Xe=Ve;const $e={class:"relative"},et={class:"py-20"},tt={class:"bg-gray-950/95 text-white relative w-3/4 m-auto z-1 flex flex-col mobile:flex-row rounded-lg"},at=["src"],st={class:"p-2 mobile:p-10"},nt={class:"text-3xl"},ot={class:"text-xl pt-2 text-emerald-500"},rt={class:"pt-2"},it={class:"flex border-b-[2px] pb-2 flex-col mobile:flex-row gap-3 pt-2 text-emerald-500"},lt={class:"flex border-b-[2px] pb-2 flex-col mobile:flex-row gap-3 pt-2"},ut={class:"flex border-b-[2px] pb-2 flex-col mobile:flex-row gap-3 pt-2"},ct={class:"grid grid-cols-2 grid-rows-2 gap-3 pt-2"},dt={class:"flex flex-col"},vt={class:"text-xs mobile:text-xl text-emerald-500"},pt={class:"flex flex-col"},mt={class:"text-xs mobile:text-xl text-emerald-500"},gt={class:"flex flex-col"},ft={class:"text-xs mobile:text-xl text-emerald-500"},wt={class:"flex flex-col"},bt={class:"text-xs mobile:text-xl text-emerald-500"};var xt={__name:"MovieCardBLock",setup(e){const t=(0,y.tv)(),a=w();function s(e){return`https://image.tmdb.org/t/p/w500${e}`}function n(e){let t=`${(e/1e6).toFixed()} mln$`;return t}function i(e){let t=`${(e/1).toFixed(1)} / 10`;return t}async function l(e){void 0==a.movieInfo.title&&await a.getMovieData(e)}return(0,o.wF)((()=>{l(t.currentRoute.value.params.id)})),console.log("output->",typeof a.movieInfo.vote_average),(e,t)=>((0,o.wg)(),(0,o.iD)("div",$e,[(0,o._)("div",{class:"h-full w-full bg-cover blur-sm top-0 left-0 absolute z-0",style:(0,P.j5)(`background-image: url('${s((0,r.SU)(a).movieInfo.backdrop_path)}');`)},null,4),(0,o._)("div",et,[(0,o._)("div",tt,[(0,o._)("img",{class:"w-3/4 m-auto pt-2 mobile:w-1/3 mobile:m-0 mobile:pt-0",src:s((0,r.SU)(a).movieInfo.poster_path),alt:""},null,8,at),(0,o._)("div",st,[(0,o._)("h1",nt,(0,P.zw)((0,r.SU)(a).movieInfo.title),1),(0,o._)("h2",ot,(0,P.zw)((0,r.SU)(a).movieInfo.tagline),1),(0,o._)("p",rt,(0,P.zw)((0,r.SU)(a).movieInfo.overview),1),(0,o._)("div",it,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(a).movieInfo.genres,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},(0,P.zw)(e.name)+" / ",1)))),128))]),(0,o._)("div",lt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(a).movieInfo.production_companies,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.id},(0,P.zw)(e.name)+" / ",1)))),128))]),(0,o._)("div",ut,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,r.SU)(a).movieInfo.production_countries,(e=>((0,o.wg)(),(0,o.iD)("div",{key:e.name},(0,P.zw)(e.name)+" / ",1)))),128))]),(0,o._)("div",ct,[(0,o._)("p",dt,[(0,o.Uk)(" Film duration: "),(0,o._)("strong",vt,(0,P.zw)((0,r.SU)(a).movieInfo.runtime)+" mins",1)]),(0,o._)("p",pt,[(0,o.Uk)(" Release date: "),(0,o._)("strong",mt,(0,P.zw)((0,r.SU)(a).movieInfo.release_date),1)]),(0,o._)("p",gt,[(0,o.Uk)(" Box office: "),(0,o._)("strong",ft,(0,P.zw)(n((0,r.SU)(a).movieInfo.revenue)),1)]),(0,o._)("p",wt,[(0,o.Uk)(" Vote average: "),(0,o._)("strong",bt,(0,P.zw)(i((0,r.SU)(a).movieInfo.vote_average)),1)])])])])])]))}};const ht=xt;var At=ht,yt={__name:"MovieCardPage",setup(e){const t=w();return t.setGlobalLoading(!1,1e3),(e,a)=>{const s=(0,o.up)("LoaderGlobal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,r.SU)(t).isGlobalLoading?((0,o.wg)(),(0,o.j4)(s,{key:0})):(0,o.kq)("",!0),(0,o.Wm)(te),(0,o.Wm)(At),(0,o.Wm)(Ne)],64)}}};const kt=yt;var _t=kt,Yt={__name:"SearchResultPage",setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(te),(0,o.Wm)(oe),(0,o.Wm)(Qe),(0,o.Wm)(Ne)],64))}};const Dt=Yt;var Mt=Dt;const Ut=[{path:"/",name:"home",component:Xe},{path:"/genre/:id",name:"genre",component:Je},{path:"/search-result",name:"search-result",component:Mt},{path:"/moviecard/:id",name:"moviecard",component:_t}],zt=(0,y.p7)({history:(0,y.r5)(),routes:Ut});var Gt=zt;const St=(0,n.WB)();(0,s.ri)(A).use(Gt).use(St).mount("#app")}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,n,o){if(!s){var r=1/0;for(c=0;c<e.length;c++){s=e[c][0],n=e[c][1],o=e[c][2];for(var i=!0,l=0;l<s.length;l++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(i=!1,o<r&&(r=o));if(i){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[s,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/movie-finder/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,r=s[0],i=s[1],l=s[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var c=l(a)}for(t&&t(s);u<r.length;u++)o=r[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},s=self["webpackChunkmovie_finder"]=self["webpackChunkmovie_finder"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(9421)}));s=a.O(s)})();
//# sourceMappingURL=app.4b1c72a9.js.map