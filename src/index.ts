import { requireNativeModule } from "expo-modules-core";
import { Platform } from "react-native";

import {
  EligibilityResults,
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
      const nativeResult: EligibilityStatus[] =
        await nativeModule.checkEligibility(productIds);

      if (nativeResult.length !== productIds.length) {
        throw new Error(
          `Expected ${productIds.length} eligibility results but got ${nativeResult.length}`,
        );
      }

      const result: EligibilityResults = nativeResult.reduce(
        (acc, status, i) => {
          return {
            ...acc,
            [productIds[i]]: status,
          };
        },
        {} as EligibilityResults,
      );

      return result;
    } else {
      return productIds.reduce((acc, productId) => {
        return {
          ...acc,
          [productId]: ERROR,
        };
      }, {} as EligibilityResults);
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
