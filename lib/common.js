// 또는 순수 JavaScript로도 동일하게 구현할 수 있습니다
function getTodayDate() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

// 순수 JavaScript를 사용한 더 간단한 방법
function getTodayDateTime() {
  const now = new Date();
  return now.toISOString().slice(0, 19).replace("T", " ");
}

function showNotification(message, type) {
  // 기존 오버레이 제거
  const existingOverlay = document.querySelector(".clipboard-overlay");
  if (existingOverlay) {
    existingOverlay.remove();
  }

  // 오버레이 생성
  const overlay = document.createElement("div");
  overlay.className = `clipboard-overlay ${type}`;

  // 메시지 컨테이너 생성
  const messageContainer = document.createElement("div");
  messageContainer.className = `clipboard-message ${type}`;

  // 아이콘 설정
  const icon = type === "success" ? "✅" : "❌";

  // 메시지 내용 설정
  messageContainer.innerHTML = `
        <span class="icon">${icon}</span>
        <span class="text">${message}</span>
    `;

  // 구조 조립
  overlay.appendChild(messageContainer);
  document.body.appendChild(overlay);

  // 강제 리플로우
  overlay.offsetHeight;

  // show 클래스 추가
  requestAnimationFrame(() => {
    overlay.classList.add("show");
    messageContainer.classList.add("show");
  });

  // 일정 시간 후 제거
  setTimeout(() => {
    overlay.classList.add("hide");
    messageContainer.classList.add("hide");

    setTimeout(() => {
      overlay.remove();
    }, 300); // 트랜지션 완료 후 제거
  }, 1500); // 1.5초 표시
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand("copy");
    if (successful) {
      showNotification("클립보드 복사 완료!", "success");
    } else {
      showNotification("클립보드 복사 실패", "error");
    }
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
    showNotification("클립보드 복사 실패", "error");
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }

  navigator.clipboard.writeText(text).then(
    function () {
      showNotification("클립보드 복사 완료!", "success");
    },
    function (err) {
      console.error("🚩 클립보드 복사 실패 : ", err);
      showNotification("클립보드 복사 실패", "error");
    }
  );
}
