import { Serializer as RequestFromUserSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gor-vodokanal-request-from-user';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(RequestFromUserSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
