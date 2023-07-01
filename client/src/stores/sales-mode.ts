import { ref } from "vue";
import { defineStore } from "pinia";
import mockup from "../models/mockup";
import type { SalesMode } from "@/models/sales-mode";
import type { EPartASPart } from "@/models/epart-aspart";

export const useSalesModeStore = defineStore("salesMode", () => {
    // Hardcoded, in the future this information retrieved upon creating a new Sales Mode
    // or from DB 
    // To-Do: Delete hardacoded code, imitate getting data from the server
    const salesMode: SalesMode = {
        type: "SM",
        family: "XGD",
        GFE: "43",
        rows: mockup
    }

    const rows = ref(mockup);

    function addRow(): void {
        const emptyASPart: Part = generateEmptyPart();

        let count = rows.value.length;
        const newEPart: Part = count === 0 ? generateEmptyPart() 
                                        : rows.value[count - 1].epart;

        let newRow: EPartASPart = {
            id: count + 1,
            level: 1,
            epart: newEPart,
            aspart: emptyASPart,
            partType: "B"
        };

        rows.value = rows.value.concat(newRow);
    }

    function removeRow(rowId: number): void {
        rows.value = rows.value.filter(row => row.id != rowId)
        .map(row => {
            if (row.id > rowId) {
                row.id--;
            }
            return row;
        });
    }

    return { salesMode, rows, addRow, removeRow };
});

function generateEmptyPart(): Part {
    return {
        GP: "",
        reference: "",
        supplierNumber: "",
        nameRus: "",
        nameEng: "",
        mass: 0,
        quantity: 1
    }
}