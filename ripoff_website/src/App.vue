<template>
  <HomeView galleryID="my-gallery" :images="images" />
</template>

<script setup>
import { ref } from 'vue'
import HomeView from './views/HomeView.vue';

// Assets Importieren
import Kamera_Movement_Video from './assets/dominiks_fußbilder/Kamera_Movement_Video.mp4'
import Movement from './assets/dominiks_fußbilder/Movement.png'
import FOV from './assets/dominiks_fußbilder/FOV.png'
import Thumbnail from './assets/dominiks_fußbilder/Thumbnail.png'
import CommandoMenu from './assets/dominiks_fußbilder/galleryUICommandoMenu.png'
import TitleScreen1 from './assets/dominiks_fußbilder/galleryUITitleScreen1.png'
import TitleScreen2 from './assets/dominiks_fußbilder/galleryUITitleScreen2.png'
import FOV_no_God_Vision from './assets/dominiks_fußbilder/FOV_no_God_Vision.png'
import Level_1_Editor from './assets/dominiks_fußbilder/Level_1_Editor.png'
import SFX_Service from './assets/dominiks_fußbilder/SFX_Service.png'
import Improved_Movement from './assets/dominiks_fußbilder/Improved_Movement.png'

// Bilder Daten
const images = ref([
  {
    type: 'video',
    videoSrc: Kamera_Movement_Video,
    thumbnailURL: Thumbnail,
    width: 1492,
    height: 830,
  },
  { largeURL: Movement, thumbnailURL: Movement, width: 456, height: 403 },
  { largeURL: FOV, thumbnailURL: FOV, width: 456, height: 403 },
  { largeURL: TitleScreen1, thumbnailURL: TitleScreen1, width: 942, height: 532 },
  { largeURL: TitleScreen2, thumbnailURL: TitleScreen2, width: 945, height: 523 },
  { largeURL: CommandoMenu, thumbnailURL: CommandoMenu, width: 942, height: 523 },
  { largeURL: Level_1_Editor, thumbnailURL: Level_1_Editor, width: 1100, height: 544},
  { largeURL: FOV_no_God_Vision, thumbnailURL: FOV_no_God_Vision, width: 220, height: 209},
  { largeURL: SFX_Service, thumbnailURL: SFX_Service, width: 441, height: 618 },
  { largeURL: Improved_Movement, thumbnailURL: Improved_Movement, width: 461, height: 299 },

]);
</script>

<style>
/* Global Styles */
#app {
  font-family: 'Exo 2', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; /* Zentriert den Inhalt */
  color: #2c3e50;
}

/* Styling für die Navigation und das Logo */
nav {
  padding: 30px;
  display: flex;
  justify-content: space-between; /* Logo links, Links rechts */
  align-items: center;
}

.logo {
  height: 40px; /* Größe deines Logos */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-left: 15px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>