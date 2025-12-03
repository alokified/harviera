type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm transition ease-soft will-change-transform'
  const variants = {
    primary: 'bg-lavender text-gray-900 shadow-soft-pastel hover:brightness-105 hover:-translate-y-0.5',
    ghost: 'bg-white/40 backdrop-blur-xl border border-white/60 hover:bg-white/50 hover:-translate-y-0.5 hover:shadow-soft-pastel',
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
