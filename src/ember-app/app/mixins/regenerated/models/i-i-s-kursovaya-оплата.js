import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  кодОплаты: DS.attr('number'),
  способ: DS.attr('i-i-s-kursovaya-способ-оплаты'),
  статус: DS.attr('i-i-s-kursovaya-статус-оплаты'),
  сумма: DS.attr('decimal'),
  заказ: DS.belongsTo('i-i-s-kursovaya-заказ', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодОплаты: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.кодОплаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  способ: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.способ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-kursovaya-оплата.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатаE', 'i-i-s-kursovaya-оплата', {
    кодОплаты: attr('Код оплаты', { index: 0 }),
    способ: attr('Способ', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    статус: attr('Статус', { index: 3 }),
    дата: attr('Дата', { index: 4 }),
    заказ: belongsTo('i-i-s-kursovaya-заказ', 'Заказ', {
      кодЗаказа: attr('Код заказа', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'кодЗаказа' })
  });

  modelClass.defineProjection('ОплатаL', 'i-i-s-kursovaya-оплата', {
    кодОплаты: attr('Код оплаты', { index: 0 }),
    способ: attr('Способ', { index: 1 }),
    сумма: attr('Сумма', { index: 2 }),
    статус: attr('Статус', { index: 3 }),
    дата: attr('Дата', { index: 4 }),
    заказ: belongsTo('i-i-s-kursovaya-заказ', 'Код заказа', {
      кодЗаказа: attr('Код заказа', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
