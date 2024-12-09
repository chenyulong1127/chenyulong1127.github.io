(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null,
      audio = new Audio('.//birthdaywish'); // 创建Audio对象并指定音乐文件路径

  // 设置音频属性
  audio.loop = true; // 循环播放
  audio.volume = 0.5; // 设置音量（可选）

  console.log('wat', card);

  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);

    // 开始播放音乐
    audio.play().catch(function(error) {
      console.error("无法播放音频：", error);
    });
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer); // 注意这里有一个拼写错误，应该是clearTimeout而不是clearTimerout
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);

    // 停止播放音乐
    // audio.pause();
  });

})();