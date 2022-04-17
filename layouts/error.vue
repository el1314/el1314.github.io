<template>
  <div class="main-content">
    <div class="blog-wrap">
      <main class="blog-main">
        <DeskBanner deskOwner="Moonhea"></DeskBanner>
        <p>
          不想看碎碎念？来看看我的<a href="https://moonhea.com/blog"><strong>博客<i class="fa fa-external-link"></i></strong></a>吧！
        </p>
        <p>404 not found.</p>
			  <p>Go back to <a href="/" class="err-home">Home</a></p>
      </main>
    </div>
  </div>   
</template>

<script>
import DeskBanner from "~/components/Desk-Banner";
export default {
  components: {
    DeskBanner
  },
};
</script>
