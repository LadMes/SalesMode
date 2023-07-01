export interface EPartASPart {
    id: number;
    level: number;
    epart: Part;
    aspart: Part;
    partType: "A" | "B" | "C";
};