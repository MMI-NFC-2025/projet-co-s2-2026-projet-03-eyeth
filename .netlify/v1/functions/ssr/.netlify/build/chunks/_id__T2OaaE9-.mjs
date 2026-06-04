import { c as createComponent } from './_astro_assets_Bf29J1zX.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './ssr-function_qawgJTqU.mjs';
import { $ as $$Layout } from './Layout_CgIL9Ae_.mjs';
import { $ as $$Hero } from './Hero_RogZZ7iH.mjs';
import { $ as $$CardMot } from './CardMot_Bi1jORFF.mjs';
import { o as onePack, b as getMotsForPack } from './backend_TEeFbNUv.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const pack = await onePack(id);
  const mots = await getMotsForPack(id);
  if (!pack) {
    return Astro2.redirect("/packs");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": pack.nomPack }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": pack.nomPack, "retour": "/packs/" })} ${maybeRenderHead()}<a${addAttribute(`/packs/lecon/${id}`, "href")} class="bg-bleu text-beige text-2xl rounded-lg flex items-center justify-center w-65 h-15 mx-auto">Commencez la leçon</a> <div class="grid grid-cols-2 gap-6 max-w-4xl mx-auto p-4"> ${mots.map((mot) => renderTemplate`${renderComponent($$result2, "CardMot", $$CardMot, { "mot": mot })}`)} </div> <a${addAttribute(`/packs/lecon/${id}`, "href")} class="bg-bleu text-beige text-2xl rounded-lg flex items-center justify-center w-65 h-15 mx-auto mb-10">Commencez la leçon</a> ` })}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/packs/mots/[id].astro", void 0);

const $$file = "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/packs/mots/[id].astro";
const $$url = "/packs/mots/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
