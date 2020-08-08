import React, { Component } from 'react';

const style = {
    card: {
        boxShadow: "6px 6px 5px 0px rgba(230,227,230,1)",
        marginBottom: "15px"
    }
}
export default function Product(props) {
    return (
        <div className="card" style={style.card}>
            <div className="row no-gutters">
                <div className="col-4">
                    <img src="//placehold.it/200" className="img-fluid" alt="" />
                </div>
                <div className="col-8">
                    <div className="card-block px-2">
                        <h4 className="card-title">{props.nome}</h4>
                        <p className="card-text">{props.nome}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

