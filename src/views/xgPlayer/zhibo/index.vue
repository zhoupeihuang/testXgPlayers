<template>
  <div>
    像我这样的人
    <div id="mmid"></div>
  </div>
</template>
<script>
import Player from 'xgplayer'
// import HlsJsPlayer from "xgplayer-hls.js";
import FlvPlugin from 'xgplayer-flv'
// npm i xgplayer-hls.js --save
export default {
  data() {
    return {
      videoPlayer: null,
      url3:
        "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv",
    };
  },
  mounted() {
    this.getVideo();
  },
  methods: {
    getVideo() {
      // this.videoPlayer = new HlsJsPlayer({
      //   el: document.querySelector("#mmid"), // url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
      //   url: this.url3,
      //   width: "600px",
      //   height: "440px",
      //   volume: 0.6, // 初始音量
      //   autoplay: true, // 自动播放
      //   playsinline: true,
      //   isLive: true,
      //   cors: true,
      // });
     // FlvPlayer继承于xgplayer
     this.videoPlayer =  new Player({
          id:'mmid',
          isLive: true,
          plugins: [FlvPlugin],  // 以xgplayer的插件形式传入并挂载
          url: this.url3,
          width: "600px",
          height: "440px",
          volume: 0.6, // 初始音量
          autoplay: true, // 自动播放
          playsinline: true,
          cors: true,
  })
      // const player = new FlvPlayer({
      //   url: this.url3,
      //   width: "600px",
      //   height: "440px",
      //   volume: 0.6, // 初始音量
      //   autoplay: true, // 自动播放
      //   playsinline: true,
      //   isLive: true,
      //   cors: true,
      // })
    },
  },
};
</script>
<style scoped lang="less"></style>
