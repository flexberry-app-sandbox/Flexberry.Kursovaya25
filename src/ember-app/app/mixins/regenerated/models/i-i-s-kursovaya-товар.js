import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  изображение: DS.attr('string'),
  кодТовара: DS.attr('number'),
  наименование: DS.attr('string'),
  свойства: DS.attr('string'),
  цена: DS.attr('decimal'),
  поставщик: DS.belongsTo('i-i-s-kursovaya-поставщик', { inverse: null, async: false }),
  производитель: DS.belongsTo('i-i-s-kursovaya-производитель', { inverse: null, async: false })
});

export let ValidationRules = {
  изображение: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.изображение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодТовара: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  свойства: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.свойства.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-kursovaya-товар.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-kursovaya-товар', {
    кодТовара: attr('Код товара', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    изображение: attr('Изображение', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    свойства: attr('Свойства', { index: 4 }),
    производитель: belongsTo('i-i-s-kursovaya-производитель', 'Производитель', {
      производитель: attr('Производитель', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'производитель' }),
    поставщик: belongsTo('i-i-s-kursovaya-поставщик', 'Поставщик', {
      поствщик: attr('Поствщик', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'поствщик' })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-kursovaya-товар', {
    кодТовара: attr('Код товара', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    изображение: attr('Изображение', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    свойства: attr('Свойства', { index: 4 }),
    производитель: belongsTo('i-i-s-kursovaya-производитель', 'Производитель', {
      производитель: attr('Производитель', { index: 5 })
    }, { index: -1, hidden: true }),
    поставщик: belongsTo('i-i-s-kursovaya-поставщик', 'Поствщик', {
      поствщик: attr('Поствщик', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
