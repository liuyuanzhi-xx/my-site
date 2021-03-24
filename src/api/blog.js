import request from "./request.js"

/**
 * 获取博客分类
 */
export async function getBlogTypes() {
    return await request.get("/api/blogtype");
}
/**
 * 
 * 分页获取博客
 */
export async function getBlogs(categoryid = -1, page = 1, limit = 10) {
    return await request.get(`/api/blog`, {
        params: {
            page,
            limit,
            categoryid,
        }
    })
}
/**
 * 获取单个博客
 */
export async function getBlogDetail(detailId) {
    return await request.get(`/api/blog/${detailId}`)

}
/**
 * 
 * 提交评论
 */
export async function submitComment(commentInfo) {
    return await request.post(`/api/comment`, commentInfo)

}
/**
 * 分页获取评论
 */
export async function getComment(page = 1, limit = 10, blogId = -1, keyword = "") {
    return await request.get(`/api/comment`, {
        params: {
            page,
            limit,
            blogId,
            keyword
        }
    })
}