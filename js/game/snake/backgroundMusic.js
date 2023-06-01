function backgroundMusic() {
  const audio = game.sound.add('backgroundMusic');
  audio.volume = 0.1;
  audio.loop = true;
  audio.play();
}
