// Inline SVG: the mustache and the round stamp. No images, so everything stays sharp.

export function Mustache({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 44" aria-hidden="true">
      <path
        fill="currentColor"
        d="M50 14 C 46 8, 40 6, 33 8 C 25 10, 20 15, 12 14 C 8 13.6, 5 11, 3 6 C 1 14, 4 26, 14 33 C 20 37.5, 28 36, 33 31 C 38 26.5, 42 23, 50 25.5 C 58 23, 62 26.5, 67 31 C 72 36, 80 37.5, 86 33 C 96 26, 99 14, 97 6 C 95 11, 92 13.6, 88 14 C 80 15, 75 10, 67 8 C 60 6, 54 8, 50 14 Z"
      />
    </svg>
  );
}

export function Stamp({ className = "", id = "st" }: { className?: string; id?: string }) {
  return (
    <svg className={className} viewBox="0 0 240 240" role="img" aria-label="Tacos Wuey Detroit">
      <defs>
        <path id={`${id}-top`} d="M 38 122 A 82 82 0 0 1 202 122" />
        <path id={`${id}-bot`} d="M 26 126 A 94 94 0 0 0 214 126" />
      </defs>
      <circle cx="120" cy="120" r="116" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="120" cy="120" r="108" fill="none" stroke="currentColor" strokeWidth="1" />
      <text fontFamily="var(--f-display)" fontStyle="italic" fontSize="30" fill="currentColor" textAnchor="middle" letterSpacing="4">
        <textPath href={`#${id}-top`} startOffset="50%">TACOS</textPath>
      </text>
      <svg x="54" y="86" width="132" height="58" viewBox="0 0 100 44">
        <path
          fill="currentColor"
          d="M50 14 C 46 8, 40 6, 33 8 C 25 10, 20 15, 12 14 C 8 13.6, 5 11, 3 6 C 1 14, 4 26, 14 33 C 20 37.5, 28 36, 33 31 C 38 26.5, 42 23, 50 25.5 C 58 23, 62 26.5, 67 31 C 72 36, 80 37.5, 86 33 C 96 26, 99 14, 97 6 C 95 11, 92 13.6, 88 14 C 80 15, 75 10, 67 8 C 60 6, 54 8, 50 14 Z"
        />
      </svg>
      <text x="120" y="176" fontFamily="var(--f-display)" fontStyle="italic" fontSize="44" fill="currentColor" textAnchor="middle" letterSpacing="3">WUEY</text>
      <text fontFamily="var(--f-mono)" fontSize="15" fill="currentColor" textAnchor="middle" letterSpacing="7">
        <textPath href={`#${id}-bot`} startOffset="50%">DETROIT</textPath>
      </text>
    </svg>
  );
}
