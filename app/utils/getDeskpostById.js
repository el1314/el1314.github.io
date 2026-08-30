export default async (queryCollection,id) => {
  var yearMonth = id.substring(5, 12);
  const query = queryCollection('desk');
  const thisMonth = await query.where('stem', '=', 'desk/'+yearMonth).first();
  var post = {};
  thisMonth.meta.posts.map(function(a) {
    if (a.id == id) {
      post = a;
    }
  });
  return {
    post
  }
}