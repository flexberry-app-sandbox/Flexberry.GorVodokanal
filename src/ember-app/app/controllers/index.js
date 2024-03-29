import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.gor-vodokanal.caption'),
          title: i18n.t('forms.application.sitemap.gor-vodokanal.title'),
          children: [{
            link: 'i-i-s-gor-vodokanal-request-l',
            caption: i18n.t('forms.application.sitemap.gor-vodokanal.i-i-s-gor-vodokanal-request-l.caption'),
            title: i18n.t('forms.application.sitemap.gor-vodokanal.i-i-s-gor-vodokanal-request-l.title'),
            icon: 'table',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.dictionaries.caption'),
          title: i18n.t('forms.application.sitemap.dictionaries.title'),
          children: [{
            link: 'i-i-s-gor-vodokanal-request-type-l',
            caption: i18n.t('forms.application.sitemap.dictionaries.i-i-s-gor-vodokanal-request-type-l.caption'),
            title: i18n.t('forms.application.sitemap.dictionaries.i-i-s-gor-vodokanal-request-type-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-gor-vodokanal-employee-l',
            caption: i18n.t('forms.application.sitemap.dictionaries.i-i-s-gor-vodokanal-employee-l.caption'),
            title: i18n.t('forms.application.sitemap.dictionaries.i-i-s-gor-vodokanal-employee-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-gor-vodokanal-request-cause-l',
            caption: i18n.t('forms.application.sitemap.dictionaries.i-i-s-gor-vodokanal-request-cause-l.caption'),
            title: i18n.t('forms.application.sitemap.dictionaries.i-i-s-gor-vodokanal-request-cause-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-gor-vodokanal-request-kind-l',
            caption: i18n.t('forms.application.sitemap.dictionaries.i-i-s-gor-vodokanal-request-kind-l.caption'),
            title: i18n.t('forms.application.sitemap.dictionaries.i-i-s-gor-vodokanal-request-kind-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})