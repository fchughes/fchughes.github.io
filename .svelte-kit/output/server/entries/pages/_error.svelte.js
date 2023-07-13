import { k as getContext, c as create_ssr_component, g as subscribe, h as escape } from "../../chunks/index3.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-2l8l59{height:100%;display:grid;place-content:center}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"error svelte-2l8l59"}"><h1>${escape($page.status)}: ${escape($page.error?.message)}</h1>
</div>`;
});
export {
  Error$1 as default
};
