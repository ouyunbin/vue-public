import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import Element from 'element-ui';

// 自定义的语言包
import en from './package/en';
import zh_cn from './package/zh-cn';

// element-UI定义的语言包
import element_en from 'element-ui/lib/locale/lang/en';
import element_zhCn from 'element-ui/lib/locale/lang/zh-CN';

Vue.use(VueI18n);

if (Cookies.get('lang')) {
  Cookies.set('lang', 'zh-cn');
}

const messages = {
  'en': Object.assign(en, element_en),
  'zh-cn': Object.assign(zh_cn, element_zhCn)
};

const i18n = new VueI18n({
  locale: Cookies.get('lang'),
  messages
});

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
});

export default i18n;
