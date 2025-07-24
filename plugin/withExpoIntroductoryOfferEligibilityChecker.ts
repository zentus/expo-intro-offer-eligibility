import {
  ConfigPlugin,
  createRunOncePlugin,
  withPlugins,
} from '@expo/config-plugins';
import pkg from '../package.json';

const withExpoIntroductoryOfferEligibilityChecker: ConfigPlugin = config => {
  return withPlugins(config, []);
};

export default createRunOncePlugin(
  withExpoIntroductoryOfferEligibilityChecker,
  pkg.name,
  pkg.version
);