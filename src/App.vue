<template>
  <div id="app">
   <Navbar/>
   <FirstScreen/>
   <InFocus/>
   <WhyNeoflex/>
   <CreateIT/>
   <Advantage/>
   <PressCenter/>
   <Career/>
  </div>
</template>

<script>
import Navbar from './components/app/Navbar.vue'
import FirstScreen from './components/app/FirstScreen.vue'
import InFocus from './components/app/InFocus.vue'
import WhyNeoflex from './components/app/WhyNeoflex.vue'
import CreateIT from './components/app/CreateIT.vue'
import Advantage from './components/app/Advantage.vue'
import PressCenter from './components/app/PressCenter.vue'
import Career from './components/app/Career.vue'


export default {
  name: 'app',
  components: {
    Navbar,
    FirstScreen,
    InFocus,
    WhyNeoflex,
    CreateIT,
    Advantage,
    PressCenter,
    Career
  }
}
</script>

<style>

@font-face {
    font-family: 'Museo Sans Cyrl';
    src: url('assets/fonts/MuseoSansCyrl-500.eot');
    src: local('assets/fonts/MuseoSansCyrl-500'),
      url('assets/fonts/MuseoSansCyrl-500.eot?#iefix') format('embedded-opentype'),
      url('assets/fonts/MuseoSansCyrl-500.woff') format('woff'),
      url('assets/fonts/MuseoSansCyrl-500.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
  font-family: 'Museo Sans Cyrl';
  src: url('assets/fonts/MuseoSansCyrl-500Italic.eot');
  src: local('assets/fonts/MuseoSansCyrl-500Italic'),
    url('assets/fonts/MuseoSansCyrl-500Italic.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/MuseoSansCyrl-500Italic.woff') format('woff'),
    url('assets/fonts/MuseoSansCyrl-500Italic.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: 'Museo Sans Cyrl';
  src: url('assets/fonts/MuseoSansCyrl-100.eot');
  src: local('assets/fonts/MuseoSansCyrl-100'),
    url('assets/fonts/MuseoSansCyrl-100.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/MuseoSansCyrl-100.woff') format('woff'),
    url('assets/fonts/MuseoSansCyrl-100.ttf') format('truetype');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Museo Sans Cyrl';
  src: url('assets/fonts/MuseoSansCyrl-100Italic.eot');
  src: local('assets/fonts/MuseoSansCyrl-100Italic'),
    url('assets/fonts/MuseoSansCyrl-100Italic.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/MuseoSansCyrl-100Italic.woff') format('woff'),
    url('assets/fonts/MuseoSansCyrl-100Italic.ttf') format('truetype');
  font-weight: 100;
  font-style: italic;
}

@font-face {
  font-family: 'Museo Sans Cyrl';
  src: url('assets/fonts/MuseoSansCyrl-300.eot');
  src: local('assets/fonts/MuseoSansCyrl-300'),
    url('assets/fonts/MuseoSansCyrl-300.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/MuseoSansCyrl-300.woff') format('woff'),
    url('assets/fonts/MuseoSansCyrl-300.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Museo Sans Cyrl';
  src: url('assets/fonts/MuseoSansCyrl-300Italic.eot');
  src: local('assets/fonts/MuseoSansCyrl-300Italic'),
    url('assets/fonts/MuseoSansCyrl-300Italic.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/MuseoSansCyrl-300Italic.woff') format('woff'),
    url('assets/fonts/MuseoSansCyrl-300Italic.ttf') format('truetype');
  font-weight: 300;
  font-style: italic;
}

@font-face {
  font-family: 'Museo Sans Cyrl';
  src: url('assets/fonts/MuseoSansCyrl-700.eot');
  src: local('assets/fonts/MuseoSansCyrl-700'),
    url('assets/fonts/MuseoSansCyrl-700.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/MuseoSansCyrl-700.woff') format('woff'),
    url('assets/fonts/MuseoSansCyrl-700.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Museo Sans Cyrl';
  src: url('assets/fonts/MuseoSansCyrl-700Italic.eot');
  src: local('assets/fonts/MuseoSansCyrl-700Italic'),
    url('assets/fonts/MuseoSansCyrl-700Italic.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/MuseoSansCyrl-700Italic.woff') format('woff'),
    url('assets/fonts/MuseoSansCyrl-700Italic.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
}

@font-face {
  font-family: 'Museo Sans Cyrl';
  src: url('assets/fonts/MuseoSansCyrl-900.eot');
  src: local('assets/fonts/MuseoSansCyrl-900'),
    url('assets/fonts/MuseoSansCyrl-900.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/MuseoSansCyrl-900.woff') format('woff'),
    url('assets/fonts/MuseoSansCyrl-900.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Museo Sans Cyrl';
  src: url('assets/fonts/MuseoSansCyrl-900Italic.eot');
  src: local('assets/fonts/Museo Sans Cyrl 900 Italic'), local('MuseoSansCyrl-900Italic'),
    url('assets/fonts/MuseoSansCyrl-900Italic.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/MuseoSansCyrl-900Italic.woff') format('woff'),
    url('assets/fonts/MuseoSansCyrl-900Italic.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Museo Sans Cyrl', Arial, sans-serif;
  font-weight: 500;
  font-style: normal;
}

ul {
  list-style: none;
  margin: 0;
}

a {
  text-decoration: none;
  cursor: pointer;
}

a:hover {
  text-decoration: none;
}

</style>
