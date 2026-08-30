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
        v-for="(post) in posts" 
        :key="post.id"
        :id="post.id" :time="post.time" :content="post.content"
        :link="post.link"
        :picture="post.picture"
        @open-gallery="handleOpenGallery"
        >
        </DeskPost>
        <!-- 全局图片放大组件（仅客户端渲染） -->
        <ClientOnly>
          <ImageZoomList ref="imageZoomRef" />
        </ClientOnly>
        <AppPagination :totalPages="totalPages" :currentPage="currentPage" :perPage="5"></AppPagination>
      </main>
    </div>
  </div>   
</template>

<script setup>
// import zoompic from "~/plugins/zoompic";

// 1. 获取当前页码（从路由参数）
const route = useRoute()
const currentPage = computed(() => parseInt(route.params.page) || 1);
const perPage = 5

const { data } = await useAsyncData(
  // 唯一的缓存键（包含页码，确保切换页面时重新获取）
  `desk-posts-page-${currentPage.value}`,
  async () => {
    return await getDeskpostByPage(queryCollection, 'desk', currentPage.value, perPage)
  },
  {watch: [currentPage]}
)
const posts = computed(() => data.value?.paginatedPosts || [])
const totalPages = data.value.totalPages

const imageZoomRef = ref(null)
function handleOpenGallery(pictures, index) {
  imageZoomRef.value?.openGallery(pictures, index)
}

definePageMeta( {
  layout: "page",
});

useSeoMeta({
  title: () => `江东渚的碎碎念|第${currentPage.value}页`,
  description: () => "江东渚的碎碎念",
})
</script>
