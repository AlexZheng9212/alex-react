/* eslint-disable import/no-extraneous-dependencies */
import { Selector } from 'testcafe';

// simple Selector, will update

export default class Page {
  constructor() {
    this.nameInput = Selector('#developer-name');
    this.macOS = Selector('input[type=radio][value=MacOS]');
  }
}
