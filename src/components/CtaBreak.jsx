import Reveal from './Reveal'
import CtaButton from './CtaButton'

export default function CtaBreak({ text = 'QUERO MINHA VAGA NA SALA SECRETA' }) {
  return (
    <section className="bg-v4-black py-14 px-5 text-center border-t border-v4-border">
      <Reveal>
        <CtaButton large>{text}</CtaButton>
        <p className="font-body text-[10px] text-muted mt-3 uppercase tracking-widest">
          🔒 100% gratuito · Ao vivo · Sem replay
        </p>
      </Reveal>
    </section>
  )
}
