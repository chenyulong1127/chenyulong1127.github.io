window.onload = function() {
    // 获取音频元素
    const audio = document.getElementById('backgroundMusic');

    // 添加点击事件监听器
    document.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(error => {
                console.error('播放音频时出错:', error);
            });
        }
    });
};