import React from 'react';
import car from "../assets/car.jpeg"
import big from "../assets/big.jpg"


const Figures = () => {
    return (
        <div className="box">
            {/*<svg className={"svg"}>*/}
            {/*    <rect width={200} height={100} x={100} y={100} fill={"brown"}/>*/}
            {/*</svg>*/}
            {/*<svg className={"svg"}>*/}
            {/*    <circle r={100} cx={200} cy={150} fill={"green"} stroke={"yellow"} strokeWidth={5}/>*/}
            {/*</svg>*/}
            {/*<svg className={"svg"}>*/}
            {/*    <ellipse rx={50} ry={100} fill={"gold"} cx={"50%"} cy={"50%"}/>*/}
            {/*</svg>*/}
            {/*<svg className={"svg"}>*/}
            {/*    <polygon points={"200,50 250,250 150,250"} fill={"silver"} stroke={"yellow"}/>*/}
            {/*</svg>*/}
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad at aut beatae
                        commodi
                        consequuntur cum debitis dicta dolor doloremque doloribus eaque expedita explicabo, harum
                        impedit
                        ipsa iure libero modi necessitatibus ne
                    </textPath>
                </text>
            </svg>

            <svg className={"svg svg-rect"}>
                <rect className={"rect"} width={200} height={100} x={100} y={100} fill={"brown"} rx={5}/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width={300} height={300}>
                <clipPath id={"apple"}>
                    <path
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </clipPath>

            </svg>

            <img src={car} alt="car" className={"img"}/>
            <img src={big} alt="car" className={"img2"}/>
        </div>
    );
};

export default Figures;