import { requireNativeModule } from "expo-modules-core";
import { Platform } from "react-native";

import {
  EligibilityStatus,
  ExpoIntroOfferEligibility,
  ProductId,
} from "./index.types";

export const ELIGIBLE: EligibilityStatus = "ELIGIBLE";
export const INELIGIBLE: EligibilityStatus = "INELIGIBLE";
export const UNKNOWN: EligibilityStatus = "UNKNOWN";
export const ERROR: EligibilityStatus = "ERROR";

export const checkEligibility: ExpoIntroOfferEligibility["checkEligibility"] =
  async (productIds: ProductId[]) => {
    if (Platform.OS === "ios") {
      const nativeModule = requireNativeModule("ExpoIntroOfferEligibility");
      return nativeModule.checkEligibility(productIds);
    } else {
      return productIds.map(() => ERROR);
    }
  };

const main: ExpoIntroOfferEligibility = {
  checkEligibility,
  ELIGIBILITY: {
    ELIGIBLE,
    INELIGIBLE,
    UNKNOWN,
    ERROR,
  },
};

export default main;
