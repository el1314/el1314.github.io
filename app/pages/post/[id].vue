<template>
  <div class="main-content">
    <div class="blog-wrap">
      <main class="blog-main">
        <nuxt-link to="/" class="no-decor-link">
          <DeskBanner deskOwner="江东渚"></DeskBanner>
        </nuxt-link>
        <p>
          不想看碎碎念？来看看我的<a href="https://moonhea.com/blog"><strong>博客<i class="fa fa-external-link"></i></strong></a>吧！
        </p>
        <DeskPost
        :url="'/post/'+post.id"
        author="江东渚" 
        :id="post.id" :time="post.time" :content="post.content"
        :link="post.link"
        :picture="post.picture"
        :isDetail="true"
        ></DeskPost>
        <ClientOnly>
          <ImageZoom ref="imageZoomRef"/>
        </ClientOnly>
        <div id="disqus_thread">
        </div>
      </main>
    </div>
  </div>
</template>


<script setup>
const route = useRoute()

const { data } = await useAsyncData(
  `desk-posts-id-${route.params.id}`, // 缓存键，可自定义
  async () => {
    return await getDeskpostById(queryCollection, route.params.id)
  }
)
const post = data.value.post;

let share_txt = '';
if (post.content) {
  share_txt = post.content.join("");
  share_txt = share_txt.length>97
  ?share_txt.substring(0,97)+"..."
  :share_txt;
}
onMounted(() => {
  //add disqus
  window.PAGE_URL = "https://moonhea.com" + window.location.pathname;
  window.PAGE_IDENTIFIER = window.location.pathname;
  window.disqus_config = function () {
  this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
  };
  (function() { // DON'T EDIT BELOW THIS LINE
  let d = document, s = d.createElement('script');
  s.src = 'https://moonhea.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();
})

definePageMeta( {
  layout: "page",
});

useSeoMeta({
  title: () => `江东渚的碎碎念:${post.time}`,
  date: () => post.time,
  description: () => share_txt,
})
</script>

<style type="text/css">
a#comment-link {
  top: 0px;
}
.blog-desc {
  margin: 10px 0px;
  padding: 10px;
  color: #666;
  background-color: rgba(0,0,0,0.025);
}
#disqus_thread {
  margin-top: 20px;
}
.prev-next {
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
.prev-next a {
  display: block;
}
.prev, .next {
  max-width: 42%;
  color: gray;
  cursor: pointer;
}
.prev {
  text-align: left;
}
.next {
  text-align: right;
}
.prev:hover, .next:hover {
  color: black;
}
.prev-next-arrow {
  font-size: 28px;
}
#comment {
  margin: 40px 0px 0px 0px;
  text-align: center;
}
.loadCommentBtn {
  margin-bottom: 20px;
  cursor: pointer;
  display: inline-block;
}
.loadCommentBtn:hover {
  color: gray;
}
@media all and (max-width: 768px) {
  .nuxt-content h2, .nuxt-content h3, .nuxt-content h4, .nuxt-content h5 {
  	margin: 9px 0px;
  }
  .nuxt-content blockquote{
    margin: 16px 0px;
  }
  .nuxt-content iframe {
    margin: 0px;
  }
  .nuxt-content iframe.youtube {
    margin: 8px auto;
    width: 100%;
  }
  .nuxt-content ul {
  	padding-left: 20px;
  }
  .nuxt-content pre {
  	margin-left: 0px;
  	margin-right: 0px;
  }
  .prev, .next {
    margin: 0px;
  }
  #comment {
    margin: 40px 0px 0px 0px;
  }
}
@media all and (max-width: 539px) {
  .nuxt-content iframe.youtube {
    height: auto;
  }
}
</style>
