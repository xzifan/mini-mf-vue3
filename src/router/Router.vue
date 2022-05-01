<!-- Router.vue -->
<template>
  <component :is="routedComponent"></component>
</template>

<script>
import HomePage from '../views/HomeView.vue';
import AboutPage from "../views/AboutView.vue";

const routes = {
  "/": HomePage,
  "/about": AboutPage
};

export default {
  data() {
    return { 
        current: window.location.hash.replace('#/vue', '')
    };
  },
  computed: {
    routedComponent() {
      return routes[this.current];
    }
  }
};
</script>