/**
 * Mascots Component — Family Style Reference
 * Hand-drawn cartoon mascots & confetti shapes
 * - Square-faced flower, smiling green blob, blue cat/mascot, yellow triangle star character
 * - Thin #343433 strokes, flat primary-bright fills (#64c6ff, #ffcd6c, #00c978, #ff3e00, #ff58ae)
 * - Flanks the hero headline without overlapping type
 */

export function renderHeroLeftMascotCluster() {
  return `
    <div class="mascot-cluster mascot-cluster-left" aria-hidden="true">
      <svg width="240" height="260" viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Floating Yellow Star Confetti -->
        <g class="float-slow" transform="translate(20, 20)">
          <path d="M14 0 L17 9 L26 10 L19 16 L21 25 L13 20 L5 25 L7 16 L0 10 L9 9 Z" fill="#ffcd6c" stroke="#343433" stroke-width="1.5" />
        </g>

        <!-- Ember Orange Coin -->
        <circle cx="200" cy="40" r="14" fill="#ff3e00" stroke="#343433" stroke-width="1.5" />
        <circle cx="200" cy="40" r="8" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 2" fill="none" />

        <!-- Mint Leaf Confetti -->
        <path d="M45 190 C45 170 70 170 70 190 C70 210 45 210 45 190 Z" fill="#00ca48" stroke="#343433" stroke-width="1.5" />

        <!-- Coral Heart -->
        <path d="M190 195 C190 185 180 178 172 185 C164 178 154 185 154 195 C154 212 172 225 172 225 C172 225 190 212 190 195 Z" fill="#ff58ae" stroke="#343433" stroke-width="1.5" />

        <!-- Main Character 1: Green Smiling Blob with Stick Feet -->
        <g class="mascot-bounce" transform="translate(60, 65)">
          <!-- Shadow -->
          <ellipse cx="60" cy="140" rx="46" ry="9" fill="#e5d5c3" opacity="0.6" />
          
          <!-- Stick Legs -->
          <line x1="45" y1="120" x2="45" y2="138" stroke="#343433" stroke-width="2.5" stroke-linecap="round" />
          <line x1="40" y1="138" x2="48" y2="138" stroke="#343433" stroke-width="2.5" stroke-linecap="round" />
          <line x1="75" y1="120" x2="75" y2="138" stroke="#343433" stroke-width="2.5" stroke-linecap="round" />
          <line x1="70" y1="138" x2="78" y2="138" stroke="#343433" stroke-width="2.5" stroke-linecap="round" />

          <!-- Organic Blob Body -->
          <path d="M20 60 C20 20, 100 15, 100 60 C105 95, 95 125, 60 125 C25 125, 15 95, 20 60 Z" fill="#00c978" stroke="#343433" stroke-width="2.5" stroke-linejoin="round" />
          
          <!-- Little Antenna / Sprout -->
          <path d="M60 22 C60 10 70 6 74 12 C78 18 68 20 62 22" fill="#ffcd6c" stroke="#343433" stroke-width="2" />

          <!-- Dot Eyes -->
          <circle cx="48" cy="58" r="3.5" fill="#343433" />
          <circle cx="72" cy="58" r="3.5" fill="#343433" />
          <circle cx="50" cy="56" r="1" fill="#ffffff" />
          <circle cx="74" cy="56" r="1" fill="#ffffff" />

          <!-- Smiling Mouth -->
          <path d="M52 72 Q60 80 68 72" stroke="#343433" stroke-width="2.5" stroke-linecap="round" fill="none" />

          <!-- Rosy Cheeks -->
          <circle cx="40" cy="66" r="4.5" fill="#ff58ae" opacity="0.8" />
          <circle cx="80" cy="66" r="4.5" fill="#ff58ae" opacity="0.8" />

          <!-- Cute Little Stick Arm Waving -->
          <path d="M22 75 Q10 70 8 58" stroke="#343433" stroke-width="2.5" stroke-linecap="round" fill="none" />
          <circle cx="8" cy="56" r="3" fill="#ffcd6c" stroke="#343433" stroke-width="1.5" />
        </g>
      </svg>
    </div>
  `;
}

