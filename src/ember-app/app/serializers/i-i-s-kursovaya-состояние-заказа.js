import { Serializer as СостояниеЗаказаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya-состояние-заказа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СостояниеЗаказаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
