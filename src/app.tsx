import { Component, onMount } from "solid-js";
import { useRoutes } from "@solidjs/router";
import { themeChange } from "theme-change";

import { routes } from "./routes";

const App: Component = () => {
  const Route = useRoutes(routes);

  return (
    <>
      <Route />
    </>
  );
};

export default App;
