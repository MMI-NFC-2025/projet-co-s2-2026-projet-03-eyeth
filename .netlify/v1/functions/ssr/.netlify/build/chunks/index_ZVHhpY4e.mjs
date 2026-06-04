import { c as createComponent } from './_astro_assets_DOh4oQx3.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_Cttr3aR4.mjs';
import { $ as $$Layout } from './Layout_CLqYScY8.mjs';
import { $ as $$Hero } from './Hero_Ct3f8OzH.mjs';
import { $ as $$CardMot } from './CardMot_BDkPJBs8.mjs';
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
