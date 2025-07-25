export type EligibilityStatus = "ELIGIBLE" | "INELIGIBLE" | "UNKNOWN" | "ERROR";
export type ProductId = string;
export type EligibilityResults = Record<ProductId, EligibilityStatus>;

export type CheckEligibility = (
  productIds: ProductId[],
) => Promise<EligibilityResults>;

export type IsEligibleForIntroOffer = (
  productId: ProductId,
) => Promise<boolean>;

export type ExpoIntroOfferEligibility = {
  checkEligibility: CheckEligibility;
  isEligibleForIntroOffer: IsEligibleForIntroOffer;
  ELIGIBILITY: Record<EligibilityStatus, EligibilityStatus>;
};
