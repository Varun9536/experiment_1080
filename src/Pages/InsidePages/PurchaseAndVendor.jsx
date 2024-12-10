import style from "./Styles/purchaseAndVendor.module.css"


import icon1 from "../../assets/insidePages/pos/posPage/section3/icon1.png"
import icon2 from "../../assets/insidePages/pos/posPage/section3/icon2.png"
import icon3 from "../../assets/insidePages/pos/posPage/section3/icon3.png"


import sp from "../../assets/insidePages/vendor/section2icon/sp.png"
import vm from "../../assets/insidePages/vendor/section2icon/vm.png"




// features
import ips from "../../assets/insidePages/pos/posPage/feature/ips.png"
import it from "../../assets/insidePages/pos/posPage/feature/it.png"
import kds from "../../assets/insidePages/pos/posPage/feature/kds.png"
import oc from "../../assets/insidePages/pos/posPage/feature/oc.png"
import plp from "../../assets/insidePages/pos/posPage/feature/plp.png"
import rtmm from "../../assets/insidePages/pos/posPage/feature/rtmm.png"
import rtsr from "../../assets/insidePages/pos/posPage/feature/rtsr.png"
import tm from "../../assets/insidePages/pos/posPage/feature/tm.png"
import ufi from "../../assets/insidePages/pos/posPage/feature/ufi.png"



import aqc from "../../assets/insidePages/vendor/featuresIcon/aqc.png"
import dm from "../../assets/insidePages/vendor/featuresIcon/dm.png"
import pfb from "../../assets/insidePages/vendor/featuresIcon/pfb.png"
import poa from "../../assets/insidePages/vendor/featuresIcon/poa.png"
import poa1 from "../../assets/insidePages/vendor/featuresIcon/poa1.png"
import spm from "../../assets/insidePages/vendor/featuresIcon/spm.png"
import vmfeature from "../../assets/insidePages/vendor/featuresIcon/vm.png"
import vpt from "../../assets/insidePages/vendor/featuresIcon/vpt.png"



// benifits

import b1 from "../../assets/insidePages/pos/posPage/benefit/b1.webp"
import b2 from "../../assets/insidePages/pos/posPage/benefit/b2.webp"
import b3 from "../../assets/insidePages/pos/posPage/benefit/b3.webp"
import b4 from "../../assets/insidePages/pos/posPage/benefit/b4.webp"
import b5 from "../../assets/insidePages/pos/posPage/benefit/b5.webp"



import bfc from "../../assets/insidePages/vendor/vendorBenefits/bfc.webp"
import evm from "../../assets/insidePages/vendor/vendorBenefits/evm.webp"
import isr from "../../assets/insidePages/vendor/vendorBenefits/isr.webp"
import ta from "../../assets/insidePages/vendor/vendorBenefits/ta.webp"
import tcs from "../../assets/insidePages/vendor/vendorBenefits/tcs.webp"



import laptop from "../../assets/insidePages/pos/posPage/laptop.webp"

import Accordion from "../../Components/Accordian/Accordian.jsx"

import Footer3 from "../../Components/Footer/Footer3.jsx"

import { FaArrowRightLong } from "react-icons/fa6";
import footer from "../../assets/footer/foot.webp"
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"

