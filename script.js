const reels = [
  {
    username: "travelwithanaya",
    likeCount: 12450,
    isLiked: true,
    isComment: true,
    commentCount: 320,
    caption: "Sunsets hit different when you’re somewhere new 🌅",
    video: "./video/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 210,
    isShared:false,
    isFollowed: false
  },
  {
    username: "foodie_ravi",
    likeCount: 8920,
    isLiked: true,
    commentCount: 180,
    isComment: false,
    caption: "Street food supremacy 😋🔥",
    video: "https://www.pexels.com/download/video/35043783/",
    userprofile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 95,
    isShared:true,
    isFollowed: true
  },
  {
    username: "fitwithneha",
    likeCount: 15600,
    isLiked: false,
    isComment: true,
    commentCount: 410,
    caption: "Consistency > Motivation 💪",
    video: "./video/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/68.jpg",
    shareCount: 330,
    isShared:false,
    isFollowed: false

  },
  {
    username: "techbyarjun",
    likeCount: 4300,
    isLiked: false,
    isComment: true,
    commentCount: 75,
    caption: "This shortcut changed my workflow 🚀",
    video: "/video/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/76.jpg",
    shareCount: 60,
    isShared:true,
    isFollowed: false
  },
  {
    username: "dailyvlogs_isha",
    likeCount: 9850,
    isLiked: true,
    commentCount: 265,
    isComment: false,
    caption: "A normal day but make it aesthetic ✨",
    video: "/video/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 140,
    isShared:true,
    isFollowed: true
  },
  {
    username: "musicwithsam",
    likeCount: 20300,
    isLiked: false,
    isComment: false,
    commentCount: 560,
    caption: "Headphones on, world off 🎧",
    video: "/video/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/21.jpg",
    shareCount: 480,
    isShared:true,
    isFollowed: false
  },
  {
    username: "artsy_mira",
    likeCount: 6750,
    isLiked: false,
    commentCount: 120,
    isComment: true,
    caption: "Trust the process 🎨",
    video: "/video/video6.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/34.jpg",
    shareCount: 88,
    isShared:false,
    isFollowed: false
  },
  {
    username: "codingwithjay",
    likeCount: 11200,
    isLiked: true,
    commentCount: 290,
    isComment: false,
    caption: "DSA is hard until it clicks 😄",
    video: "https://www.pexels.com/download/video/35194304/",
    userprofile: "https://randomuser.me/api/portraits/men/55.jpg",
    shareCount: 190,
    isShared:true,
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
let allreels=document.querySelector('.all-reels');

function addData(){
  let sum='';
reels.forEach(function(elem,idx){
    // console.log(elem.commentCount);
    sum=sum+`<div class="reel">
                  <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id="${idx}" class='follow'>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like">
                        <h4 class="like-icon icon" style="color:${elem.isLiked ? 'red' : 'white'};">
                              ${elem.isLiked ? '<i class="like ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>'}
                          </h4>
                             <h6>${elem.likeCount}</h6>
                        </div>
                    <div id="${idx}" class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-ai-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                          <div id="${idx}" class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})


allreels.innerHTML=sum;
}
addData();

allreels.addEventListener('click',function(dets){
// if( !reels[dets.target.id].isLiked){
//   reels[dets.target.id].likeCount++;
//   reels[dets.target.id].isLiked=true;
// }else{
//    reels[dets.target.id].likeCount--;
//   reels[dets.target.id].isLiked=false;
// }

if(dets.target.className== 'like'){
  if( !reels[dets.target.id].isLiked){
  reels[dets.target.id].likeCount++;
  reels[dets.target.id].isLiked=true;
}else{
   reels[dets.target.id].likeCount--;
  reels[dets.target.id].isLiked=false;
}
}

if(dets.target.className=='follow'){
  if(!reels[dets.target.id].isFollowed){
    reels[dets.target.id].isFollowed=true;
  }
  else{
    reels[dets.target.id].isFollowed=false;
  }
}


if(dets.target.className=='comment'){
  if(!reels[dets.target.id].isComment){
  reels[dets.target.id].commentCount++;
  reels[dets.target.id].isComment=true;
}else{
   reels[dets.target.id].commentCount--;
  reels[dets.target.id].isComment=false;
}
}
if(dets.target.className=='share'){
  if(!reels[dets.target.id].isShared){
  reels[dets.target.id].shareCount++;
  reels[dets.target.id].isShared=true;
}else{
   reels[dets.target.id].shareCount--;
  reels[dets.target.id].isShared=false;
}
}

  addData()
  
})