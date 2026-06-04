import { c as createComponent } from './_astro_assets_Bf29J1zX.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './ssr-function_qawgJTqU.mjs';
import { $ as $$ImagePb } from './ImagePb_Cw8WZ7VZ.mjs';

const $$CardPack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardPack;
  const { pack, classImg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/packs/mots/${pack.id}`, "href")}${addAttribute(classImg, "class")}> ${pack.illustration && renderTemplate`${renderComponent($$result, "ImagePb", $$ImagePb, { "record": pack, "field": "illustration", "classImg": "absolute inset-0 z-0 w-full h-full object-cover" })}`} <div class="absolute inset-0 z-10 bg-linear-to-t from-rouge to-transparent"></div> <div class="relative z-20 flex h-full flex-col justify-end p-6 text-beige"> <h3 class="text-2xl font-bold mb-2 drop-shadow-md"> ${pack.nomPack} </h3> </div> </a>`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/components/CardPack.astro", void 0);

export { $$CardPack as $ };
