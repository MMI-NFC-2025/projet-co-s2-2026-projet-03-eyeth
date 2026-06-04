import PocketBase from "pocketbase";
const POCKETBASE_URL = "https://eyeth-pocketbase.lola-brouart.fr";
const pb = new PocketBase(POCKETBASE_URL);
export { pb };

export async function getPacks(collection = "packs") {
    try {
        return await pb.collection(collection).getFullList();
    } catch (e) {
        console.error("Erreur lors de la récupération des événements :", e);
        return [];
    }
}

export async function onePack(id) {
    try {
        return await pb.collection("packs").getOne(id);
    } catch (e) {
        console.error(e);
    }
}

export async function getMotsForPack(packId) {
    try {
        const composerEntry = await pb.collection('composer').getFirstListItem(`codePack = "${packId}"`);
        const motsIds = composerEntry.idMot;
        if (!motsIds || motsIds.length === 0) return [];

        const filter = motsIds.map(id => `id = "${id}"`).join('||');

        const mots = await pb.collection('mots').getFullList({
            filter: filter,
            sort: 'mot',
        });

        return mots;

    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getMots() {
    try {
        const mots = await pb.collection("mots").getFullList({
            sort: "mot",
        });
        return mots;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getOneMot(idMot) {
    try {
        const mot = await pb.collection("mots").getOne(idMot);
        return mot;
    } catch (e) {
        console.error(e);
    }
}

/**
 * ─────────────────────────────────────────────────────────────
 *  AJOUTS à intégrer dans ton fichier /src/js/backend.js
 *  Colle ce bloc dans ton backend.js existant.
 * ─────────────────────────────────────────────────────────────
 *
 * Prérequis : ton backend.js doit exporter une instance PocketBase, ex :
 *   import PocketBase from 'pocketbase';
 *   export const pb = new PocketBase('https://ton-pocketbase.com');
 *
 * Si tu n'as pas encore l'import PocketBase, ajoute-le en haut du fichier.
 */

// ── Connexion ────────────────────────────────────────────────
/**
 * Connecte un utilisateur via email + mot de passe.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{ token: string, record: object }>}
 */
export async function loginUser(email, password) {
    // pb = ton instance PocketBase déjà déclarée dans backend.js
    const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
    return authData;
}

// ── Inscription ──────────────────────────────────────────────
/**
 * Crée un compte puis connecte automatiquement l'utilisateur.
 * @param {string} email
 * @param {string} password
 * @param {string} [username] — optionnel
 * @returns {Promise<{ token: string, record: object }>}
 */
export async function registerUser(email, password, username = "") {
    await pb.collection("users").create({
        email,
        password,
        passwordConfirm: password,
        prenom: (username ? { username } : {}),
    });
    // Connexion immédiate après inscription
    const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
    return authData;
}