export const AnimatedBorderButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        relative
        group
        px-8 py-5
        rounded-full
        overflow-hidden
        border border-border
        bg-transparent
        text-foreground
        text-lg
        font-medium
        transition-all duration-500
        hover:border-primary/50
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        animated-border
      "
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
      >
        <path
          d="
            M 30 1
            H 170
            A 29 29 0 0 1 199 30
            A 29 29 0 0 1 170 59
            H 30
            A 29 29 0 0 1 1 30
            A 29 29 0 0 1 30 1
          "
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="110 320"
          strokeDashoffset="430"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
            animated-border-path
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        />
      </svg>

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};