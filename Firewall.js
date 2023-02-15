import React from "react";
import MultiLineChart from "./MultiLineChart";

export default function Firewall() {
    return(
        <div className="container" style={{ position: 'relative'}}>
            <h3 className="py-3">
                Security Insight Dashboard &nbsp;|{" "}
                <span style={{ color: "GreyText"}}> Firewall</span>
            </h3>

            <div className="border rounded">
                <div className="container p-4">
                    <h4>Firewall events</h4>
                    <button className="btn btn-outline-warning">+ Add Filter</button>
                    <button  className="btn btn-outline-warning">+ Add Filter</button>
                    <p className="text-dark pt-3">Events By Action</p>
                    <div className="row me-auto justify-content-center" style={{marginLeft: '10px'}}>
                        <div className="col-2 square border-end border-dark ">
                            <p className="text-secondary ">Total</p>
                            <p className="text-secondary pt-2">13.29k</p>
                        </div>
                        <div className="col-2 square border-end border-dark">
                            <p className="text-secondary ">Log/Simulate</p>
                            <p className="text-secondary pt-2">12.29k</p>
                        </div>
                        <div className="col-2 square border-end border-dark ">
                            <p className="text-secondary ">JS Challenge</p>
                            <p className="text-secondary pt-2">1.29k</p>
                        </div>
                        <div className="col-2 square border-end border-dark ">
                            <p className="text-secondary ">Challenge</p>
                            <p className="text-secondary pt-2">27k</p>
                        </div>
                        <div className="col-2 square border-end border-dark ">
                            <p className="text-secondary ">Allow</p>
                            <p className="text-secondary pt-2">12k</p>
                        </div>
                        <div className="col-2 ">
                            <p className="text-secondary ">Block</p>
                            <p className="text-secondary pt-2">8k</p>

                        </div> 
                                       <MultiLineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}