"use strict";

const videotemplate = document.querySelector("[data-video-template]");

const content = document.querySelector(".content");

const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const appContainer = document.querySelector(".app-container");

const player = document.querySelector(".player1");

const logo = document.querySelector(".yt-logo");

const videotitle = document.querySelector(".video-title");

const dataAll = [
  {
    name: "A day at pool",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/vlog1.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
    path: "a day at tubwell.mp4",
  },
  {
    name: "Enjoying at tubewell",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/Enjoying at tubewell.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
    path: "enjoying at tubwell.mp4",
  },
  {
    name: "A day at gym",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/yt.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
  },
  {
    name: "A day at gym",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/yt.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
  },
  {
    name: "A day at gym",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/yt.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
  },
  {
    name: "A day at gym",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/yt.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
  },
  {
    name: "A day at gym",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/yt.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
  },
  {
    name: "A day at gym",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/yt.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
  },
  {
    name: "A day at gym",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/yt.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
  },
  {
    name: "A day at gym",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/yt.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
  },
  {
    name: "A day at gym",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/yt.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
  },
  {
    name: "A day at gym",
    channelName: "MohsinVlogs",
    thubnail: "<img src='img/yt.png' alt='img'>",
    channelLogo: "<img src='img/acc.gif' alt='img'>",
  },
];

//

dataAll.forEach((data) => {
  const video = videotemplate.content.cloneNode(true).children[0];
  const thubnail = video.querySelector("[data-header]");
  const channelLogo = video.querySelector("[data-channel]");
  const channelName = video.querySelector("[data-channel-name]");
  const name = video.querySelector("[data-name]");

  thubnail.insertAdjacentHTML("beforeend", data.thubnail);
  name.textContent = data.name;
  channelName.textContent = data.channelName;
  channelLogo.insertAdjacentHTML("beforeend", data.channelLogo);
  content.append(video);
  data.element = video;
});

// searching logic

searchBtn.addEventListener("click", function (e) {
  const value = searchBar.value.toLowerCase();

  dataAll.forEach((data) => {
    const isVisible = data.name.toLocaleLowerCase().includes(value);
    data.element.classList.toggle("hide", !isVisible);
  });
});

content.addEventListener("click", function (e) {
  //
  appContainer.classList.add("hide");
  player.classList.remove("hide");

  // player.insertAdjacentHTML(
  //   "beforebegin",
  //   "<button class='back-btn'> &larr; </button>"
  // );

  const videoName = e.target
    .closest(".video")
    ?.querySelector(".vName").textContent;
  dataAll.forEach((data) => {
    if (data.name === videoName) {
      if (player.children[0] === document.getElementById("player")) return;
      player.insertAdjacentHTML(
        "afterbegin",
        `<video id="player" playsinline controls data-poster="/path/to/poster.jpg">
        <source
          class="video-player"
          src= 'videos/${data.path}'
          type="video/mp4"
        />
      </video>`
      );
      videotitle.textContent = videoName;
    }
  });
});

// back
const backBtn = document.querySelector(".back-btn");

const back = function () {
  appContainer.classList.remove("hide");
  player.classList.add("hide");

  console.log(backBtn.parentElement.children[0].remove());
};

backBtn.addEventListener("click", back);
logo.addEventListener("click", back);
// logo animation

const logoAnimator = function () {
  logo.setAttribute("src", `img/${this}`);
};
logo.addEventListener("mouseover", logoAnimator.bind("Mv 1.png"));
logo.addEventListener("mouseout", logoAnimator.bind("mv 2.png"));
