import { ref } from "vue";
import { defineStore } from "pinia";
import mockup from "../models/mockup";
import type { SalesMode } from "@/models/sales-mode";

export const useSalesModeStore = defineStore("salesMode", () => {
    const salesMode: SalesMode = {
        type: "SM",
        family: "XGD",
        GFE: "43",
        rows: mockup
    }

    const table = ref(salesMode);

    function addRow() {
        const emptyASPart: Part = {
            GP: "",
            reference: "",
            supplierNumber: "",
            nameRus: "",
            nameEng: "",
            mass: 0,
            partType: "B",
            quantity: 1
        };
        let count = table.value.rows.length;
        let fifth = {
              id: ++count,
              level: 1,
              epart: table.value.rows[count - 1].epart,
              aspart: emptyASPart
        };
        table.value.rows = table.value.rows.concat(fifth);
    }

    function remove(rowId: number) {
        table.value.rows = table.value.rows.filter(row => row.id != rowId)
        .map(row => {
            if (row.id > rowId) {
                row.id--;
            }
            return row;
        })
    }

    return { table, addRow, remove };
});