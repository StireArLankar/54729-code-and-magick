'use strict';

var mySetUp = {
  setUpBlock: document.querySelector('.setup'),
  similar: document.querySelector('.setup-similar'),
  similarList: document.querySelector('.setup-similar-list'),
  wizardTemplate: document.querySelector('#similar-wizard-template')
                  .content
                  .querySelector('.setup-similar-item'),
  fragment: document.createDocumentFragment(),
  wizardCount: 4,
  getRandomElement: function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  firstNameArray: ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lastNameArray: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  getName: function () {
    var firstName = this.getRandomElement(this.firstNameArray);
    var lastName = this.getRandomElement(this.lastNameArray);
    var coin = Math.random();
    return coin > 0.5 ? firstName + ' ' + lastName : lastName + ' ' + firstName;
  },

  coatColorArray: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  getCoatColor: function () {
    return this.getRandomElement(this.coatColorArray);
  },

  eyesColorArray: ['black', 'red', 'blue', 'yellow', 'green'],
  getEyesColor: function () {
    return this.getRandomElement(this.eyesColorArray);
  },

  renderWizard: function () {
    var wizard = this.wizardTemplate.cloneNode(true);
    var name = this.getName().trim();
    var coatColor = this.getCoatColor();
    var eyesColor = this.getEyesColor();
    wizard.querySelector('.setup-similar-label').textContent = name;
    wizard.querySelector('.wizard-coat').style.fill = coatColor;
    wizard.querySelector('.wizard-eyes').style.fill = eyesColor;
    return wizard;
  }
};

for (var i = 0; i < mySetUp.wizardCount; i += 1) {
  mySetUp.fragment.appendChild(mySetUp.renderWizard());
}
mySetUp.similarList.appendChild(mySetUp.fragment);

mySetUp.setUpBlock.classList.remove('hidden');
mySetUp.similar.classList.remove('hidden');
