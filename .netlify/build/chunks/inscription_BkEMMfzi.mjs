import { c as createComponent } from './_astro_assets_DOh4oQx3.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_Cttr3aR4.mjs';
import { $ as $$Layout } from './Layout_CLqYScY8.mjs';
import { $ as $$Hero } from './Hero_Ct3f8OzH.mjs';

const $$Inscription = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "connexion", "hideFooter": "true" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "hideImage": "true" })} ${maybeRenderHead()}<h2>Bienvenue !</h2> <div class="flex items-center justify-center px-4 py-8"> <div class="w-full max-w-md"> <form class="space-y-6" action="#" method="POST" onsubmit="event.preventDefault();"> <div class="space-y-5"> <div class="relative border-bleu border bg-white rounded-lg pl-4 pt-2"> <label for="nom" class="block mb-2"> Nom </label> <input id="nom" name="nom" type="nom" autocomplete="nom" required class="block w-full px-4 pb-3
                             focus:outline-none text-sm font-light" placeholder="Votre nom de famille"> </div> <div class="relative border-bleu border bg-white rounded-lg pl-4 pt-2"> <label for="prenom" class="block mb-2"> Prénom </label> <input id="prenom" name="prenom" type="prenom" autocomplete="prenom" required class="block w-full px-4 pb-3
                             focus:outline-none text-sm font-light" placeholder="Votre prénom"> </div> <div class="relative border-bleu border bg-white rounded-lg pl-4 pt-2"> <label for="email" class="block mb-2"> Email </label> <input id="email" name="email" type="email" autocomplete="email" required class="block w-full px-4 pb-3
                             focus:outline-none text-sm font-light" placeholder="vous@exemple.com"> </div> </div> <div class="relative border-bleu border bg-white rounded-lg pl-4 pt-2"> <label for="password" class="block mb-2">
Mot de passe
</label> <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full px-4 pb-3
                             focus:outline-none text-sm font-light" placeholder="••••••••"> </div> </form> <div class="flex items-center justify-between"> <div class="flex items-center"> <input id="pc-cgu" name="pc-cgu" type="checkbox" class="h-4 w-4 my-5 accent-bleu focus:ring-bleu border-bleu rounded  "> <label for="remember-me" class="ml-2 block text-bleu  text-sm">
J'accepte la <a href="/politiqConf" class="underline">politique de confidentialité</a> et les <a href="/cgu" class="underline">conditions générales d'utilisation</a> </label> </div> </div> <div> <button type="submit" class="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-bleu text-xl">
S'inscrire
</button> </div> <div class="text-center mt-3 font-light"> <p class="">
J'ai déjà un compte
<a href="/connexion" class="font-normal underline">
Connexion
</a> </p> </div> </div> </div> ` })}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/inscription.astro", void 0);

const $$file = "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/inscription.astro";
const $$url = "/inscription";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Inscription,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
