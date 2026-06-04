import { c as createComponent, $ as $$Image } from './_astro_assets_Bf29J1zX.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderComponent, b as addAttribute, a as renderTemplate } from './ssr-function_qawgJTqU.mjs';
import { c as createSvgComponent } from './Layout_CgIL9Ae_.mjs';

const backHero = new Proxy({"src":"/_astro/hero._CuMeXaN.webp","width":1080,"height":1920,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/assets/hero.webp";
							}
							
							return target[name];
						}
					});

const lightArrow = createSvgComponent({"meta":{"src":"/_astro/arrow_beige.CPD3gF_4.svg","width":1080,"height":1920,"format":"svg"},"attributes":{"id":"Calque_1","width":"1080","height":"1920","viewBox":"0 0 1080 1920"},"children":"<rect x=\"45.34\" y=\"1009.78\" width=\"899.61\" height=\"66.04\" fill=\"#fff3d6\" /><polygon points=\"726.12 772.7 681.08 821.07 919.61 1042.73 681.08 1264.46 726.12 1312.83 1016.57 1042.73 726.12 772.7\" fill=\"#fff3d6\" />","styles":[]});

const darkArrow = createSvgComponent({"meta":{"src":"/_astro/arrow_bleue.SsOS9BQn.svg","width":1080,"height":1920,"format":"svg"},"attributes":{"id":"Calque_1","width":"1080","height":"1920","viewBox":"0 0 1080 1920"},"children":"<rect x=\"107.64\" y=\"1011.83\" width=\"818.26\" height=\"60.07\" fill=\"#1a0089\" /><polygon points=\"726.86 796.19 685.88 840.18 902.84 1041.8 685.88 1243.48 726.86 1287.48 991.04 1041.8 726.86 796.19\" fill=\"#1a0089\" />","styles":[]});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title = "",
    hideImage = false,
    hideButton = false,
    retour = "/"
  } = Astro2.props;
  return renderTemplate`${!hideImage ? renderTemplate`${maybeRenderHead()}<div class="relative flex items-center h-80 w-full overflow-hidden">${renderComponent($$result, "Image", $$Image, { "src": backHero, "alt": "Fond du hero", "class": "absolute inset-0 w-screen -z-10 max-h-130" })}${!hideButton && renderTemplate`<a${addAttribute(retour, "href")} class="absolute top-3 left-5 z-20">${renderComponent($$result, "Image", $$Image, { "src": lightArrow, "alt": "Retour", "class": "w-5 scale-x-[-1]" })}</a>`}<div class="relative flex items-center justify-center text-6xl text-beige   text-center mx-auto"><h1 class="flex">${title}</h1></div></div>` : renderTemplate`<div class="relative flex flex-col items-center w-full py-5">${!hideButton && renderTemplate`<a${addAttribute(retour, "href")} class="absolute top-0 left-5 z-20">${renderComponent($$result, "Image", $$Image, { "src": darkArrow, "alt": "Retour", "class": "h-10 w-auto scale-x-[-1]" })}</a>`}</div>`}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/components/Hero.astro", void 0);

export { $$Hero as $ };
