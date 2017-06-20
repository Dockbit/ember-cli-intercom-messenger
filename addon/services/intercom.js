import Ember from 'ember';
import Service from 'ember-service';
import intercom from 'intercom';
import computed, { reads } from 'ember-computed';
import get from 'ember-metal/get';
import getOwner from 'ember-owner/get';
import { assign } from 'ember-platform';

const { getWithDefault } = Ember;

export default Service.extend({
  api: intercom,

  appId: reads('settings.appId'),

  config: computed(function() {
    return getOwner(this).resolveRegistration('config:environment');
  }),

  intercomSettings: computed(function() {
    return {
      app_id: get(this, 'appId')
    };
  }),

  settings: computed(function() {
    let config = get(this, 'config');

    return getWithDefault(config, 'intercom-messenger', {});
  }),

  boot(bootConfig = {}) {
    let intercomSettings = get(this, 'intercomSettings');

    bootConfig = assign(intercomSettings, bootConfig);

    get(this, 'api')('boot', bootConfig);
  },

  shutdown() {
    get(this, 'api')('shutdown');
  },

  update() {
    if (arguments.length === 0) {
      get(this, 'api')('update');
    } else {
      get(this, 'api')('update', arguments[0]);
    }
  }
});
