import { ref } from "vue";
import { defineStore } from "pinia";
import mockup from "../models/mockup";

export const useSalesModeStore = defineStore("salesMode", () => {
    const rows = ref(mockup);

    function addRow() {
        const mirrorAssy: Part = {
            GP: "F10582/AF",
            reference: "8450003869",
            supplierNumber: "-",
            nameRus: "Зеркало наружное левое",
            nameEng: "MIRROR-OTR LH",
            mass: 1.6,
            partType: "A",
            quantity: 1
        };
        const mirrorAssyWithoutCover: Part = {
            GP: "F10582/KK",
            reference: "8466635869",
            supplierNumber: "111",
            nameRus: "Зеркало боковое с электроприводом и обогревом в сборе без задней крышки левое",
            nameEng: "Side mirror assembly with electric drive and heating without back cover left",
            mass: 1,
            partType: "B",
            quantity: 1
        };
        let count = rows.value.length;
        let fifth = {
              id: ++count,
              level: 1,
              family: "XGD",
              epart: mirrorAssy,
              aspart: mirrorAssyWithoutCover
        };
        rows.value = rows.value.concat(fifth);
    }

    function remove(rowId: number) {
        rows.value = rows.value.filter(row => row.id != rowId)
        .map(row => {
            if (row.id > rowId) {
                row.id--;
            }
            return row;
        })
    }

    return { rows, addRow, remove };
});