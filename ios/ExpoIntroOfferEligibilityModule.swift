import ExpoModulesCore
import StoreKit

public class ExpoIntroOfferEligibilityModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoIntroOfferEligibility")

    AsyncFunction("checkEligibility") { async (productIds: [String]) throws -> [String: String] in
      var result: [String: String] = [:]

      for productId in productIds {
        do {
          let products = try await Product.products(for: [productId])
          if let product = products.first,
             let subscriptionInfo = product.subscription,
             let eligibility = try? await subscriptionInfo.introEligibility {
            switch eligibility {
            case .eligible:
              result[productId] = "ELIGIBLE"
            case .ineligible:
              result[productId] = "INELIGIBLE"
            case .unknown:
              fallthrough
            @unknown default:
              result[productId] = "UNKNOWN"
            }
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
