import { c as createComponent } from './_astro_assets_Bf29J1zX.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_qawgJTqU.mjs';
import { $ as $$Layout } from './Layout_CgIL9Ae_.mjs';
import { $ as $$Hero } from './Hero_RogZZ7iH.mjs';
import { $ as $$CardMot } from './CardMot_Bi1jORFF.mjs';
import { a as getMots } from './backend_TEeFbNUv.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const mots = await getMots();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Dictionnaire" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Dictionnaire" })} ${maybeRenderHead()}<div class="grid grid-cols-2 gap-6 max-w-4xl mx-auto p-4"> ${mots.map((mot) => renderTemplate`${renderComponent($$result2, "CardMot", $$CardMot, { "mot": mot })}`)} </div> ` })}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/mots/index.astro", void 0);

const $$file = "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/mots/index.astro";
const $$url = "/mots";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
