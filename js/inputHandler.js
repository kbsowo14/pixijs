export const keys = {};

export const keysDown = (e) => {
  console.log(e?.keyCode);
  keys[e?.keyCode] = true;
};

export const keysUp = (e) => {
  console.log(e?.keyCode);
  keys[e?.keyCode] = false;
};

// 키 이벤트 감지
export const registerKeyEvents = () => {
  window.addEventListener("keydown", keysDown);
  window.addEventListener("keyup", keysUp);
};
