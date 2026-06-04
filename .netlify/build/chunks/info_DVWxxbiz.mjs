import { c as createComponent } from './_astro_assets_DOh4oQx3.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_Cttr3aR4.mjs';
import { $ as $$Layout } from './Layout_CLqYScY8.mjs';
import { $ as $$Hero } from './Hero_Ct3f8OzH.mjs';

const $$Info = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "À propos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "À propos" })} ${maybeRenderHead()}<div class="m-7 mt-0<"> <p class="mb-5">
Eyeth est une application web qui transforme l'apprentissage de la
            LSF (Langue des Signes Française) en une expérience ludique et
            accessible. Grâce à des mini-jeux interractifs et des leçons
            progressives, les utilisateurs peuvent découvrir les signes à leur
            rythme tout en s'amusant.
</p> <p></p><div class="text-rouge">Notre objectif</div> dépasse l'apprentissage linguistique
            : Eyeth ouvre une porte vers la culture sourde et malentendante. Chaque
            niveau et chaque défi sont l'occasion de découvrir une histoire, des pratiques
            et une communauté riche, souvent méconnue.<br>
Pensée pour être accessible à tous - personnes entendantes comme sourdes
            ou malentendantes - l'application cherche à réduire les barrières de communication
            et à favoriser des échanges plus inclusifs.
 </div> <h2 class="my-3">Notre mission</h2> <p class="m-7">
Chez Eyeth, nous croyons que la communication doit être accessible à
        tous.<br>
La langue des signes est un outil puissant pour créer du lien et mieux comprendre
        les autres.<br>
Notre mission est simple : rendre l'apprentissage de la LSF accessible, ludique
        et sociale afin de favoriser une société plus inclusive. En facilitant l'accès
        à cette langue et à la culture qui l'accompagne, nous voulons contribuer à
        réduire l'isolement que peuvent vivre certaines personnes sourdes ou malentendantes.
</p> <h2 class="my-3">Nos valeurs</h2> <ul class="m-7"> <li> <div class="font-semibold text-xl mb-3">Inclusivité</div> <p class="mb-5">
Nous voulons faciliter la communication entre toutes les
                personnes, qu'elles soient sourdes, malentendantes ou
                entendantes. L'apprentissage de la langue des signes est un
                moyen concret de créer des échanges plus égalitaires et de
                résuire la marginalisation.
</p> </li> <li> <div class="font-semibold text-xl mb-3">Communication</div> <p class="mb-5">
La communication est au coeur des relations humaines. Pourtant,
                elle peutdevenir difficile lorsque les outils ou les
                connaissances manquent. Eyeth cherche à simplifier cet accès et
                à encourager les intéractions entre tous.
</p> </li> <li> <div class="font-semibold text-xl mb-3">Ludisme</div> <p class="mb-5">
Apprendre ne devrait pas être une contrainte. Nous utilisons le
                jeu comme moteur d'apprentissage afin de rendre la découverte de
                la LSF agréable, motivante et engageante.
</p> </li> <li> <div class="font-semibold text-xl mb-3">Convivialité</div> <p class="mb-5">
La langue est faite pour être partagée.<br>
Contrairement à de nombreuses applications d'apprentissage, Eyeth
                propose des interactions entre utilisateurs pour apprendre ensemble,
                progresser et communiquer réellement.
</p> </li> </ul> <h2 class="my-3">Notre équipe</h2> <p class="mt-5 m-7">
Eyeth est un projet porté par un équipe d'études passionnées par la
        communication, le numérique et les enjeux d'inclusions :<br>
· Aglaé NICOLLE (Présidente)<br>
· Lola BROUART (Secrétaire)<br>
· Solène GEISS (Trésorière)<br>
Ensemble, nous développons un outil numérique qui allie technologie, pédagogie
        et engagement social afin de rendre la langue des signes plus accessible.
</p> ` })}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/info.astro", void 0);

const $$file = "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/info.astro";
const $$url = "/info";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Info,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
