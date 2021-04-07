import VueApp from "./App.vue";
import { createSSRApp } from "vue";

export function createVueApp() {
  const app = createSSRApp(VueApp);

  return { app };
}
