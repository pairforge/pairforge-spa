import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static'; // <-- Import the adapter

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      // default options are fine for most cases
      pages: 'build',
      assets: 'build',
      fallback: undefined, // or '404.html' or 'index.html'
      precompress: false,
      strict: true
    })
    // paths: {
    //   base: process.env.NODE_ENV === 'production' ? '/pairforge-spa' : '',
    // }
  }
};

export default config;
