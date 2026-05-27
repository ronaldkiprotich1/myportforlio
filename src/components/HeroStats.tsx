// Drop-in replacement for the stats row inside HeroSection.tsx
// Replace the existing stats .map() block with this component

import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { target: 4, suffix: "+", label: "Projects" },
  { target: 2, suffix: "+", label: "Years exp." },
  { target: 100, suffix: "%", label: "Dedication" },
];

const StatItem = ({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) => {
  const { count, ref } = useCountUp(target, 1200);

  return (
    <div>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="text-foreground leading-none mb-1"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "1.6rem",
          fontWeight: 800,
        }}
      >
        <span className="text-orange-400">
          {count}
          {suffix}
        </span>
      </div>
      <div className="text-muted-foreground text-[11px] uppercase tracking-[1.5px]">
        {label}
      </div>
    </div>
  );
};

export const HeroStats = () => (
  <div
    data-aos="fade-up"
    data-aos-delay="400"
    className="flex gap-8 mt-10 pt-8 border-t border-border/50"
  >
    {stats.map((s) => (
      <StatItem key={s.label} {...s} />
    ))}
  </div>
);