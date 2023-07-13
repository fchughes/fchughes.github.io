import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { M as Mdsvex } from "./mdsvex.js";
const metadata = {
  "title": "Hola",
  "description": "First post.",
  "date": "2023-7-13",
  "categories": ["sveltekit", "svelte"],
  "published": true
};
const First_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvex, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign($$props, metadata), {}, {
    default: () => {
      return `<h2 id="${"markdown"}">Markdown</h2>
<p>Hey friends! 👋</p>
<!-- HTML_TAG_START -->${`<pre class="shiki poimandres" style="background-color: #1b1e28" tabindex="0"><code><span class="line"><span style="color: #91B4D5">function</span><span style="color: #A6ACCD"> </span><span style="color: #ADD7FF">hola</span><span style="color: #A6ACCD">(</span><span style="color: #E4F0FB">name</span><span style="color: #91B4D5">:</span><span style="color: #A6ACCD"> </span><span style="color: #A6ACCDC0">string</span><span style="color: #A6ACCD">) &#123;</span></span>
<span class="line"><span style="color: #A6ACCD">	</span><span style="color: #E4F0FB">console</span><span style="color: #A6ACCD">.</span><span style="color: #E4F0FBD0">log</span><span style="color: #A6ACCD">(</span><span style="color: #A6ACCD">&#96;</span><span style="color: #5DE4C7">Hola </span><span style="color: #A6ACCD">$&#123;</span><span style="color: #E4F0FB">name</span><span style="color: #A6ACCD">&#125;</span><span style="color: #5DE4C7">! 👋</span><span style="color: #A6ACCD">&#96;</span><span style="color: #A6ACCD">)</span></span>
<span class="line"><span style="color: #A6ACCD">&#125;</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
    }
  })}`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: First_post,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};
