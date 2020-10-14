import { defineRule, configure } from 'vee-validate';
import * as rules from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';

configure({
  generateMessage: localize({ en }),
});

Object.keys(rules).forEach(rule => {
  defineRule(rule, rules[rule]);
});