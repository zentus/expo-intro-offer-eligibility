Pod::Spec.new do |s|
  s.name           = 'ExpoIntroductoryOfferEligibilityCheckerModule'
  s.version        = '1.0.0'
  s.summary        = 'Check StoreKit 2 introductory offer eligibility from an Expo app'
  s.description    = <<-DESC
                       This module uses StoreKit 2 to check if a user is eligible
                       for introductory offers for given subscription product IDs.
                     DESC
  s.homepage       = 'https://github.com/zentus/expo-introductory-offer-eligibility-checker'
  s.license        = { :type => 'MIT' }
  s.author         = { 'zentus' => 'zentus@cimantra.com' }
  s.platform       = :ios, '15.0'
  s.source         = { :path => "." }
  s.source_files   = '**/*.{h,m,mm,swift}'
  s.requires_arc   = true
  s.swift_version  = '5.0'

  s.dependency 'ExpoModulesCore'
end
