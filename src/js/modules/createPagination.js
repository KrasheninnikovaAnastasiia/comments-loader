//creating of pagination list
import loadComments from "./loadComments";

const paginationUl = document.querySelector('.pagination ul');

window.createPagination = function createPagination(totalPages, page) {
    let liTag = '';
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;

    //show the next button
    if (page > 1) { 
        liTag += `
            <li class="prev" onclick="createPagination(${totalPages}, ${page - 1})">
                <span><i class="fas fa-angle-left"></i></span>
            </li>
        `;
    }
    
    //add 1 after the previous button
    if (page > 2) { 
        liTag += `
            <li class="first" onclick="createPagination(${totalPages}, 1)"><span>1</span></li>
        `;
    }   
     
    //add (...)   
    if (page > 3) { 
        liTag += `<li class="dots"><span>...</span></li>`;
    }
    

    //pages to show before the current page
    if (page == totalPages) {
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }

    //pages to show after the current page
    if (page == 1) {
        afterPage = afterPage + 2;
    } else if (page == 2) {
        afterPage  = afterPage + 1;
    }

    for (let plength = beforePage; plength <= afterPage; plength++) {
        if (plength > totalPages) {
            continue;
        }

        if (plength == 0) { 
            plength = plength + 1;
        }

        //add active class in the active global variable for current page
        if (page == plength) { 
            active = "active";
        } else { 
            active = ''; 
        }

        liTag += `
            <li class="${active}" onclick="createPagination(${totalPages}, ${plength})">
                <span>${plength}</span>
            </li>
        `;
    }
    
    //show the last page
    if (page < totalPages - 1) { 
        if (page < totalPages - 2) { 
            //add (...) before the last page
            liTag += `<li class="dots"><span>...</span></li>`;
        }

        liTag += `
            <li class="last" onclick="createPagination(${totalPages}, ${totalPages})">
                <span>${totalPages}</span>
            </li>
        `;
    }

    //show the next button
    if (page < totalPages) {      
        liTag += `
            <li class="next" onclick="createPagination(${totalPages}, ${page + 1})">
                <span><i class="fas fa-angle-right"></i></span>
            </li>
        `;
    }

    paginationUl.innerHTML = liTag; //add li to ul 
    loadComments(page);
    return liTag;
}

export default createPagination;