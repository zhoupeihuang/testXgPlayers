(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abba2"],{1706:function(e,t,i){"use strict";i.r(t);var n=i("7a23");const a={ref:"video",id:"mmid"};function d(e,t,i,d,o,l){return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["e"])("div",a,null,512)])}var o=i("b908"),l={data(){return{videoPlayer:null}},mounted(){this.getVideo()},methods:{getVideo(){this.videoPlayer=new o["a"]({el:document.querySelector("#mmid"),url:"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",width:"600px",height:"440px",volume:.6,autoplay:!0,lastPlayTime:20,startTime:15,playbackRate:[.5,.75,1,1.5,2],playsinline:!0,isLive:!0,cors:!0})}}},r=i("6b0d"),u=i.n(r);const c=u()(l,[["render",d]]);t["default"]=c}}]);