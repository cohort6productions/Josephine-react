// Module
import * as React from "react";

// Helper function
import { nameToPathConvert } from "src/helper/helper";

// Components
import Subscription from "src/components/Organisms/Subscription/subscription";
import CustomLink from "src/components/Atoms/CustomLink/customLink";

// Style
import "./aboutUs.scss";

// List data
import { testimonial, teamMembers } from "./data";
import Hero, {
    headerStyle,
    IHeroProps
} from "src/components/Organisms/Hero/hero";

const Team = (props: any) => (
    <div className="container-fluid section-padding-tb96">
        <div className="container">
            <div className="row">
                {props.list.map((unit: any, keyIndex: any) => (
                    <div
                        className={
                            "member-card p-3 " +
                            (keyIndex < 2
                                ? "col-sm-12 col-md-6"
                                : "col-sm-6 col-md-4")
                        }
                    >
                        <img
                            className="card-img-top img-fluid"
                            src={unit.image}
                            alt={unit.name}
                        />
                        <div className="member-card__body">
                            <h4>{unit.name}</h4>
                            <small>{unit.position}</small>
                        </div>
                        <div className="member-card__footer">
                            <CustomLink
                                link={
                                    "/about-us/" + nameToPathConvert(unit.name)
                                }
                                variation="default"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Testimonials = (props: any) => {
    return (
        <div className="container-fluid section-padding-tb96">
            <div className="container">
                <h2 className="section-header all-cap">
                    What our clients{" "}
                    <bdi className="text-highlight">say about us</bdi>
                </h2>
                <div className="card-columns">
                    {props.list.map((person: any, keyIndex: number) => (
                        <div
                            className="card bg-light shadow-sm border-0"
                            key={keyIndex}
                        >
                            <div className="card-body">
                                <div className="media">
                                    <img
                                        className="w-25 rounded-circle align-self-center"
                                        src={person.img}
                                        alt={person.name}
                                    />
                                    <div className="media-body align-self-center ml-2">
                                        <h4 className="overline-header-bold card-title">
                                            {person.name}
                                        </h4>
                                        <small className="">
                                            {person.position}
                                        </small>
                                    </div>
                                </div>
                                <p className="mt-3 body-short-texts">
                                    {person.testimonial}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// const List = () => (
//     <div className="container-fluid section-padding-tb96">
//         <div className="container">
//             <div className="row">
//                 <div className="border-left border-warning col-sm-6 col-md-3">
//                     <h2 className="text-highlight">2.2K+</h2>
//                     <h4>Audit Reports</h4>
//                 </div>
//                 <div className="border-left border-warning col-sm-6 col-md-3">
//                     <h2 className="text-highlight">1.5K+</h2>
//                     <h4>Incorporated Companies</h4>
//                 </div>
//                 <div className="border-left border-warning col-sm-6 col-md-3">
//                     <h2 className="text-highlight">1K+</h2>
//                     <h4>China Visa Application</h4>
//                 </div>
//                 <div className="border-left border-warning col-sm-6 col-md-3">
//                     <h2 className="text-highlight">15K+</h2>
//                     <h4>Incorporated Companies</h4>
//                 </div>
//             </div>
//         </div>
//     </div>
// );

// Taken from components/hero
const heroProps: IHeroProps = {
    style: headerStyle("/images/banner/aboutus.jpg"),
    header: "TEAM CENTRE O",
    subLine:
        "From incorporating business to applying for visa, we have specialists, tools and relationships to take care of our clients. Our mission is to help entrepreneures focus on growing their businesses without getting distracted."
};

export default class AboutUs extends React.PureComponent {
    public render() {
        return (
            <>
                <Hero {...heroProps} />
                <Team list={teamMembers} />
                <Testimonials list={testimonial} />
                {/* <List /> */}
                <Subscription />
            </>
        );
    }
}
