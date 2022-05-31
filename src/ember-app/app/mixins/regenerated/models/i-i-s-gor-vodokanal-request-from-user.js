import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  number: DS.attr('number'),
  status: DS.attr('i-i-s-gor-vodokanal-t-status'),
  applicant: DS.attr('string'),
  dateOpen: DS.attr('date'),
  dateClose: DS.attr('date'),
  responsible: DS.belongsTo('i-i-s-gor-vodokanal-employee', { inverse: null, async: false }),
  secondaryRequest: DS.belongsTo('i-i-s-gor-vodokanal-request-from-user', { inverse: null, async: false }),
  requestType: DS.belongsTo('i-i-s-gor-vodokanal-request-type', { inverse: null, async: false }),
  requestKind: DS.belongsTo('i-i-s-gor-vodokanal-request-kind', { inverse: null, async: false }),
  operator: DS.belongsTo('i-i-s-gor-vodokanal-employee', { inverse: null, async: false }),
  requestCause: DS.belongsTo('i-i-s-gor-vodokanal-request-cause', { inverse: null, async: false })
});

export let ValidationRules = {
  number: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  status: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.status.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  applicant: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.applicant.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  dateOpen: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.dateOpen.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  dateClose: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.dateClose.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  responsible: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.responsible.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  secondaryRequest: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.secondaryRequest.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  requestType: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.requestType.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  requestKind: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.requestKind.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  operator: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.operator.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  requestCause: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-request-from-user.validations.requestCause.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RequestE', 'i-i-s-gor-vodokanal-request-from-user', {
    number: attr('Number', { index: 0 }),
    status: attr('Status', { index: 1 }),
    dateOpen: attr('Date open', { index: 2 }),
    applicant: attr('Applicant', { index: 3 }),
    dateClose: attr('Date close', { index: 4 }),
    responsible: belongsTo('i-i-s-gor-vodokanal-employee', 'Responsible', {
      fIO: attr('FIO', { index: 6 })
    }, { index: 5, displayMemberPath: 'fIO' }),
    secondaryRequest: belongsTo('i-i-s-gor-vodokanal-request-from-user', 'Secondary Request', {
      applicant: attr('Applicant', { index: 8 })
    }, { index: 7, displayMemberPath: 'applicant' }),
    requestType: belongsTo('i-i-s-gor-vodokanal-request-type', 'Request type', {
      name: attr('Name', { index: 10 })
    }, { index: 9, displayMemberPath: 'name' }),
    requestKind: belongsTo('i-i-s-gor-vodokanal-request-kind', 'Request kind', {
      name: attr('Name', { index: 12 })
    }, { index: 11, displayMemberPath: 'name' }),
    operator: belongsTo('i-i-s-gor-vodokanal-employee', 'Operator', {
      fIO: attr('FIO', { index: 14 })
    }, { index: 13, displayMemberPath: 'fIO' }),
    requestCause: belongsTo('i-i-s-gor-vodokanal-request-cause', 'Request cause', {
      name: attr('Name', { index: 16 })
    }, { index: 15, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('RequestL', 'i-i-s-gor-vodokanal-request-from-user', {
    number: attr('Number', { index: 0 }),
    status: attr('Status', { index: 1 }),
    dateOpen: attr('Date open', { index: 2 }),
    applicant: attr('Applicant', { index: 3 }),
    dateClose: attr('Date close', { index: 4 }),
    secondaryRequest: belongsTo('i-i-s-gor-vodokanal-request-from-user', 'Applicant', {
      applicant: attr('Applicant', { index: 6 })
    }, { index: -1, hidden: true }),
    responsible: belongsTo('i-i-s-gor-vodokanal-employee', 'FIO', {

    }, { index: 5, hidden: true }),
    requestType: belongsTo('i-i-s-gor-vodokanal-request-type', 'Name', {

    }, { index: 7, hidden: true }),
    requestKind: belongsTo('i-i-s-gor-vodokanal-request-kind', 'Name', {

    }, { index: 8, hidden: true }),
    operator: belongsTo('i-i-s-gor-vodokanal-employee', 'FIO', {

    }, { index: 9, hidden: true }),
    requestCause: belongsTo('i-i-s-gor-vodokanal-request-cause', 'Name', {

    }, { index: 10, hidden: true })
  });
};
