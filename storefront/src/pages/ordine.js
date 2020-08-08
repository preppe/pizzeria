import React, { Component } from 'react'
import Product from '../component/product'

export default class Ordine extends Component {
    constructor(props) {
        super(props);
        // Non chiamre this.setState() qui!
        this.state = {
            products: [
                {
                    nome: '',
                    ingredienti: []
                }
            ]
        }
    }
    componentDidMount() {
        this.setState({
            products: [
                {
                    nome: "MARGERITA",
                    ingredienti: ["pomodoro", "mozzarella", "salame piccante"],
                    categoria: "classiche"
                },
                {
                    nome: "diavola",
                    ingredienti: ["pomodoro", "mozzarella", "salame piccante"],
                    categoria: "classiche"
                },
                {
                    nome: "crudaiol",
                    ingredienti: ["pomodoro", "mozzarella", "salame piccante"],
                    categoria: "classiche"
                }
            ]
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        SIDEABAR
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {this.state.products.map((product, index) =>
                                <div className="col-md-6" key={index}>
                                    <Product nome={product.nome} ingredienti={product.ingredienti} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
