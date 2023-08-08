import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";



const Logo =()=>{
    const Links = [
        {
            name:"Github",
            link:github,
            profile:"https://github.com/MrK619"
        },
        {
            name:"linkedin",
            link:linkedin,
            profile:"https://www.linkedin.com/in/karthik-r-3268b5255/"
        },
        {
            name:"twitter",
            link:twitter,
            profile:"https://twitter.com/prokarthick1"
        }
    ];
    return (
        <ul className="flex space-x-2  ">
            {
                Links.map((el)=>(
                    <li >
                        <a href={el.profile} target="blank">
                        <img src={el.link} alt="" className="w-[65px]  " />
                        </a>
                    </li>
                ))
            }
        </ul>
    )
}


export default Logo