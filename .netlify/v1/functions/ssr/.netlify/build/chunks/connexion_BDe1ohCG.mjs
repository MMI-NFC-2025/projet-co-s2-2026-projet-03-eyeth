import { c as createComponent } from './_astro_assets_Bf29J1zX.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_qawgJTqU.mjs';
import { $ as $$Layout } from './Layout_CgIL9Ae_.mjs';
import { $ as $$Hero } from './Hero_RogZZ7iH.mjs';

const $$Connexion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "connexion", "hideFooter": "true" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "hideImage": "true" })} ${maybeRenderHead()}<h2>Content de vous revoir !</h2> <div class="flex items-center justify-center px-4 py-8"> <div class="w-full max-w-md"> <form class="space-y-6" action="#" method="POST" onsubmit="event.preventDefault();"> <div class="space-y-5"> <div class="relative border-bleu border bg-white rounded-lg pl-4 pt-2"> <label for="email" class="block mb-2"> Email </label> <input id="email" name="email" type="email" autocomplete="email" required class="block w-full px-4 pb-3
                             focus:outline-none text-sm font-light" placeholder="vous@exemple.com"> </div> </div> <div class="relative border-bleu border bg-white rounded-lg pl-4 pt-2"> <label for="password" class="block mb-2">
Mot de passe
</label> <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full px-4 pb-3
                             focus:outline-none text-sm font-light" placeholder="••••••••"> </div> </form> <div> <button type="submit" class="group relative w-full flex justify-center py-3 px-4 my-6 border border-transparent rounded-lg text-white bg-bleu text-xl">
Se connecter
</button> </div> <div class="text-center mt-4 font-light"> <p class="">
Je n'ai pas de compte
<a href="/inscription" class="font-normal underline">
Inscription
</a> </p> </div> </div> </div> ` })}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/connexion.astro", void 0);

const $$file = "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/connexion.astro";
const $$url = "/connexion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Connexion,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
