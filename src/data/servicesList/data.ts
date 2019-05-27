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
import chinaRepOffice from "./img/chinaRep.jpg";
import chinaTrademark from "./img/chinaTrademark.jpg";
import chinaVisa from "./img/chinaVisa.jpg";
import compIncorp from "./img/compIncorp.jpg";
import compsec from "./img/compSec.jpg";
import coworkHotdesk from "./img/coworkHotdesk.jpg";
import dedicateDesk from "./img/dedicatedDesk.jpg";
import deregistration from "./img/deregistration.jpg";
import hkRep from "./img/hkRep.jpg";
import hkTrademark from "./img/hkTrademark.jpg";
import hkVisa from "./img/hkVisa.jpg";
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
// import visa from "./img/visa.jpg";
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
        itemName: "Company Secretary",
        img: compsec,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $2000 /Annu.",
        orderNow: true,
        sku: "sku_F91QxKf3FSpSpZ"
    },
    {
        itemName: "Registered Office",
        img: regOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $1300 /Annu.",
        orderNow: true,
        sku: "sku_F91QBJve6goBag"
    },
    {
        itemName: "HK Company Incorporation",
        img: compIncorp,
        description:
            "With low tax rate and simple, straight forward business regulations, Hong Kong is one of the best place for setting up business. ",
        price: "HKD $6000",
        // TODO: add a Link to send them to the service page
        orderNow: false
    },
    {
        itemName: "HK Representative Office",
        img: hkRep,
        description:
            "Evaluate and assess the market with a representative office in HK, becore setting up a HK limited company.",
        price: "HKD $8500 /Annu.",
        orderNow: true,
        sku: "sku_F91QOXcly3cYvZ"
    },
    {
        itemName: "China Representative Office",
        img: chinaRep,
        description:
            "Interested in exploring the market in China? We can help you setting up a representative office in China as a stepping stone in this specific market.",
        price: "HKD $8800 /Comp.",
        orderNow: true,
        sku: "sku_F91RGwCwYmtc2p"
    },
    {
        itemName: "China Wholly Foreign Owned Enterprises",
        img: wfoe,
        description:
            "Ready to establish a real presence in China? We can help you setting up a proper company in China for easier business relationship with your Chinese stakeholders.",
        price: "HKD $20000 /WFOE.",
        orderNow: true,
        sku: "sku_F91RzRScKDkAFQ"
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
        itemName: "Company Secretary",
        img: compsec,
        description:
            "Remain in line with the company registry requirements, thanks to our professional services!",
        price: "HKD $2000 /Annu.",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "Registered Office",
        img: regOffice,
        description:
            "Start your business the right way! We ensure all the incoming letters and parcels will be taken care of professionally.",
        price: "HKD $1300 /Annu.",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "Virtual Office",
        img: virtualOffice,
        description:
            "Have your business handled by our professional front line colleagues while you are striking for your business!",
        price: "HKD $3850 /Annu.",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "Accounting via Cloud Base System",
        img: accountCloud,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $800 /Mo.",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
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
        itemName: "Company Bank Account Opening",
        img: bankOpening,
        description:
            "With the continuous changes of banking requirements, we are here to give you advices and accelerate the banking process.",
        price: "HKD $6000",
        orderNow: false
    },
    {
        itemName: "Serviced Offices",
        img: servicedOffice,
        description:
            "With two office locations, we are able to offer a wider range of serviced offices in different sizes, views and prices to meet our clients' needs.",
        price: "HKD $8000 /Mo.",
        orderNow: false
    },
    {
        itemName: "Coworking Space",
        img: coworkHotdesk,
        description:
            "Another great feature on our professional host services is to help you make the most of your working time. We offer flexible and personalized hot desk for startups and solopreneurs.",
        price: "HKD $2800 /Mo.",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "Dedicated Desk",
        img: dedicateDesk,
        description:
            "We off you the flexibility and exposure of an open space, while benefiting of the serviced office facilities.",
        price: "HKD $4800 /Mo.",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "Payroll & MPF",
        img: payrollMfp,
        description:
            "Saving you extra costs on hiring an administrative staff in Hong Kong! Our payroll service comes in handy for a small operation business!",
        price: "HKD $200 /Mo.",
        orderNow: false
    },
    {
        itemName: "Venue Spaces",
        img: venueSpaces,
        description:
            "Look no further for space to host your seminar, workshop, training or even product launch!",
        price: "HKD $250 /Hr.",
        orderNow: false
    },
    {
        itemName: "Hong Kong Representative Office",
        img: hkRep,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $8500",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "Auditing Services",
        img: audit,
        description:
            "At your business year end, come along with your shoe box, and we will sort out all the accounting and auditing work for your company.",
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
        itemName: "Hong Kong Visa",
        img: hkVisa,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $20000",
        orderNow: false
    },
    {
        itemName: "China Visa",
        img: chinaVisa,
        description:
            "We arrange China visa applications for the ease of our clietns that are required to travel into China for differnt purposes.",
        price: "HKD $800",
        orderNow: false
    },
    {
        itemName: "Recruitment Licence",
        img: recuritmentLicence,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $5000",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "Import and Export Licence",
        img: importExport,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $5000",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "HK Trademark",
        img: hkTrademark,
        description:
            "Do you need a trademark for your intellectual properties?",
        price: "HKD $6500",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "China Trademark",
        img: chinaTrademark,
        description:
            "Do you need a trademark for your intellectual properties?",
        price: "HKD $6500",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
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
        itemName: "China Representative Office",
        img: chinaRepOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $8800",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "China Wholly Foreign Owned Enterprises",
        img: wfoe,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        price: "HKD $20000",
        orderNow: true,
        sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "Translation Services",
        img: translation,
        description:
            "We translate official documents you may need for immigration, bank or government purposes. The translation is certified by HK translators.",
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
        itemName: "De-registration of Hong Kong Limited",
        img: deregistration,
        description:
            "Leaving Hong Kong for good? Let us take care of the administrative burden for your company before you depart.",
        price: "HKD $3500",
        orderNow: true, sku: "sku_F8WRZKvH3dwe4Q"
    },
    {
        itemName: "Warehouse Solutions",
        img: warehouse,
        description:
            "Do you need warehouse space to stock your products in Hong Kong and redirect them all over the world? Look no further!",
        price: "HKD $2000 /Mo.",
        orderNow: false
    },
    {
        itemName: "Relocation Services",
        img: relocation,
        description:
            "Moving your life to Hong Kong? We ensure to make it easy and straightforward for you. We offer you a customized package according to your needs.",
        price: "HKD $4000",
        orderNow: false
    }
];
