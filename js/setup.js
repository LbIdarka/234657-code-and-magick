'use strict';

(function () {
  var WIZARD_NAMES = ['Иван Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userNameField = userDialog.querySelector('.setup-user-name');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var onInputFocused = function () {
    document.removeEventListener('keydown', onPopupEscPress);
  };

  userNameField.addEventListener('focus', function () {
    onInputFocused();
  });

  userNameField.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  var openPopup = function () {
    userDialog.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });


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
    var similarWizards = getSimilarWizars();

    for (var i = 0; i < similarWizards.length; i++) {
      fragment.appendChild(renderWizard(similarWizards[i]));
    }
    return similarListElement.appendChild(fragment);
  };
  addSimilarWizards();
})();
