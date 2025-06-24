import React from "react";

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses = "",
}: MagicButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`relative group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 rounded-xl overflow-hidden
        bg-slate-950 text-white text-sm md:text-base font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] focus:outline-none
        ${otherClasses}`}
    >
      {/* Border animation layer */}
      <span className="absolute inset-0 w-full h-full bg-[conic-gradient(from_180deg_at_50%_50%,#E2CBFF_0%,#9333ea_50%,#E2CBFF_100%)] opacity-30 blur-lg group-hover:opacity-80 transition-all duration-500"></span>

      {/* Content Layer */}
      <span className="relative z-10 flex items-center gap-2">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
