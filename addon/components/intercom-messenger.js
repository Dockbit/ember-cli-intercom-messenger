import Component from 'ember-component';
import injectService from 'ember-service/inject';
import get from 'ember-metal/get';
import { scheduleOnce } from 'ember-runloop';

import layout from '../templates/components/intercom-messenger';

const IntercomMessengerComponent = Component.extend({
  intercom: injectService(),

  bootConfig: {},
  layout,

  didInsertElement() {
    this._super(...arguments);

    let bootConfig = get(this, 'bootConfig');
    let intercom = get(this, 'intercom');

    scheduleOnce('afterRender', intercom, 'boot', bootConfig);
  },

  willDestroyElement() {
    this._super(...arguments);

    let intercom = get(this, 'intercom');

    scheduleOnce('afterRender', intercom, 'shutdown');
  }
});

IntercomMessengerComponent.reopenClass({
  positionalParams: ['bootConfig']
});

export default IntercomMessengerComponent;
