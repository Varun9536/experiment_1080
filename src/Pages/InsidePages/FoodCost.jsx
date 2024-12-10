
import style from "./Styles/foodCost.module.css"


import icon1 from "../../assets/insidePages/pos/posPage/section3/icon1.png"
import icon2 from "../../assets/insidePages/pos/posPage/section3/icon2.png"
import icon3 from "../../assets/insidePages/pos/posPage/section3/icon3.png"

import eh from "../../assets/insidePages/food/ICONS/EH.png"
import ep from "../../assets/insidePages/food/ICONS/EP.png"







import COGSc from "../../assets/insidePages/food/foodFeatures/COGSc.png"
import dpca from "../../assets/insidePages/food/foodFeatures/dpca.png"
import im from "../../assets/insidePages/food/foodFeatures/im.png"
import me from "../../assets/insidePages/food/foodFeatures/me.png"
import rc from "../../assets/insidePages/food/foodFeatures/rc.png"
import rtct from "../../assets/insidePages/food/foodFeatures/rtct.png"
import smpo from "../../assets/insidePages/food/foodFeatures/smpo.png"
import spi from "../../assets/insidePages/food/foodFeatures/spi.png"
import wlm from "../../assets/insidePages/food/foodFeatures/wlm.png"





// benifits

import b1 from "../../assets/insidePages/pos/posPage/benefit/b1.webp"
import b2 from "../../assets/insidePages/pos/posPage/benefit/b2.webp"
import b3 from "../../assets/insidePages/pos/posPage/benefit/b3.webp"
import b4 from "../../assets/insidePages/pos/posPage/benefit/b4.webp"
import b5 from "../../assets/insidePages/pos/posPage/benefit/b5.webp"


import cc from "../../assets/insidePages/food/benefits/cc.webp"
import emm from "../../assets/insidePages/food/benefits/emm.webp"
import esn from "../../assets/insidePages/food/benefits/esn.webp"
import ioe from "../../assets/insidePages/food/benefits/ioe.webp"
import po from "../../assets/insidePages/food/benefits/po.webp"



import laptop from "../../assets/insidePages/pos/posPage/laptop.webp"

import Accordion from "../../Components/Accordian/Accordian.jsx"

import Footer3 from "../../Components/Footer/Footer3.jsx"
import footer from "../../assets/footer/foot.webp"
import FooterUpperPart from "../../Components/Footer/FooterUpperPart.jsx"
import FooterLower from "../../Components/Footer/FooterLower.jsx"

import { FaArrowRightLong } from "react-icons/fa6";

