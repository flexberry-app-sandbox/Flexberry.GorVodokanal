import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  defineProjections,
  ValidationRules,
  Model as RequestFromUserMixin
} from '../mixins/regenerated/models/i-i-s-gor-vodokanal-request-from-user';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, RequestFromUserMixin, Validations, {
});

defineProjections(Model);

export default Model;
