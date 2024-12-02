const express = require("express");

const app = express();
const PORT = 5501;
const cors = require('cors');
app.use(cors());

// JSON 데이터를 처리하기 위한 미들웨어
app.use(express.json()); // body-parser 대체

// 정적 파일 제공 (HTML, JS)
app.use(express.static("public")); // public 폴더를 정적 파일 경로로 설정

// 플레이어 데이터 수신 API
let playerData = {}; // 플레이어 데이터를 저장할 객체

app.post("/update-player", (req, res) => {
    const { playerIndex, position } = req.body; // 요청 본문에서 데이터 추출
    console.log(`플레이어 ${playerIndex} 위치 업데이트: ${position}`);
    playerData[playerIndex] = position; // 데이터를 저장
    res.status(200).json({ status: "success", message: "데이터 수신 완료" });
});

app.get("/hello", (req, res) => {
    res.send("hello")
})

app.get("/player-positions", (req, res) => {
    res.send(playerData);
})

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});