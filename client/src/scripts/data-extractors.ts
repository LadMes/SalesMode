import type { SalesModeInfo } from "../models/sales-mode-info";
import mockup from "../models/mockup";
import type { EPartASPart } from "@/models/epart-aspart";

// To-Do: When backend logic will be ready rewrite the function
export function getSalesModes(): SalesModeInfo[] {
    const salesMode: SalesModeInfo = {
        id: 1,
        name: "Front mirror with STS",
        type: "SM",
        family: "XGD",
        GFE: "43",
    };

    return [ salesMode ];
}


// To-Do: When backend logic will be ready rewrite the function
export function getSalesModeRows(id: number): EPartASPart[] {
    return mockup;
}