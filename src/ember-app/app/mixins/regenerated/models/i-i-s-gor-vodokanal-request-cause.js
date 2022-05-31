import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  code: DS.attr('number')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-cause.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  code: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-cause.validations.code.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-gor-vodokanal-dictionary'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RequestCauseE', 'i-i-s-gor-vodokanal-request-cause', {
    name: attr('Name', { index: 0 }),
    code: attr('Code', { index: 1 }),
    active: attr('Active', { index: 2 })
  });

  modelClass.defineProjection('RequestCauseL', 'i-i-s-gor-vodokanal-request-cause', {
    name: attr('Name', { index: 0 }),
    code: attr('Code', { index: 1 }),
    active: attr('Active', { index: 2 })
  });
};
