import { keys, registerKeyEvents } from "./inputHandler.js";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new PIXI.Application(); // PIXI Application 생성
  await app.init({ width: 640, height: 360, background: "#ebebeb" }); // 캔버스 설정
  document.body.appendChild(app.canvas); // body에 캔버스 그리기

  // 이미지 로드
  await PIXI.Assets.load("images/player.png");

  // 플레이어 생성
  let player = PIXI.Sprite.from("images/player.png");
  player.anchor.set(0.5); // Sprite의 중심점을 설정 : (0, 0) = 왼쪽상단모서리 || (0.5, 0.5) = 중앙 || (1, 1) = 오른쪽 하단 모서리
  player.x = app.view.width / 2; // 플레이어의 시작 위치
  player.y = app.view.height / 2; // 플레이어의 시작 위치
  app.stage.addChild(player); // 플레이어 추가하기

  // 키 이벤트 감지 및 등록 함수
  registerKeyEvents();

  const gameLoop = () => {
    // A
    if (keys["65"]) {
      player.x -= 5;
    }

    // D
    if (keys["68"]) {
      player.x += 5;
    }

    // W
    if (keys["87"]) {
      player.y -= 5;
    }

    // S
    if (keys["83"]) {
      player.y += 5;
    }
  };

  // 프레임마다 동작하는 gameLoop함수 추가
  app.ticker.add(gameLoop);
});
