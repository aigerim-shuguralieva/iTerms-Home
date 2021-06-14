import React from "react";
import { CustomCollapse } from "../../components/CustomCollapse";
import { CustomButton } from "../../components/CustomButton";
import { ServiceBoard } from "../../components/ServiceBoard";
import { Button } from "antd";
import "./Home.less";
import { faq } from "../../data";
import { Switch, Link, Route } from "react-router-dom";
import pic from "../../images/group-pic.png";
import pic1 from "../../images/purple-bg.png";
import pic2 from "../../images/solution-bg.png";
import pic3 from "../../images/Frame.png";
import { CheckCircleTwoTone } from "@ant-design/icons";

export const Home = () => {
  return (
    <div>
      {/* header section */}
      <section className="header-section">
        <div className="container">
          <div>
            <p className="sub-title">Powered By AI</p>
            <h1>
              The smartest, <br /> fastest way to <br /> Legal Aggrements
            </h1>
            <p className="text">
              Generate your
              <b> Privacy Policy, Terms of Use</b> <br /> or
              <b> Cookie Policy</b>for
              <a href=""> free</a>
            </p>
            <div>
              <CustomButton primary>Generate for free</CustomButton>
              <Button type="text">Learn more {">"} </Button>
            </div>
          </div>
        </div>
      </section>
      {/* possibilities section */}
      <section className="possibilities-section">
        <div className="container">
          <div className="streamline">
            <p className="sub-title">Discover Possibilities</p>
            <h1>
              Streamline Your <br /> Purpose with AI
            </h1>
            <p className="text">
              Streamline cost-effective solutions for your business.
              <br /> Generate legally compliant documents seamlessly with <br />
              customizable agreements and policies for your website <br />{" "}
              or mobile app anytime, anywhere with iTerms.
            </p>
            <ul className="text-block">
              <li>
                <CheckCircleTwoTone
                  style={{ marginRight: "5px" }}
                  twoToneColor="#52c41a"
                />
                Unlimited downloads for 9.95 a one-time fee{" "}
              </li>
              <li>
                <CheckCircleTwoTone
                  style={{ marginRight: "5px" }}
                  twoToneColor="#52c41a"
                />
                All legal agreements confirmed by a practicing lawyer
              </li>
              <li>
                <CheckCircleTwoTone
                  style={{ marginRight: "5px" }}
                  twoToneColor="#52c41a"
                />
                EU/US and main privacy laws covered
              </li>
              <li>
                <CheckCircleTwoTone
                  style={{ marginRight: "5px" }}
                  twoToneColor="#52c41a"
                />
                Automatic legal updates powered by AI
              </li>
              <li>
                <CheckCircleTwoTone
                  style={{ marginRight: "5px" }}
                  twoToneColor="#52c41a"
                />
                Industry-leading competitive pricing{" "}
              </li>
              <li>
                <CheckCircleTwoTone
                  style={{ marginRight: "5px" }}
                  twoToneColor="#52c41a"
                />
                Securely host your policies on our platform
              </li>
              <li>
                <CheckCircleTwoTone
                  style={{ marginRight: "5px" }}
                  twoToneColor="#52c41a"
                />
                Easy embed policy on your domain
              </li>
              <li>
                <CheckCircleTwoTone
                  style={{ marginRight: "5px" }}
                  twoToneColor="#52c41a"
                />
                Suitable for most Web/Mobile apps
              </li>
            </ul>
            <div>
              <CustomButton primary>Generate</CustomButton>
              <Button type="text">Learn more {">"} </Button>
            </div>
          </div>
        </div>
      </section>
      {/* easy-section */}
      <section className="easy-section">
        <div className="container">
          {/* <div className="easy-title">
            <p className="sub-title">Easy & Cost-Effective</p>
            <h1>How it works?</h1>
            <p>
              Numerous legal agreements accessible at the touch of your
              <br />
              fingerprints for your website or mobile app.
            </p>
          </div> */}
        </div>
      </section>

      {/* faq section */}
      {/* solution-section */}

      <div className="solution">
        <img
          style={{
            width: 1060,
            height: 280,
            marginLeft: "280px",
            marginBottom: "20px",
          }}
          src={pic2}
          alt=""
        />
        {/* <p className="sub-title">Intuitively Made For Your Business</p>
          <h1>
            Explore iTerms <br />
            Solutions{" "}
          </h1>
        </div>
        <div>
          <p className="text">
            Regardless of your requirements, iTerms
            <br /> has a solution ready for you to utilize.
          </p> */}
      </div>

      {/* group-pic section */}
      <div className="group-pic">
        <img style={{ width: "980px", height: "422px" }} src={pic} alt="" />
      </div>
      {/* competitors-section */}
      <section className="competitors-section">
        <div className="competitors">
          <p className="sub-title">VALIDATE OUR CREDIBILITY </p>
          <h1>
            Compare Industry <br />
            Competitors
          </h1>
          <p className="text">
            iTerms offers industry-leading for busninesses <br />
            for a fraction of the price, with no hidden fees.
          </p>
          {/* <img src={pic3} alt="" /> */}
        </div>
        <div className="service-block">
          <ServiceBoard />
        </div>
      </section>

      <div className="purple">
        <img style={{ width: "1514px", height: "750px" }} src={pic1} alt="" />
      </div>
      {/* faq-section */}
      <section className="faq-section">
        <div className="container">
          <p className="sub-title">Solutions to Your Problems</p>
          <h2>Do You Have any Questions?</h2>
          <p>
            Take a look through our answers! Still, have questions? Please don't
            be afraid to contact our team at any time.
          </p>

          <div className="collapse-block">
            <div className="sidebar">
              <h3>Table of Content</h3>
              {faq.map((el, id) => {
                return (
                  <Link key={id} to={`/${el.title}`}>
                    {el.title}
                  </Link>
                );
              })}
            </div>

            <div className="collapse">
              <Switch>
                {faq.map((el, id) => {
                  return (
                    <Route path={`/${el.title}`} key={id}>
                      <CustomCollapse el={el} />
                    </Route>
                  );
                })}
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
