const url = "https://www.reddit.com/r/reactjs/hot.json";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const datas = data.data.children;

    for (x of datas) {
      document.querySelector(
        "#main"
      ).innerHTML += `<h3 style="background-color:var(--roxo)">${x.data.title}</h3>`;
    }
  })
  .catch((e) => console.log(e));
