<script setup>
import HomeView from './views/HomeView.vue';
import Kamera_Movement_Video from './assets/dominiks_fußbilder/Kamera_Movement_Video.mp4'
import Movement from './assets/dominiks_fußbilder/Movement.png'
import FOV from './assets/dominiks_fußbilder/FOV.png'
import Thumbnail from './assets/dominiks_fußbilder/Thumbnail.png'
import CommandoMenu from './assets/dominiks_fußbilder/galleryUICommandoMenu.png'
import TitleScreen1 from './assets/dominiks_fußbilder/galleryUITitleScreen1.png'
import TitleScreen2 from './assets/dominiks_fußbilder/galleryUITitleScreen2.png'
</script>

<template>
  <HomeView galleryID="my-test-gallery" :images="images"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
export default {
  name: 'App',
  components: {
    HomeView,
  },
  data() {
    return {
      images: [
        {
          type: 'video',
          videoSrc: 
            Kamera_Movement_Video,
          thumbnailURL:
            Thumbnail,
          width: 1492,
          height: 830,
        },
        {
          largeURL:
            Movement,
          thumbnailURL:
            Movement,
          width: 456,
          height: 403,
        },
        {
          largeURL:
            FOV,
          thumbnailURL:
            FOV,
          width: 456,
          height: 403,
        },
        {
          largeURL:
            TitleScreen1,
          thumbnailURL:
            TitleScreen1,
          width: 942,
          height: 532,
        },
        {
          largeURL:
            TitleScreen2,
          thumbnailURL:
            TitleScreen2,
          width: 945,
          height: 523,
        },
        {
          largeURL:
            CommandoMenu,
          thumbnailURL:
            CommandoMenu,
          width: 942,
          height: 523,
        },
      ],
    };
  },
};
</script>