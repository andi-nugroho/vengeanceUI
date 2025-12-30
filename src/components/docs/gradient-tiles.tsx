"use client";

import { GradientTiles } from "@/components/ui/gradient-tiles";

export function GradientTilesDemo() {
    return (
        <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <GradientTiles className="min-h-[500px]">
                <h1 className="text-4xl font-black tracking-tight">Your Content Here</h1>
            </GradientTiles>
        </div>
    );
}
