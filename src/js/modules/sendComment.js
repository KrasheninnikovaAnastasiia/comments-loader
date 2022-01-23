// sending comment to API
function sendComment(values) {
    return fetch(
        `https://jordan.ashton.fashion/api/goods/30/comments`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(values)
        }
    );
} 

export default sendComment;