export function renderHeroRightMascotCluster() {
  return `
    <div class="mascot-cluster mascot-cluster-right" aria-hidden="true">
      <svg width="240" height="260" viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Sky Blue Coin Confetti -->
        <circle cx="40" cy="50" r="15" fill="#64c6ff" stroke="#343433" stroke-width="1.5" />
        <path d="M36 50 L44 50 M40 45 L40 55" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />

        <!-- Sun Yellow Gear Confetti -->
        <g class="spin-slow" transform="translate(180, 40)">
          <circle cx="12" cy="12" r="10" fill="#ffcd6c" stroke="#343433" stroke-width="1.5" />
          <circle cx="12" cy="12" r="4" fill="#fbfaf9" stroke="#343433" stroke-width="1.5" />
        </g>

        <!-- Purple Diamond Confetti -->
        <polygon points="30,200 42,185 54,200 42,215" fill="#9f4fff" stroke="#343433" stroke-width="1.5" />

        <!-- Main Character 2: Square-Faced Flower Mascot with Petals -->
        <g class="mascot-bounce-delayed" transform="translate(50, 60)">
          <!-- Ground Shadow -->
          <ellipse cx="75" cy="148" rx="48" ry="9" fill="#e5d5c3" opacity="0.6" />

          <!-- Stem & Stick Feet -->
          <line x1="75" y1="110" x2="75" y2="146" stroke="#343433" stroke-width="3" stroke-linecap="round" />
          <line x1="65" y1="146" x2="75" y2="146" stroke="#343433" stroke-width="3" stroke-linecap="round" />
          <line x1="75" y1="146" x2="85" y2="146" stroke="#343433" stroke-width="3" stroke-linecap="round" />

          <!-- Flower Petals (Yellow #ffcd6c & Coral #ff58ae) -->
          <circle cx="75" cy="30" r="18" fill="#ffcd6c" stroke="#343433" stroke-width="2" />
          <circle cx="115" cy="45" r="18" fill="#ff58ae" stroke="#343433" stroke-width="2" />
          <circle cx="125" cy="80" r="18" fill="#64c6ff" stroke="#343433" stroke-width="2" />
          <circle cx="105" cy="115" r="18" fill="#ffcd6c" stroke="#343433" stroke-width="2" />
          <circle cx="45" cy="115" r="18" fill="#00c978" stroke="#343433" stroke-width="2" />
          <circle cx="25" cy="80" r="18" fill="#ff58ae" stroke="#343433" stroke-width="2" />
          <circle cx="35" cy="45" r="18" fill="#64c6ff" stroke="#343433" stroke-width="2" />

          <!-- Square Face Body with Rounded Radii (organic 14px) -->
          <rect x="42" y="46" width="66" height="66" rx="18" fill="#ffffff" stroke="#343433" stroke-width="2.5" />

          <!-- Eyes with Wink or Big Glasses -->
          <circle cx="58" cy="72" r="4" fill="#343433" />
          <circle cx="60" cy="70" r="1.2" fill="#ffffff" />
          <circle cx="86" cy="72" r="4" fill="#343433" />
          <circle cx="88" cy="70" r="1.2" fill="#ffffff" />

          <!-- Happy Open Mouth with Pink Tongue -->
          <path d="M64 86 Q72 98 80 86 Z" fill="#ff58ae" stroke="#343433" stroke-width="2" stroke-linejoin="round" />

          <!-- Cheeks -->
          <circle cx="50" cy="80" r="4" fill="#ff3e00" opacity="0.7" />
          <circle cx="94" cy="80" r="4" fill="#ff3e00" opacity="0.7" />

          <!-- Little Leaf on Stem -->
          <path d="M75 125 Q95 115 95 125 Q95 135 75 130 Z" fill="#00c978" stroke="#343433" stroke-width="1.8" />
        </g>
      </svg>
    </div>
  `;
}

export function renderMiniMascot(type = 'blob', size = 32) {
  if (type === 'flower') {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="10" r="6" fill="#ffcd6c" stroke="#343433" stroke-width="1.5" />
        <circle cx="30" cy="20" r="6" fill="#ff58ae" stroke="#343433" stroke-width="1.5" />
        <circle cx="20" cy="30" r="6" fill="#64c6ff" stroke="#343433" stroke-width="1.5" />
        <circle cx="10" cy="20" r="6" fill="#00c978" stroke="#343433" stroke-width="1.5" />
        <rect x="13" y="13" width="14" height="14" rx="4" fill="#ffffff" stroke="#343433" stroke-width="1.5" />
        <circle cx="17" cy="19" r="1.5" fill="#343433" />
        <circle cx="23" cy="19" r="1.5" fill="#343433" />
        <path d="M18 23 Q20 25 22 23" stroke="#343433" stroke-width="1.2" stroke-linecap="round" />
      </svg>
    `;
  }
  if (type === 'cat') {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none">
        <polygon points="12,18 10,8 18,14" fill="#64c6ff" stroke="#343433" stroke-width="1.5" />
        <polygon points="28,18 30,8 22,14" fill="#64c6ff" stroke="#343433" stroke-width="1.5" />
        <circle cx="20" cy="24" r="12" fill="#64c6ff" stroke="#343433" stroke-width="1.5" />
        <circle cx="16" cy="23" r="1.5" fill="#343433" />
        <circle cx="24" cy="23" r="1.5" fill="#343433" />
        <path d="M19 26 L21 26 L20 28 Z" fill="#ff58ae" />
        <path d="M15 28 Q18 30 20 28 Q22 30 25 28" stroke="#343433" stroke-width="1.2" stroke-linecap="round" />
      </svg>
    `;
  }
  // Default blob
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 40 40" fill="none">
      <path d="M8 20 C8 10 32 8 32 20 C34 30 28 34 20 34 C12 34 6 30 8 20 Z" fill="#00c978" stroke="#343433" stroke-width="1.5" />
      <circle cx="16" cy="19" r="1.5" fill="#343433" />
      <circle cx="24" cy="19" r="1.5" fill="#343433" />
      <path d="M18 24 Q20 26 22 24" stroke="#343433" stroke-width="1.2" stroke-linecap="round" fill="none" />
      <circle cx="13" cy="22" r="1.5" fill="#ff58ae" />
      <circle cx="27" cy="22" r="1.5" fill="#ff58ae" />
    </svg>
  `;
}
