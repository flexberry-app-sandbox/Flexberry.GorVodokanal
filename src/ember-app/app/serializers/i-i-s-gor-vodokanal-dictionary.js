import { Serializer as DictionarySerializer } from
  '../mixins/regenerated/serializers/i-i-s-gor-vodokanal-dictionary';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(DictionarySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
