import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./stakeDetails.css";

const StakeDetails = ({ plan, plans, setPlan }) => {
  const { blockChainData } = useContext(GlobalContext);

  useEffect(() => {
    setPlan(plans[0]);
  }, [
    blockChainData.apy.one_month_apy,
    blockChainData.apy.three_month_apy,
    blockChainData.apy.six_month_apy,
    blockChainData.apy.nine_month_apy,
    blockChainData.apy.one_year_apy,
    blockChainData.apy.hundred_years_apy,
  ]);

  return (
    <>
      <div className="p-6 flex items-center justify-center space-x-2 md:space-x-8 text-black">
        <button
          className={classNames(
            "uppercase min-w-[90px] bg-white font-bold truncate text-sm px-4 py-2 transition ease-in-out duration-300 hover:bg-[#FE4C2F] hover:text-white",
            { "bg-[#FE4C2F] text-white": plan.plan === 0 }
          )}
          onClick={() => setPlan(plans[0])}
        >
          1 Month
        </button>

        <button
          className={classNames(
            "uppercase min-w-[90px] bg-white font-bold truncate text-sm px-4 py-2 transition ease-in-out duration-300 hover:bg-[#FE4C2F] hover:text-white",
            { "bg-[#FE4C2F] text-white": plan.plan === 1 }
          )}
          onClick={() => setPlan(plans[1])}
        >
          3 Months
        </button>

        <button
          className={classNames(
            "uppercase min-w-[90px] bg-white font-bold truncate text-sm px-4 py-2 transition ease-in-out duration-300 hover:bg-[#FE4C2F] hover:text-white",
            { "bg-[#FE4C2F] text-white": plan.plan === 2 }
          )}
          onClick={() => setPlan(plans[2])}
        >
          6 Months
        </button>
      </div>
      <div className="p-6 pt-1 flex items-center justify-center space-x-2 md:space-x-8 text-black">
        <button
          className={classNames(
            "uppercase min-w-[90px] bg-white font-bold truncate text-sm px-3 py-2 transition ease-in-out duration-300 hover:bg-[#FE4C2F] hover:text-white",
            { "bg-[#FE4C2F] text-white": plan.plan === 3 }
          )}
          onClick={() => setPlan(plans[3])}
        >
          9 Months
        </button>

        <button
          className={classNames(
            "uppercase min-w-[90px] bg-white font-bold truncate text-sm px-3 py-2 transition ease-in-out duration-300 hover:bg-[#FE4C2F] hover:text-white",
            { "bg-[#FE4C2F] text-white": plan.plan === 4 }
          )}
          onClick={() => setPlan(plans[4])}
        >
          12 Months
        </button>
        <button
          className={classNames(
            "uppercase min-w-[90px] bg-white font-bold  truncate text-sm px-[18px] py-2 transition ease-in-out duration-300 hover:bg-[#FE4C2F] hover:text-white",
            { "bg-[#FE4C2F] text-white": plan.plan === 5 }
          )}
          onClick={() => setPlan(plans[5])}
        >
          100 years
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="space-y-4 text-sm mr-4">
          <p className="text-left">Lock period: {plan.duration}</p>
          <p className="text-left">Re-locks on registration: Yes</p>
          <p className="text-left">Status: Locked</p>
        </div>
        <div className="text-center md:mr-6">
          <h3 className="uppercase text-2xl font-bold">APY</h3>
          <h1 className="font-bold text-4xl text-[#FE4C2F]">
            {plan.apy && parseFloat(plan.apy.toString()) / 100}%
          </h1>
        </div>
      </div>
    </>
  );
};

export default StakeDetails;
