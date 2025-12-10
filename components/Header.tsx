import { ChevronDown } from "lucide-react";

export default function Header() {
    return (
        <header className="h-[60px] border-b border-border flex items-center px-6 bg-card">
            <div className="flex items-center gap-8 flex-1">
                {/* 로고 */}
                <div className="text-xl font-bold text-primary">
                    AI Card Maker
                </div>

                {/* 모델 선택 드롭다운 */}
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-md cursor-pointer hover:bg-secondary/80 transition-colors">
                    <span className="text-sm text-foreground">GPT-4</span>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
            </div>

            {/* 우측 버튼들 */}
            <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm bg-secondary hover:bg-secondary/80 rounded-md transition-colors">
                    저장
                </button>
                <button className="px-4 py-2 text-sm bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors">
                    내보내기
                </button>
            </div>
        </header>
    );
}
