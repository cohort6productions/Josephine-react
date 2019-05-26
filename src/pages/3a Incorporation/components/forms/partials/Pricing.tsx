import { Checkmark } from "src/pages/3a-companyIncorporation/img/checkMark";
import * as React from 'react';
import { FormikProps } from 'formik';
import { IFormValues } from 'src/Interfaces/FormValues';

const Pricing = (props: {handleCheckout: (priceObj: any) => void} & FormikProps<IFormValues>) => {
    const selectPrice = (priceObj: any) => (e: any) => {
        props.handleCheckout(priceObj)
    }

    return (
    
        <div className="container-fluid section-padding-tb96">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pl-3 pr-3">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <div className="card-header__title">
                                    <h3 className="text-mild">SEED</h3>
                                </div>
                                <div className="card-header__tag bg-theme-mild">
                                    <h2 className="text-light">HKD $6,000</h2>
                                    <span className="text-light">
                                        The best way to start the business just to
                                        test the water
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li className="fill-mild">
                                        <Checkmark />
                                        <span className="body-short-texts">
                                            Company incorporation
                                        </span>
                                    </li>
                                    <li className="fill-mild">
                                        <Checkmark />
                                        <span className="body-short-texts">
                                            Business registeration
                                        </span>
                                    </li>
                                    <li className="fill-mild">
                                        <Checkmark />
                                        <span className="body-short-texts">
                                            Articles of associations
                                        </span>
                                    </li>
                                    <li className="inact">
                                        <Checkmark />
                                        Client due dillegence check
                                    </li>
                                    <li className="inact">
                                        <Checkmark />
                                        Company secretarial services
                                    </li>
                                    <li className="inact">
                                        <Checkmark />
                                        Articles of associations
                                    </li>
                                    <li className="inact">
                                        <Checkmark />
                                        Share certificate
                                    </li>
                                    <li className="inact">
                                        <Checkmark />
                                        Company round chop
                                    </li>
                                    <li className="inact">
                                        <Checkmark />
                                        Company signature chop
                                    </li>
                                    <li className="inact">
                                        <Checkmark />
                                        Company folder
                                    </li>
                                    <li className="inact">
                                        <Checkmark />
                                        Certified copies of documents
                                    </li>
                                    <li className="inact">
                                        <Checkmark />
                                        Bank opening business plan
                                    </li>
                                </ul>

                                <div className="col-12">
                                    <button type="button" disabled={props.isSubmitting} className="btn btn-warning mx-auto" onClick={selectPrice({type: 'Seed', price: 6000})}>Select Seed</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 pl-3 pr-3">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <div className="card-header__title">
                                    <h3 className="text-medium">SPROUT</h3>
                                </div>
                                <div className="card-header__tag bg-theme-medium">
                                    <h2 className="text-light">HKD $7,250</h2>
                                    <span className="text-light">
                                        The best way to commit to your business when
                                        most is taken care
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        <span className="body-short-texts">
                                            Company incorporation
                                        </span>
                                    </li>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        <span className="body-short-texts">
                                            Business registeration
                                        </span>
                                    </li>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        <span className="body-short-texts">
                                            Articles of associations
                                        </span>
                                    </li>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        Client due dillegence check
                                    </li>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        Company secretarial services
                                    </li>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        Articles of associations
                                    </li>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        Share certificate
                                    </li>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        Company round chop
                                    </li>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        Company signature chop
                                    </li>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        Company folder
                                    </li>
                                    <li className="fill-medium">
                                        <Checkmark />
                                        Certified copies of documents
                                    </li>
                                    <li className="inact">
                                        <Checkmark />
                                        Bank opening business plan
                                    </li>
                                </ul>

                                <div className="col-12">
                                    <button type="button" disabled={props.isSubmitting} className="btn btn-warning mx-auto" onClick={selectPrice({type: 'Sprout', price: 7250})}>Select Sprout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pl-3 pr-3">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <div className="card-header__title">
                                    <h3 className="text-intense">GROW</h3>
                                </div>
                                <div className="card-header__tag bg-theme-intense">
                                    <h2 className="text-light">HKD $16,500</h2>
                                    <span className="text-light">
                                        Kickback and relax, everything is taken care
                                        for you
                                    </span>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        <span className="body-short-texts">
                                            Company incorporation
                                        </span>
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        <span className="body-short-texts">
                                            Business registeration
                                        </span>
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        <span className="body-short-texts">
                                            Articles of associations
                                        </span>
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        Client due dillegence check
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        Company secretarial services
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        Articles of associations
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        Share certificate
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        Company round chop
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        Company signature chop
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        Company folder
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        Certified copies of documents
                                    </li>
                                    <li className="fill-intense">
                                        <Checkmark />
                                        Bank opening business plan
                                    </li>
                                </ul>

                                <div className="col-12">
                                    <button type="button" disabled={props.isSubmitting} className="btn btn-warning mx-auto" onClick={selectPrice({type: 'Grow', price: 16500})}>Select Grow</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} ;

export default Pricing;