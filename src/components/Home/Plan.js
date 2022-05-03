import React from "react";
import Btn from "../Btn";
import PlanCard from "./PlanCard";
import price1 from "../../assets/price-1.png";
import price2 from "../../assets/price-2.png";
import leaderimg from "../../assets/leader.png";
import proleaderimg from "../../assets/pro-leader.png";
import trueleaderimg from "../../assets/true-leader.png";

function Plan() {
  return (
    <div className="max-w-6xl lg:mx-auto px-5 lg:px-0" id="pricing ">
      <div className="lg:flex items-center">
        <div className="flex-[0.7]">
          <h1 className=" text-3xl lg:text-4xl text-black font-semibold">
            Lead with the right plan
          </h1>
          <p className="my-2 text-lg text-gray-400">
            Don't you think it's worth giving us a shot if we can help you
            increase your leads & sales even by 5%?. Free Trial - 1 Leadley upto
            200 leads with LeadLabs branding
          </p>
        </div>

        <div className="flex-[0.3] flex justify-center my-5 lg:my-0 lg:justify-end">
          <Btn full href="https://leadlabs.ezcolab.com/signup/free">
            Start free trial
          </Btn>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 mx-auto gap-y-10 lg:gap-x-5 text-gray-500 my-20">
        <PlanCard
          heading="Leader"
          color="text-[#6c83e8]"
          price={19}
          benefits={leader}
          img1={price2}
          img2={leaderimg}
        />
        <PlanCard
          color="text-green-700"
          heading="Pro Leader"
          price={59}
          benefits={proLeader}
          img1={price1}
          img2={proleaderimg}
        />
        <PlanCard
          heading="True Leader"
          color="text-[#6c83e8]"
          price={99}
          benefits={trueLeader}
          img1={price2}
          img2={trueleaderimg}
        />
      </div>
      {/* <Calculator />

      <p className="text-center text-md font-bold my-5 lg:my-0">
        Need More Leadley/Widgets or More Visitors?
      </p>

      <AnimatedBtn full href="mailto:hello@vclearning.co">
        Contact Sales
      </AnimatedBtn> */}
    </div>
  );
}

export default Plan;

const leader = [
  "5 Leadley",
  "5 Embeddable Widgets",
  "Collect 4000 Leads",
  "Upto 40k Monthly Visitors",
  "10 GB Storage",
  "Overall Charges: $20/1,000 Leads",
];
const proLeader = [
  "15 Leadley",
  "15 Embeddable Widgets",
  "Collect 15000 Leads",
  "Upto 150k Monthly Visitors",
  "50 GB Storage",
  "Overall Charges: $10/1,000 Leads",
];
const trueLeader = [
  "100 Leadley",
  "100 Embeddable Widgets",
  "Collect Unlimited Leads",
  "Upto 1M Monthly Visitors",
  "Unlimited storage",
  "3 Sub Accounts",
];
