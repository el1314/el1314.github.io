export async function getDeskpostByPage(queryCollection, collectionName, currentPage, perPage) {
  const query = queryCollection('desk')
  const data = await query.all();

  var allPosts = [];
  for (let i = 0; i < data.length; i++) {
    allPosts = [...allPosts,...data[i].meta.posts];
  }
  allPosts = allPosts.reverse();

  //获取总条目数（带相同过滤条件）
  const totalCount = allPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / perPage));

  //修正页码（防止超出范围）
  const validPage = Math.min(Math.max(currentPage, 1), totalPages);

  //计算跳过条数并获取当前页数据
  const skip = (validPage - 1) * perPage;

  const paginatedPosts = allPosts.slice(skip,skip+perPage)

  return {
    totalPages,
    paginatedPosts,
  }
}