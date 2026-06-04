import { c as createComponent } from './_astro_assets_DOh4oQx3.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate } from './ssr-function_Cttr3aR4.mjs';
import { $ as $$Layout } from './Layout_CLqYScY8.mjs';
import { $ as $$Hero } from './Hero_Ct3f8OzH.mjs';
import { $ as $$ImagePb } from './ImagePb_CB0DZ_Qt.mjs';
import { g as getOneMot } from './backend_TEeFbNUv.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const mot = await getOneMot(id);
  if (!mot) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": mot.mot }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": mot.mot, "retour": "/mots/" })} ${renderComponent($$result2, "ImagePb", $$ImagePb, { "record": mot, "field": "video", "classImg": "flex w-90 mx-auto mb-5 border border-rouge rounded-lg" })} ` })}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/mots/[id].astro", void 0);

const $$file = "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/mots/[id].astro";
const $$url = "/mots/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
