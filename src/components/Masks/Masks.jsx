import React from 'react';
import "./Masks.scss"

/*
<g> - любые стили, которые применены к g будут также применены и к его потомкам. Можно например перемещать сразу группу элементов, а не по отдельности
<use> - можно переиспользовать элементы у которых есть идентификаторы (причем можно смещать по координатам), можно даже брать элементы из другого svg контейнера,
        даже во внешнем файле
<defs> - хранит элементы, которые не отображаются сразу при определеии, их можно использовать потом
<symbol> - похож на <g>, как <defs> не отображается при определении. Может иметь собственные атрибуты viewBox и preserveAspectRatio

* clip-path и mask - это способы обрезать один элемент с помощью другого
*
*
* */


const Masks = () => {
    return (
        <div>
            {/*Use*/}
            <svg>
                <g id={"circle"} stroke="gray" strokeWidth="12" fill="white">
                    <circle cx="52%" cy="62%" r="5%"/>
                </g>
                <use x={100} xlinkHref={"#circle"}/>
            </svg>

            {/*Defs - его содерижимое не отображается при определии*/}
            <svg>
                <defs>
                    <g id={"circle"} stroke="gray" strokeWidth="12" fill="white">
                        <circle cx="52%" cy="62%" r="5%"/>
                    </g>
                </defs>
                <use x={100} xlinkHref={"#circle"}/>
            </svg>

            {/*linearGradient и radialGradient*/}
            <svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="Gradient2" x1="1" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="red"/>
                        <stop offset="50%" stopColor="black" stopOpacity="0"/>
                        <stop offset="100%" stopColor="blue"/>
                    </linearGradient>
                    <radialGradient id="RadialGradient1">
                        <stop offset="0%" stopColor="red"/>
                        <stop offset="100%" stopColor="blue"/>
                    </radialGradient>
                </defs>

                <rect x="10" y="10" width="100" height="100" fill="url(#RadialGradient1)"/>
                <rect x="10" y="120" width="100" height="100" fill="url(#Gradient2)"/>
            </svg>

            {/*clipPath - оставляет то что входит в область clipPath*/}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <clipPath id="cut-off-bottom">
                    <rect width="200" height="100"/>
                    <circle cx={50} cy={150} r={10} fill={"white"}/>
                </clipPath>

                <circle cx="100" cy="100" r="100" clipPath={"url(#cut-off-bottom)"}/>

            </svg>

            {/*mask - оставляет то что входит в область mask*/}
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <mask id="cut-off-bottom">
                    <rect width="200" height="100"/>
                    <circle cx={50} cy={150} r={10} fill={"white"}/>
                </mask>

                <circle cx="100" cy="100" r="100" clipPath={"url(#cut-off-bottom)"}/>
            </svg>

            {/*mask - еще умеет работать с градиентами*/}
            <svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <linearGradient id="Gradient">
                        <stop offset="0" stopColor="white" stopOpacity="1"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                    </linearGradient>
                    <mask id="Mask">
                        <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"/>
                    </mask>
                </defs>

                {/*<rect x="0" y="0" width="200" height="200" fill="green"/>*/}
                <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)"/>
            </svg>

            <svg>
                <mask id="myMask">
                    <rect x="0" y="0" width="100" height="100" fill="white"/>
                    <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="black"/>
                </mask>

                {/*<polygon points="-10,110 110,110 110,-10" fill="orange"/>*/}

                <circle cx="50" cy="50" r="50" mask="url(#myMask)"/>
            </svg>
            <svg>
                <circle cx="50" cy="50" r="50"/>
                <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="black"/>
                <rect x="0" y="0" width="100" height="100" fill="white"/>
            </svg>

        </div>
    );
};

export default Masks;