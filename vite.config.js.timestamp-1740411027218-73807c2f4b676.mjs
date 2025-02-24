// vite.config.js
import { defineConfig } from "file:///C:/projects/MateAcedemy/STP-7980/node_modules/vite/dist/node/index.js";
import glob from "file:///C:/projects/MateAcedemy/STP-7980/node_modules/glob/glob.js";
import injectHTML from "file:///C:/projects/MateAcedemy/STP-7980/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///C:/projects/MateAcedemy/STP-7980/node_modules/vite-plugin-full-reload/dist/index.js";
import { ViteImageOptimizer } from "file:///C:/projects/MateAcedemy/STP-7980/node_modules/vite-plugin-image-optimizer/dist/index.mjs";

// global.styles.js
var variablesStyles = '@import "./src/scss/common/_vars.scss"';
var breakpointsStyles = '@import "./src/scss/common/_breakpoints.scss"';
var mixinsStyles = '@import "./src/scss/common/_mixins.scss"';
var resetStyles = '@import "./src/scss/common/_reset.scss"';
var styles = [
  variablesStyles,
  breakpointsStyles,
  //   colorsStyles,
  mixinsStyles,
  //   baseStyles,
  resetStyles
];
var globalStylesOptions = styles.reduce((acc, i) => acc + i + ";", "");

