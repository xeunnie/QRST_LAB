import Link from 'next/link'

export default function Nav(){
    return(
        <div>
          <header>
            <nav>
              <Link href="/">about</Link>
              <Link href="/pages/work">work</Link>
              <Link href="/pages/service">service</Link>
              <Link href="/pages/contact">contact</Link>
            </nav>
          </header>
        </div>
    );
}