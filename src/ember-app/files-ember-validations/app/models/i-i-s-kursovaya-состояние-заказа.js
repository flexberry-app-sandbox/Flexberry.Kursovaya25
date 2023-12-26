import {
  defineNamespace,
  defineProjections,
  Model as СостояниеЗаказаMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya-состояние-заказа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СостояниеЗаказаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
