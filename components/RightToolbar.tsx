import { Save, Download, MousePointer2 } from "lucide-react";

export default function RightToolbar() {
    return (
        <aside className="w-[70px] flex flex-col items-center py-6" style={{ borderLeft: '1px solid #27272a', backgroundColor: '#09090b' }}>
            {/* 상단 아이콘들 */}
            <div className="space-y-3">
                <button
                    className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-zinc-800 transition-colors group relative"
                    title="저장"
                >
                    <Save className="w-5 h-5" style={{ color: '#71717a' }} />
                </button>
                <button
                    className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-zinc-800 transition-colors group relative"
                    title="다운로드"
                >
                    <Download className="w-5 h-5" style={{ color: '#71717a' }} />
                </button>
            </div>

            {/* 하단 영역 */}
            <div className="mt-auto flex flex-col items-center space-y-2">
                <MousePointer2 className="w-5 h-5" style={{ color: '#52525b' }} />
                <p className="text-[10px] text-center leading-tight px-2" style={{ color: '#52525b' }}>
                    다운로드할<br />장면을<br />선택해주세요
                </p>
            </div>
        </aside>
    );
}
