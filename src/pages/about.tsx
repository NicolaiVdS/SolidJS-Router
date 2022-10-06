import { createEffect, Suspense } from "solid-js";
import { useRouteData } from "@solidjs/router";

export default function About() {
  const name = useRouteData<() => string>();

  createEffect(() => {
    console.log(name());
  });

  return (
    <section class="p-8">
      <h1>About</h1>

      <p class="mt-4">A page all about this website.</p>

      <p>
        <span>We love</span>
        <Suspense fallback={<span>...</span>}>
          <span>&nbsp;{name()}</span>
        </Suspense>
      </p>
    </section>
  );
}
