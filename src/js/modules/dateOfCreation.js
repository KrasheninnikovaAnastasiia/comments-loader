// getting date of comment's creation
function dateOfCreation(commentDate) {
    let currentDate = new Date();
    let date = new Date(commentDate);
    let commentDaysAgo = Math.floor((currentDate - date) / 86400000);

    if (commentDaysAgo < 1) {
        return 'today'; 
    } else if (commentDaysAgo === 1) {
        return '1 day ago';
    } else if (commentDaysAgo > 1 && commentDaysAgo < 31) {
        return `${commentDaysAgo} days ago`;
    } else if (commentDaysAgo > 31 && commentDaysAgo < 61) {
        return '1 month ago';
    } else if (commentDaysAgo > 61 && commentDaysAgo < 365) {
        let months = Math.floor(commentDaysAgo / 31);
        return `${months} months ago`;
    } else if (commentDaysAgo > 365 && commentDaysAgo < 730) {
        return '1 year ago';
    } else {
        let years = Math.floor(commentDaysAgo / 365);
        return `${years} years ago`;
    }
}

export default dateOfCreation;