// vite.config.js
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "commonHelpers.js"
        }
      },
      outDir: "../dist"
    },
    plugins: [
      injectHTML(),
      FullReload(["./src/**/**.html"]),
      ViteImageOptimizer({
        exclude: /^sprite.svg$/,
        png: {
          quality: 60
        },
        jpeg: {
          quality: 60
        },
        jpg: {
          quality: 60
        },
        webp: {
          quality: 60
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: globalStylesOptions
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAiZ2xvYmFsLnN0eWxlcy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXHByb2plY3RzXFxcXE1hdGVBY2VkZW15XFxcXFNUUC03OTgwXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxNYXRlQWNlZGVteVxcXFxTVFAtNzk4MFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovcHJvamVjdHMvTWF0ZUFjZWRlbXkvU1RQLTc5ODAvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IGdsb2IgZnJvbSAnZ2xvYic7XHJcbmltcG9ydCBpbmplY3RIVE1MIGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwtaW5qZWN0JztcclxuaW1wb3J0IEZ1bGxSZWxvYWQgZnJvbSAndml0ZS1wbHVnaW4tZnVsbC1yZWxvYWQnO1xyXG5pbXBvcnQgeyBWaXRlSW1hZ2VPcHRpbWl6ZXIgfSBmcm9tICd2aXRlLXBsdWdpbi1pbWFnZS1vcHRpbWl6ZXInO1xyXG5pbXBvcnQgeyBnbG9iYWxTdHlsZXNPcHRpb25zIH0gZnJvbSAnLi9nbG9iYWwuc3R5bGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBjb21tYW5kIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIFtjb21tYW5kID09PSAnc2VydmUnID8gJ2dsb2JhbCcgOiAnX2dsb2JhbCddOiB7fSxcclxuICAgIH0sXHJcbiAgICByb290OiAnc3JjJyxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuXHJcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICBpbnB1dDogZ2xvYi5zeW5jKCcuL3NyYy8qLmh0bWwnKSxcclxuICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xyXG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdjb21tb25IZWxwZXJzLmpzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBvdXREaXI6ICcuLi9kaXN0JyxcclxuICAgIH0sXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIGluamVjdEhUTUwoKSxcclxuICAgICAgRnVsbFJlbG9hZChbJy4vc3JjLyoqLyoqLmh0bWwnXSksXHJcbiAgICAgIFZpdGVJbWFnZU9wdGltaXplcih7XHJcbiAgICAgICAgZXhjbHVkZTogL15zcHJpdGUuc3ZnJC8sXHJcbiAgICAgICAgcG5nOiB7XHJcbiAgICAgICAgICBxdWFsaXR5OiA2MCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGpwZWc6IHtcclxuICAgICAgICAgIHF1YWxpdHk6IDYwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAganBnOiB7XHJcbiAgICAgICAgICBxdWFsaXR5OiA2MCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdlYnA6IHtcclxuICAgICAgICAgIHF1YWxpdHk6IDYwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIGNzczoge1xyXG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgICAgc2Nzczoge1xyXG4gICAgICAgICAgYWRkaXRpb25hbERhdGE6IGdsb2JhbFN0eWxlc09wdGlvbnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcTWF0ZUFjZWRlbXlcXFxcU1RQLTc5ODBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHByb2plY3RzXFxcXE1hdGVBY2VkZW15XFxcXFNUUC03OTgwXFxcXGdsb2JhbC5zdHlsZXMuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3RzL01hdGVBY2VkZW15L1NUUC03OTgwL2dsb2JhbC5zdHlsZXMuanNcIjtjb25zdCB2YXJpYWJsZXNTdHlsZXMgPSAnQGltcG9ydCBcIi4vc3JjL3Njc3MvY29tbW9uL192YXJzLnNjc3NcIic7XHJcbmNvbnN0IGJyZWFrcG9pbnRzU3R5bGVzID0gJ0BpbXBvcnQgXCIuL3NyYy9zY3NzL2NvbW1vbi9fYnJlYWtwb2ludHMuc2Nzc1wiJztcclxuY29uc3QgbWl4aW5zU3R5bGVzID0gJ0BpbXBvcnQgXCIuL3NyYy9zY3NzL2NvbW1vbi9fbWl4aW5zLnNjc3NcIic7XHJcbmNvbnN0IHJlc2V0U3R5bGVzID0gJ0BpbXBvcnQgXCIuL3NyYy9zY3NzL2NvbW1vbi9fcmVzZXQuc2Nzc1wiJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IFtcclxuICB2YXJpYWJsZXNTdHlsZXMsXHJcbiAgYnJlYWtwb2ludHNTdHlsZXMsXHJcbiAgLy8gICBjb2xvcnNTdHlsZXMsXHJcbiAgbWl4aW5zU3R5bGVzLFxyXG4gIC8vICAgYmFzZVN0eWxlcyxcclxuICByZXNldFN0eWxlcyxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnbG9iYWxTdHlsZXNPcHRpb25zID0gc3R5bGVzLnJlZHVjZSgoYWNjLCBpKSA9PiBhY2MgKyBpICsgJzsnLCAnJyk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFIsU0FBUyxvQkFBb0I7QUFDdlQsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMEJBQTBCOzs7QUNKMlAsSUFBTSxrQkFBa0I7QUFDdFQsSUFBTSxvQkFBb0I7QUFDMUIsSUFBTSxlQUFlO0FBQ3JCLElBQU0sY0FBYztBQUVwQixJQUFNLFNBQVM7QUFBQSxFQUNiO0FBQUEsRUFDQTtBQUFBO0FBQUEsRUFFQTtBQUFBO0FBQUEsRUFFQTtBQUNGO0FBRU8sSUFBTSxzQkFBc0IsT0FBTyxPQUFPLENBQUMsS0FBSyxNQUFNLE1BQU0sSUFBSSxLQUFLLEVBQUU7OztBRFA5RSxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFFBQVEsTUFBTTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixDQUFDLFlBQVksVUFBVSxXQUFXLFNBQVMsR0FBRyxDQUFDO0FBQUEsSUFDakQ7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFdBQVc7QUFBQSxNQUVYLGVBQWU7QUFBQSxRQUNiLE9BQU8sS0FBSyxLQUFLLGNBQWM7QUFBQSxRQUMvQixRQUFRO0FBQUEsVUFDTixhQUFhLElBQUk7QUFDZixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLHFCQUFPO0FBQUEsWUFDVDtBQUFBLFVBQ0Y7QUFBQSxVQUNBLGdCQUFnQjtBQUFBLFFBQ2xCO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFdBQVc7QUFBQSxNQUNYLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztBQUFBLE1BQy9CLG1CQUFtQjtBQUFBLFFBQ2pCLFNBQVM7QUFBQSxRQUNULEtBQUs7QUFBQSxVQUNILFNBQVM7QUFBQSxRQUNYO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDSixTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsS0FBSztBQUFBLFVBQ0gsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUNKLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBLFVBQ0osZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
