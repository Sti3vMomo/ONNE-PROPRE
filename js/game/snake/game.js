let config = {
  type: Phaser.AUTO,
  width: 1400,
  height: 725,
  scene: {
    preload: preload, 
    create: create
  }
};

let game = new Phaser.Game(config);

function preload() {
  this.load.image("background", "../../../img/image2.jpg" );
  this.load.audio("backgroundMusic", "../../../audio/fond.mp3");
}

function create() {
  backgroundMusic();

  let menu = this.add.container(0, 0);

  let menuBackground = this.add.image(0, 0, "background").setOrigin(0);
  menuBackground.setDisplaySize(this.game.config.width, this.game.config.height);
  menu.add(menuBackground);

  let scoreText = this.add.text(1390, 7, "Score : " + score, { fontFamily: 'Arial', fontSize: 20, color: '#ffffff' }).setOrigin(1, 0);
  menu.add(scoreText);

  let optionsTitle = this.add.text(this.game.config.width / 2, 100, 'Options :', { fontFamily: 'Arial', fontSize: 24, color: '#ffffff' });
  optionsTitle.setOrigin(0.5);
  menu.add(optionsTitle);

  let difficultyLabel = this.add.text(200, 200, 'Difficulté :', { fontFamily: 'Poppins, sans-serif', fontSize: 50, color: '#ffffff' });
  menu.add(difficultyLabel);

  let difficultySelect = this.add.dom(350, 200, 'select', 'font-family: Arial; font-size: 14px; color: #ffffff;');
  difficultySelect.addListener('change');
  difficultySelect.on('change', function () {
    let selectedDifficulty = difficultySelect.node.value;
    // Faire quelque chose avec la difficulté sélectionnée
  });
  menu.add(difficultySelect);

  let optionItems = [
    { text: 'Facile', value: 'easy' },
    { text: 'Normal', value: 'normal' },
    { text: 'Difficile', value: 'hard' }
  ];

  for (let i = 0; i < optionItems.length; i++) {
    let optionItem = optionItems[i];
    let option = new Option(optionItem.text, optionItem.value);
    difficultySelect.node.add(option);
  }

  menu.setVisible(true);
}


