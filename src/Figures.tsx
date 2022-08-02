import React from 'react';

const Figures = () => {
    return (
        <div className="box">
            <svg>
                <rect width={200} height={100} x={100} y={100} fill={"brown"}/>
            </svg>
            <svg>
                <circle r={100} cx={200} cy={150} fill={"green"} stroke={"yellow"} strokeWidth={5}/>
            </svg>
            <svg>
                <ellipse rx={50} ry={100} fill={"gold"} cx={"50%"} cy={"50%"}/>
            </svg>
            <svg>
                <polygon points={"200,50 250,250 150,250"} fill={"silver"} stroke={"yellow"}/>
            </svg>
            <svg>
                <line x1={100} y1={100} x2={200} y2={200} stroke={"blue"}/>
            </svg>
            <svg>
                <polyline points={"100,100 150,100, 250,150 300,200"} fill={"none"} stroke={"brown"}/>
            </svg>
        </div>
    );
};

export default Figures;