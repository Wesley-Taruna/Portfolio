
import Orb from "./Orb"

export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-10"
      aria-hidden
    >
      <Orb
        hoverIntensity={0.4}
        rotateOnHover={true}
        hue={280}
        forceHoverState={false}
        backgroundColor="rgba(2, 2, 6, 1)"
      />
    </div>
  )
}
