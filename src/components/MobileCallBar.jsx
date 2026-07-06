import { contact } from '../data/content'

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar">
      <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`} className="btn btn--primary btn--full">
        Pozovi — {contact.phones[0]}
      </a>
    </div>
  )
}
