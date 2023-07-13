import { c as create_ssr_component, l as add_attribute, h as escape, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const Img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="${"lazy"}">`;
});
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  return `<button>${escape(count)}</button>`;
});
const metadata = {
  "title": "Second",
  "description": "Second post.",
  "date": "2023-7-13",
  "categories": ["sveltekit", "svelte"],
  "published": true
};
const Second_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"svelte"}">Svelte</h2>
<p>Media inside the <strong>static</strong> folder is served from <code>/</code>.</p>
${validate_component(Img, "Components.img").$$render($$result, { src: "favicon.png", alt: "Svelte" }, {}, {})}
<h2 id="${"counter"}">Counter</h2>
${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Second_post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};
