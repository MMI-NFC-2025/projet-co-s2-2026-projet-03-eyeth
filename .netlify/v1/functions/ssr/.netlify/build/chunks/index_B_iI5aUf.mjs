import { c as createComponent } from './_astro_assets_Bf29J1zX.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_qawgJTqU.mjs';
import { $ as $$Layout } from './Layout_CgIL9Ae_.mjs';
import { $ as $$Hero } from './Hero_RogZZ7iH.mjs';
import { $ as $$CardPack } from './CardPack_BrfMesc-.mjs';
import { c as getPacks } from './backend_TEeFbNUv.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const packs = await getPacks();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "packs" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Nos packs" })} ${maybeRenderHead()}<div class="grid grid-cols-2 gap-6 max-w-4xl mx-auto p-4"> ${packs.map((pack) => renderTemplate`<div class="w-full"> ${renderComponent($$result2, "CardPack", $$CardPack, { "pack": pack, "classImg": "group relative block w-42 h-52.25 rounded-lg overflow-hidden shadow-lg my-4 mx-auto" })} </div>`)} </div> ` })}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/packs/index.astro", void 0);

const $$file = "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/packs/index.astro";
const $$url = "/packs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
