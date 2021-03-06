import React, { Component } from 'react';

export const BoardContext = React.createContext()

class BoardContextProvider extends Component {
    constructor(){
        super()
        this.state = {
            brightTheme:true,
            lightMode: {fontColor:"#5c5c5c", backgroundMode: "#dbdbdb", buttonMode:"#a3a3a3"},
            darkMode: { fontColor: "#dbdbdb", backgroundMode: "5c5c5c", buttonMode: "#5c5858"}
        }
    }
    render() { 
        return ( 
            <div>
                <BoardContext.Provider value={{...this.state}}>
                    {this.props.children}
                </BoardContext.Provider>
            </div>
         );
    }
}
export default BoardContextProvider;