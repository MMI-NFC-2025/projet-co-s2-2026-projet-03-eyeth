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