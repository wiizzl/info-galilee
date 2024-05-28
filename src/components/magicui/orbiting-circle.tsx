import { cn } from "@/lib/utils";

export function OrbitingCircles({
    className,
    children,
    reverse,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
}: {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
}) {
    return (
        <>
            {path && (
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="pointer-events-none absolute inset-0 size-full">
                    <circle
                        className="stroke-muted-foreground/30 stroke-1"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        strokeDasharray={"4 4"}
                    />
                </svg>
            )}

            <div
                style={
                    {
                        "--duration": duration,
                        "--radius": radius,
                        "--delay": -delay,
                    } as React.CSSProperties
                }
                className={cn(
                    "absolute flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-white/10 [animation-delay:calc(var(--delay)*1000ms)]",
                    { "[animation-direction:reverse]": reverse },
                    className,
                )}
            >
                {children}
            </div>
        </>
    );
}
