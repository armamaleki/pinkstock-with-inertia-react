import {useState} from "react";
import { ArrowDown, ArrowUp } from 'lucide-react';
export default function DescriptionAtTheBottomOfThePage({content = ''}) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="border-y space-y-4">
            <div
                className={`overflow-hidden ${
                    expanded ? "max-h-full opacity-100" : "max-h-[50px] opacity-80"
                }`}
            >
                <div
                    dangerouslySetInnerHTML={{
                        __html: (content)
                            .replace(/&zwnj;|&zwj;|&nbsp;|&shy;|&thinsp;|&ensp;|&emsp;|&hairsp;/g, " ")
                            .replace(/[\u200C\u200D\u00A0\u00AD\u200A\u2000\u2001\u2002\u2003]/g, " ")
                            .replace(/\s+/g, " ")
                            .trim()
                    }}

                />
            </div>
            <button
                onClick={() => setExpanded(!expanded)}
                className="border-b flex items-center gap-1 mb-1 cursor-pointer">
                {!expanded ? (
                        <>
                            نمایش بیشتر
                            <ArrowDown className={`size-6`}/>
                        </>
                    ) :
                    (
                        <>
                            نمایش کمتر
                            <ArrowUp className={`size-6`}/>
                        </>
                    )
                }

            </button>
        </div>
    );
}
