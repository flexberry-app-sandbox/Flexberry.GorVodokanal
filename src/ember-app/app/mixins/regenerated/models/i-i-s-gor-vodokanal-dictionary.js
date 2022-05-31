import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  active: DS.attr('boolean')
});

export let ValidationRules = {
  active: {
    descriptionKey: 'models.i-i-s-gor-vodokanal-dictionary.validations.active.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DictionaryE', 'i-i-s-gor-vodokanal-dictionary', {
    active: attr('Active', { index: 0 })
  });

  modelClass.defineProjection('DictionaryL', 'i-i-s-gor-vodokanal-dictionary', {
    active: attr('Active', { index: 0 })
  });
};
