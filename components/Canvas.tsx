import { ImageIcon } from "lucide-react";

interface CanvasProps {
    hasGenerated: boolean;
}

const dummyCards = [
    { id: 1, text: "AI가 생성한 첫 번째 카드뉴스입니다" },
    { id: 2, text: "두 번째 장면: 핵심 내용 전달" },
    { id: 3, text: "세 번째 장면: 상세 설명" },
    { id: 4, text: "마지막 장면: 요약 및 결론" },
];

export default function Canvas({ hasGenerated }: CanvasProps) {
    return (
        <main className="flex-1 border-r overflow-auto" style={{ borderColor: '#27272a', backgroundColor: '#050505' }}>
            {!hasGenerated ? (
                <div className="h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <ImageIcon className="w-24 h-24" style={{ color: '#3f3f46' }} />
                        </div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold" style={{ color: '#71717a' }}>
                                생성된 카드뉴스가 없습니다
                            </h2>
                            <p className="text-sm" style={{ color: '#52525b' }}>
                                좌측 패널에서 콘텐츠를 입력하고 생성 버튼을 눌러주세요
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="h-full p-8 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-6 max-w-4xl">
                        {dummyCards.map((card) => (
                            <div key={card.id} className="space-y-3">
                                <div 
                                    className="relative rounded-lg overflow-hidden" 
                                    style={{ 
                                        width: '100%', 
                                        aspectRatio: '1/1',
                                        backgroundColor: '#18181b'
                                    }}
                                >
                                    <img
                                        src={`https://dummyimage.com/1080x1080/6366f1/ffffff&text=Scene+${card.id}`}
                                        alt={`Scene ${card.id}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-sm text-center" style={{ color: '#a1a1aa' }}>
                                    {card.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
}
