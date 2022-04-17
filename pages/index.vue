<template>
  <div class="main-content">
    <div class="blog-wrap">
      <main class="blog-main">
        <DeskBanner deskOwner="Moonhea"></DeskBanner>
        <p>
          不想看碎碎念？来看看我的<a href="https://moonhea.com/blog"><strong>博客<i class="fa fa-external-link"></i></strong></a>吧！
        </p>
        <DeskPost 
        :url="'/post/'+post.id"
        author="月下不服输" 
        v-for="(post) in posts" 
        :key="post.id"
        :id="post.id" :time="post.time" :content="post.content"
        :link="post.link"
        :picture="post.picture"
        ></DeskPost>
        <Pagination :total="page_total" :perPage="5"></Pagination>
      </main>
    </div>
  </div>
</template>

<script>
import DeskPost from "~/components/Desk-Post.vue";
import DeskBanner from "~/components/Desk-Banner";
import zoompic from "~/plugins/zoompic";
import getDeskpostByPage from "~/utils/getDeskpostByPage";
import Pagination from "~/components/Pagination";

export default {
	layout: "page",
  components: {
    DeskPost,
    Pagination,
    DeskBanner
  },
	async asyncData(context) {
    var deskPosts = await getDeskpostByPage(context.$content, {page:1}, {perPage: 5});
    return {
      posts: deskPosts.paginatedArticles,
      page_total: deskPosts.allArticles.length
    }
  },
  mounted: function(){
    var that = this;
    that.$nextTick(() => {
      //add zoompic for imgs
      zoompic([[".blog-main img",true]]);
    });
  },
  head() {
    return {
      title: "首页",
      meta: [
        { 
          hid: 'description',
          name: 'description',
          content: "Moonhea的微博"
        }
      ]
    }
  }
};
</script>
