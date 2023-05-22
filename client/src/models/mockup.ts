import { type EPartASPart } from "./epartaspart";


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

const mirrorElement: Part = {
    GP: "F10582/BC",
    reference: "8466635870",
    supplierNumber: "112",
    nameRus: "Зеркальный элемент с нагревательной панелью в сборе левый",
    nameEng: "Mirror element with heating panel assembly left",
    mass: 0.2,
    partType: "B",
    quantity: 1
};

const mirrorCover: Part = {
    GP: "F10582/RT",
    reference: "8466635871",
    supplierNumber: "113",
    nameRus: "Крышка зеркала наружная левая (для БУП)",
    nameEng: "Mirror cover outer left (for side turn signal)",
    mass: 0.2,
    partType: "B",
    quantity: 1
};

const sts: Part = {
    GP: "R7413843-",
    reference: "8466635871",
    supplierNumber: "114",
    nameRus: "Указатель поворота боковой левый",
    nameEng: "Side turn signal left and screws",
    mass: 0.02,
    partType: "B",
    quantity: 1
};

const mockup: Array<EPartASPart> = [
    {
        id: 1,
        level: 1,
        family: "XGD",
        epart: mirrorAssy,
        aspart: mirrorAssyWithoutCover
    },
    {
        id: 2,
        level: 1,
        family: "XGD",
        epart: mirrorAssy,
        aspart: mirrorElement
    },
    {
        id: 3,
        level: 1,
        family: "XGD",
        epart: mirrorAssy,
        aspart: mirrorCover
    },
    {
        id: 4,
        level: 1,
        family: "XGD",
        epart: mirrorAssy,
        aspart: sts
    }
];

export default mockup;