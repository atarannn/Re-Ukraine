import LocomotiveScroll from 'locomotive-scroll';
import i18next from 'i18next';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import axios from 'axios';
import * as yup from 'yup';
import FormMonster from '../../pug/components/form/form';
import SexyInput from '../../pug/components/input/input';

global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;
gsap.registerPlugin(ScrollTrigger);
global.axios = axios;

const forms = ['[data-home-contact]', '[data-footer-contact]'];
const formsWithRedirect = ['[data-popup-form]'];

formsWithRedirect.forEach(form => {
  const $form = document.querySelector(form);
  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        showSuccessMessage: false,
        // successAction: () => {
        //   window.location.href = 'message';
        //   },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-name]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          city: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-city]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('city'),
            valid: false,
            error: [],
          },
          mail: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-mail]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('mail'),
            valid: false,
            error: [],
          },
        },
      },
    });

    $form.querySelector('.js-mask-absolute').addEventListener(
      'click',
      () => {
        $form.querySelector('[name="phone"]').focus();
      },
      false,
    );
  }
});

forms.forEach(form => {
  const $form = document.querySelector(form);
  if ($form) {
    /* eslint-disable */
    new FormMonster({
      /* eslint-enable */
      elements: {
        $form,
        showSuccessMessage: false,
        successAction: () => {
          function formClose() {
            formCloseAnim();
          }
          function formCloseAnim(evt, reverseArg) {
            const form = document.querySelector('[data-form]');
            if (form === null) return;
            const tl = gsap.timeline({ paused: true });
            tl.fromTo(form, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.4 }, '<');
            tl.add(() => {
              form.classList.remove('active');
            });
            tl.play();
          }
          function formInit() {
            handlerInputPrivacyPolicy();
            const form = document.querySelector('[data-form]');
            formClose(form);
          }
          formInit();
        },
        $btnSubmit: $form.querySelector('[data-btn-submit]'),
        fields: {
          name: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-name]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('name'),
            valid: false,
            error: [],
          },
          city: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-city]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('city'),
            valid: false,
            error: [],
          },
          mail: {
            inputWrapper: new SexyInput({
              animation: 'none',
              $field: $form.querySelector('[data-field-mail]'),
            }),
            rule: yup
              .string()
              .required(i18next.t('required'))
              .trim(),
            defaultMessage: i18next.t('mail'),
            valid: false,
            error: [],
          },
        },
      },
    });
  }
});

//  Функция которая делает не активной кнопку отправки формы
//  пока человек не поставит галочку о принятии соглашения

const handlerInputPrivacyPolicy = () => {
  const inputs = document.querySelectorAll('.checkInput');
  const arrayInputs = [...inputs];
  arrayInputs.map(input => {
    const btn = document.querySelector(`[data-check=btn-${input.dataset.check}]`);
    if (!input.checked) {
      btn.classList.add('btn-disabled');
    }
    if (input.checked) {
      btn.classList.remove('btn-disabled');
    }
  });
};

const inputs = document.querySelectorAll('.checkInput');
const arrayInputs = [...inputs];
arrayInputs.map(input => {
  input.addEventListener('change', handlerInputPrivacyPolicy);
});

handlerInputPrivacyPolicy();
