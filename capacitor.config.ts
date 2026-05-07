import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vihaanwrites.app',
  appName: 'Vihaan Writes',
  webDir: 'out',

  server: {
    androidScheme: 'https'
  }
};

export default config;