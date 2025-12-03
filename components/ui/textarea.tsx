type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function Textarea(props: Props) {
  return (
    <textarea
      {...props}
      className={`rounded-2xl bg-white/60 backdrop-blur-xl border border-white/70 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-baby-blue ${props.className ?? ''}`}
    />
  )
}
