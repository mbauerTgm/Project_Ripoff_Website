<script setup>
import HomeView from './views/HomeView.vue';
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