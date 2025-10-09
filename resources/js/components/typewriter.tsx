import React, { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
    texts?: string[];
    period?: number;
}

export default function Typewriter({ texts = ["سلام دنیا "], period = 1000 }: TypewriterProps) {
    const [text, setText] = useState<string>('');
    const textRef = useRef<string>('');
    const isDeletingRef = useRef<boolean>(false);
    const loopNumRef = useRef<number>(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const tick = () => {
            const i = loopNumRef.current % texts.length;
            const fullTxt = texts[i];

            if (isDeletingRef.current) {
                textRef.current = fullTxt.substring(0, textRef.current.length - 1);
            } else {
                textRef.current = fullTxt.substring(0, textRef.current.length + 1);
            }

            setText(textRef.current);

            let delta = 200 - Math.random() * 100;
            if (isDeletingRef.current) delta /= 2;

            if (!isDeletingRef.current && textRef.current === fullTxt) {
                delta = period;
                isDeletingRef.current = true;
            } else if (isDeletingRef.current && textRef.current === '') {
                isDeletingRef.current = false;
                loopNumRef.current += 1;
                delta = 500;
            }

            timer = setTimeout(tick, delta);
        };

        timer = setTimeout(tick, 500);
        return () => clearTimeout(timer);
    }, [texts, period]);

    return (
        <h1 className="wrap text-2xl flex gap-2">
            <span className="text-pink-400 animate-pulse font-extrabold">[</span>
            {text}
            <span className="text-pink-400 animate-pulse font-extrabold">]</span>
        </h1>
    );
}
