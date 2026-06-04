import { c as createComponent } from './_astro_assets_DOh4oQx3.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './ssr-function_Cttr3aR4.mjs';
import { $ as $$Layout } from './Layout_CLqYScY8.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "inscription", "noAuth": "true" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", `<div class="pointer-events-none fixed inset-0 opacity-[0.035]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E'); background-size: 200px;"></div>  <div class="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" style="background: radial-gradient(circle, #c8a96e 0%, transparent 70%);"></div> <div class="relative w-full max-w-md px-6 py-10"> <!-- Titre --> <div class="text-center mb-12"> <h1 class="font-['DM_Serif_Display',serif] text-4xl tracking-tight text-[#f5f0e8] mb-2">
Créer un compte
</h1> <p class="text-[#9e9585] text-sm font-light tracking-widest uppercase">
Rejoignez-nous
</p> </div> <!-- Formulaire inscription --> <div class="space-y-4"> <!-- Nom d'utilisateur --> <div class="space-y-1"> <label class="text-xs text-[#9e9585] tracking-widest uppercase">
Nom d'utilisateur <span class="text-[#3d3a30] normal-case">(optionnel)</span> </label> <input id="register-username" type="text" placeholder="johndoe" class="w-full bg-[#161510] border border-[#2a2820] rounded-xl px-4 py-3.5 text-[#f5f0e8] placeholder-[#3d3a30] text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"> </div> <!-- Email --> <div class="space-y-1"> <label class="text-xs text-[#9e9585] tracking-widest uppercase">Email</label> <input id="register-email" type="email" placeholder="vous@exemple.com" class="w-full bg-[#161510] border border-[#2a2820] rounded-xl px-4 py-3.5 text-[#f5f0e8] placeholder-[#3d3a30] text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"> </div> <!-- Mot de passe --> <div class="space-y-1"> <label class="text-xs text-[#9e9585] tracking-widest uppercase">Mot de passe</label> <div class="relative"> <input id="register-password" type="password" placeholder="8 caractères minimum" oninput="checkStrength(this.value); checkMatch()" class="w-full bg-[#161510] border border-[#2a2820] rounded-xl px-4 py-3.5 text-[#f5f0e8] placeholder-[#3d3a30] text-sm focus:outline-none focus:border-[#c8a96e] transition-colors pr-14"> <button type="button" onclick="togglePassword('register-password', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-[#9e9585] hover:text-[#c8a96e] transition-colors text-xs">voir</button> </div> <!-- Barre de force --> <div class="flex gap-1 pt-1"> <div id="bar-1" class="h-1 flex-1 rounded-full bg-[#2a2820] transition-colors duration-300"></div> <div id="bar-2" class="h-1 flex-1 rounded-full bg-[#2a2820] transition-colors duration-300"></div> <div id="bar-3" class="h-1 flex-1 rounded-full bg-[#2a2820] transition-colors duration-300"></div> <div id="bar-4" class="h-1 flex-1 rounded-full bg-[#2a2820] transition-colors duration-300"></div> </div> <p id="strength-label" class="text-xs text-[#3d3a30] h-3"></p> </div> <!-- Confirmation mot de passe --> <div class="space-y-1"> <label class="text-xs text-[#9e9585] tracking-widest uppercase">Confirmer le mot de passe</label> <div class="relative"> <input id="register-password-confirm" type="password" placeholder="••••••••" oninput="checkMatch()" class="w-full bg-[#161510] border border-[#2a2820] rounded-xl px-4 py-3.5 text-[#f5f0e8] placeholder-[#3d3a30] text-sm focus:outline-none focus:border-[#c8a96e] transition-colors pr-14"> <button type="button" onclick="togglePassword('register-password-confirm', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-[#9e9585] hover:text-[#c8a96e] transition-colors text-xs">voir</button> </div> <p id="match-label" class="text-xs h-3"></p> </div> <div id="register-error" class="hidden text-red-400 text-sm px-1"></div> <div id="register-success" class="hidden text-emerald-400 text-sm px-1"></div> <button id="register-btn" onclick="handleRegister()" class="w-full mt-2 py-3.5 rounded-xl bg-[#c8a96e] text-[#0f0e0c] font-medium text-sm hover:bg-[#dbbf80] active:scale-[0.98] transition-all duration-200">
Créer mon compte
</button> </div> <!-- Lien vers connexion --> <p class="text-center text-[#9e9585] text-sm mt-8">
Déjà un compte ?
<a href="/login" class="text-[#c8a96e] hover:text-[#dbbf80] transition-colors ml-1">
Se connecter
</a> </p> <p class="text-center text-[#3d3a30] text-xs mt-6 tracking-wide">
Session active jusqu'à la fermeture du navigateur
</p> </div> <script type="module">
        import { registerUser } from "/src/js/backend.js";
        import { saveSession, isLoggedIn } from "/src/js/auth.js";

        if (isLoggedIn()) window.location.href = "/";

        // ── Toggle password ──────────────────────────────────────
        window.togglePassword = (inputId, btn) => {
            const input = document.getElementById(inputId);
            const isText = input.type === "text";
            input.type = isText ? "password" : "text";
            btn.textContent = isText ? "voir" : "cacher";
        };

        // ── Force du mot de passe ────────────────────────────────
        window.checkStrength = (pwd) => {
            let score = 0;
            if (pwd.length >= 8) score++;
            if (pwd.length >= 12) score++;
            if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
            if (/[0-9]/.test(pwd) || /[^A-Za-z0-9]/.test(pwd)) score++;

            const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e"];
            const labels = ["Trop faible", "Faible", "Moyen", "Fort"];

            for (let i = 1; i <= 4; i++) {
                const bar = document.getElementById(\`bar-\${i}\`);
                bar.style.backgroundColor =
                    i <= score && pwd.length > 0
                        ? colors[score - 1]
                        : "#2a2820";
            }

            const label = document.getElementById("strength-label");
            label.textContent = pwd.length > 0 ? (labels[score - 1] ?? "") : "";
            label.style.color = pwd.length > 0 ? colors[score - 1] : "#3d3a30";
        };

        // ── Correspondance des mots de passe ─────────────────────
        window.checkMatch = () => {
            const pwd = document.getElementById("register-password").value;
            const confirm = document.getElementById(
                "register-password-confirm",
            ).value;
            const label = document.getElementById("match-label");

            if (!confirm) {
                label.textContent = "";
                return;
            }

            if (pwd === confirm) {
                label.textContent = "✓ Les mots de passe correspondent";
                label.style.color = "#22c55e";
            } else {
                label.textContent = "✗ Les mots de passe ne correspondent pas";
                label.style.color = "#ef4444";
            }
        };

        // ── Inscription ──────────────────────────────────────────
        window.handleRegister = async () => {
            const username = document
                .getElementById("register-username")
                .value.trim();
            const email = document
                .getElementById("register-email")
                .value.trim();
            const password = document.getElementById("register-password").value;
            const confirm = document.getElementById(
                "register-password-confirm",
            ).value;
            const errorEl = document.getElementById("register-error");
            const successEl = document.getElementById("register-success");
            const btn = document.getElementById("register-btn");

            errorEl.classList.add("hidden");
            successEl.classList.add("hidden");

            if (!email || !password || !confirm) {
                return showError(
                    errorEl,
                    "Veuillez remplir tous les champs obligatoires.",
                );
            }
            if (password.length < 8) {
                return showError(
                    errorEl,
                    "Le mot de passe doit faire au moins 8 caractères.",
                );
            }
            if (password !== confirm) {
                return showError(
                    errorEl,
                    "Les mots de passe ne correspondent pas.",
                );
            }

            btn.textContent = "Création…";
            btn.disabled = true;

            try {
                const authData = await registerUser(email, password, username);
                saveSession(authData);
                successEl.textContent = "Compte créé ! Redirection…";
                successEl.classList.remove("hidden");
                setTimeout(() => (window.location.href = "/"), 1000);
            } catch (err) {
                console.log("err:", err);
                console.log("err.data:", err?.data);
                console.log("err.response:", err?.response);
                showError(
                    errorEl,
                    JSON.stringify(err?.data) ||
                        err?.message ||
                        "Erreur inconnue",
                );
            } finally {
                btn.textContent = "Créer mon compte";
                btn.disabled = false;
            }
        };

        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter") window.handleRegister();
        });

        function showError(el, msg) {
            el.textContent = msg;
            el.classList.remove("hidden");
        }
    <\/script> `], ["  ", `<div class="pointer-events-none fixed inset-0 opacity-[0.035]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E'); background-size: 200px;"></div>  <div class="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10" style="background: radial-gradient(circle, #c8a96e 0%, transparent 70%);"></div> <div class="relative w-full max-w-md px-6 py-10"> <!-- Titre --> <div class="text-center mb-12"> <h1 class="font-['DM_Serif_Display',serif] text-4xl tracking-tight text-[#f5f0e8] mb-2">
Créer un compte
</h1> <p class="text-[#9e9585] text-sm font-light tracking-widest uppercase">
Rejoignez-nous
</p> </div> <!-- Formulaire inscription --> <div class="space-y-4"> <!-- Nom d'utilisateur --> <div class="space-y-1"> <label class="text-xs text-[#9e9585] tracking-widest uppercase">
Nom d'utilisateur <span class="text-[#3d3a30] normal-case">(optionnel)</span> </label> <input id="register-username" type="text" placeholder="johndoe" class="w-full bg-[#161510] border border-[#2a2820] rounded-xl px-4 py-3.5 text-[#f5f0e8] placeholder-[#3d3a30] text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"> </div> <!-- Email --> <div class="space-y-1"> <label class="text-xs text-[#9e9585] tracking-widest uppercase">Email</label> <input id="register-email" type="email" placeholder="vous@exemple.com" class="w-full bg-[#161510] border border-[#2a2820] rounded-xl px-4 py-3.5 text-[#f5f0e8] placeholder-[#3d3a30] text-sm focus:outline-none focus:border-[#c8a96e] transition-colors"> </div> <!-- Mot de passe --> <div class="space-y-1"> <label class="text-xs text-[#9e9585] tracking-widest uppercase">Mot de passe</label> <div class="relative"> <input id="register-password" type="password" placeholder="8 caractères minimum" oninput="checkStrength(this.value); checkMatch()" class="w-full bg-[#161510] border border-[#2a2820] rounded-xl px-4 py-3.5 text-[#f5f0e8] placeholder-[#3d3a30] text-sm focus:outline-none focus:border-[#c8a96e] transition-colors pr-14"> <button type="button" onclick="togglePassword('register-password', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-[#9e9585] hover:text-[#c8a96e] transition-colors text-xs">voir</button> </div> <!-- Barre de force --> <div class="flex gap-1 pt-1"> <div id="bar-1" class="h-1 flex-1 rounded-full bg-[#2a2820] transition-colors duration-300"></div> <div id="bar-2" class="h-1 flex-1 rounded-full bg-[#2a2820] transition-colors duration-300"></div> <div id="bar-3" class="h-1 flex-1 rounded-full bg-[#2a2820] transition-colors duration-300"></div> <div id="bar-4" class="h-1 flex-1 rounded-full bg-[#2a2820] transition-colors duration-300"></div> </div> <p id="strength-label" class="text-xs text-[#3d3a30] h-3"></p> </div> <!-- Confirmation mot de passe --> <div class="space-y-1"> <label class="text-xs text-[#9e9585] tracking-widest uppercase">Confirmer le mot de passe</label> <div class="relative"> <input id="register-password-confirm" type="password" placeholder="••••••••" oninput="checkMatch()" class="w-full bg-[#161510] border border-[#2a2820] rounded-xl px-4 py-3.5 text-[#f5f0e8] placeholder-[#3d3a30] text-sm focus:outline-none focus:border-[#c8a96e] transition-colors pr-14"> <button type="button" onclick="togglePassword('register-password-confirm', this)" class="absolute right-4 top-1/2 -translate-y-1/2 text-[#9e9585] hover:text-[#c8a96e] transition-colors text-xs">voir</button> </div> <p id="match-label" class="text-xs h-3"></p> </div> <div id="register-error" class="hidden text-red-400 text-sm px-1"></div> <div id="register-success" class="hidden text-emerald-400 text-sm px-1"></div> <button id="register-btn" onclick="handleRegister()" class="w-full mt-2 py-3.5 rounded-xl bg-[#c8a96e] text-[#0f0e0c] font-medium text-sm hover:bg-[#dbbf80] active:scale-[0.98] transition-all duration-200">
Créer mon compte
</button> </div> <!-- Lien vers connexion --> <p class="text-center text-[#9e9585] text-sm mt-8">
Déjà un compte ?
<a href="/login" class="text-[#c8a96e] hover:text-[#dbbf80] transition-colors ml-1">
Se connecter
</a> </p> <p class="text-center text-[#3d3a30] text-xs mt-6 tracking-wide">
Session active jusqu'à la fermeture du navigateur
</p> </div> <script type="module">
        import { registerUser } from "/src/js/backend.js";
        import { saveSession, isLoggedIn } from "/src/js/auth.js";

        if (isLoggedIn()) window.location.href = "/";

        // ── Toggle password ──────────────────────────────────────
        window.togglePassword = (inputId, btn) => {
            const input = document.getElementById(inputId);
            const isText = input.type === "text";
            input.type = isText ? "password" : "text";
            btn.textContent = isText ? "voir" : "cacher";
        };

        // ── Force du mot de passe ────────────────────────────────
        window.checkStrength = (pwd) => {
            let score = 0;
            if (pwd.length >= 8) score++;
            if (pwd.length >= 12) score++;
            if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
            if (/[0-9]/.test(pwd) || /[^A-Za-z0-9]/.test(pwd)) score++;

            const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e"];
            const labels = ["Trop faible", "Faible", "Moyen", "Fort"];

            for (let i = 1; i <= 4; i++) {
                const bar = document.getElementById(\\\`bar-\\\${i}\\\`);
                bar.style.backgroundColor =
                    i <= score && pwd.length > 0
                        ? colors[score - 1]
                        : "#2a2820";
            }

            const label = document.getElementById("strength-label");
            label.textContent = pwd.length > 0 ? (labels[score - 1] ?? "") : "";
            label.style.color = pwd.length > 0 ? colors[score - 1] : "#3d3a30";
        };

        // ── Correspondance des mots de passe ─────────────────────
        window.checkMatch = () => {
            const pwd = document.getElementById("register-password").value;
            const confirm = document.getElementById(
                "register-password-confirm",
            ).value;
            const label = document.getElementById("match-label");

            if (!confirm) {
                label.textContent = "";
                return;
            }

            if (pwd === confirm) {
                label.textContent = "✓ Les mots de passe correspondent";
                label.style.color = "#22c55e";
            } else {
                label.textContent = "✗ Les mots de passe ne correspondent pas";
                label.style.color = "#ef4444";
            }
        };

        // ── Inscription ──────────────────────────────────────────
        window.handleRegister = async () => {
            const username = document
                .getElementById("register-username")
                .value.trim();
            const email = document
                .getElementById("register-email")
                .value.trim();
            const password = document.getElementById("register-password").value;
            const confirm = document.getElementById(
                "register-password-confirm",
            ).value;
            const errorEl = document.getElementById("register-error");
            const successEl = document.getElementById("register-success");
            const btn = document.getElementById("register-btn");

            errorEl.classList.add("hidden");
            successEl.classList.add("hidden");

            if (!email || !password || !confirm) {
                return showError(
                    errorEl,
                    "Veuillez remplir tous les champs obligatoires.",
                );
            }
            if (password.length < 8) {
                return showError(
                    errorEl,
                    "Le mot de passe doit faire au moins 8 caractères.",
                );
            }
            if (password !== confirm) {
                return showError(
                    errorEl,
                    "Les mots de passe ne correspondent pas.",
                );
            }

            btn.textContent = "Création…";
            btn.disabled = true;

            try {
                const authData = await registerUser(email, password, username);
                saveSession(authData);
                successEl.textContent = "Compte créé ! Redirection…";
                successEl.classList.remove("hidden");
                setTimeout(() => (window.location.href = "/"), 1000);
            } catch (err) {
                console.log("err:", err);
                console.log("err.data:", err?.data);
                console.log("err.response:", err?.response);
                showError(
                    errorEl,
                    JSON.stringify(err?.data) ||
                        err?.message ||
                        "Erreur inconnue",
                );
            } finally {
                btn.textContent = "Créer mon compte";
                btn.disabled = false;
            }
        };

        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter") window.handleRegister();
        });

        function showError(el, msg) {
            el.textContent = msg;
            el.classList.remove("hidden");
        }
    <\/script> `])), maybeRenderHead()) })}`;
}, "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/signin.astro", void 0);

const $$file = "C:/Users/HP/Documents/GitHub/projet-co-s2-2026-projet-03-eyeth/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Signin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
