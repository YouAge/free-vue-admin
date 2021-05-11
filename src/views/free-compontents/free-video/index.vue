<!--github： https://github.com/YouAge-->
<template>
  <div class='video-content'>
    <div id="free-video"></div>
  </div>
</template>

<script>
import Player from "xgplayer/dist/simple_player";
import volume from 'xgplayer/dist/controls/volume';
import playbackRate from 'xgplayer/dist/controls/playbackRate';
import screenShot from 'xgplayer/dist/controls/screenShot';
import download from 'xgplayer/dist/controls/download';
import definitionActive from 'xgplayer/dist/controls/definition';
import playNext from 'xgplayer/dist/controls/playNext';
import pip from 'xgplayer/dist/controls/pip';

export default {
  name: 'freeVideo',
  data(){
    return{

    }
  },
  mounted () {
   const player = new Player({
      id:'free-video',
      autoplay: false,
      screenShot: true,
      url:
        "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4",
      poster:
        "https://s2.pstatp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg",
      fluid: false,
      controlPlugins: [volume, playbackRate, screenShot,download,definitionActive,playNext,pip],
      playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组,
      loop: true, // 循环播放
      download: true, // 下载
      pip: true, // 画中画
      playNext: { // 下一集 提供后续资源链接
        urlList: [
          'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4',
          'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4'
        ],
      },
     definitionActive: 'click' //清晰度
    })
    player.emit('resourceReady', [
      {name: '高清', url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4'},
      {name: '超清', url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-720p.mp4'}]);
  }
}
</script>

<style scoped>

</style>
