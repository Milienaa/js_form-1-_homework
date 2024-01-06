'use strict'

class CommentSection { 
    constructor(comm, user, input, button) {
        this.commentsList = document.querySelector(comm);
        this.usernameInput = document.querySelector(user);
        this.commentInput = document.querySelector(input);
        this.addCommentButton = document.querySelector(button);
    }

    addComment() {
        const username = this.usernameInput.value;
        const commentText = this.commentInput.value;

        if (username && commentText) {
            const currentDate = new Date();
            const dateTimeString = currentDate.toLocaleString();

            const commentItem = document.createElement('li');
            commentItem.innerHTML = `<div id="comments__list-title"><div id="title">${username}</div> <div id="time">${dateTimeString}</div></div> <div id="comments__list-text">${commentText}</div> `;

            this.commentsList.appendChild(commentItem);

            this.usernameInput.value = '';
            this.commentInput.value = '';
        }
    }

    init() {
        this.addCommentButton.addEventListener('click', this.addComment.bind(this));
    }
}

