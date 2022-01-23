// fetching a page of comments
function getComments(page) {
    return fetch(`https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`);
} 

export default getComments;