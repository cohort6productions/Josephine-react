// General
// Interfaces
import { IServiceItem } from "src/Interfaces/interfaces";

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

export const openServList: IServiceItem[] = [
    {
        name: "Company Secretary",
        img: compsec,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        orderNow: true,
        pricing: {
            scheme: "plan",
            price: "HKD $2000 /Annu.",
            schemeId: "plan_FAkc7vNAvMCWU2"
        }
    },
    {
        name: "Registered Office",
        img: regOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        orderNow: true,
        pricing: {
            scheme: "plan",
            price: "HKD $1300 /Annu.",
            schemeId: "plan_FAke4a55TOBpHe"
        }
    },
    {
        name: "HK Company Incorporation",
        img: compIncorp,
        description:
            "With low tax rate and simple, straight forward business regulations, Hong Kong is one of the best place for setting up business. ",
        orderNow: false,
        pricing: {
            price: "HKD $6000",
        }

        // TODO: add a Link to send them to the service page
    },
    {
        name: "HK Representative Office",
        img: hkRep,
        description:
            "Evaluate and assess the market with a representative office in HK, becore setting up a HK limited company.",
        orderNow: true,
        pricing: {
            scheme: "plan",
            price: "HKD $8500 /Annu.",
            schemeId: "plan_F9HDJbrZXNwfYu"
        }


    },
    {
        name: "China Representative Office",
        img: chinaRep,
        description:
            "Interested in exploring the market in China? We can help you setting up a representative office in China as a stepping stone in this specific market.",
        orderNow: true,
        pricing: {
            scheme: "sku",
            price: "HKD $8500 /Company",
            schemeId: "sku_FAku901ELmuE6U"
        }
    },
    {
        name: "China Wholly Foreign Owned Enterprises",
        img: wfoe,
        description:
            "Ready to establish a real presence in China? We can help you setting up a proper company in China for easier business relationship with your Chinese stakeholders.",
        orderNow: true,
        pricing: {
            scheme: "sku",
            price: "HKD $20000 /WFOE",
            schemeId: "sku_FAkubAgBGteQpw"
        }
    }
];

// 2b-Maintaining and upkeeping

export const mainUpkpHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/upkeeping.jpg"),
    header: "Maintaining and Upkeeping",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const mainUpkpServList: IServiceItem[] = [
    {
        name: "Company Secretary",
        img: compsec,
        description:
            "Remain in line with the company registry requirements, thanks to our professional services!",
        orderNow: true,
        pricing: {
            scheme: "plan",
            price: "HKD $2000 /Annu.",
            schemeId: "plan_FAkc7vNAvMCWU2"
        }
    }
    ,
    {
        name: "Registered Office",
        img: regOffice,
        description:
            "Start your business the right way! We ensure all the incoming letters and parcels will be taken care of professionally.",
        orderNow: true,
        pricing: {
            scheme: "plan",
            price: "HKD $1300 /Annu.",
            schemeId: "plan_FAke4a55TOBpHe"
        }

    },
    {
        name: "Virtual Office",
        img: virtualOffice,
        description:
            "Have your business handled by our professional front line colleagues while you are striking for your business!",
        orderNow: true,
        pricing: {
            scheme: "plan",
            price: "HKD $3850 /Annu.",
            schemeId: "plan_FAkfUseTX7CUbt"
        }
    },
    {
        name: "Accounting via Cloud Base System",
        img: accountCloud,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        orderNow: false,
        pricing: {
            price: "HKD $800 /Month",
        }
    }
];

// 2c-Expanding Business

export const expandBuzHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/expanding.jpg"),
    header: "Expanding business",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const expandBuzServList: IServiceItem[] = [
    {
        name: "Company Bank Account Opening",
        img: bankOpening,
        description:
            "With the continuous changes of banking requirements, we are here to give you advices and accelerate the banking process.",
        orderNow: false,
        pricing: {
            price: "HKD $6000",
        }
    },
    {
        name: "Serviced Offices",
        img: servicedOffice,
        description:
            "With two office locations, we are able to offer a wider range of serviced offices in different sizes, views and prices to meet our clients' needs.",
        orderNow: false,
        pricing: {
            price: "HKD $8000 /Mo.",
        }
    },
    {
        name: "Coworking Space",
        img: coworkHotdesk,
        description:
            "Another great feature on our professional host services is to help you make the most of your working time. We offer flexible and personalized hot desk for startups and solopreneurs.",
        orderNow: true,
        pricing: {
            scheme: "plan",
            price: "HKD $2800 /Month",
            schemeId: "plan_FAkgpwqcH556rJ"
        }
    },
    {
        name: "Dedicated Desk",
        img: dedicateDesk,
        description:
            "We off you the flexibility and exposure of an open space, while benefiting of the serviced office facilities.",
        orderNow: true,
        pricing: {
            scheme: "plan",
            price: "HKD $4800 /Month",
            schemeId: "plan_FAkrcaSGQ56fDf"
        }
    },
    {
        name: "Payroll & MPF",
        img: payrollMfp,
        description:
            "Saving you extra costs on hiring an administrative staff in Hong Kong! Our payroll service comes in handy for a small operation business!",
        orderNow: false,
        pricing: {
            price: "HKD $200 /Month",
        }
    },
    {
        name: "Venue Spaces",
        img: venueSpaces,
        description:
            "Look no further for space to host your seminar, workshop, training or even product launch!",
        orderNow: false,
        pricing: {
            price: "HKD $250 /Hr."
        }

    },
    {
        name: "Hong Kong Representative Office",
        img: hkRep,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        orderNow: true,
        pricing: {
            scheme: "plan",
            price: "HKD $8500 /Month",
            schemeId: "plan_F9HDJbrZXNwfYu"
        }
    },
    {
        name: "Auditing Services",
        img: audit,
        description:
            "At your business year end, come along with your shoe box, and we will sort out all the accounting and auditing work for your company.",
        orderNow: false,
        pricing: {
            price: "HKD $8000 /Hr."
        }
    }
];
// // 2d-Visa and licencing
export const visaServHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/visaPermits.jpg"),
    header: "Visa & licencing",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};
