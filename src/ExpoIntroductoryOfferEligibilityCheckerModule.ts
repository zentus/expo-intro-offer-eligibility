import { NativeModule, requireNativeModule } from 'expo';

import { EligibilityStatus, ExpoIntroductoryOfferEligibilityChecker, ProductId } from './ExpoIntroductoryOfferEligibilityChecker.types';



declare class ExpoIntroductoryOfferEligibilityCheckerModule extends NativeModule<ExpoIntroductoryOfferEligibilityChecker> {
  checkEligibility(productIds: ProductId[]): Promise<Record<ProductId, EligibilityStatus>>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoIntroductoryOfferEligibilityCheckerModule>('ExpoIntroductoryOfferEligibilityChecker');
