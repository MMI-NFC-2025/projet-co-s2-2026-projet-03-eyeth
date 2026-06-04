import { c as createComponent } from './_astro_assets_Bf29J1zX.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './ssr-function_qawgJTqU.mjs';
import 'clsx';

const $$CardMot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardMot;
  const { mot } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="rounded-lg flex justify-center items-center border border-rouge text-xl font-semibold w-full h-10"${addAttribute(`/mots/${mot.id}`, "href")}> ${mot.mot} </a>`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/components/CardMot.astro", void 0);

export { $$CardMot as $ };
