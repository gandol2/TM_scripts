var _cssText = `  
  <style type="text/css">
    
#wrap_baruda {
	position: fixed;
	right: 10px;
	bottom: 10px;
	border: 2px solid #5086f7;
	z-index: 999 !important;
	padding: 3px;
	background: white;
	display: flex;
	flex-direction: column;
	gap: 5px;
	
}



.btn {
	display: inline-block;
	font-weight: 400;
	color: #212529;
	text-align: center;
	vertical-align: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: 0.375em 0.75em;
	font-size: 1em;
	line-height: 1.5;
	border-radius: 0.25em;
	transition:
		color 0.15s ease-in-out,
		background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out,
		box-shadow 0.15s ease-in-out;
}
.btn:hover {
	color: #212529;
	text-decoration: none;
}

.btn-sm {
    padding: 0.25em 0.5em;
    font-size: 0.875em;
    line-height: 1.5;
    border-radius: 0.2em;
}

.btn-xs {
    padding: 0.15em 0.4em;
    font-size: 0.75em;
    line-height: 1.5;
    border-radius: 0.15em;
}

.btn-primary {
	color: #fff;
	background-color: #007bff;
	border-color: #007bff;
}
.btn-primary:hover {
	color: #fff;
	background-color: #0069d9;
	border-color: #0062cc;
}
.btn-primary:focus {
	box-shadow: 0 0 0 0.2em rgba(38, 143, 255, 0.5);
}
.btn-primary:not(:disabled):not(.disabled):active {
	color: #fff;
	background-color: #0062cc;
	border-color: #005cbf;
}
.btn-primary:not(:disabled):not(.disabled):active:focuss {
	box-shadow: 0 0 0 0.2em rgba(38, 143, 255, 0.5);
}


/* 녹색 버튼 */
.btn-success {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}
.btn-success:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
}
.btn-success:focus {
    box-shadow: 0 0 0 0.2em rgba(40, 167, 69, 0.5);
}
.btn-success:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #1e7e34;
    border-color: #1c7430;
}
.btn-success:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2em rgba(40, 167, 69, 0.5);
}

/* 주황색 버튼 */
.btn-warning {
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;
}
.btn-warning:hover {
    color: #212529;
    background-color: #e0a800;
    border-color: #d39e00;
}
.btn-warning:focus {
    box-shadow: 0 0 0 0.2em rgba(255, 193, 7, 0.5);
}
.btn-warning:not(:disabled):not(.disabled):active {
    color: #212529;
    background-color: #d39e00;
    border-color: #c69500;
}
.btn-warning:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2em rgba(255, 193, 7, 0.5);
}

/* 빨간색 버튼 */
.btn-danger {
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
}
.btn-danger:hover {
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130;
}
.btn-danger:focus {
    box-shadow: 0 0 0 0.2em rgba(220, 53, 69, 0.5);
}
.btn-danger:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #bd2130;
    border-color: #b21f2d;
}
.btn-danger:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2em rgba(220, 53, 69, 0.5);
}

/* 보라색 버튼 */
.btn-purple {
    color: #fff;
    background-color: #6f42c1;
    border-color: #6f42c1;
}
.btn-purple:hover {
    color: #fff;
    background-color: #5e35a1;
    border-color: #553098;
}
.btn-purple:focus {
    box-shadow: 0 0 0 0.2em rgba(111, 66, 193, 0.5);
}
.btn-purple:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #553098;
    border-color: #4d2b89;
}
.btn-purple:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2em rgba(111, 66, 193, 0.5);
}


/* 검정색 버튼 */
.btn-dark {
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
}
.btn-dark:hover {
    color: #fff;
    background-color: #23272b;
    border-color: #1d2124;
}
.btn-dark:focus {
    box-shadow: 0 0 0 0.2em rgba(52, 58, 64, 0.5);
}
.btn-dark:not(:disabled):not(.disabled):active {
    color: #fff;
    background-color: #1d2124;
    border-color: #171a1d;
}
.btn-dark:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2em rgba(52, 58, 64, 0.5);
}



/* 토스트 알림을 위한 CSS */
.clipboard-toast {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 9999;
    transition: transform 0.3s ease-in-out;
    animation: slideIn 0.3s ease-in-out forwards;
}

.clipboard-toast.success {
    background-color: #e7f6ed;
    border-left: 4px solid #28a745;
    color: #0a3622;
}

.clipboard-toast.error {
    background-color: #ffebee;
    border-left: 4px solid #dc3545;
    color: #5f1e28;
}

@keyframes slideIn {
    0% {
        transform: translateX(-50%) translateY(-100%);
    }
    100% {
        transform: translateX(-50%) translateY(0);
    }
}

@keyframes slideOut {
    0% {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateX(-50%) translateY(-100%);
        opacity: 0;
    }
}

.clipboard-toast.hide {
    animation: slideOut 0.3s ease-in-out forwards;
}


/* 전체 화면 오버레이 스타일 */
.clipboard-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.clipboard-overlay.show {
    opacity: 1;
}

.clipboard-overlay.success {
    background-color: rgba(40, 167, 69, 0.15);
}

.clipboard-overlay.error {
    background-color: rgba(220, 53, 69, 0.15);
}

/* 메시지 컨테이너 스타일 */
.clipboard-message {
    background-color: white;
    padding: 20px 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.2rem;
    transform: scale(0.9);
    opacity: 0;
    transition: all 0.3s ease-in-out;
}

.clipboard-message.show {
    transform: scale(1);
    opacity: 1;
}

.clipboard-message.success {
    border-left: 6px solid #28a745;
}

.clipboard-message.error {
    border-left: 6px solid #dc3545;
}

/* 아이콘 스타일 */
.clipboard-message .icon {
    font-size: 1.5rem;
}

/* 사라지는 효과 */
.clipboard-overlay.hide {
    opacity: 0;
}

.clipboard-message.hide {
    transform: scale(0.9);
    opacity: 0;
}




/* Badge base styles */
.badge {
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;  
  border-radius: 0.375rem;
  margin: 0 0.2rem;
}

/* Badge colors */
.badge-primary {
  background-color: #0d6efd;
}

.badge-secondary {
  background-color: #6c757d;
}

.badge-success {
  background-color: #198754;
}

.badge-danger {
  background-color: #dc3545;
}

.badge-warning {
  background-color: #ffc107;
  color: #000;
}

.badge-info {
  background-color: #0dcaf0;
  color: #000;
}

.badge-light {
  background-color: #f8f9fa;
  color: #000;
}

.badge-dark {
  background-color: #212529;
}

/* Pill badges */
.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

/* Badge sizes */
.badge-sm {
  padding: 0.25em 0.4em;
  font-size: 0.65em;
}

.badge-lg {
  padding: 0.45em 0.85em;
  font-size: 0.85em;
}

/* Hover effects */
.badge[href]:hover,
.badge[href]:focus {
  text-decoration: none;
  opacity: 0.85;
}
  </style>
`;

$("head").append(_cssText);

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
