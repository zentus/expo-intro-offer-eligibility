export type EligibilityStatus = "ELIGIBLE" | "INELIGIBLE" | "UNKNOWN" | "ERROR";
export type ProductId = string;

export type checkEligibility = (
  productIds: ProductId[],
) => Promise<EligibilityStatus[]>;

export type ExpoIntroOfferEligibility = {
  checkEligibility: checkEligibility;
  ELIGIBILITY: Record<EligibilityStatus, EligibilityStatus>;
};
