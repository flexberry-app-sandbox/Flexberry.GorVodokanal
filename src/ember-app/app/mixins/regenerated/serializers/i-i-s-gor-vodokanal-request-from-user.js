import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Serializer = Mixin.create({
  getAttrs: function () {
    let parentAttrs = this._super();
    let attrs = {
      responsible: { serialize: 'odata-id', deserialize: 'records' },
      secondaryRequest: { serialize: 'odata-id', deserialize: 'records' },
      requestType: { serialize: 'odata-id', deserialize: 'records' },
      requestKind: { serialize: 'odata-id', deserialize: 'records' },
      operator: { serialize: 'odata-id', deserialize: 'records' },
      requestCause: { serialize: 'odata-id', deserialize: 'records' }
    };

    return $.extend(true, {}, parentAttrs, attrs);
  },
  init: function () {
    this.set('attrs', this.getAttrs());
    this._super(...arguments);
  }
});
