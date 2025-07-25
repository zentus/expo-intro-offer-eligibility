Pod::Spec.new do |s|
  s.name           = 'ExpoIntroOfferEligibility'
  s.version        = '1.0.5'
  s.summary        = 'Check StoreKit 2 introductory offer eligibility from an Expo app'
  s.description    = <<-DESC
                       This module uses StoreKit 2 to check if a user is eligible
                       for introductory offers for given subscription product IDs.
                     DESC
  s.homepage       = 'https://github.com/zentus/expo-introductory-offer-eligibility-checker'
  s.license        = { :type => 'MIT' }
  s.author         = { 'zentus' => 'zentus@cimantra.com' }
  s.source         = { git: 'https://github.com/zentus/expo-introductory-offer-eligibility-checker' }
  s.requires_arc   = true
  s.frameworks = 'StoreKit'

  s.platforms      = {
    :ios => '15.1'
  }
  s.swift_version  = '5.4'
  s.static_framework = true

  s.dependency 'ExpoModulesCore'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'SWIFT_COMPILATION_MODE' => 'wholemodule'
  }

  s.source_files = "**/*.{h,m,mm,swift,hpp,cpp}"
end
