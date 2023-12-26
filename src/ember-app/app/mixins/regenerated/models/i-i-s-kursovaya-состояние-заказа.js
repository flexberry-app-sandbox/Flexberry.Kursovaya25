import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  кодСостояния: DS.attr('number'),
  статус: DS.attr('i-i-s-kursovaya-статус-заказа'),
  заказ: DS.belongsTo('i-i-s-kursovaya-заказ', { inverse: 'состояниеЗаказа', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-состояние-заказа.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодСостояния: {
    descriptionKey: 'models.i-i-s-kursovaya-состояние-заказа.validations.кодСостояния.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-kursovaya-состояние-заказа.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kursovaya-состояние-заказа.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СостояниеЗаказаE', 'i-i-s-kursovaya-состояние-заказа', {
    кодСостояния: attr('Код состояния', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    статус: attr('Статус', { index: 2 })
  });
};
