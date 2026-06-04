/**
 * auth.js — Gestion de session utilisateur
 * La session persiste tant que l'onglet/fenêtre est ouvert (sessionStorage).
 * Elle est détruite à la fermeture du navigateur ou en appelant logout().
 */

const SESSION_KEY = "pb_session";

/**
 * Sauvegarde la session après connexion/inscription.
 * @param {{ token: string, model: object }} authData — réponse PocketBase
 */
export function saveSession(authData) {
    sessionStorage.setItem(
        SESSION_KEY,
        JSON.stringify({
            token: authData.token,
            user: authData.record ?? authData.model,
        })
    );
}

/**
 * Retourne la session courante, ou null si non connecté.
 * @returns {{ token: string, user: object } | null}
 */
export function getSession() {
    try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

/**
 * Retourne true si l'utilisateur est connecté.
 */
export function isLoggedIn() {
    return getSession() !== null;
}

/**
 * Retourne l'utilisateur courant, ou null.
 */
export function getCurrentUser() {
    return getSession()?.user ?? null;
}

/**
 * Déconnecte l'utilisateur (supprime la session).
 */
export function logout() {
    sessionStorage.removeItem(SESSION_KEY);
}

/**
 * Redirige vers /login si non connecté.
 * À appeler dans le script client des pages protégées.
 */
export function requireAuth(redirectTo = "/login") {
    if (!isLoggedIn()) {
        window.location.href = redirectTo;
    }
}