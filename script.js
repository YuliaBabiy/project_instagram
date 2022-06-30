const postStubEl = document.querySelector('.container');

// const getElheart = document.;
// const likes = document.getElementsByClassName(likes) 


fetch('./posts.json')
.then(response => response.json())
.then(posts => {
    setTimeout(() => {
        const loading = document.querySelector('#loading');
        loading.remove();
        generatePosts(posts);
    }, 5000);
});

function generatePosts(posts) {
    posts.forEach(post => {
        const copyEl = postStubEl.cloneNode(true);
        copyEl.classList.add('visible');

        const copyLikesEl = copyEl.querySelector('.likes');
        copyLikesEl.innerHTML = post.likes;

        const nameEl = copyEl.querySelector('.name');
        nameEl.innerHTML = post.author.name;

        const authorAvatarEl = copyEl.querySelector('.avatar');
        authorAvatarEl.src = post.author.avatarUrl;

        const pictureEl = copyEl.querySelector('.picture');
        pictureEl.src = post.picture;

        const descriptionEl = copyEl.querySelector('.description');
        descriptionEl.innerHTML = post.description;

        document.body.appendChild(copyEl);
        
        if (post.likes > 200) {
            copyEl.classList.add('pink-bg');
        }
    });
}



function deletePost(event) {
    const btn = event.target;
    const postEl = btn.closest('div.container');

    postEl.remove();
}


