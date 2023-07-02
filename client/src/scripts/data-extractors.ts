import type { SalesMode } from "../models/sales-mode";
import mockup from "../models/mockup";

// To-Do: When backend logic will be ready rewrite the function
export function getSalesModes(): SalesMode[] {
    const salesMode: SalesMode = {
        id: 1,
        name: "Front mirror with STS",
        type: "SM",
        family: "XGD",
        GFE: "43",
        rows: mockup // Shouldn't be here, load rows only when sales mode
    };

    return [ salesMode ];
}