import { Serializer as RequestCauseSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gor-vodokanal-request-cause';
import DictionarySerializer from './i-i-s-gor-vodokanal-dictionary';

export default DictionarySerializer.extend(RequestCauseSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
