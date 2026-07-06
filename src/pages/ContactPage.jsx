import PageHero from '../components/PageHero'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Posetite naš salon"
        description="Javite nam se — tu smo da odgovorimo na sva vaša pitanja."
      />
      <Contact embedded />
    </>
  )
}
