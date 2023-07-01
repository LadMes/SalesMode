import { ref } from "vue";
import { defineStore } from "pinia";
import mockup from "../models/mockup";
import type { SalesMode } from "@/models/sales-mode";
import type { EPartASPart } from "@/models/epart-aspart";

export const useSalesModeStore = defineStore("salesMode", () => {
    // Hardcoded, in the future this information retrieved upon creating a new Sales Mode
    // or from DB 
    const salesMode: SalesMode = {
        type: "SM",
        family: "XGD",
        GFE: "43",
        rows: mockup
    }

    const rows = ref(mockup);

    function addRow() {
        const emptyASPart: Part = {
            GP: "",
            reference: "",
            supplierNumber: "",
            nameRus: "",
            nameEng: "",
            mass: 0,
            quantity: 1
        };

        let count = rows.value.length;
        let newEPart: Part;
        if (count === 0) {
            newEPart = {
                GP: "",
                reference: "",
                supplierNumber: "",
                nameRus: "",
                nameEng: "",
                mass: 0,
                quantity: 1
            }
        } else {
            newEPart = rows.value[count - 1].epart
        }

        let newRow: EPartASPart = {
            id: count + 1,
            level: 1,
            epart: newEPart,
            aspart: emptyASPart,
            partType: "B"
        };
        rows.value = rows.value.concat(newRow);
    }

    function removeRow(rowId: number) {
        rows.value = rows.value.filter(row => row.id != rowId)
        .map(row => {
            if (row.id > rowId) {
                row.id--;
            }
            return row;
        })
    }

    return { rows, addRow, removeRow };
});