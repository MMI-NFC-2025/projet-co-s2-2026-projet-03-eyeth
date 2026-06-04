import { c as createComponent } from './_astro_assets_Bf29J1zX.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './ssr-function_qawgJTqU.mjs';
import 'clsx';
import { p as pb } from './backend_TEeFbNUv.mjs';

const $$ImagePb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ImagePb;
  const {
    record,
    field = "photo",
    alt,
    classImg,
    size = "1600x400"
  } = Astro2.props;
  const imageUrl = record?.[field] ? pb.files.getURL(record, record[field], { thumb: size }) : null;
  return renderTemplate`${imageUrl ? renderTemplate`${maybeRenderHead()}<img${addAttribute(imageUrl, "src")}${addAttribute(alt || "Image du pack", "alt")}${addAttribute(classImg, "class")} loading="lazy" width="400" height="400">` : renderTemplate`<div${addAttribute(`${classImg} bg-gray-500 flex items-center justify-center text-white`, "class")}>
Pas d'image
</div>`}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/components/ImagePb.astro", void 0);

export { $$ImagePb as $ };
