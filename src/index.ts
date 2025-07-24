import { Platform, TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export type EligibilityStatus = 'ELIGIBLE' | 'INELIGIBLE' | 'UNKNOWN' | 'ERROR';
export type ProductId = string;

export interface ExpoIntroductoryOfferEligibilityCheckerModule extends TurboModule {
  checkEligibility(productIds: ProductId[]): Promise<Record<ProductId, EligibilityStatus>>;
};

let ExpoIntroductoryOfferEligibilityCheckerModule: ExpoIntroductoryOfferEligibilityCheckerModule;

if (Platform.OS === 'ios') {
  ExpoIntroductoryOfferEligibilityCheckerModule = TurboModuleRegistry.getEnforcing('ExpoIntroductoryOfferEligibilityCheckerModule');
} else {
  ExpoIntroductoryOfferEligibilityCheckerModule = {
    checkEligibility: async (_: ProductId[]) => {
      console.warn('ExpoIntroductoryOfferEligibilityCheckerModule is only available on iOS');
      return {};
    },
  };
}

export default ExpoIntroductoryOfferEligibilityCheckerModule;