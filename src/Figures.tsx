import React from 'react';

const Figures = () => {
    return (
        <div className="box">
            <svg className={"svg"}>
                <rect width={200} height={100} x={100} y={100} fill={"brown"}/>
            </svg>
            <svg className={"svg"}>
                <circle r={100} cx={200} cy={150} fill={"green"} stroke={"yellow"} strokeWidth={5}/>
            </svg>
            <svg className={"svg"}>
                <ellipse rx={50} ry={100} fill={"gold"} cx={"50%"} cy={"50%"}/>
            </svg>
            <svg className={"svg"}>
                <polygon points={"200,50 250,250 150,250"} fill={"silver"} stroke={"yellow"}/>
            </svg>
            <svg className={"svg"}>
                <line x1={100} y1={100} x2={200} y2={200} stroke={"blue"}/>
            </svg>
            <svg className={"svg"}>
                <polyline points={"100,100 150,100, 250,150 300,200"} fill={"none"} stroke={"brown"}/>
            </svg>
            <svg className={"svg-text"} width="402" height="302" viewBox="0 0 402 302" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    id={"path"}
                    d="M223.474 301C437.931 96.1665 59.0578 185.492 320.695 74.6051C530.004 -14.1048 281.139 -4.45347 130.543 11.4609C78.5972 18.6481 -19.2903 65.6725 4.72879 196.273"
                    stroke="black"/>
                <text className={"text"}>
                    <textPath href={"#path"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad at aut beatae commodi
                        consequuntur cum debitis dicta dolor doloremque doloribus eaque expedita explicabo, harum impedit
                        ipsa iure libero modi necessitatibus ne
                    </textPath>
                </text>
            </svg>


        </div>
    );
};

export default Figures;