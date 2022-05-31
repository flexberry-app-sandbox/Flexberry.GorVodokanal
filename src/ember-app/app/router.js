import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-gor-vodokanal-dictionary-l');
  this.route('i-i-s-gor-vodokanal-dictionary-e',
  { path: 'i-i-s-gor-vodokanal-dictionary-e/:id' });
  this.route('i-i-s-gor-vodokanal-dictionary-e.new',
  { path: 'i-i-s-gor-vodokanal-dictionary-e/new' });
  this.route('i-i-s-gor-vodokanal-employee-l');
  this.route('i-i-s-gor-vodokanal-employee-e',
  { path: 'i-i-s-gor-vodokanal-employee-e/:id' });
  this.route('i-i-s-gor-vodokanal-employee-e.new',
  { path: 'i-i-s-gor-vodokanal-employee-e/new' });
  this.route('i-i-s-gor-vodokanal-request-cause-l');
  this.route('i-i-s-gor-vodokanal-request-cause-e',
  { path: 'i-i-s-gor-vodokanal-request-cause-e/:id' });
  this.route('i-i-s-gor-vodokanal-request-cause-e.new',
  { path: 'i-i-s-gor-vodokanal-request-cause-e/new' });
  this.route('i-i-s-gor-vodokanal-request-kind-l');
  this.route('i-i-s-gor-vodokanal-request-kind-e',
  { path: 'i-i-s-gor-vodokanal-request-kind-e/:id' });
  this.route('i-i-s-gor-vodokanal-request-kind-e.new',
  { path: 'i-i-s-gor-vodokanal-request-kind-e/new' });
  this.route('i-i-s-gor-vodokanal-request-l');
  this.route('i-i-s-gor-vodokanal-request-e',
  { path: 'i-i-s-gor-vodokanal-request-e/:id' });
  this.route('i-i-s-gor-vodokanal-request-e.new',
  { path: 'i-i-s-gor-vodokanal-request-e/new' });
  this.route('i-i-s-gor-vodokanal-request-type-l');
  this.route('i-i-s-gor-vodokanal-request-type-e',
  { path: 'i-i-s-gor-vodokanal-request-type-e/:id' });
  this.route('i-i-s-gor-vodokanal-request-type-e.new',
  { path: 'i-i-s-gor-vodokanal-request-type-e/new' });
});

export default Router;
