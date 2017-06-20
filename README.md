# ember-cli-intercom-messenger

Intercom messenger for Ember with support for custom attributes.

## Setup

Install with `ember install ember-cli-intercom-messenger`.

### Configuration

You **must** provide your Intercom app ID in your app's `config/environment.js` file.

```javascript
module.exports = function(environment) {
  var ENV = {
    'intercom-messenger': {
      appId: null,
      enabled: false // Optional: Disable the addon on a per environment basis.
    },
  };

  return ENV;
}
```

### Usage

In your `app/controllers/application.js`:

```javascript
import Controller from 'ember-controller';
import computed from 'ember-computed';

export default Controller.extend({
  user: null,

  intercomSettings: computed(function() {
    return {
      user_id: this.get('user.id'),
      user_hash: this.get('user.hash')
    };
  })
});
```

In your `app/templates/application.hbs`:

```hbs
{{intercom-messenger intercomSettings}}

{{!-- or, without the need for a computed property with the {{hash}} helper: --}}

{{intercom-messenger (hash
  user_id=user.id
  user_hash=user.hash
)}}
```

Note that `{{intercom-messenger}}` allows you to define any custom attributes within `intercomSettings`.
Just remember to adhere to [Intercom's guideline on sending custom attributes][1].

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-intercom-messenger`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

[1]: https://docs.intercom.com/configure-intercom-for-your-product-or-site/customize-intercom-to-be-about-your-users/send-custom-user-attributes-to-intercom
