'use strict';

(function () {
  var WIZARD_NAMES = ['Иван Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  document.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomSetting = function (settings) {
    return settings[Math.floor(Math.random() * settings.length)];
  };

  var getSimilarWizars = function () {
    var wizards = [];
    for (var j = 0; j < 4; j++) {
      var wizardQ = {
        name: getRandomSetting(WIZARD_NAMES) + ' ' + getRandomSetting(WIZARD_SURNAMES),
        coatColor: getRandomSetting(WIZARD_COAT),
        eyesColor: getRandomSetting(WIZARD_EYES)
      };
      wizards.push(wizardQ);
    }
    return wizards;
  };


  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var addSimilarWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < getSimilarWizars().length; i++) {
      fragment.appendChild(renderWizard(getSimilarWizars()[i]));
    }
    return similarListElement.appendChild(fragment);
  };
  addSimilarWizards();
})();
