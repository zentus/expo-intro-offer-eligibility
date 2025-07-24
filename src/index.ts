import { Platform } from 'react-native';

export type EligibilityStatus = 'ELIGIBLE' | 'INELIGIBLE' | 'UNKNOWN' | 'ERROR';
export type ProductId = string;

export interface IntroEligibilityModule {
  checkEligibility(productIds: ProductId[]): Promise<Record<ProductId, EligibilityStatus>>;
}

let ExpoIntroductoryOfferEligibilityChecker: IntroEligibilityModule;

if (Platform.OS === 'ios') {
  const NativeModule = require('./NativeExpoIntroductoryOfferEligibilityChecker').default;
  ExpoIntroductoryOfferEligibilityChecker = NativeModule;
} else {
  ExpoIntroductoryOfferEligibilityChecker = {
    checkEligibility: async (_: ProductId[]) => {
      console.warn('ExpoIntroductoryOfferEligibilityChecker is only available on iOS');
      return {};
    },
  };
}

export default ExpoIntroductoryOfferEligibilityChecker;