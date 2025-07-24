import { Platform } from 'react-native';

export type EligibilityStatus = 'ELIGIBLE' | 'INELIGIBLE' | 'UNKNOWN' | 'ERROR';
export type ProductId = string;

export interface ExpoIntroductoryOfferEligibilityCheckerModule {
  checkEligibility(productIds: ProductId[]): Promise<Record<ProductId, EligibilityStatus>>;
}

let ExpoIntroductoryOfferEligibilityCheckerModule: ExpoIntroductoryOfferEligibilityCheckerModule;

if (Platform.OS === 'ios') {
  const NativeModule = require('./NativeExpoIntroductoryOfferEligibilityChecker').default;
  ExpoIntroductoryOfferEligibilityCheckerModule = NativeModule;
} else {
  ExpoIntroductoryOfferEligibilityCheckerModule = {
    checkEligibility: async (_: ProductId[]) => {
      console.warn('ExpoIntroductoryOfferEligibilityCheckerModule is only available on iOS');
      return {};
    },
  };
}

export default ExpoIntroductoryOfferEligibilityCheckerModule;