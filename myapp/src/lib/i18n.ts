import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

// 언어별 JSON 등록
register('en', () => import('./locales/en.json'));
register('ko', () => import('./locales/ko.json'));

// 초기화
init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
});