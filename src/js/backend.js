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