export default function PurchaseAndVendor() {





    const features = [
        {
            key: 1,
            heading: "Vendor Management",
            desc: "Maintain a centralized database with detailed vendor profiles, including contact information, product offerings, and contract terms, helping businesses efficiently track and manage supplier relationships.",
            img: vmfeature, // Image from the previous feature array
            width: "64px" // Width from the previous feature array
        },
        {
            key: 2,
            heading: "RFP/RFQ Management",
            desc: "Easily create, send, and manage Requests for Proposals (RFPs) and Quotations (RFQs), ensuring businesses receive competitive bids from multiple vendors, simplifying the procurement process.",
            img: rtmm, // Image from the previous feature array
            width: "65px" // Width from the previous feature array
        },
        {
            key: 3,
            heading: "Automated Quotation Comparison",
            desc: "Automatically compare vendor quotations based on price, delivery, and quality, helping businesses make data-driven procurement decisions quickly.",
            img: aqc, // Image from the previous feature array
            width: "54px" // Width from the previous feature array
        },
        {
            key: 4,
            heading: "Order Management",
            desc: "Track and manage purchase orders from creation to fulfillment, with integration to inventory and warehouse management for real-time stock level and delivery updates.",
            img: tm, // Image from the previous feature array
            width: "65px" // Width from the previous feature array
        },
        {
            key: 5,
            heading: "Vendor Payment Tracking",
            desc: "Monitor vendor payments, including invoices and due dates, ensuring smooth transactions with transparent payment status for both businesses and vendors.",
            img: vpt, // Image from the previous feature array
            width: "65px" // Width from the previous feature array
        },
        {
            key: 6,
            heading: "Purchase Order Approvals",
            desc: "Enable multi-level approval workflows for purchase orders to ensure alignment with internal budgets and procurement policies before sending to vendors.",
            img: poa, // Image from the previous feature array
            width: "63px" // Width from the previous feature array
        },
        {
            key: 7,
            heading: "Supplier Performance Monitoring",
            desc: "Evaluate vendor performance through comprehensive reports on delivery, product quality, and compliance, helping businesses strengthen supplier relationships.",
            img: spm, // Image reused for consistency
            width: "64px" // Reused width for consistency
        },
        {
            key: 8,
            heading: "Document Management",
            desc: "Securely store and access procurement-related documents like contracts, invoices, and agreements in a centralized repository for easy sharing with vendors.",
            img: dm, // Reused image for consistency
            width: "65px" // Reused width for consistency
        },
        {
            key: 9,
            heading: "Purchase Forecasting and Budgeting",
            desc: "Forecast purchasing needs based on historical data and trends, set procurement budgets, and track spending to ensure financial control.",
            img: pfb, // Reused image for consistency
            width: "54px" // Reused width for consistency
        }
    ];




    const benefits = [
        {
            key: 1,
            heading: "Efficient Vendor Management",
            desc: "Centralized vendor profiles allow businesses to maintain organized and up-to-date records, making it easier to track relationships and performance over time.",
            img: evm,
        },
        {
            key: 2,
            heading: "Time and Cost Savings",
            desc: "Streamlining the RFP and RFQ processes reduces the time spent on sourcing and vendor selection, allowing businesses to make quicker procurement decisions and secure better prices.",
            img: tcs,
        },
        {
            key: 3,
            heading: "Transparency and Accountability",
            desc: "Vendors can easily track payment statuses and purchase orders, reducing disputes and fostering trust between businesses and suppliers.",
            img: ta,
        },
        {
            key: 4,
            heading: "Improved Supplier Relationships",
            desc: "By evaluating supplier performance and maintaining clear, direct communication through the portal, businesses can build stronger, more collaborative partnerships with vendors.",
            img: isr,
        },
        {
            key: 5,
            heading: "Better Financial Control",
            desc: "Integration with finance modules ensures that payment terms, budgets, and spending are tracked efficiently, enabling businesses to stay within budget and manage cash flow effectively.",
            img: bfc,
        },
       
    ];


    const query = [
        {
            key: 1,
            question: "Q : How does the Purchase & Vendor Portal simplify vendor management?",
            answer: "A : The portal centralizes vendor profiles, streamlines communication, and allows businesses to track vendor performance, payment statuses, and contract terms."
        },
        {
            key: 2,
            question: "Q : Can I compare vendor quotations easily?",
            answer: "A : Yes, the system automatically compares vendor quotations based on price, delivery, and quality to help businesses make quick, data-driven procurement decisions."
        },
        {
            key: 3,
            question: "Q : How does the module help with purchase orders?",
            answer: "A : It tracks purchase orders from creation to fulfillment, integrates with inventory systems, and ensures accurate order management with real-time updates."
        },
        {
            key: 4,
            question: "Q : Is the portal integrated with financial systems?",
            answer: "A : Yes, the portal integrates with finance modules to track spending, manage budgets, and monitor vendor payments efficiently."
        },
        {
            key: 5,
            question: "Q : Can I forecast future procurement needs?",
            answer: "A : Yes, the module helps businesses forecast purchasing needs, set procurement budgets, and track spending based on historical data and trends."
        }
    ];



    const footerUpperText = {

        text1: "Collaborate seamlessly",
        text2: "",
        text3: "with vendors using our comprehensive portall",
        img: footer
    }












    return (
        <>



            <section>
                <div className={`${style.section1} insidePageUpperSection`}>
                    <div className={`${style.pageHeadingBox}`}>
                        <div className={`${style.section1Heading} font4`}>
                            <span style={{ color: "#012060" }}>PURCHASE & VENDOR</span>
                            <span style={{ color: "#01B0F1" }} className="blueTextGlobalClass"> PORTAL</span>
                        </div>
                    </div>

                    <div className={style.section1ImgBox}>

                    </div>
                </div>

            </section>


            <section style={{ backgroundColor: "#f5f5f5" }}>
                <div className={`${style.section2} font4 globalSectionSize`}>

                    <div className={style.section2IconAndName}>
                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={sp} alt="" />
                        </div>

                        <div className={`${style.iconName} `}>

                            <div>Streamlining</div>
                            <div>Procurement</div>
                        </div>
                    </div>



                    <div className={style.section2IconAndName}>

                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={vm} alt="" />
                        </div>

                        <div className={`${style.iconName} `}>



                            <div>Vendor</div>
                            <div>Managements</div>

                        </div>
                    </div>


{/* 
                    <div className={style.section2IconAndName}>

                        <div className={`${style.section2Icon}`}>
                            <img style={{ width: "100%" }} src={icon3} alt="" />
                        </div>

                        <div className={`${style.iconName}`}>


                            <div>
                                Smart
                            </div>

                            <div>
                                Insights
                            </div>
                        </div>

                    </div> */}



                </div>
            </section>



            <section>

                <div className={`${style.section3}`}>



                    <div className={`${style.blueBoxSetion3}`}>

                        <div className={`${style.laptopImgSection3}`}>
                            <div className={`${style.laptopImgBox}`} >
                                <img style={{ width: "100%" }} src={laptop} alt="" />
                            </div>
                        </div>


                        <div className={`${style.section3Para} font4`}>
                            <div className={`${style.paragraph}`}>

                                EICE Rise ERP’s Purchase & Vendor Portal streamlines procurement by enhancing communication between businesses and suppliers. It simplifies the RFP and RFQ processes, allows vendors to track payment statuses, and ensures transparency and efficiency in transactions, optimizing procurement operations and supplier management.

                            </div>

                        </div>

                        {/* <div style={{overflow : "hidden"}} >
            <div className={`${style.section3Spiral}`}  >
                <img style={{width : "100%" }} src={spiral} alt="" />
            </div>
        </div> */}

                    </div>

                </div>
            </section>

            <section >
                <div className={`${style.section4} globalSectionSize`}>

                    <div className={`${style.section4heading} font4`}>Key Features</div>

                    <div className={`${style.featureContainer}`}>

                        {features.map((item) =>
                        (
                            <div key={item.key} className={`${style.featureInnerBox} font4`}>

                                <div className={`${style.headingAndIconFeatures}`}>

                                    <div style={{ width: item.width }}>
                                        <img style={{ width: "100%" }} src={item.img} alt="" />
                                    </div>

                                    <div className={`${style.featureHeading}`}>
                                        <div>
                                            {item.heading}
                                        </div>

                                        <div>
                                            {item.heading2}
                                        </div>

                                    </div>

                                </div>

                                <div className={`${style.featureDesc}`}>
                                    {item.desc}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            <section className={`${style.requestDemoBtn}`}>

                <div style={{ display: "flex", justifyContent: "center" }} className="globalSectionSize">
                    <div className={`${style.demoButton} font1`}>
                        <div > Request a Demo </div>
                        <div className={`${style.demoArrowButton}`}> <FaArrowRightLong /></div>
                    </div>

                </div>

            </section>



            {/* <section style={{ background: "#f5f5f5" }} >
                <div className={`${style.section5} font4 globalSectionSize`}>


                    <div className={`${style.section5heading} font4`}>Benefits</div>
                    {benefits.map((item, index) =>
                    (

                        index % 2 === 0 ? (<div className='GlobalBenefitBox1'>


                            <div style={{ width: "25%" }}>
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>) : (<div className='GlobalBenefitBox2'>


                            <div style={{ width: "25%" }}>
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>)


                    ))}

                </div>
            </section> */}

            <section style={{ background: "#f5f5f5" }} >
                <div className={`${style.section5} font4 globalSectionSize`}>


                    <div className={`${style.section5heading} font4`}>Benefits</div>
                    {benefits.map((item, index) =>
                    (

                        index % 2 === 0 ? (<div className='GlobalBenefitBox1'>


                            <div className="GlobalBenefitImgBox" >
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>) : (<div className='GlobalBenefitBox2'>


                            <div className="GlobalBenefitImgBox">
                                <img style={{ width: "100%" }} src={item.img} alt="" />
                            </div>

                            <div className='GlobalBenefitTextBox' >
                                <div className={`${style.innerHeadingBenifit}`}>{item.heading}</div>
                                <div className={`${style.innerDescBenifit}`}>{item.desc}</div>
                            </div>


                        </div>)


                    ))}

                </div>
            </section>









            <section >
                <div className={`${style.FAQsection} globalSectionSize font4`}>
                    <div className={`${style.FAQHeading}`}>Frequently Asked Questions</div>


                    <div className={style.FAQContainer}>
                        {query.map((item) => (
                            <Accordion key={item.key} question={item.question} answer={item.answer} />
                        ))}
                    </div>

                </div>
            </section>


            <div >
                <FooterUpperPart text1={footerUpperText.text1} text2={footerUpperText.text2} text3={footerUpperText.text3} img={footerUpperText.img} />
                <FooterLower />

            </div>

        </>
    )
}
