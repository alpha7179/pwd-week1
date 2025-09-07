function changeText() {
    const intro = document.getElementById('intro');
    const messages = [
        '전공 : 디지털미디어학과',
        '학번: 202221046',
        '성명: 배민우',
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    intro.textContent = randomMessage;
}

// 페이지 로드 시 환영 메시지
window.addEventListener('load', () => {
    console.log('웹사이트가 성공적으로 로드되었습니다!');
});