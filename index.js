
const posts = [
    {
        name: "Uchiha Sadara",
        username: "iwabee457",
        location: "Konoha, Land of Fire",
        avatar: "images/sadara.jpeg",
        post: "images/naruto-hokage.jpeg",
        comment: "i want to be strong as lord seventh",
        likes: 204
    },
    {
        name: " Akimichi Chocho",
        username: "mitsuki2109",
        location: "Komokagure, Land of Lightning",
        avatar: "images/chocho.webp",
        post: "images/boruto-sadara.jpeg",
        comment: "they look like couples tbh",
        likes: 136
    },
        {
        name: "Kaminarimon Denki",
        username: "shikadai1735",
        location: "Konoha, Land of Fire",
        avatar: "images/Denki.webp",
        post: "images/denki-bot.webp",
        comment: "this is a drag, but i have to congratulate my friend denki on building this. Tech is the future of konoha WAGMI!",
        likes: 437
    }
]


const mainElement = document.querySelector('main');


posts.forEach((post) => {
  
  const section = document.createElement('section');
  section.classList.add(post.username);

  const profileDiv = document.createElement('div');
  profileDiv.classList.add('profile');

  const avatarImg = document.createElement('img');
  avatarImg.classList.add('avatar');
  avatarImg.src = post.avatar;
  avatarImg.classList.add('post-profile');
  profileDiv.appendChild(avatarImg);

  const nameLocationDiv = document.createElement('div');
  nameLocationDiv.classList.add('name-location');

  const nameP = document.createElement('p');
  nameP.classList.add('name');
  nameP.textContent = post.name;
  nameLocationDiv.appendChild(nameP);

  const locationP = document.createElement('p');
  locationP.classList.add('location');
  locationP.textContent = post.location;
  nameLocationDiv.appendChild(locationP);

  profileDiv.appendChild(nameLocationDiv);

  section.appendChild(profileDiv);

  const postImg = document.createElement('img');
  postImg.classList.add('post');
  postImg.src = post.post;
  section.appendChild(postImg);

  const iconSectionDiv = document.createElement('div');
  iconSectionDiv.classList.add('icon-section');

  const iconDiv = document.createElement('div');
  iconDiv.classList.add('icon');

  const likeIcon = document.createElement('img');
  likeIcon.id = 'like-btn';
  likeIcon.classList.add('like-icon');
  likeIcon.src = 'images/like.png';
  iconDiv.appendChild(likeIcon);

  const commentIcon = document.createElement('img');
  commentIcon.classList.add('comment-icon');
  commentIcon.src = 'images/comment.png';
  iconDiv.appendChild(commentIcon);

  const shareIcon = document.createElement('img');
  shareIcon.classList.add('share-icon');
  shareIcon.src = 'images/send.png';
  iconDiv.appendChild(shareIcon);

  iconSectionDiv.appendChild(iconDiv);

  const likeCommentDiv = document.createElement('div');
  likeCommentDiv.classList.add('like-comment');

  const likeCountP = document.createElement('p');
  likeCountP.id = 'like-count';
  likeCountP.classList.add('like');
  likeCountP.textContent = `${post.likes} likes`;
  likeCommentDiv.appendChild(likeCountP);

  const handleP = document.createElement('p');
  handleP.classList.add('handle');
  handleP.textContent = `${post.username} `;
  const handleSpan = document.createElement('span');
  handleSpan.textContent = post.comment;
  handleP.appendChild(handleSpan);
  likeCommentDiv.appendChild(handleP);

  iconSectionDiv.appendChild(likeCommentDiv);

  section.appendChild(iconSectionDiv);

  mainElement.appendChild(section);

  const currentLikeIcon = section.querySelector('.like-icon');
  currentLikeIcon.addEventListener('click', () => {
    
    if (currentLikeIcon.classList.contains('liked')) {
      post.likes--;
      currentLikeIcon.classList.remove('liked');
      currentLikeIcon.setAttribute('src', 'images/like.png');
    } else {

      post.likes++;
      currentLikeIcon.classList.add('liked');
      currentLikeIcon.setAttribute('src', 'images/red-like.png');
    }

    
    const currentLikeCountElement = currentLikeIcon
      .closest('.icon-section')
      .querySelector('.like');
    currentLikeCountElement.textContent = `${post.likes} like${
      post.likes !== 1 ? 's' : ''
    }`;
  });
});

