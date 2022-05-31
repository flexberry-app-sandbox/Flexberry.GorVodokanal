import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as RequestCauseMixin
} from '../mixins/regenerated/models/i-i-s-gor-vodokanal-request-cause';

import DictionaryModel from './i-i-s-gor-vodokanal-dictionary';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-gor-vodokanal-dictionary';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = DictionaryModel.extend(RequestCauseMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
