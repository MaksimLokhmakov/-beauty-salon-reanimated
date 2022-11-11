import { assets as onboardingAssets } from "./screens/Onboarding";
import { assets as welcomeAssets } from "./screens/Welcome";

export { default } from "./Navigator";
export const assets = [...onboardingAssets, ...welcomeAssets];
