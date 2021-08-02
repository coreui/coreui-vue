import { App } from 'vue';

const config = {};

export let VueInstance: Application;

export { config as default };

export const setVueInstance = (instance: Application) => {
  VueInstance = instance;
};