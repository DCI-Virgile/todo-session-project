const submitSeries = document.querySelector("#submitSeries");
const title = document.querySelector("#title");
const img = document.querySelector("#img");

const submitSeason = document.querySelector("#submitSeason");
const seriesID = document.querySelector("#seriesID");
const seriesRef = document.querySelector("#seriesRef");
const sNum = document.querySelector("#sNum");

const submitEpisode = document.querySelector("#submitEpisode");
const seasonID = document.querySelector("#seasonID");
const seasonRef = document.querySelector("#seasonRef");
const eNum = document.querySelector("#eNum");

const postSeries = () => {
  const ref = title.value
    .split(" ")
    .join("")
    .toLowerCase();
  fetch("/series", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title.value,
      img: ref + ".jpg",
      ref: ref
    })
  });
  console.log("series submited");
};

const postSeason = () => {
  fetch("seasons", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      num: sNum.value,
      ref: `${seriesRef.value}_s${sNum.value}`,
      seriesID: seriesID.value
    })
  });
  console.log("season submited");
};

const postEpisodes = () => {
  fetch("episodes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      num: eNum.value,
      ref: `${seasonRef.value}_e${eNum.value}`,
      vid: `${seasonRef.value}_e${eNum.value}.mp4`,
      seasonID: seasonID.value
    })
  });

  console.log("episodes submited");
};

submitSeries.addEventListener("submit", postSeries);
submitSeason.addEventListener("submit", postSeason);
submitEpisode.addEventListener("submit", postEpisodes);
