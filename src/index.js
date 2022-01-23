import './css/style.css';
import './css/normalize.css';

import createCommentCounter from './js/modules/createCommentCounter';
import createNewComment from './js/modules/createNewComment';
import createPagination from './js/modules/createPagination';
import loadComments from './js/modules/loadComments';
import { currentPage, totalPages } from './js/modules/loadComments';

const form = document.querySelector('.form'),
      pagination = document.querySelector('.pagination'),
      showBtn = document.getElementById('showBtn');

window.addEventListener('DOMContentLoaded', () => {

    createCommentCounter();
    loadComments(1);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        createNewComment();
    });

    let page; 

    showBtn.addEventListener('click', () => {
        if (currentPage !== totalPages) {
            page = currentPage + 1;
        } else {
            page = currentPage;
        }
        createPagination(totalPages, page);
        pagination.classList.remove('hide');
    });
});