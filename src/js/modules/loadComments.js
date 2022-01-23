// downloading current page with comments
import getComments from './getComments';
import dateOfCreation from './dateOfCreation';
import markupComment from './markupComment';

const commentsContainer = document.getElementById('comments-container');
const noUserPhoto = "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png";

let currentPage;
let totalPages;

async function loadComments(page) {
    const response = await getComments(page);
    const res  = await response.json();
    const data = res.data;
    let creationDate;
    let commentBody;

    let i = 1;
    data.forEach(user => {
        creationDate = dateOfCreation(user.created_at);

        commentBody = markupComment(noUserPhoto, user.name, user.text, creationDate);
        commentsContainer.append(commentBody);
        i++
    });

    currentPage = res.current_page;
    totalPages = res.last_page;

    if (currentPage === totalPages) {
        showBtn.classList.add('hide');
    } else {
        showBtn.classList.remove('hide');
    }
}

export default loadComments;
export { currentPage, totalPages};