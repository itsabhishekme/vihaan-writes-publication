import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.vihaanwrites.app",
  appName: "Vihaan Writes",
  webDir: "out",

  plugins: {
    SplashScreen: {
      launchShowDuration: 1800,
      backgroundColor: "#FFFFFFFF",
      showSpinner: false,
      androidScaleType: "CENTER_CROP",
    },
  },

  android: {
    allowMixedContent: true,
  },
};

export default config;