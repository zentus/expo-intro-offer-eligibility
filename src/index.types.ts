export type EligibilityStatus = "ELIGIBLE" | "INELIGIBLE" | "UNKNOWN" | "ERROR";
export type ProductId = string;
export type EligibilityResults = Record<ProductId, EligibilityStatus>;

export type CheckEligibility = (
  productIds: ProductId[],
) => Promise<EligibilityResults>;

export type ExpoIntroOfferEligibility = {
  checkEligibility: CheckEligibility;
  ELIGIBILITY: Record<EligibilityStatus, EligibilityStatus>;
};
