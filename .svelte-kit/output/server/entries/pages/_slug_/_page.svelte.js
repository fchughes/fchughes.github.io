import { c as create_ssr_component, h as escape, l as add_attribute, f as each, v as validate_component, m as missing_component } from "../../../chunks/index3.js";
import { f as formatDate } from "../../../chunks/utils.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-8uncrq.svelte-8uncrq{max-inline-size:var(--size-content-3);margin-inline:auto}h1.svelte-8uncrq.svelte-8uncrq{text-transform:capitalize}h1.svelte-8uncrq+p.svelte-8uncrq{margin-top:var(--size-2);color:var(--text-2)}.tags.svelte-8uncrq.svelte-8uncrq{display:flex;gap:var(--size-3);margin-top:var(--size-7)}.tags.svelte-8uncrq>.svelte-8uncrq{padding:var(--size-2) var(--size-3);border-radius:var(--radius-round)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-ylbs26_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="${"og:type"}" content="${"article"}"><meta property="${"og:title"}"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-ylbs26_END -->`, ""}

<article class="${"svelte-8uncrq"}"><hgroup><h1 class="${"svelte-8uncrq"}">${escape(data.meta.title)}</h1>
		<p class="${"svelte-8uncrq"}">Published at ${escape(formatDate(data.meta.date))}</p></hgroup>

	<div class="${"tags svelte-8uncrq"}">${each(data.meta.categories, (category) => {
    return `<span class="${"surface-4 svelte-8uncrq"}">#${escape(category)}</span>`;
  })}</div>

	<div class="${"prose"}">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>
</article>`;
});
export {
  Page as default
};
