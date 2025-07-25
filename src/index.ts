import { requireNativeModule } from "expo-modules-core";

import {
  EligibilityStatus,
  ExpoIntroOfferEligibility,
  ProductId,
} from "./index.types";

const nativeModule = requireNativeModule("ExpoIntroOfferEligibility");

export const checkEligibility: ExpoIntroOfferEligibility["checkEligibility"] =
  async (productIds: ProductId[]) => {
    return nativeModule.checkEligibility(productIds);
  };

export const ELIGIBLE: EligibilityStatus = "ELIGIBLE";
export const INELIGIBLE: EligibilityStatus = "INELIGIBLE";
export const UNKNOWN: EligibilityStatus = "UNKNOWN";
export const ERROR: EligibilityStatus = "ERROR";

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
