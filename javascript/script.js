function changeText() {
    const intro = document.getElementById('intro');
    const messages = [
        '웹 개발은 정말 재미있어요!',
        'JavaScript로 상호작용을 만들 수 있습니다.',
        'GitHub Pages로 무료 호스팅이 가능해요!',
        '계속 공부하면 더 멋진 것을 만들 수 있어요!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    intro.textContent = randomMessage;
}

// 페이지 로드 시 환영 메시지
window.addEventListener('load', () => {
    console.log('웹사이트가 성공적으로 로드되었습니다!');
});