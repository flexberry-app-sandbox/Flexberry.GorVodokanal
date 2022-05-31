import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGorVodokanalDictionaryLForm from './forms/i-i-s-gor-vodokanal-dictionary-l';
import IISGorVodokanalEmployeeLForm from './forms/i-i-s-gor-vodokanal-employee-l';
import IISGorVodokanalRequestCauseLForm from './forms/i-i-s-gor-vodokanal-request-cause-l';
import IISGorVodokanalRequestKindLForm from './forms/i-i-s-gor-vodokanal-request-kind-l';
import IISGorVodokanalRequestLForm from './forms/i-i-s-gor-vodokanal-request-l';
import IISGorVodokanalRequestTypeLForm from './forms/i-i-s-gor-vodokanal-request-type-l';
import IISGorVodokanalDictionaryEForm from './forms/i-i-s-gor-vodokanal-dictionary-e';
import IISGorVodokanalEmployeeEForm from './forms/i-i-s-gor-vodokanal-employee-e';
import IISGorVodokanalRequestCauseEForm from './forms/i-i-s-gor-vodokanal-request-cause-e';
import IISGorVodokanalRequestEForm from './forms/i-i-s-gor-vodokanal-request-e';
import IISGorVodokanalRequestKindEForm from './forms/i-i-s-gor-vodokanal-request-kind-e';
import IISGorVodokanalRequestTypeEForm from './forms/i-i-s-gor-vodokanal-request-type-e';
import IISGorVodokanalDictionaryModel from './models/i-i-s-gor-vodokanal-dictionary';
import IISGorVodokanalEmployeeModel from './models/i-i-s-gor-vodokanal-employee';
import IISGorVodokanalRequestCauseModel from './models/i-i-s-gor-vodokanal-request-cause';
import IISGorVodokanalRequestFromUserModel from './models/i-i-s-gor-vodokanal-request-from-user';
import IISGorVodokanalRequestKindModel from './models/i-i-s-gor-vodokanal-request-kind';
import IISGorVodokanalRequestTypeModel from './models/i-i-s-gor-vodokanal-request-type';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-gor-vodokanal-dictionary': IISGorVodokanalDictionaryModel,
    'i-i-s-gor-vodokanal-employee': IISGorVodokanalEmployeeModel,
    'i-i-s-gor-vodokanal-request-cause': IISGorVodokanalRequestCauseModel,
    'i-i-s-gor-vodokanal-request-from-user': IISGorVodokanalRequestFromUserModel,
    'i-i-s-gor-vodokanal-request-kind': IISGorVodokanalRequestKindModel,
    'i-i-s-gor-vodokanal-request-type': IISGorVodokanalRequestTypeModel
  },

  'application-name': 'Gor vodokanal',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Gor vodokanal',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gor vodokanal',
          title: 'Gor vodokanal'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'gor-vodokanal': {
          caption: 'GorVodokanal',
          title: 'GorVodokanal',
          'i-i-s-gor-vodokanal-request-type-l': {
            caption: 'Request type',
            title: ''
          },
          'i-i-s-gor-vodokanal-request-l': {
            caption: 'Request',
            title: ''
          },
          'i-i-s-gor-vodokanal-request-cause-l': {
            caption: 'Request cause',
            title: ''
          },
          'i-i-s-gor-vodokanal-employee-l': {
            caption: 'Employee',
            title: ''
          },
          'i-i-s-gor-vodokanal-dictionary-l': {
            caption: 'Dictionary',
            title: ''
          },
          'i-i-s-gor-vodokanal-request-kind-l': {
            caption: 'Request kind',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-gor-vodokanal-dictionary-l': IISGorVodokanalDictionaryLForm,
    'i-i-s-gor-vodokanal-employee-l': IISGorVodokanalEmployeeLForm,
    'i-i-s-gor-vodokanal-request-cause-l': IISGorVodokanalRequestCauseLForm,
    'i-i-s-gor-vodokanal-request-kind-l': IISGorVodokanalRequestKindLForm,
    'i-i-s-gor-vodokanal-request-l': IISGorVodokanalRequestLForm,
    'i-i-s-gor-vodokanal-request-type-l': IISGorVodokanalRequestTypeLForm,
    'i-i-s-gor-vodokanal-dictionary-e': IISGorVodokanalDictionaryEForm,
    'i-i-s-gor-vodokanal-employee-e': IISGorVodokanalEmployeeEForm,
    'i-i-s-gor-vodokanal-request-cause-e': IISGorVodokanalRequestCauseEForm,
    'i-i-s-gor-vodokanal-request-e': IISGorVodokanalRequestEForm,
    'i-i-s-gor-vodokanal-request-kind-e': IISGorVodokanalRequestKindEForm,
    'i-i-s-gor-vodokanal-request-type-e': IISGorVodokanalRequestTypeEForm
  },

});

export default translations;
