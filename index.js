const getData = async () => {
	document.getElementById("btn").value = "Loading...";
	if (document.getElementById("btn").value === "Loading...") {
		document.getElementById("loader").setAttribute("class", "loaderClass");
	}
	setTimeout(() => {
		document.getElementById("loader").setAttribute("class", "");
		setTimeout(() => {
			document.getElementById("btn").value = "Search";
		}, 3000);
	}, 3000);

	const link = document.getElementById("inputLink").value;
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "bf3cf04552msh2972ad3072436adp1771d8jsn478315caba36",
			"X-RapidAPI-Host": "youtube-dl4.p.rapidapi.com",
		},
	};

	try {
		const data = await fetch(
			`https://youtube-dl4.p.rapidapi.com/fc8c5416b9cfd8fc?url=${link}`,
			options
		);
		const response = await data.json();
		const video = document.getElementById("video");
		const source = document.getElementById("src");
		source.setAttribute("src", response.formats[0].url);
		video.load();
	} catch (err) {
		console.error(err);
	}
};

const video = document.getElementById("videoContainer");
const srcTag = document.createElement("source");
srcTag.setAttribute(
	"src",
	"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
);
video.appendChild(srcTag);

source.src = `https://rr2---sn-qxoednee.googlevideo.com/videoplayback?expire=1663794683&ei=mykrY_umKseKtQfY0auoBQ&ip=2600%3A1900%3A2000%3Aa4%3A0%3A0%3A0%3A2&id=o-AH5Iq0kN2ndBWJduMlDUcsjLxYQyKcgaQUtS1Ghipjdr&itag=18&source=youtube&requiressl=yes&mh=S_&mm=31%2C29&mn=sn-qxoednee%2Csn-qxo7rn7k&ms=au%2Crdu&mv=u&mvi=2&pl=64&vprv=1&mime=video%2Fmp4&ns=lZfa1eLM8luAeIM6gJzFIooI&gir=yes&clen=18755065&ratebypass=yes&dur=241.510&lmt=1637445679912825&mt=1663772754&fvip=4&fexp=24001373%2C24007246&c=WEB&txp=5538434&n=iq5Jo5s5n--w7g&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRQIgQE6oyo27-y8CkPTo4E_niO0wTPQsOArH-ROvOn8GliMCIQDqaDNY_P9KNvWdTnhPIuPxPoJEXzUUioUEnAsH8W7euA%3D%3D&sig=AOq0QJ8wRQIhALUyPCwcbrUA57Jam5gBbB5HpYx3GD1piFljuG14ye2kAiBfJsGaRtYgss6kwOi-HIRYWvrb3MLKn7bZOKJ9xPocPQ%3D%3D`;

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
