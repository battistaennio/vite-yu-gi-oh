import { reactive } from "vue";

export const store = reactive({
    cardsList: [],
    apiURLnormal: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",

    apiURLarchetype: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    filterText: "",
    archetypeList: [],
});