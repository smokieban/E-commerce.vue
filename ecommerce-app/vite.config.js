import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  // Plugins
  plugins: [vue()],

  // Resolve aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Allows importing from src using '@'
      jquery: 'jquery', // Ensures jQuery resolves correctly if needed
    },
  },

  // Optimize dependencies
  optimizeDeps: {
    include: ['jquery'], // Pre-bundle jQuery for faster dev builds if used
  },

  // Public path
  server: {
    // This ensures that Vite serves static files correctly
    // Files in the `public` directory are served at the root URL `/`
    open: true, // Automatically opens the app in the browser when the dev server starts
  },

  build: {
    // Ensure assets like images and fonts are bundled correctly during production builds
    assetsDir: 'assets', // Keep assets organized in the 'assets' folder
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // Custom path for static assets
      },
    },
  },

  // Static assets handling
  publicDir: 'public', // Explicitly defining the public folder, though it’s the default
});

/*import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Add jQuery alias if necessary
      jquery: 'jquery', // Ensures Vite resolves jQuery correctly
    },
  },
  optimizeDeps: {
    include: ['jquery'], // Pre-bundle jQuery if necessary
  },
});*/
/*
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Alias for jQuery
      jquery: 'jquery/dist/jquery.min.js',
    },
  },
  optimizeDeps: {
    include: ['jquery'],
    exclude: ['jsdom', 'xmlhttprequest', 'location', 'navigator'],
  },
  server: {
    port: 5173,  // Explicitly set the port to 5173 (or the one you prefer)
  },
});
*/

/*
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Alias to use the browser-friendly jQuery version
      jquery: 'jquery/dist/jquery.min.js'
    }
  },
  optimizeDeps: {
    include: ['jquery'],   // Include jQuery for client-side use
    exclude: ['jsdom', 'xmlhttprequest', 'location', 'navigator'] // Exclude Node-only modules
  },
});
*/



/*
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
*/
