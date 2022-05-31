import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gor-vodokanal-request-kind', 'Unit | Model | i-i-s-gor-vodokanal-request-kind', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-gor-vodokanal-dictionary',
    'model:i-i-s-gor-vodokanal-employee',
    'model:i-i-s-gor-vodokanal-request-cause',
    'model:i-i-s-gor-vodokanal-request-from-user',
    'model:i-i-s-gor-vodokanal-request-kind',
    'model:i-i-s-gor-vodokanal-request-type',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
