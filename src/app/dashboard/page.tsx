"use client";
import { useContext, useState } from "react";
import { Sidebar } from "../features/sidebar/sidebar";
import { SidebarContext } from "../contexts/sidebarContext";
import { ISidebarAreaOptions } from "@/global/types";
import { PersonalData } from "../features/personalData/personalData";

const Page = () => {
  const [area, setArea] = useState<ISidebarAreaOptions>('personalData')
  return (
    <SidebarContext.Provider value={{ area, setArea }}>
      <div className="w-full h-full text-light flex flex-row">
        <div className="w-1/6">
          <Sidebar area={area} setArea={setArea} />
        </div>
        <div className="w-5/6 h-full p-2 border border-red text-light">
          {area === 'personalData' && <PersonalData />}
          {area === 'experiences' && <div>Personal Data 2</div>}
          {area === 'technologies' && <div>Personal Data 3</div>}
        </div>
      </div>
    </SidebarContext.Provider>
  );
}

export default Page