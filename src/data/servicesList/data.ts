// General
// Interfaces
import { IService } from "src/Interfaces/general";

import { IHeroProps, headerStyle } from "src/components/Organisms/Hero/hero";

// Opening a new business
// Image assets
import accountCloud from "./img/accountingCloud.jpg";
import audit from "./img/audit.jpg";
import bankOpening from "./img/bankOpening.jpg";
import chinaRep from "./img/chinaRep.jpg";
import chinaRepOffice from "./img/chinaRepOffice.jpg";
import chinaTrademark from "./img/chinaTrademark.jpg";
// import chinaVisa from "./img/chinaVisa.jpg";
import compIncorp from "./img/compIncorp.jpg";
import compsec from "./img/compSec.jpg";
import coworkHotdesk from "./img/coworkHotdesk.jpg";
import dedicateDesk from "./img/dedicatedDesk.jpg";
import deregistration from "./img/deregistration.jpg";
import hkRep from "./img/hkRep.jpg";
import hkTrademark from "./img/hkTrademark.jpg";
// import hkVisa from "./img/hkVisa.jpeg";
import importExport from "./img/importExport.jpg";
import notary from "./img/notary.jpg";
import payrollMfp from "./img/payrollMpf.jpg";
import recuritmentLicence from "./img/recruitmentLicence.jpg";
import regOffice from "./img/regOffice.jpg";
import relocation from "./img/relocation.jpg";
import servicedOffice from "./img/servicedOffice.jpg";
import translation from "./img/translation.jpg";
import venueSpaces from "./img/venueSpaces.jpg";
import virtualOffice from "./img/virtualOffice.jpg";
import visa from "./img/visa.jpg";
import warehouse from "./img/warehouse.jpg";
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
        price: "HKD $2000 /Annu.",
        orderNow: true
    },
    {
        itemName: "Reg. Office",
        img: regOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $1300 /Annu.",
        orderNow: true
    },
    {
        itemName: "HK Com. compIncorp.",
        img: compIncorp,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $6000",
        // TODO: add a Link to send them to the service page
        orderNow: true
    },
    {
        itemName: "HK Rep. Office",
        img: hkRep,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $8500 /Annu.",
        orderNow: true
    },
    {
        itemName: "China Rep. Office",
        img: chinaRep,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $8800 /Comp.",
        orderNow: true
    },
    {
        itemName: "China WFOE.",
        img: wfoe,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $20000 /WFOE.",
        orderNow: true
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
        price: "HKD $2000 /Annu.",
        orderNow: true
    },
    {
        itemName: "Reg. Office",
        img: regOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $1300 /Annu.",
        orderNow: true
    },
    {
        itemName: "Virtual Office",
        img: virtualOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $3850 /Annu.",
        orderNow: true
    },
    {
        itemName: "Accounting on Cloud",
        img: accountCloud,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $800 /Mo.",
        orderNow: false
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
        itemName: "Bank Opening",
        img: bankOpening,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $6000",
        orderNow: false
    },
    {
        itemName: "Serviced Offices",
        img: servicedOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $8000 /Mo.",
        orderNow: false
    },
    {
        itemName: "Co-work Hotdesk",
        img: coworkHotdesk,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2800 /Mo.",
        orderNow: true
    },
    {
        itemName: "Dedicated Desk",
        img: dedicateDesk,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $4800 /Mo.",
        orderNow: true
    },
    {
        itemName: "Payroll & MPF",
        img: payrollMfp,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $200 /Mo.",
        orderNow: false
    },
    {
        itemName: "Venue Spaces",
        img: venueSpaces,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $250 /Hr.",
        orderNow: false
    },
    {
        itemName: "HK Rep. Office",
        img: hkRep,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $8500",
        orderNow: true
    },
    {
        itemName: "Auditing Services",
        img: audit,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $8000",
        orderNow: false
    }
];
// // 2d-Visa and licencing
export const visaServHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/visaPermits.jpg"),
    header: "Visa & licencing",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const visaServList: IService[] = [
    {
        itemName: "HK Visa",
        img: visa,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $20000",
        orderNow: false
    },
    {
        itemName: "China Visa",
        img: visa,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $800",
        orderNow: false
    },
    {
        itemName: "Recruitment Licence",
        img: recuritmentLicence,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $5000",
        orderNow: true
    },
    {
        itemName: "Import Export Licence",
        img: importExport,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $5000",
        orderNow: true
    },
    {
        itemName: "HK Trademark",
        img: hkTrademark,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $6500",
        orderNow: true
    },
    {
        itemName: "China Trademark",
        img: chinaTrademark,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $6500",
        orderNow: true
    }
];

// // 2e-business entering china
export const chinaHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/enterChina.jpg"),
    header: "Business Entering China",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const chinaServList: IService[] = [
    {
        itemName: "China Rep. Office",
        img: chinaRepOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $8800",
        orderNow: true
    },
    {
        itemName: "China WFOE",
        img: wfoe,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $20000",
        orderNow: true
    },
    {
        itemName: "Translation Services",
        img: translation,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $650 /page.",
        orderNow: false
    },
    {
        itemName: "Notary Services",
        img: notary,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $6000",
        orderNow: false
    }
];

// // 2f-business leaving hong kong
export const leaveHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/leavinghk.jpg"),
    header: "Business leaving Hong Kong",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const leaveServList: IService[] = [
    {
        itemName: "Deregistration of HK Ltd.",
        img: deregistration,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $3500",
        orderNow: true
    },
    {
        itemName: "Warehouse Solutions",
        img: warehouse,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 /Mo.",
        orderNow: false
    },
    {
        itemName: "Relocation Services",
        img: relocation,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $4000",
        orderNow: false
    }
];
