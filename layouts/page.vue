<template>
  <div class="container-main">
    <nuxt />
    <Footer></Footer>
    <ForkOnGithub></ForkOnGithub>
  </div>
</template>

<script>
import Footer from '../components/Footer';
import ForkOnGithub from '../components/Fork-On-Github';

export default {
  components: {
    Footer,
    ForkOnGithub
  }
}
</script>
