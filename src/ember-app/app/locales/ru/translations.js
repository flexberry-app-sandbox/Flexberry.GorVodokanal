import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Gor vodokanal',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gor vodokanal',
          title: 'Gor vodokanal'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
