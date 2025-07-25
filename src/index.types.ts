export type EligibilityStatus = 'ELIGIBLE' | 'INELIGIBLE' | 'UNKNOWN' | 'ERROR';
export type ProductId = string;

export type ExpoIntroOfferEligibility = {
  checkEligibility(productIds: ProductId[]): Promise<Record<ProductId, EligibilityStatus>>;
};

