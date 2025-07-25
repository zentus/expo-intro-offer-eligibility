# @zentus/expo-intro-offer-eligibility

Checks eligibility for App Store Introductory Offers via Storekit 2.

Works on iOS 17>. On older iOS versions returns `UNKNOWN`. On Android returns `ERROR`.

# Installation

### Add the package to your npm dependencies

```bash
npm install @zentus/expo-intro-offer-eligibility@2
```

### Add the package to your Expo app config file

```json
{
    "expo": {
        "plugins": [
            "@zentus/expo-intro-offer-eligibility"
        ]
    }
}
```

### If you're building locally, install pod

```bash
cd ios && pod install
```

Then rebuild your app

# Use

```javascript
import { checkEligibility } from '@zentus/expo-intro-offer-eligibility';

checkEligibility(['my_product_id_1', 'my_product_id_2'])
    .then(result => {
        console.log(result);
        //=> {"my_product_id_1": "ELIGIBLE", "my_product_id_2": "ELIGIBLE"}
    });
```

Or use the simpler wrapper `isEligibleForIntroOffer`

```javascript
import { isEligibleForIntroOffer } from '@zentus/expo-intro-offer-eligibility';

isEligibleForIntroOffer('my_product_id_1')
    .then(result => {
        console.log(result);
        //=> true | false
    });
```

## License

[MIT](https://github.com/zentus/expo-intro-offer-eligibility/tree/main/LICENSE)

