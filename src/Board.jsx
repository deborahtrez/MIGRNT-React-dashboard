import React, { Component } from 'react';
import './index.css'
import { BoardContext } from './BoardContext'

class Board extends Component {
    constructor(){
        super()
        this.state = {
            butterQuatity: 67,
            butterPrice: 455,
            sugarCrates: 44,
            sugarQuantity: 400,
            flourPrice: 50,
            milkPrice: 700,
            milkQuantity: 56,
            isLoggedIn:true,
        }
        // this.IncreaseButterQuantity = this.IncreaseButterQuantity.bind(this)
        // this.DecreaseButterQuantity = this.DecreaseButterQuantity.bind(this)
        // this.IncreaseButterPrice = this.IncreaseButterPrice.bind(this)
        // this.DecreaseButterPrice = this.DecreaseButterPrice.bind(this)
        // this.IncreaseSugarCrates = this.IncreaseSugarCrates.bind(this)
        // this.DecreaseSugarCrates = this.DecreaseSugarCrates.bind(this)
        // this.IncreaseflourPrice = this.IncreaseflourPrice.bind(this)
        // this.DecreaseflourPrice = this.DecreaseflourPrice.bind(this)
        // this.IncreaseMilkPrice = this.IncreaseMilkPrice.bind(this)
        // this.DecreaseMilkPrice = this.DecreaseMilkPrice.bind(this)
        // this.IncreaseMilkQuantity = this.IncreaseMilkQuantity.bind(this)
        // this.DecreaseMilkQuantity = this.DecreaseMilkQuantity.bind(this)
    }

    IncreaseButterQuantity=() =>{
        this.setState({butterQuatity: this.state.butterQuatity + 1})
    }
    DecreaseButterQuantity=() =>{
        this.setState({butterQuatity: this.state.butterQuatity - 1})
    }
    IncreaseButterPrice=() =>{
        this.setState({butterPrice: this.state.butterPrice + 1})
    }
    DecreaseButterPrice=() =>{
        this.setState({butterPrice: this.state.butterPrice - 1})
    }
    IncreaseSugarCrates=() =>{
        this.setState({sugarCrates: this.state.sugarCrates + 1})
    }
    DecreaseSugarCrates=() =>{
        this.setState({sugarCrates: this.state.sugarCrates - 1})
    }
    IncreaseflourPrice=() =>{
        this.setState({flourPrice: this.state.flourPrice + 1})
    }
    DecreaseflourPrice=() =>{
        this.setState({flourPrice: this.state.flourPrice - 1})
    }
    IncreaseMilkPrice=() =>{
        this.setState({milkPrice: this.state.milkPrice + 1})
    }
    DecreaseMilkPrice=() =>{
        this.setState({milkPrice: this.state.milkPrice - 1})
    }
    IncreaseMilkQuantity=() =>{
        this.setState({milkQuantity: this.state.milkQuantity + 1})
    }
    DecreaseMilkQuantity=() =>{
        this.setState({milkQuantity: this.state.milkQuantity - 1})
    }

    static contextType = BoardContext

    render() { 
        const {brightTheme, lightMode, darkMode} = this.context 
        const mainTheme = brightTheme ? lightMode : darkMode

        return ( 
            <div >
                <div className="container">
                    <div className="row">
                        <div className="col col-sm-4" style={{backgroundColor:mainTheme.backgroundMode}}>
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">The Quantity Of Butter</h5>
                                    <img src="https://res.cloudinary.com/deborahao/image/upload/v1590220460/close-up-of-block-of-butter-being-sliced-may-raise-cholesterol_vdvl9u.jpg"></img>
                                    <p className="card-text text-center">{this.state.butterQuatity}</p>
                                    <button className="butterButton1" onClick={this.IncreaseButterQuantity}>Update Quantity</button>
                                    <button className="butterButton2" onClick={this.DecreaseButterQuantity}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">The Price Of Butter</h5>
                                    <img src="https://res.cloudinary.com/deborahao/image/upload/v1590220460/close-up-of-block-of-butter-being-sliced-may-raise-cholesterol_vdvl9u.jpg"></img>
                                    <p className="card-text text-center">{this.state.butterPrice}</p>
                                    <button className="butterButton1" onClick={this.IncreaseButterPrice}>Update Price</button>
                                    <button className="butterButton2" onClick={this.DecreaseButterPrice}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">The Quantity Of Crates</h5>
                                    <img src="https://res.cloudinary.com/deborahao/image/upload/v1590221336/HD_313_e7du9v.jpg"></img>
                                    <p className="card-text text-center">{this.state.sugarCrates}</p>
                                    <button className="butterButton1" onClick={this.IncreaseSugarCrates}>Update Crates</button>
                                    <button className="butterButton2" onClick={this.DecreaseSugarCrates}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">The Price Of Flour</h5>
                                    <img src="https://res.cloudinary.com/deborahao/image/upload/c_fill,e_sharpen:1840,h_400,r_40,w_534/v1590221358/SQ-How-to-Make-Homemade-Oat-Flour-Gluten-Free-Vegan-1.5_j4apjg.jpg"></img>
                                    <p className="card-text text-center">{this.state.flourPrice}</p>
                                    <button className="butterButton1" onClick={this.IncreaseflourPrice}>Update Price</button>
                                    <button className="butterButton2" onClick={this.DecreaseflourPrice}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">The Price Of Milk</h5>
                                    <img src="https://res.cloudinary.com/deborahao/image/upload/v1590223082/GUEST_b733eb0f-5f2d-44c6-82d2-c7f3845e37d3_zfnopv.jpg"></img>
                                    <p className="card-text text-center">{this.state.milkPrice}</p>
                                    <button className="butterButton1" onClick={this.IncreaseMilkPrice}>Update Price</button>
                                    <button className="butterButton2" onClick={this.DecreaseMilkPrice}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                        <div className="col col-sm-4">
                            <div className="card shadow  mb-3 rounded" style={{width:300 ,}}>
                                <div className="card-body">
                                    <h5 className="card-title text-center">The Quantity of milk</h5>
                                    <img src="https://res.cloudinary.com/deborahao/image/upload/v1590223082/GUEST_b733eb0f-5f2d-44c6-82d2-c7f3845e37d3_zfnopv.jpg"></img>
                                    <p className="card-text text-center">{this.state.milkQuantity}</p>
                                    <button className="butterButton1" onClick={this.IncreaseMilkQuantity}>Update Quantity</button>
                                    <button className="butterButton2" onClick={this.DecreaseMilkQuantity}>Delete Value</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
export default Board;