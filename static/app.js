const prev = document.querySelector(".prev i"),
    next = document.querySelector(".next i"),
    video = document.querySelector(".video-lab video"),
    play_pause = document.querySelector(".play_pause"),
    text_name = document.querySelector(".name"),
    img_box = document.querySelector(".img");


prev.addEventListener("click", (e) => {
    prevTrack();
    backwrd();
});
next.addEventListener("click", (e) => {
    nextTrack();
    fwrd();
});

// valores globales
let track_index = 0;
let isPlaying = false;

// videos
let curr_track = document.createElement('video');
let track_list = [
    {
        path: "/static/video/1.mp4"
    },
    {
        path: "/static/video/2.mp4"
    },
    {
        path: "/static/video/3.mp4"
    },
];
let track = [
    "/static/video/1.mp4",
    "/static/video/2.mp4",
    "/static/video/3.mp4"
]
let radome_track = track[Math.floor(Math.random() * track.length)];
window.onload = (e) => {
    video.src = radome_track;
}


loadTrack(track_index);


function loadTrack(track_index) {
    // nuevo track
    video.src = track_list[track_index].path;
    curr_track.load(); //primer track
    curr_track.addEventListener("ended", nextTrack);
}
function playpauseTrack() {

    if (!isPlaying) playTrack();
    else pauseTrack();
}
video.addEventListener("click", e => {
    pauseTrack();
    console.log(e);
});
// pausa track
function pauseTrack() {

    video.pause();
    isPlaying = false;
    play_pause.classList.add("show");
    play_pause.innerHTML = "<i class='bx bx-play' ></i>";

    setTimeout(() => {
        video.play();
        isPlaying = true;
        play_pause.innerHTML = "<i class='bx bx-pause' ></i>";
    }, 1000);

    setTimeout(() => {
        play_pause.classList.remove("show");
    }, 1300);
}
function nextTrack() {

    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;


    loadTrack(track_index);
    playTrack();
}
function prevTrack() {

    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length;


    loadTrack(track_index);
    playTrack();
}
function playTrack() {

    curr_track.play();
    isPlaying = true;
}
function backwrd() {

    idArray = new Array()
    idArray[1] = "@techno_logy"
    idArray[2] = "@tech_videos"
    idArray[3] = "@Meta_verse"

    randomParagraph = Math.floor(Math.random() * 3);

    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: #24eff2'></i>";
}
function fwrd() {

    idArray[1] = "@techno_logy"
    idArray[2] = "@tech_videos"
    idArray[3] = "@Meta_verse"

    randomParagraph = Math.floor(Math.random() * 3);

    text_name.innerHTML = idArray[randomParagraph + 1] + "<i class='bx bxs-check-circle' style='color: #24eff2'></i>";
}
img_box.addEventListener("click", (e) => {
    console.log(e);
    img_box.classList.add("followed");

    setTimeout(() => {
        img_box.classList.add("fade");
    }, 1400);
});