export const visaServList: IServiceItem[] = [
    {
        name: "Hong Kong Visa",
        img: hkVisa,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        orderNow: false,
        pricing: {
            price: "HKD $20000"
        }

    },
    {
        name: "China Visa",
        img: chinaVisa,
        description:
            "We arrange China visa applications for the ease of our clietns that are required to travel into China for differnt purposes.",
        orderNow: false,
        pricing: {
            price: "HKD $800"
        }

    },
    {
        name: "Recruitment Licence",
        img: recuritmentLicence,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        orderNow: true,
        pricing: {
            scheme: "sku",
            price: "HKD $5000",
            schemeId: "sku_FAku901ELmuE6U"
        },

    },
    {
        name: "Import and Export Licence",
        img: importExport,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        orderNow: true,
        pricing: {
            scheme: "sku",
            price: "HKD $5000",
            schemeId: "sku_FAkt6vVxRKFqd9"
        }
    },
    {
        name: "HK Trademark",
        img: hkTrademark,
        description:
            "Do you need a trademark for your intellectual properties?",
        orderNow: true,
        pricing: {
            scheme: "sku",
            price: "HKD $6500",
            schemeId: "sku_FAktziClMslD0G"
        },

    },
    {
        name: "China Trademark",
        img: chinaTrademark,
        description:
            "Do you need a trademark for your intellectual properties?",
        orderNow: true,
        pricing: {
            scheme: "sku",
            price: "HKD $6500",
            schemeId: "sku_FAkt4xxMoQ57pJ"
        },


    }
];

// // 2e-business entering china
export const chinaHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/enterChina.jpg"),
    header: "Business Entering China",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};


export const chinaServList: IServiceItem[] = [
    {
        name: "China Representative Office",
        img: chinaRepOffice,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        orderNow: true,
        pricing: {
            scheme: "sku",
            price: "HKD $8800",
            schemeId: "sku_FAku901ELmuE6U"
        },
    },
    {
        name: "China Wholly Foreign Owned Enterprises",
        img: wfoe,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        orderNow: true,
        pricing: {
            scheme: "sku",
            price: "HKD $20000",
            schemeId: "sku_FAkubAgBGteQpw"
        },


    },
    {
        name: "Translation Services",
        img: translation,
        description:
            "We translate official documents you may need for immigration, bank or government purposes. The translation is certified by HK translators.",
        orderNow: false,
        pricing: {
            price: "HKD $650 /page.",
        },

    },
    {
        name: "Notary Services",
        img: notary,
        description:
            "Something about the services that clietns are about to buy, and get that going is good. What you are buyd is what you are going to get.",
        orderNow: false,
        pricing: {
            price: "HKD $6000",
        },
    }
];

// // 2f-business leaving hong kong
export const leaveHeroProps: IHeroProps = {
    style: headerStyle("/images/banner/leavinghk.jpg"),
    header: "Business leaving Hong Kong",
    subLine:
        "Build your company's foundation on professionals and experts, focus on what matters to your business the most."
};

export const leaveServList: IServiceItem[] = [
    {
        name: "De-registration of Hong Kong Limited",
        img: deregistration,
        description:
            "Leaving Hong Kong for good? Let us take care of the administrative burden for your company before you depart.",
        orderNow: true,
        pricing: {
            scheme: "sku",
            price: "HKD $3500",
            schemeId: "sku_FAkuMTbqoemzE3"
        },
    },
    {
        name: "Warehouse Solutions",
        img: warehouse,
        description:
            "Do you need warehouse space to stock your products in Hong Kong and redirect them all over the world? Look no further!",
        orderNow: false,
        pricing: {
            price: "HKD $2000 /Mo."
        },
    },
    {
        name: "Relocation Services",
        img: relocation,
        description:
            "Moving your life to Hong Kong? We ensure to make it easy and straightforward for you. We offer you a customized package according to your needs.",
        orderNow: false,
        pricing: {
            price: "HKD $4000"
        },
    }
];
