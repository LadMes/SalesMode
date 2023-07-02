import type { EPartASPart } from "./epart-aspart";

export interface SalesMode {
    id: number,
    name: string,
    type: "SM" | "USP SM",
    family: string,
    GFE: string,
    rows: EPartASPart[]
}