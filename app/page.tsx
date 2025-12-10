"use client";

import { useState } from "react";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import Canvas from "@/components/Canvas";
import RightToolbar from "@/components/RightToolbar";

export default function Home() {
    const [isGenerating, setIsGenerating] = useState(false);
    const [hasGenerated, setHasGenerated] = useState(false);

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            setIsGenerating(false);
            setHasGenerated(true);
        }, 3000);
    };

    return (
        <div className="h-screen flex flex-col bg-[#0b0c15]">
            {/* 헤더 */}
            <Header />

            {/* 메인 영역 - 3단 컬럼 */}
            <div className="flex-1 flex overflow-hidden">
                {/* 좌측 사이드바 */}
                <LeftSidebar onGenerate={handleGenerate} isGenerating={isGenerating} />

                {/* 중앙 캔버스 */}
                <Canvas hasGenerated={hasGenerated} />

                {/* 우측 툴바 */}
                <RightToolbar />
            </div>
        </div>
    );
}
