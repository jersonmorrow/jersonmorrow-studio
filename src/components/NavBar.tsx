import Image from "next/image";

export default function NavBar() {
    return (
        <header>
            <nav className="flex items-center justify-between p-6 lg:px-80" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image src="/jerquilo.png" alt="My Logo" width={150} height={24} />
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12 col-start-auto">
                    <a href="/" className="text-m font-bold leading-6 text-white">
                        About me
                    </a>
                    <a href="/resume" className="text-m font-bold leading-6 text-white">
                        Resume
                    </a>
                    <a href="/reach-out" className="text-m font-bold leading-6 text-white">
                        Reach out!
                    </a>
                </div>
            </nav>
        </header>
    );
}
