import { Instagram, Mail } from 'lucide-react';

import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-black py-10 border-t border-white/10 text-white/60">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                    <Image
                        src="/creaiit_logo.png"
                        alt="CREAI+IT Logo"
                        width={60}
                        height={60}
                        className="w-16 h-16 object-contain"
                    />
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">CREAI+IT</h3>
                        <p className="text-sm">Yonsei University AI Entrepreneurship Society</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <span className="text-sm font-medium">문의사항 :</span>
                    <a href="https://www.instagram.com/yonsei_creai_it" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={24} /></a>
                    <a href="mailto:contact@creaiit.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
                </div>
            </div>
            <div className="text-center text-xs mt-8">
                © {new Date().getFullYear()} CREAI+IT. All rights reserved.
            </div>
        </footer>
    );
}
