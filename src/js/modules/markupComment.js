// creating a div with comment body
function markupComment(photo, name, text, date) {
    const commentBody = document.createElement('div');
    commentBody.classList.add('comment-body');
    commentBody.innerHTML = `
            <img src=${photo} alt=${name}> 
            <div class="user-info">
                <div class="user-info__header">
                    <h4>${name}</h4>
                    <div class="days-ago">${date}</div>
                </div>
                <p>${text}</p>
    `;
    return commentBody;
}

export default markupComment;