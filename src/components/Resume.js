import React from 'react';
import data from "../data/data.json";
import Img from '../image.svg';



export default function Resume(props) {
    // fetch("data.json")
    // .then(res=>res.json())
    // .then(data=>console.log(data))

    // let info=data.profiles[props.location.data.i]
    // console.log(info.basic.name)
    let info = data.profiles[props.location.profilesData.i]
    console.log(info.basic)
    return (
        <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
            <div className="card">
              <div className="card-body">
                  <img src={Img} alt="Profile Icon" style={{width:"10em"}}  />
                  <h1>{info.basic.name}</h1>
              </div>

            </div>
            </div>

            <div className="col-lg-8 m-2">
                <div className="card">
                <div className="card-body">
                        <h2>Career Object:</h2>
                        <p>{info.career}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
