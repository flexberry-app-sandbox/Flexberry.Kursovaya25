import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодПроизвод: DS.attr('number'),
  производитель: DS.attr('string'),
  страна: DS.attr('string')
});

export let ValidationRules = {
  кодПроизвод: {
    descriptionKey: 'models.i-i-s-kursovaya-производитель.validations.кодПроизвод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-kursovaya-производитель.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  страна: {
    descriptionKey: 'models.i-i-s-kursovaya-производитель.validations.страна.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроизводительE', 'i-i-s-kursovaya-производитель', {
    кодПроизвод: attr('Код производ', { index: 0 }),
    производитель: attr('Производитель', { index: 1 }),
    страна: attr('Страна', { index: 2 })
  });

  modelClass.defineProjection('ПроизводительL', 'i-i-s-kursovaya-производитель', {
    кодПроизвод: attr('Код производ', { index: 0 }),
    производитель: attr('Производитель', { index: 1 }),
    страна: attr('Страна', { index: 2 })
  });
};
