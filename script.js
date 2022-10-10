const videosContainer = document.getElementById("videosContainer");
const videoIdInput = document.getElementById("videoId");

let YoutubeVideoIds = [];

//localStorage.setItem(	"youTubeVideosIds",	JSON.stringify(["9C74_r0gui8", "-05032hchis"])

const loadVideos = () => {
	YoutubeVideoIds = JSON.parse(localStorage.getItem("youTubeVideoIds")) || [];
	//YoutubeVideoIds = ["9C74_r0gui8", "-05032hchis"];
};

const displayVideos = () => {
	//for (let i = 0; i < YoutubeVideoIds.length; i++)
	const videosHTMLString = YoutubeVideoIds.map(
		(id) => `
        <li onclick = "clickVideo(event, '${id}')">
            <img class="thumnail" src="https://i3.ytimg.com/vi/${id}/sddefault.jpg" alt="Cover image for YouTube video with id ${id}">
            <button class="delete-btn" >&times;</button>
        </li>
    `
	).join("");
	videosContainer.innerHTML = videosHTMLString;
};

const saveVideo = (e) => {
	e.preventDefault();
	const videoId = videoIdInput.value;
	videoIdInput.value = "";
	YoutubeVideoIds.unshift(videoId);
	localStorage.setItem("youTubeVideoIds", JSON.stringify(youTubeVideoIds));
	displayVideos();
};

loadVideos();
displayVideos();
