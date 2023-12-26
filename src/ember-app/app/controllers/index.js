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
          caption: i18n.t('forms.application.sitemap.менеджеры.caption'),
          title: i18n.t('forms.application.sitemap.менеджеры.title'),
          children: [{
            link: 'i-i-s-kursovaya-менеджер-l',
            caption: i18n.t('forms.application.sitemap.менеджеры.i-i-s-kursovaya-менеджер-l.caption'),
            title: i18n.t('forms.application.sitemap.менеджеры.i-i-s-kursovaya-менеджер-l.title'),
            icon: 'tasks',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиенты.caption'),
          title: i18n.t('forms.application.sitemap.клиенты.title'),
          children: [{
            link: 'i-i-s-kursovaya-клиент-l',
            caption: i18n.t('forms.application.sitemap.клиенты.i-i-s-kursovaya-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.клиенты.i-i-s-kursovaya-клиент-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.товары.caption'),
          title: i18n.t('forms.application.sitemap.товары.title'),
          children: [{
            link: 'i-i-s-kursovaya-производитель-l',
            caption: i18n.t('forms.application.sitemap.товары.i-i-s-kursovaya-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.товары.i-i-s-kursovaya-производитель-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-kursovaya-поставщик-l',
            caption: i18n.t('forms.application.sitemap.товары.i-i-s-kursovaya-поставщик-l.caption'),
            title: i18n.t('forms.application.sitemap.товары.i-i-s-kursovaya-поставщик-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-kursovaya-товар-l',
            caption: i18n.t('forms.application.sitemap.товары.i-i-s-kursovaya-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.товары.i-i-s-kursovaya-товар-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.заказы.caption'),
          title: i18n.t('forms.application.sitemap.заказы.title'),
          children: [{
            link: 'i-i-s-kursovaya-заказ-l',
            caption: i18n.t('forms.application.sitemap.заказы.i-i-s-kursovaya-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.заказы.i-i-s-kursovaya-заказ-l.title'),
            icon: 'folder',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.оплата.caption'),
          title: i18n.t('forms.application.sitemap.оплата.title'),
          children: [{
            link: 'i-i-s-kursovaya-оплата-l',
            caption: i18n.t('forms.application.sitemap.оплата.i-i-s-kursovaya-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.оплата.i-i-s-kursovaya-оплата-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})