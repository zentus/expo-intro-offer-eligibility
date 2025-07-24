import {
  ConfigPlugin,
  createRunOncePlugin,
  withPlugins,
} from '@expo/config-plugins';

const withExpoIntroductoryOfferEligibilityChecker: ConfigPlugin = config => {
  return withPlugins(config, []);
};

export default createRunOncePlugin(
  withExpoIntroductoryOfferEligibilityChecker,
  '@zentus/expo-introductory-offer-eligibility-checker'
);