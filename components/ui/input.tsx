type Props = React.InputHTMLAttributes<HTMLInputElement>

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className={`rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-baby-blue ${props.className ?? ''}`}
    />
  )
}
