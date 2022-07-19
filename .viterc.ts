import {defineConfig} from '@micra/vite-config/library';
import {cwd} from '@micra/vite-config/utilities/cwd';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        '@micra/request-handler/utilities',
        '@micra/router',
        '@micra/core',
      ],
      input: {
        index: cwd('index.ts'),
        ServiceProvider: cwd('./ServiceProvider.ts'),
      },
    },
  },

  plugins: [],
});
