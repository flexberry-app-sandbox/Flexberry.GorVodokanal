import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gor-vodokanal-request-kind', 'Unit | Serializer | i-i-s-gor-vodokanal-request-kind', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-gor-vodokanal-request-kind',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-gor-vodokanal-t-status',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
