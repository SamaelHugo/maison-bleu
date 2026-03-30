export default function SectionDivider({ color = 'blue-light' }: { color?: 'blue-light' | 'brass' }) {
  return (
    <div className="flex justify-center">
      <div
        className="h-px w-full max-w-[120px]"
        style={{ backgroundColor: color === 'brass' ? 'var(--brass)' : 'var(--blue-light)' }}
      />
    </div>
  )
}
