<template>
  <footer>
    <p>- 江东渚的<nuxt-link to="/" class="no-decor-link"><strong>碎碎念</strong></nuxt-link> -</p>
    <p>
    	我的
    	<a href="https://moonhea.com/blog" class="no-decor-link">
    		<strong>博客</strong>
	    	<i class="font-20"></i>
	    </a>
	  </p>
    <div class="go-top" @click="toTop" :class="{'go-top-hidden': isHidden}">
        <div class="arrow"></div>
        <div class="stick"></div>
    </div>
  </footer>
</template>

<script setup>
const isHidden = ref(true);
function toTop() {
	document.querySelector(".container-main").scrollIntoView({behavior: 'smooth'})
}
onMounted(() => {
	window.addEventListener("scroll", function(){
		if (window.scrollY > 199) {
			isHidden.value = false;
		} else {
			isHidden.value = true;
		}
	});
})
</script>
