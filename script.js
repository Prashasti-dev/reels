const reels = [
  {
    username: "travelwithanaya",
    likeCount: 12450,
    isLiked: true,
    commentCount: 320,
    caption: "Sunsets hit different when you’re somewhere new 🌅",
    video: "./video/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 210,
    isFollowed: false
  },
  {
    username: "foodie_ravi",
    likeCount: 8920,
    isLiked: true,
    commentCount: 180,
    caption: "Street food supremacy 😋🔥",
    video: "./video/vdo2.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 95,
    isFollowed: true
  },
  {
    username: "fitwithneha",
    likeCount: 15600,
    isLiked: false,
    commentCount: 410,
    caption: "Consistency > Motivation 💪",
    video: "./video/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/68.jpg",
    shareCount: 330,
    isFollowed: false
  },
  {
    username: "techbyarjun",
    likeCount: 4300,
    isLiked: false,
    commentCount: 75,
    caption: "This shortcut changed my workflow 🚀",
    video: "/video/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/76.jpg",
    shareCount: 60,
    isFollowed: false
  },
  {
    username: "dailyvlogs_isha",
    likeCount: 9850,
    isLiked: true,
    commentCount: 265,
    caption: "A normal day but make it aesthetic ✨",
    video: "/video/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 140,
    isFollowed: true
  },
  {
    username: "musicwithsam",
    likeCount: 20300,
    isLiked: false,
    commentCount: 560,
    caption: "Headphones on, world off 🎧",
    video: "/video/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/21.jpg",
    shareCount: 480,
    isFollowed: false
  },
  {
    username: "artsy_mira",
    likeCount: 6750,
    isLiked: false,
    commentCount: 120,
    caption: "Trust the process 🎨",
    video: "/video/video6.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/34.jpg",
    shareCount: 88,
    isFollowed: false
  },
  {
    username: "codingwithjay",
    likeCount: 11200,
    isLiked: true,
    commentCount: 290,
    caption: "DSA is hard until it clicks 😄",
    video: "https://www.pexels.com/download/video/35194304/",
    userprofile: "https://randomuser.me/api/portraits/men/55.jpg",
    shareCount: 190,
    isFollowed: true
  },
  {
    username: "fashionbyriya",
    likeCount: 17800,
    isLiked: false,
    commentCount: 340,
    caption: "Simple outfits > loud trends 👗",
    video: "https://www.pexels.com/download/video/35120301/",
    userprofile: "https://randomuser.me/api/portraits/women/9.jpg",
    shareCount: 260,
    isFollowed: false
  },
  {
    username: "natureframes",
    likeCount: 25400,
    isLiked: true,
    commentCount: 620,
    caption: "Just nature doing its thing 🌿",
    video: "./video/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/5.jpg",
    shareCount: 540,
    isFollowed: true
  }
];

let sum='';
reels.forEach(function(elem){
    // console.log(elem.commentCount);
    sum=sum+`<div class="reel">
                  <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                        <h4 class="like-icon icon" style="color:${elem.isLiked ? 'red' : 'white'};">
                              ${elem.isLiked ? '<i class="like ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>'}
                          </h4>
                             <h6>${elem.likeCount}</h6>
                        </div>
                    <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-ai-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                          <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>0
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})
console.log(sum);

let allreels=document.querySelector('.all-reels');
allreels.innerHTML=sum;