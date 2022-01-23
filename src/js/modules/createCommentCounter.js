//creating of Comment Counter
import getComments from './getComments';

const responseContainer = document.querySelector('.response-container');

async function createCommentCounter() {
    const response = await getComments(1);
    const res  = await response.json();
    const totalComments = res.total;

    const counter = document.createElement('h3');
    counter.classList.add('response-counter');

    counter.innerText = `${totalComments} responses`;

    responseContainer.innerHTML = '';
    responseContainer.prepend(counter);
}

export default createCommentCounter;