import { Link, Outlet, useLocation } from "@solidjs/router";
import { onMount } from "solid-js";
import { themeChange } from "theme-change";
import { Icon } from "solid-heroicons";
import { sun, moon } from "solid-heroicons/solid";

onMount(async () => {
  themeChange();
});

const mainlayout = () => {
  const location = useLocation();
  let theme = localStorage.getItem("theme");

  return (
    <>
      <div class="navbar bg-base-200">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">SolidJS Router</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/error">Error</Link>
            </li>
            <li>
              <div class="form-control">
                <input
                  type="text"
                  class="input input-bordered input-sm"
                  readOnly
                  value={location.pathname}
                />
              </div>
            </li>
            <li>
              <label class="swap swap-rotate">
                <input
                  type="checkbox"
                  data-toggle-theme="dark,light"
                  checked={theme === "light"}
                />
                <Icon path={sun} class="swap-on w-6" />
                <Icon path={moon} class="swap-off w-6" />
              </label>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default mainlayout;
