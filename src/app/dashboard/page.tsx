"use client";
import { useState } from "react";
import { Sidebar } from "../features/sidebar/sidebar";
import { SidebarContext } from "../contexts/sidebarContext";
import { ISidebarAreaOptions } from "@/global/types";
import { PersonalData } from "../features/personalData/personalData";
import { Container } from "../components/container/container";
import { useRouter } from 'next/navigation';

const Page = () => {
  return (
    <PersonalData />
  );
}

export default Page