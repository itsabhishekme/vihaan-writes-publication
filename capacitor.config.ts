import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.vihaanwrites.app",
  appName: "Vihaan Writes",
  webDir: "out",

  plugins: {
    SplashScreen: {
      launchShowDuration: 1800,
      backgroundColor: "#1657BE",
      showSpinner: false,
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },

  android: {
    allowMixedContent: true,
  },
};

export default config;