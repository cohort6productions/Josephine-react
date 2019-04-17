// General
// Interfaces
import { IService } from "src/Interfaces/general";

import { IHeroProps, headerStyle } from "src/components/Organisms/Hero/hero";

// Opening a new business
// Image assets
import compsec from "./img/compSec.jpg";
import regOffice from "./img/regOffice.jpg";
import incorp from "./img/compIncorp.jpg";
import repOffice from "./img/hkRep.jpg";
import chinaRep from "./img/chinaRep.jpg";
import wfoe from "./img/WFOE.jpg";

// 2a-Opening New Business
export const openServHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/openBusiness.jpg"),
    header: "Opening new business",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};

export const openServList: IService[] = [
    {
        itemName: "Comp. Secretary",
        img: compsec,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    },
    {
        itemName: "Reg. Office",
        img: regOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    },
    {
        itemName: "HK Com. Incorp.",
        img: incorp,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    },
    {
        itemName: "HK Rep. Office",
        img: repOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    },
    {
        itemName: "China Rep. Office",
        img: chinaRep,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    },
    {
        itemName: "China WFOE.",
        img: wfoe,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    }
];

// 2b-Maintaining and upkeeping
export const mainUpkpHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/upkeeping.jpg"),
    header: "Maintaining and Upkeeping",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const mainUpkpServList: IService[] = [
    {
        itemName: "Comp. Secretary",
        img: compsec,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    },
    {
        itemName: "Reg. Office",
        img: regOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $1300 Annu."
    },
    {
        itemName: "Virtual Office",
        img: incorp,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $3850 Annu."
    },
    {
        itemName: "Accounting on Cloud",
        img: repOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    }
];

// 2c-Expanding Business
export const expandBuzHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/expanding.jpg"),
    header: "Expanding business",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const expandBuzServList: IService[] = [
    {
        itemName: "Comp. Secretary",
        img: compsec,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    }
];
// 2d-Visa and licencing
export const visaServHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/visaPermits.jpg"),
    header: "Visa & licencing",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const visaServList: IService[] = [
    {
        itemName: "Comp. Secretary",
        img: compsec,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    }
];

// 2e-business entering china
export const chinaHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/enterChina.jpg"),
    header: "Business Entering China",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const chinaServList: IService[] = [
    {
        itemName: "Comp. Secretary",
        img: compsec,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    }
];
// 2f-business leaving hong kong
export const leaveHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/leavinghk.jpg"),
    header: "Business leaving Hong Kong",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const leaveServList: IService[] = [
    {
        itemName: "Comp. Secretary",
        img: compsec,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 Annu."
    }
];
