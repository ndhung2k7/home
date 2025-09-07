let horizontalIndex = 0;
let verticalPositions = [0, 0];
const hContainer = document.getElementById("hContainer");
const vLeft = document.getElementById("vLeft");
const vRight = document.getElementById("vRight");

function updateTransforms() {
  hContainer.style.transform = `translateX(-${horizontalIndex * 100}vw)`;
  vLeft.style.transform = `translateY(-${verticalPositions[0] * 100}vh)`;
  vRight.style.transform = `translateY(-${verticalPositions[1] * 100}vh)`;
}

let startX = 0, startY = 0;
document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", (e) => {
  let deltaX = e.changedTouches[0].clientX - startX;
  let deltaY = e.changedTouches[0].clientY - startY;
  const atEffect1 = horizontalIndex === 0 && verticalPositions[0] === 0;
  const atEffect2 = horizontalIndex === 1 && verticalPositions[1] === 0;

  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < -50 && atEffect1) horizontalIndex = 1;
    else if (deltaX > 50 && atEffect2) horizontalIndex = 0;
  } else {
    if (horizontalIndex === 0 && deltaY < -50 && verticalPositions[0] === 0) verticalPositions[0] = 1;
    if (horizontalIndex === 1 && deltaY < -50 && verticalPositions[1] === 0) verticalPositions[1] = 1;
  }
  updateTransforms();
});

document.querySelectorAll(".arrow").forEach((arrow, idx) => {
  arrow.addEventListener("click", () => {
    if (idx === 0 && verticalPositions[0] === 0) verticalPositions[0] = 1;
    if (idx === 1 && verticalPositions[1] === 0) verticalPositions[1] = 1;
    updateTransforms();
  });
});

function goToEffectFromBio(bioNum) {
  if (bioNum === 1) {
    horizontalIndex = 1;
    verticalPositions[1] = 0;
  } else {
    horizontalIndex = 0;
    verticalPositions[0] = 0;
  }
  updateTransforms();
}

const quotes1 = [
  "Có người rủ anh đi ăn tối, nhưng anh từ chối vì thực đơn không có em.",
  "Thanh xuân như một tách trà, sống không cà khịa thì quá uổng phí.",
  "Em là mặt trời, vì em xuất hiện là anh thấy chói mắt.",
  "Anh thích em hơn tất cả các dòng code anh từng viết."
];

const quotes2 = [
  "Mỗi lần gặp em, anh thấy như trình duyệt mới mở tab.",
  "Nếu em là bug thì anh nguyện debug cả đời.",
  "Trái tim anh giống như vòng lặp vô tận, không thể thoát khỏi em.",
  "Chạy task nào cũng được, miễn là được chạy bên em."
];

let q1 = 0, q2 = 0;
setInterval(() => {
  q1 = (q1 + 1) % quotes1.length;
  q2 = (q2 + 1) % quotes2.length;
  document.getElementById("quote1").innerText = quotes1[q1];
  document.getElementById("quote2").innerText = quotes2[q2];
}, 5000);

// ⬆️ Thêm chạm vào bất kỳ đâu trong hiệu ứng để tự động chuyển sang bio
["click"].forEach(evt => {
  document.querySelector(".effect1").addEventListener(evt, () => {
    if (verticalPositions[0] === 0) {
      verticalPositions[0] = 1;
      updateTransforms();
    }
  });
  document.querySelector(".effect2").addEventListener(evt, () => {
    if (verticalPositions[1] === 0) {
      verticalPositions[1] = 1;
      updateTransforms();
    }
  });
});

// ✅ Loading tối ưu với canplaythrough
window.addEventListener("load", () => {
  const loader = document.getElementById("loadingScreen");
  const hContainer = document.getElementById("hContainer");
  const videos = [
    document.getElementById("bgVideo1"),
    document.getElementById("bgVideo2")
  ];
  let loadedCount = 0;

  function hideLoader() {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
      hContainer.classList.add("active");
    }, 500);
  }

  videos.forEach(video => {
    video.addEventListener("canplaythrough", () => {
      loadedCount++;
      if (loadedCount === videos.length) {
        hideLoader();
      }
    });
  });

  // fallback nếu video không load được
  setTimeout(hideLoader, 3000);
});
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loadingScreen");
  const videos = [document.getElementById("bgVideo1"), document.getElementById("bgVideo2")];

  let loaded = false;

  videos.forEach(video => {
    if (!video) return;

    video.addEventListener("canplaythrough", () => {
      if (!loaded) {
        loaded = true;
        setTimeout(() => {
          loadingScreen.classList.add("hidden");
        }, 300); // chờ 1 chút để tránh nháy
      }
    });
  });
});
window.addEventListener("load", () => {
  horizontalIndex = 0;
  verticalPositions = [0, 0];
  updateTransforms();
});
