import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  кодМенеджера: DS.attr('number'),
  номерПаспорта: DS.attr('number'),
  отчество: DS.attr('string'),
  серияПаспорта: DS.attr('number'),
  телефон: DS.attr('number'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-kursovaya-менеджер.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодМенеджера: {
    descriptionKey: 'models.i-i-s-kursovaya-менеджер.validations.кодМенеджера.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-kursovaya-менеджер.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-kursovaya-менеджер.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-kursovaya-менеджер.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kursovaya-менеджер.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-kursovaya-менеджер.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МенеджерE', 'i-i-s-kursovaya-менеджер', {
    кодМенеджера: attr('Код менеджера', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерПаспорта: attr('Номер паспорта', { index: 4 }),
    серияПаспорта: attr('Серия паспорта', { index: 5 }),
    телефон: attr('Телефон', { index: 6 })
  });

  modelClass.defineProjection('МенеджерL', 'i-i-s-kursovaya-менеджер', {
    кодМенеджера: attr('Код менеджера', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерПаспорта: attr('Номер паспорта', { index: 4 }),
    серияПаспорта: attr('Серия паспорта', { index: 5 }),
    телефон: attr('Телефон', { index: 6 })
  });
};
