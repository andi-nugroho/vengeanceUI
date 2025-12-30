"use client";

import { cn } from "@/lib/utils";

interface GradientTilesProps {
    children?: React.ReactNode;
    className?: string;
}

export function GradientTiles({ children, className }: GradientTilesProps) {
    return (
        <section className={cn("relative w-full min-h-screen overflow-hidden", className)}>
            <div className="gradient-tiles-bg absolute inset-0" />
            {children && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-center p-4 mix-blend-difference [filter:invert(1)]">
                    {children}
                </div>
            )}
            <svg className="sr-only">
                <filter id="fluted" primitiveUnits="objectBoundingBox">
                    <feImage x="0" y="0" result="img" preserveAspectRatio="none meet" width=".03" height="1"
                        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'><rect fill='black' width='1' height='1'/><rect fill='url(%23r)' width='1' height='1' style='mix-blend-mode:screen'/><rect fill='url(%23g)' width='1' height='1' style='mix-blend-mode:screen'/><rect fill='url(%23y)' width='1' height='1' style='mix-blend-mode:screen'/><defs><radialGradient id='y' cx='0' cy='0' r='1'><stop stop-color='yellow'/><stop offset='1' stop-opacity='0'/></radialGradient><radialGradient id='g' cx='1' cy='0' r='1'><stop stop-color='green'/><stop offset='1' stop-opacity='0'/></radialGradient><radialGradient id='r' cx='0' cy='1' r='1'><stop stop-color='red'/><stop offset='1' stop-opacity='0'/></radialGradient></defs></svg>" />
                    <feTile in="img" result="t" />
                    <feGaussianBlur stdDeviation=".0001" in="t" result="b" />
                    <feDisplacementMap scale=".08" xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="b" />
                </filter>
            </svg>
        </section>
    );
}

export default GradientTiles;