export default function FoodCost() {





  const features = [
    {
        key: 1,
        heading: "Real-Time Cost Tracking",
        desc: "Monitor the cost of ingredients, resources, and overhead in real time, ensuring that all food and beverage transactions, from procurement to sale, are tracked and analyzed for accurate cost control.",
        img: rtct, 
        width: "64px",
    },
    {
        key: 2,
        heading: "Recipe Costing",
        desc: "Track detailed recipes, including ingredient quantities, preparation methods, and associated costs. The system automatically calculates the cost per dish or drink, helping businesses make accurate pricing decisions.",
        img: rc, 
        width: "65px",
    },
    {
        key: 3,
        heading: "Menu Engineering",
        desc: "Analyze the profitability of menu items by evaluating cost versus price. This helps identify high-cost or low-margin items and suggests ways to adjust pricing, optimize menu offerings, and implement portion control to boost profitability.",
        img: me, 
        width: "54px",
    },
    {
        key: 4,
        heading: "Supplier Management & Purchase Orders",
        desc: "Monitor supplier prices and purchase orders to ensure the best deals on ingredients. The system helps compare supplier prices, manage inventory efficiently, and negotiate better prices to reduce the cost of goods sold (COGS).",
        img: smpo, 
        width: "65px",
    },
    {
        key: 5,
        heading: "COGS Calculation",
        desc: "Track and calculate the cost of goods sold on a daily, weekly, or monthly basis. This feature provides insights into the total cost of ingredients used and evaluates the profitability of each food and beverage sale.",
        img: COGSc, 
        width: "65px",
    },
    {
        key: 6,
        heading: "Waste and Loss Management",
        desc: "Identify and reduce food and beverage wastage, whether caused by over-portioning, spoilage, or incorrect inventory practices. This feature helps minimize loss and optimize resource utilization.",
        img: wlm, 
        width: "63px",
    },
    {
        key: 7,
        heading: "Dynamic Pricing and Cost Adjustments",
        desc: "Adjust pricing strategies based on demand fluctuations, seasonality, or special events. The system enables businesses to set flexible pricing options for peak periods, offering promotions or discounts while maintaining profitability.",
        img: dpca, 
        width: "70px",
    },
    {
        key: 8,
        heading: "Inventory Management",
        desc: "Efficiently manage inventory levels to avoid overstocking or stockouts. This system integrates inventory and purchasing to ensure stock availability, reduce waste, and maintain optimal ingredient levels.",
        img: im, 
        width: "65px",
    },
    {
        key: 9,
        heading: "Sales Performance Insights",
        desc: "Analyze the sales performance of menu items and identify top-performing dishes and beverages. Use these insights to adjust menu offerings and match customer preferences.",
        img: spi, 
        width: "60px",
    },
    
];






const benefits = [
  {
      key: 1,
      heading: "Profitability Optimization",
      desc: "Gain insights into ingredient costs, portion sizes, and menu profitability to adjust pricing, eliminate waste, and improve profit margins.",
      img: po,
  },
  {
      key: 2,
      heading: "Cost Control",
      desc: "Track F&B expenses in real-time from procurement to sale, reducing unexpected costs and ensuring better financial control.",
      img: cc, 
  },
  {
      key: 3,
      heading: "Efficient Menu Management",
      desc: "Optimize menu items based on profitability, removing low-margin dishes and adjusting portions to meet customer demand while ensuring profitability.",
      img: emm, 
  },
  {
      key: 4,
      heading: "Enhanced Supplier Negotiation",
      desc: "Track supplier prices and evaluate cost-effectiveness to negotiate better terms and reduce ingredient costs.",
      img: esn, 
  },
  {
      key: 5,
      heading: "Increased Operational Efficiency",
      desc: "Automated calculations, real-time tracking, and insightful analytics streamline daily operations, improving efficiency and guest experiences.",
      img: ioe, 
  }
];


const query = [
  {
    key: 1,
    question: "Q : How does the module track food and beverage costs?",
    answer: "A : The system tracks the cost of ingredients, resources, and overhead in real-time, helping businesses maintain control over food and beverage transactions."
  },
  {
    key: 2,
    question: "Q : Can the module help with menu pricing?",
    answer: "A : Yes, it analyzes menu item profitability by evaluating cost vs. price, helping businesses adjust pricing and optimize menu offerings."
  },
  {
    key: 3,
    question: "Q : Does the module assist with waste reduction?",
    answer: "A : Yes, it identifies and reduces food wastage by tracking over-portioning, spoilage, and inefficient inventory practices, helping optimize resource utilization."
  },
  {
    key: 4,
    question: "Q : How does the system manage suppliers and inventory?",
    answer: "A : It helps businesses monitor supplier prices, manage purchase orders, and maintain optimal inventory levels to reduce food costs and ensure efficient stock management."
  },
  {
    key: 5,
    question: "Q : Can I generate detailed financial reports for F&B costs?",
    answer: "A : Yes, the system provides detailed reports on F&B costs, profit margins, and pricing strategies, helping businesses make informed decisions for operational efficiency."
  }
];








const footerUpperText = {

  text1: "Empower your workforce",
  text2: "",
  text3: "with a streamlined Employee Portal",
  img: footer
}


 





  return (
    <>



      <section>
        <div className={`${style.section1} insidePageUpperSection`}>
          <div className={`${style.pageHeadingBox}`}>
            <div className={`${style.section1Heading} font4`}>
              <span style={{ color: "#012060" }}>FOOD & BEVERAGE </span>
              <span style={{ color: "#01B0F1" }} className="blueTextGlobalClass" >COST ANALYSIS</span>
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
              <img style={{ width: "100%" }} src={eh} alt="" />
            </div>

            <div className={`${style.iconName} `}>

              <div> Efficiency in</div>
              <div> Hospitality</div>
            </div>
          </div>



          <div className={style.section2IconAndName}>

            <div className={`${style.section2Icon}`}>
              <img style={{ width: "100%" }} src={ep} alt="" />
            </div>

            <div className={`${style.iconName} `}>



              <div>Enhancing</div>
              <div>Profitability</div>

            </div>
          </div>



          {/* <div className={style.section2IconAndName}>

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

              The Food & Beverage (F&B) Cost Analysis module in EICE Rise ERP helps hospitality businesses monitor and optimize F&B costs. It offers real-time tracking, cost analysis, and strategic insights to improve efficiency, reduce wastage, and enhance profitability.

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

