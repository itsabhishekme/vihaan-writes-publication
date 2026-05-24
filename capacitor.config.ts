import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.vihaanwrites.app",
  appName: "Vihaan Writes",

  webDir: "out",

  server: {
    androidScheme: "http",
    cleartext: true,
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: "#083885",
      showSpinner: false,
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      splashImmersive: true,
    },
  },

  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
  },
};

export default config;