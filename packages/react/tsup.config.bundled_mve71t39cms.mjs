// tsup.config.ts
import { defineConfig } from "tsup";
import { sassPlugin, postcssModules } from "esbuild-sass-plugin";
import path from "path";
var tsup_config_default = defineConfig({
  entry: ["src/index.tsx", "src/client.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react", "react-dom"],
  clean: true,
  esbuildPlugins: [
    sassPlugin({
      type: "css",
      transform: postcssModules({}),
      precompile(source, pathname) {
        const relativePath = path.relative(
          path.resolve(pathname),
          path.resolve("src", "styles", "breakpoints.scss")
        ).replace(/^\.\.\//, "");
        if (!!relativePath) {
          return `@import '${relativePath}';
${source}`;
        }
        return source;
      }
    })
  ]
});
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FzY29zdGFhbWFyYWwvRGV2ZWxvcC9sZWdhLXBsYW4vYmF1bmlsaGEvcGFja2FnZXMvcmVhY3QvdHN1cC5jb25maWcudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2x1Y2FzY29zdGFhbWFyYWwvRGV2ZWxvcC9sZWdhLXBsYW4vYmF1bmlsaGEvcGFja2FnZXMvcmVhY3RcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2x1Y2FzY29zdGFhbWFyYWwvRGV2ZWxvcC9sZWdhLXBsYW4vYmF1bmlsaGEvcGFja2FnZXMvcmVhY3QvdHN1cC5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd0c3VwJ1xuaW1wb3J0IHsgc2Fzc1BsdWdpbiwgcG9zdGNzc01vZHVsZXMgfSBmcm9tICdlc2J1aWxkLXNhc3MtcGx1Z2luJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgZW50cnk6IFsnc3JjL2luZGV4LnRzeCcsICdzcmMvY2xpZW50LnRzeCddLFxuICBmb3JtYXQ6IFsnY2pzJywgJ2VzbSddLFxuICBkdHM6IHRydWUsXG4gIHNvdXJjZW1hcDogdHJ1ZSxcbiAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gIGNsZWFuOiB0cnVlLFxuICBlc2J1aWxkUGx1Z2luczogW1xuICAgIHNhc3NQbHVnaW4oe1xuICAgICAgdHlwZTogJ2NzcycsXG4gICAgICB0cmFuc2Zvcm06IHBvc3Rjc3NNb2R1bGVzKHt9KSxcbiAgICAgIHByZWNvbXBpbGUoc291cmNlLCBwYXRobmFtZSkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoXG4gICAgICAgICAgLnJlbGF0aXZlKFxuICAgICAgICAgICAgcGF0aC5yZXNvbHZlKHBhdGhuYW1lKSxcbiAgICAgICAgICAgIHBhdGgucmVzb2x2ZSgnc3JjJywgJ3N0eWxlcycsICdicmVha3BvaW50cy5zY3NzJyksXG4gICAgICAgICAgKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuXFwuXFwvLywgJycpXG5cbiAgICAgICAgaWYgKCEhcmVsYXRpdmVQYXRoKSB7XG4gICAgICAgICAgcmV0dXJuIGBAaW1wb3J0ICcke3JlbGF0aXZlUGF0aH0nO1xcbiR7c291cmNlfWBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzb3VyY2VcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVixTQUFTLG9CQUFvQjtBQUM5VyxTQUFTLFlBQVksc0JBQXNCO0FBQzNDLE9BQU8sVUFBVTtBQUVqQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPLENBQUMsaUJBQWlCLGdCQUFnQjtBQUFBLEVBQ3pDLFFBQVEsQ0FBQyxPQUFPLEtBQUs7QUFBQSxFQUNyQixLQUFLO0FBQUEsRUFDTCxXQUFXO0FBQUEsRUFDWCxVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsRUFDL0IsT0FBTztBQUFBLEVBQ1AsZ0JBQWdCO0FBQUEsSUFDZCxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixXQUFXLGVBQWUsQ0FBQyxDQUFDO0FBQUEsTUFDNUIsV0FBVyxRQUFRLFVBQVU7QUFDM0IsY0FBTSxlQUFlLEtBQ2xCO0FBQUEsVUFDQyxLQUFLLFFBQVEsUUFBUTtBQUFBLFVBQ3JCLEtBQUssUUFBUSxPQUFPLFVBQVUsa0JBQWtCO0FBQUEsUUFDbEQsRUFDQyxRQUFRLFdBQVcsRUFBRTtBQUV4QixZQUFJLENBQUMsQ0FBQyxjQUFjO0FBQ2xCLGlCQUFPLFlBQVksWUFBWTtBQUFBLEVBQU8sTUFBTTtBQUFBLFFBQzlDO0FBRUEsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
