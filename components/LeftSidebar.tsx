"use client";

import { Sparkles, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface LeftSidebarProps {
    onGenerate: () => void;
    isGenerating: boolean;
}

export default function LeftSidebar({ onGenerate, isGenerating }: LeftSidebarProps) {
    return (
        <aside className="w-[360px] border-r border-border bg-card flex flex-col">
            {/* 스크롤 가능한 영역 */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* 1. 주제/대본 입력 */}
                <div className="space-y-2">
                    <Label htmlFor="topic" className="text-sm font-medium">
                        1. 주제 및 대본
                    </Label>
                    <Textarea
                        id="topic"
                        placeholder="카드뉴스로 만들 주제나 대본을 입력하세요..."
                        className="min-h-[150px] resize-none"
                    />
                </div>

                {/* 2. 생성 설정 */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-primary">2. 생성 설정</h3>

                    {/* 장면 수 */}
                    <div className="space-y-2">
                        <Label htmlFor="scenes" className="text-sm">
                            장면 수
                        </Label>
                        <Input
                            id="scenes"
                            type="number"
                            defaultValue={8}
                            min={1}
                            max={20}
                            className="w-full"
                        />
                    </div>

                    {/* 비율 & 해상도 */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                            <Label htmlFor="ratio" className="text-sm">
                                비율
                            </Label>
                            <Select defaultValue="1:1">
                                <SelectTrigger id="ratio">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1:1">1:1 정사각</SelectItem>
                                    <SelectItem value="16:9">16:9 가로</SelectItem>
                                    <SelectItem value="9:16">9:16 세로</SelectItem>
                                    <SelectItem value="4:3">4:3 가로</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="resolution" className="text-sm">
                                해상도
                            </Label>
                            <Select defaultValue="2k">
                                <SelectTrigger id="resolution">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1k">1K</SelectItem>
                                    <SelectItem value="2k">2K</SelectItem>
                                    <SelectItem value="4k">4K</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* 아트 스타일 */}
                    <div className="space-y-2">
                        <Label htmlFor="style" className="text-sm">
                            아트 스타일
                        </Label>
                        <Select defaultValue="modern">
                            <SelectTrigger id="style">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="modern">모던 미니멀</SelectItem>
                                <SelectItem value="illustration">일러스트레이션</SelectItem>
                                <SelectItem value="realistic">사실적</SelectItem>
                                <SelectItem value="cartoon">카툰</SelectItem>
                                <SelectItem value="3d">3D 렌더</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* 생성 모드 토글 */}
                    <div className="flex items-center justify-between py-2">
                        <div className="space-y-0.5">
                            <Label htmlFor="mode" className="text-sm font-medium">
                                생성 모드
                            </Label>
                            <p className="text-xs text-muted-foreground">
                                순차 생성 / 안정적 생성
                            </p>
                        </div>
                        <Switch id="mode" />
                    </div>

                    {/* 참조 이미지 토글 */}
                    <div className="flex items-center justify-between py-2">
                        <div className="space-y-0.5">
                            <Label htmlFor="reference" className="text-sm font-medium">
                                참조 이미지
                            </Label>
                            <p className="text-xs text-muted-foreground">
                                이미지 기반 생성
                            </p>
                        </div>
                        <Switch id="reference" />
                    </div>
                </div>
            </div>

            {/* 하단 고정 버튼 */}
            <div className="p-6 border-t border-border">
                <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
                    size="lg"
                    onClick={onGenerate}
                    disabled={isGenerating}
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            생성 중...
                        </>
                    ) : (
                        <>
                            <Sparkles className="w-5 h-5 mr-2" />
                            장면 생성하기
                        </>
                    )}
                </Button>
            </div>
        </aside>
    );
}
