// Search Modal
const searchBtn = document.querySelector(".fa-magnifying-glass");

searchBtn.addEventListener("click", () => {
  document.querySelector(".modal-search").classList.add("active");
});

document.querySelectorAll(".close, section").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".modal-search").classList.remove("active");
  });
});

// Search Bar
const searchBar = document.querySelector(".search input[type='text']");

searchBar.addEventListener("focus", function () {
  this.parentElement.nextElementSibling.style.opacity = "1";
});

searchBar.addEventListener("blur", function () {
  this.parentElement.nextElementSibling.style.opacity = "0";
});

// Accordion Event
const firstContent = document.querySelectorAll(".accordion .content");
firstContent[0].style.display = "block";

const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  title.addEventListener("click", () => {
    document.querySelectorAll(".content").forEach((item) => {
      item.style.display = "none";
    });

    titles.forEach((otherTitle) => {
      if (otherTitle !== title) {
        otherTitle.classList.remove("active");
      }
    });

    let content = title.nextElementSibling;
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

// 이미지 슬라이드를 자동으로 제어하는 함수
function slideImages(selector, direction, speed) {
  const container = document.querySelector(selector);
  const imgElements = container.querySelectorAll("img");
  const totalWidth = container.scrollWidth / 2; // 컨테이너 전체 너비의 절반으로 설정

  let scrollAmount = 0;

  // 슬라이드 복제 (한 번만 수행)
  if (container.dataset.cloned !== "true") {
    imgElements.forEach((img) => {
      const clone = img.cloneNode(true); // 이미지 복제
      container.appendChild(clone); // 복제된 이미지 추가
    });
    container.dataset.cloned = "true"; // 이미 복제된 것으로 설정
  }

  function scrollStep() {
    if (direction === "right") {
      container.scrollLeft += 1; // 오른쪽으로 이동
    } else {
      container.scrollLeft -= 1; // 왼쪽으로 이동
    }
    scrollAmount += 1;

    // 컨테이너가 원래의 전체 너비만큼 스크롤되면, 스크롤 초기화
    if (scrollAmount >= totalWidth) {
      scrollAmount = 0;
      container.scrollLeft = 0;
    }
  }

  setInterval(scrollStep, speed);
}

// 각 슬라이드 박스에 대해 함수 호출
slideImages(".imgbox-01", "right", 20); // 오른쪽으로 이동
slideImages(".imgbox-02", "left", 30); // 왼쪽으로 이동
slideImages(".imgbox-03", "right", 20); // 오른쪽으로 이동

console.log(container.scrollLeft);
