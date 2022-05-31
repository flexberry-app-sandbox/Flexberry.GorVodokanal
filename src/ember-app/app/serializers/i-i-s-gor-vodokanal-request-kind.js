import { Serializer as RequestKindSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gor-vodokanal-request-kind';
import DictionarySerializer from './i-i-s-gor-vodokanal-dictionary';

export default DictionarySerializer.extend(RequestKindSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
