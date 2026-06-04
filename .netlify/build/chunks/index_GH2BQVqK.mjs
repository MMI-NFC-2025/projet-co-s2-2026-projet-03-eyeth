import { c as createComponent, $ as $$Image } from './_astro_assets_DOh4oQx3.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, r as renderComponent, a as renderTemplate } from './ssr-function_Cttr3aR4.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_CLqYScY8.mjs';
import { $ as $$Hero } from './Hero_Ct3f8OzH.mjs';
import { $ as $$CardPack } from './CardPack_Dxzp_twn.mjs';
import { f as flechesGauche, a as flechesDroite } from './button_lightRight_CLquNJ1d.mjs';
import { c as getPacks } from './backend_TEeFbNUv.mjs';

const $$CardBleu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardBleu;
  const { titre, description, image, href = "/" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="rounded-lg flex flex-col bg-bleu p-5 m-10 items-center text-beige"${addAttribute(href, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-lg w-full h-auto object-cover", "src": image, "alt": "Image d'illustration pour {titre}" })} <div class="text-xl font-semibold w-full mt-4">${titre}</div> <p class="mt-2 opacity-90">${description}</p> </a>`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/components/CardBleu.astro", void 0);

const placeHolderFonctionnalites = new Proxy({"src":"/_astro/placeHolderFonctionnalites.CKRdMHds.webp","width":530,"height":396,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/assets/placeHolderFonctionnalites.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const packs = await getPacks();
  const fonctionnalites = [
    {
      titre: "Jeux",
      description: "Les jeux se jouent seuls ou à plusieurs",
      image: placeHolderFonctionnalites,
      href: "/jeux"
    },
    {
      titre: "Leçons",
      description: "Des parcours structurés",
      image: placeHolderFonctionnalites,
      href: "/packs"
    },
    {
      titre: "Dictionnaire",
      description: "Des centaines de signes",
      image: placeHolderFonctionnalites,
      href: "/mots/"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "eyeth" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "La langue des signes", "hideButton": "true" })} ${maybeRenderHead()}<div class="m-7 mt-0"> <h3 class="font-semibold text-xl">Qu'est-ce que EYETH ?</h3> <p class="mb-4">
Bienvenue sur EYETH, la plateforme qui rend l'apprentissage de la
            LSF simple et visuel.
</p> <nav class="flex justify-center m-5"> <a href="/info" class="p-2 text-lg text-beige bg-bleu rounded inline-flex">
En savoir plus
</a> </nav> </div> <div class="text-beige mb-10"> <h2 class="text-2xl font-bold mb-4">Nos fonctionnalités</h2> ${fonctionnalites.map((fonctionnalite) => renderTemplate`<div class="snap-center shrink-0 md:w-auto"> ${renderComponent($$result2, "CardFonctionnalite", $$CardBleu, { "titre": fonctionnalite.titre, "description": fonctionnalite.description, "image": fonctionnalite.image, "href": fonctionnalite.href })} </div>`)} </div> <div class="mt-10 relative items-center"> <h2 class="text-2xl font-bold mb-4">Apprenez par pack</h2> <p class="my-5 mx-10">
Nos leçons peuvent être données sous forme de packs pour un
            apprentissage précis.
</p> <div id="carousel-packs" class="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 pb-4 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"> ${packs.map((pack) => renderTemplate`<div class="snap-center shrink-0 md:w-auto"> ${renderComponent($$result2, "CardPack", $$CardPack, { "pack": pack, "classImg": "group relative block w-80 h-80 rounded-lg overflow-hidden shadow-lg my-4 mx-auto" })} </div>`)} </div> <div class="flex justify-center items-center gap-8 mb-10"> <button id="btn-prev" aria-label="Voir les packs précédents"> <img${addAttribute(flechesGauche.src, "src")} alt="Précédent" class="w-8 h-8 object-contain drop-shadow-md"> </button> <button id="btn-next" aria-label="Voir les packs suivants"> <img${addAttribute(flechesDroite.src, "src")} alt="Suivant" class="w-8 h-8 object-contain"> </button> </div> <a href="/packs/" class="flex justify-center items-center h-11 w-42.25 mx-auto rounded-lg bg-bleu text-beige mb-10 uppercase">Tous les packs</a> </div> ` })} ${renderScript($$result, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/index.astro", void 0);

const $$file = "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
