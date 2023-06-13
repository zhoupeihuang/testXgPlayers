<template>
  <div>
    <div ref="video" id="mmid"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Player from "xgplayer";
export default {
	data(){
		return{
			videoPlayer: null
		}
	},
	mounted() {
		this.getVideo()
	},
	methods: {
		getVideo(){
			this.videoPlayer = new Player({
				el: document.querySelector("#mmid"),
				url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
				// url: 'http://192.168.10.215:8080/live/livestream.m3u8',
				// url: "http://192.168.10.215:8080/live/livestream.flv",
				width: "600px",
				height: "440px",
				volume: 0.6, // 初始音量
				autoplay: true, // 自动播放
				lastPlayTime: 20, //视频起播时间（单位：秒）
				startTime: 15, //视频起播时间（单位：秒）
				playbackRate: [0.5, 0.75, 1, 1.5, 2],
				playsinline: true,
				isLive: true,
				cors: true
				});
		}
	}
}
</script>
