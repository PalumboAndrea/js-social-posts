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


/********************************************************************
// 'for each' to associate the list elements with the HTML elements
*********************************************************************/

posts.forEach( (element) => {

    let idPost = element.id;
    
    let post = document.createElement('div');
    post.classList.add('post');
    postList.append(post);

    let postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    post.append(postHeader);

    let postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.append(postMeta);

    let postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');
    postMeta.append(postMetaIcon);
    // da associare ad author ==> image
    let profilePic = document.createElement('img');
    postMetaIcon.append(profilePic);
    profilePic.classList.add('profile-pic');
    if (element.author.image !== null){
        profilePic.setAttribute('src', element.author.image);
    } else {
        let profilePicNull = document.createElement('p');
        profilePicNull.classList.add('profil-pic-null')
        postMetaIcon.append(profilePicNull);
        let initial = element.author.name.split(' ');
        profilePicNull.innerHTML = initial[0].charAt(0) + ' ' + initial[1].charAt(0);
    }
   

    let postMetaData = document.createElement('div');
    postMeta.append(postMetaData);
    postMetaData.classList.add('post-meta__data');
    // da associare ad author ==> name
    let postMetaAuthor = document.createElement('div');
    postMetaAuthor.classList.add('post-meta__author');
    postMetaAuthor.innerHTML = element.author.name;
    // da associare a created
    let postMetaTime = document.createElement('div');
    postMetaData.append(postMetaAuthor, postMetaTime);
    postMetaTime.classList.add('post-meta__time');
    postMetaTime.innerHTML = element.created;

    // da associare a content
    let postText = document.createElement('div');
    post.append(postText);
    postText.classList.add('post__text');
    postText.innerHTML = element.content;
    // da associare a media
    let postImage = document.createElement('div');
    post.append(postImage);
    postImage.classList.add('post__image');
    let image = document.createElement('img');
    postImage.append(image);
    image.setAttribute('src', element.media);


    // PARTE FOOTER
    let postFooter = document.createElement('div');
    post.append(postFooter);
    postFooter.classList.add('post__footer');
    // likes components
        let JSlikes = document.createElement('div');
        postFooter.append(JSlikes);
        JSlikes.classList.add('likes' ,'js-likes');
        
            let likedCTA = document.createElement('div');
            JSlikes.append(likedCTA);
            likedCTA.classList.add('likes__cta');
            
            let likeButton = document.createElement('a');
            likedCTA.append(likeButton);
            likeButton.classList.add('like-button', 'js-like-button');
            
                let likeButtonIcon = document.createElement('i');
                likeButton.append(likeButtonIcon);
                likeButtonIcon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up');
                let likeButtonLabel = document.createElement('span');
                likeButton.append(likeButtonLabel);
                likeButtonLabel.classList.add('like-button__label');
                likeButtonLabel.innerHTML = ' Mi Piace';
            let likeCounterContainer = document.createElement('div');
            JSlikes.append(likeCounterContainer);
            likeCounterContainer.innerHTML = 'Piace a ' + element.likes + ' persone';

            likeButton.addEventListener('click', function(){

                if (likeCounter == 0 && likedPosts.includes(idPost)){
                    
                    likeButtonLabel.classList.remove('like-button--liked');
                    likedPosts[likedPosts.indexOf(idPost)] = 0
                } else if (likedPosts.includes(idPost)){
                    likeCounter--;
                    likeButtonLabel.classList.remove('like-button--liked');
                    likedPosts[likedPosts.indexOf(idPost)] = 0
                } else {
                    likeCounter=0;
                    likeCounter++;
                    likeButtonLabel.classList.add('like-button--liked');
                    likedPosts.push(idPost);
                }

                likeCounterContainer.innerHTML = 'Piace a ' + (element.likes + likeCounter) + ' persone';
                
            });
   
})









