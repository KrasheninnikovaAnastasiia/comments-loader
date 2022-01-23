// creating of new comment 
import sendComment from "./sendComment";
import createCommentCounter from "./createCommentCounter";

const userName = document.getElementById('name-input'),
      commentText = document.getElementById('comment');

async function createNewComment() {
    let values = {
        "name": userName.value,
        "text": commentText.value
    }

    // verify sending of comments to API
    try {
        const response = await sendComment(values);
        const res = await response.json();
        alert(`Successfully send a message: code ${res}`);
    } catch (e) {
        alert(`Failed to send a message: ${e}`);
    }

    //clear form fields after submit
    userName.value = '';
    commentText.value = '';

    createCommentCounter();
}

export default createNewComment;