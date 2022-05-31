import { Serializer as RequestTypeSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gor-vodokanal-request-type';
import DictionarySerializer from './i-i-s-gor-vodokanal-dictionary';

export default DictionarySerializer.extend(RequestTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
