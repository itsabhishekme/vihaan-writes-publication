import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.vihaanwrites.app",
  appName: "Vihaan Writes",
  webDir: "out",

  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      backgroundColor: "#FFFFFFFF",
      showSpinner: false,
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;