'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const calculateTimeLeft = () => {
            const difference = +new Date(targetDate) - +new Date();
            let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }
            return timeLeft;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!isMounted) return null; // Prevent hydration mismatch

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center mx-2 md:mx-4">
            <div className="text-4xl md:text-6xl font-bold font-mono text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-white/50 mt-2">
                {label}
            </div>
        </div>
    );

    return (
        <div className="flex items-center justify-center p-6 border border-white/10 rounded-xl bg-black/20 backdrop-blur-sm">
            <TimeUnit value={timeLeft.days} label="Days" />
            <div className="text-2xl md:text-4xl font-bold text-white/30 mb-6">:</div>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <div className="text-2xl md:text-4xl font-bold text-white/30 mb-6">:</div>
            <TimeUnit value={timeLeft.minutes} label="Mins" />
            <div className="text-2xl md:text-4xl font-bold text-white/30 mb-6">:</div>
            <TimeUnit value={timeLeft.seconds} label="Secs" />
        </div>
    );
}
