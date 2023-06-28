let menu = document.querySelector("#side-menu");
let sideBar = document.querySelector(".side-bar");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  sideBar.classList.remove("active");
};

let popup = document.querySelector(".popup-image");

popup.onclick = () => {
  popup.style.display = "none";
};

let images = document.querySelectorAll(".image-container img");

images.forEach((img) => {
  img.onclick = () => {
    var imgSrc = img.getAttribute("src");
    popup.style.display = "flex";
    popup.querySelector("img").src = imgSrc;
  };
});

document.querySelector("#search-box").oninput = () => {
  var value = document.querySelector("#search-box").value.toLowerCase();
  images.forEach((img) => {
    var dataSearch = img.getAttribute("data-search");
    if (dataSearch.indexOf(value) > -1) {
      img.style.display = "inline-block";
    } else {
      img.style.display = "none";
    }
  });
};

let categoryBtn = document.querySelectorAll(".category .btn");

categoryBtn.forEach((btn) => {
  btn.onclick = () => {
    categoryBtn.forEach((remove) => remove.classList.remove("active"));
    dataCategory = btn.getAttribute("data-category");
    images.forEach((img) => {
      var dataCat = img.getAttribute("data-cat");
      if (dataCategory == "all") {
        img.style.display = "inline-block";
      } else if (dataCategory == dataCat) {
        img.style.display = "inline-block";
      } else {
        img.style.display = "none";
      }
    });
    btn.classList.add("active");
  };
});
