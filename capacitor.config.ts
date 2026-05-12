import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.vihaanwrites.app",
  appName: "Vihaan Writes",
  webDir: "out",

  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: "#FFFFFFFF",
      showSpinner: false,
      androidScaleType: "CENTER_INSIDE",
    },
  },

  android: {
    allowMixedContent: true,
  },
};

export default config;