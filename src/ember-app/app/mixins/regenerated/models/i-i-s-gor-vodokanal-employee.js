import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  fIO: DS.attr('string'),
  email: DS.attr('string')
});

export let ValidationRules = {
  fIO: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-employee.validations.fIO.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  email: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-employee.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-gor-vodokanal-dictionary'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EmployeeE', 'i-i-s-gor-vodokanal-employee', {
    fIO: attr('FIO', { index: 0 }),
    email: attr('Email', { index: 1 }),
    active: attr('Active', { index: 2 })
  });

  modelClass.defineProjection('EmployeeL', 'i-i-s-gor-vodokanal-employee', {
    fIO: attr('FIO', { index: 0 }),
    email: attr('Email', { index: 1 }),
    active: attr('Active', { index: 2 })
  });
};
