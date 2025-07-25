import { requireNativeModule } from "expo-modules-core";

import { ExpoIntroOfferEligibility, ProductId } from "./index.types";

const nativeModule = requireNativeModule("ExpoIntroOfferEligibility");

export function checkEligibility(
  productId: ProductId,
): ExpoIntroOfferEligibility["checkEligibility"] {
  return nativeModule.checkEligibility(productId);
}
