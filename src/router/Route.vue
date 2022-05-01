<!-- Router.vue -->
<template>
  <a :href="href">{{title}}</a>
</template>

<script>
import config from '../config'
const prefix = '#/'+config.name
export default {
  data() {
    return { 
        href: prefix + this.path
    };
  },
  props: {
    path: String,
    title: String
  },
  computed: {
   
  }
};
</script>