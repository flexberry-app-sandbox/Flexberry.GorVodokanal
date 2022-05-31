import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tStatusEnum from '../enums/i-i-s-gor-vodokanal-t-status';

export default FlexberryEnum.extend({
  enum: tStatusEnum,
  sourceType: 'IIS.GorVodokanal.tStatus'
});
