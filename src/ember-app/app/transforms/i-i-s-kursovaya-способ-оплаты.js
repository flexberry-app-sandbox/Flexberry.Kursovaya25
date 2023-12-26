import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СпособОплатыEnum from '../enums/i-i-s-kursovaya-способ-оплаты';

export default FlexberryEnum.extend({
  enum: СпособОплатыEnum,
  sourceType: 'IIS.Kursovaya.СпособОплаты'
});
