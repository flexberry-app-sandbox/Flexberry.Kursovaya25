import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  доставка: DS.attr('i-i-s-kursovaya-тип-доставки'),
  кодЗаказа: DS.attr('number'),
  номерЗаказа: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-kursovaya-клиент', { inverse: null, async: false }),
  менеджер: DS.belongsTo('i-i-s-kursovaya-менеджер', { inverse: null, async: false }),
  товары: DS.hasMany('i-i-s-kursovaya-товары', { inverse: 'заказ', async: false }),
  состояниеЗаказа: DS.hasMany('i-i-s-kursovaya-состояние-заказа', { inverse: 'заказ', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  доставка: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.доставка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЗаказа: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.номерЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  менеджер: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.менеджер.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  состояниеЗаказа: {
    descriptionKey: 'models.i-i-s-kursovaya-заказ.validations.состояниеЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказE', 'i-i-s-kursovaya-заказ', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    номерЗаказа: attr('Номер заказа', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    доставка: attr('Доставка', { index: 3 }),
    клиент: belongsTo('i-i-s-kursovaya-клиент', 'Клиент', {
      фамилия: attr('Фамилия', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фамилия' }),
    менеджер: belongsTo('i-i-s-kursovaya-менеджер', 'Менеджер', {
      фамилия: attr('Фамилия', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'фамилия' }),
    товары: hasMany('i-i-s-kursovaya-товары', 'Товары', {
      код: attr('Код', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      количество: attr('Количество', { index: 2 }),
      сумма: attr('Сумма', { index: 3 }),
      товар: belongsTo('i-i-s-kursovaya-товар', 'Товар', {
        наименование: attr('Наименование', { index: 5, hidden: true })
      }, { index: 4, displayMemberPath: 'наименование' })
    }),
    состояниеЗаказа: hasMany('i-i-s-kursovaya-состояние-заказа', 'Состояние заказа', {
      кодСостояния: attr('Код состояния', { index: 0 }),
      дата: attr('Дата', { index: 1 }),
      статус: attr('Статус', { index: 2 })
    })
  });

  modelClass.defineProjection('ЗаказL', 'i-i-s-kursovaya-заказ', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    номерЗаказа: attr('Номер заказа', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    доставка: attr('Доставка', { index: 3 }),
    клиент: belongsTo('i-i-s-kursovaya-клиент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true }),
    менеджер: belongsTo('i-i-s-kursovaya-менеджер', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
