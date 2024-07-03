"use client"

import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage(){
    return (
        <div >
            <div className="w-full h-20"></div>
            <NextStudio config={config} />
        </div>
    )
}