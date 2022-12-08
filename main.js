const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let postList = document.getElementById('container');

let likeCounter = 0;

let likedPosts = [];

function createEl (HTMLElementToCreate, className = '', parentElement){
    let newElement = document.createElement(HTMLElementToCreate);
    newElement.className = className;
    parentElement.append(newElement);
    return newElement;
}

/********************************************************************
// 'for each' to associate the list elements with the HTML elements
*********************************************************************/

posts.forEach( (element) => {

    // in this way I can visualize the date in Italian format:
    let fixDate = element.created.split('-');
    fixDate = fixDate[2] + '-' + fixDate[1] + '-' + fixDate[0];

    let post = createEl('div', 'post', postList);

    let postHeader = createEl('div', 'post__header', post);

    let postMeta = createEl('div', 'post-meta', postHeader);

    let postMetaIcon = createEl('div', 'post-meta__icon', postMeta);

    // associated to author.image
    let profilePic = createEl('img', 'profile-pic', postMetaIcon);
    if (element.author.image !== null){
        profilePic.setAttribute('src', element.author.image);
    } else {
        let profilePicNull = createEl('p', 'profil-pic-null', postMetaIcon);
        let initial = element.author.name.split(' ');
        profilePicNull.innerHTML = initial[0].charAt(0) + ' ' + initial[1].charAt(0);
    }

    let postMetaData = createEl('div', 'post-meta__data', postMeta);

    // associated to author.name
    let postMetaAuthor = createEl('div', 'post-meta__author', postMetaData);
    postMetaAuthor.innerHTML = element.author.name;
    // associated to created
    let postMetaTime = createEl('div', 'post-meta__time', postMetaData);
    postMetaTime.innerHTML = fixDate;

    // associated to content
    let postText = createEl('div', 'post__text', post);
    postText.innerHTML = element.content;
    // associated to  media
    let postImage = createEl('div', 'post__image', post);
    let image = createEl('img', 'post__image', postImage);
    image.setAttribute('src', element.media);

    // FOOTER PART
    let postFooter = createEl('div', 'post__footer', post);
    // likes components
        let JSlikes = createEl('div', 'likes js-likes', postFooter);
        
            let likedCTA = createEl('div', 'likes__cta', JSlikes);
            let likeButton = createEl('a', 'like-button js-like-button', likedCTA);
                let likeButtonIcon = createEl('i', 'like-button__icon fas fa-thumbs-up', likeButton);
                let likeButtonLabel = createEl('span', 'like-button__label', likeButton);
                likeButtonLabel.innerHTML = ' Mi Piace';
            let likeCounterContainer = createEl('div', '', JSlikes);
            likeCounterContainer.innerHTML = 'Piace a ' + element.likes + ' persone';

            likeButton.addEventListener('click', function(){
                if (likeCounter == 0 && likedPosts.includes(element.id)){
                    likeButtonLabel.classList.remove('like-button--liked');
                    likedPosts[likedPosts.indexOf(element.id)] = 0
                } else if (likedPosts.includes(element.id)){
                    likeCounter--;
                    likeButtonLabel.classList.remove('like-button--liked');
                    likedPosts[likedPosts.indexOf(element.id)] = 0
                } else {
                    likeCounter=0;
                    likeCounter++;
                    likeButtonLabel.classList.add('like-button--liked');
                    likedPosts.push(element.id);
                }
                likeCounterContainer.innerHTML = 'Piace a ' + (element.likes + likeCounter) + ' persone';
            });
})









