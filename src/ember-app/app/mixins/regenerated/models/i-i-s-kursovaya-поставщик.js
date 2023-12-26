import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодПоставщика: DS.attr('number'),
  поствщик: DS.attr('string'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  кодПоставщика: {
    descriptionKey: 'models.i-i-s-kursovaya-поставщик.validations.кодПоставщика.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  поствщик: {
    descriptionKey: 'models.i-i-s-kursovaya-поставщик.validations.поствщик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-kursovaya-поставщик.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПоставщикE', 'i-i-s-kursovaya-поставщик', {
    кодПоставщика: attr('Код поставщика', { index: 0 }),
    поствщик: attr('Поствщик', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });

  modelClass.defineProjection('ПоставщикL', 'i-i-s-kursovaya-поставщик', {
    кодПоставщика: attr('Код поставщика', { index: 0 }),
    поствщик: attr('Поствщик', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });
};
