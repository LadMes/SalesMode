import type { EPartASPart } from "./epart-aspart";

export interface SalesMode {
    type: "SM" | "USP SM",
    family: string,
    GFE: string,
    rows: EPartASPart[]
}