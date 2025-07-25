import ExpoModulesCore
import StoreKit

public class ExpoIntroOfferEligibilityModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoIntroOfferEligibility")

    AsyncFunction("checkEligibility") { (productIds: [String]) -> [String: String] in
      var result: [String: String] = [:]

      for productId in productIds {
        do {
          let products = try await Product.products(for: [productId])
          guard let product = products.first,
                let subscription = product.subscription else {
            result[productId] = "UNKNOWN"
            continue
          }

          if #available(iOS 17.0, *) {
            let isEligible = await subscription.isEligibleForIntroOffer
            result[productId] = isEligible ? "ELIGIBLE" : "INELIGIBLE"
          } else {
            result[productId] = "UNKNOWN"
          }
        } catch {
          result[productId] = "ERROR"
        }
      }

      return result
    }
  }
}
