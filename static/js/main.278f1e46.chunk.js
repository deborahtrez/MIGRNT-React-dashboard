(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(6),s=a.n(n),l=a(1),i=a(2),o=a(4),u=a(3),m=(a(13),a(7)),d=c.a.createContext(),b=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={brightTheme:!0,lightMode:{fontColor:"#5c5c5c",backgroundMode:"#dbdbdb",buttonMode:"#a3a3a3"},darkMode:{fontColor:"#dbdbdb",backgroundMode:"5c5c5c",buttonMode:"#5c5858"}},e}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.Provider,{value:Object(m.a)({},this.state)},this.props.children))}}]),a}(r.Component),h=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).IncreaseButterQuantity=function(){e.setState({butterQuatity:e.state.butterQuatity+1})},e.DecreaseButterQuantity=function(){e.setState({butterQuatity:e.state.butterQuatity-1})},e.IncreaseButterPrice=function(){e.setState({butterPrice:e.state.butterPrice+1})},e.DecreaseButterPrice=function(){e.setState({butterPrice:e.state.butterPrice-1})},e.IncreaseSugarCrates=function(){e.setState({sugarCrates:e.state.sugarCrates+1})},e.DecreaseSugarCrates=function(){e.setState({sugarCrates:e.state.sugarCrates-1})},e.IncreaseflourPrice=function(){e.setState({flourPrice:e.state.flourPrice+1})},e.DecreaseflourPrice=function(){e.setState({flourPrice:e.state.flourPrice-1})},e.IncreaseMilkPrice=function(){e.setState({milkPrice:e.state.milkPrice+1})},e.DecreaseMilkPrice=function(){e.setState({milkPrice:e.state.milkPrice-1})},e.IncreaseMilkQuantity=function(){e.setState({milkQuantity:e.state.milkQuantity+1})},e.DecreaseMilkQuantity=function(){e.setState({milkQuantity:e.state.milkQuantity-1})},e.state={butterQuatity:67,butterPrice:455,sugarCrates:44,sugarQuantity:400,flourPrice:50,milkPrice:700,milkQuantity:56,isLoggedIn:!0},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.context,t=e.brightTheme,a=e.lightMode,r=e.darkMode,n=t?a:r;return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col-sm-4",style:{backgroundColor:n.backgroundMode}},c.a.createElement("div",{className:"card shadow  mb-3 rounded",style:{width:300}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title text-center"},"The Quantity Of Butter"),c.a.createElement("img",{src:"https://res.cloudinary.com/deborahao/image/upload/v1590220460/close-up-of-block-of-butter-being-sliced-may-raise-cholesterol_vdvl9u.jpg"}),c.a.createElement("p",{className:"card-text text-center"},this.state.butterQuatity),c.a.createElement("button",{className:"butterButton1",onClick:this.IncreaseButterQuantity},"Update Quantity"),c.a.createElement("button",{className:"butterButton2",onClick:this.DecreaseButterQuantity},"Delete Value")))),c.a.createElement("div",{className:"col col-sm-4"},c.a.createElement("div",{className:"card shadow  mb-3 rounded",style:{width:300}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title text-center"},"The Price Of Butter"),c.a.createElement("img",{src:"https://res.cloudinary.com/deborahao/image/upload/v1590220460/close-up-of-block-of-butter-being-sliced-may-raise-cholesterol_vdvl9u.jpg"}),c.a.createElement("p",{className:"card-text text-center"},this.state.butterPrice),c.a.createElement("button",{className:"butterButton1",onClick:this.IncreaseButterPrice},"Update Price"),c.a.createElement("button",{className:"butterButton2",onClick:this.DecreaseButterPrice},"Delete Value")))),c.a.createElement("div",{className:"col col-sm-4"},c.a.createElement("div",{className:"card shadow  mb-3 rounded",style:{width:300}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title text-center"},"The Quantity Of Crates"),c.a.createElement("img",{src:"https://res.cloudinary.com/deborahao/image/upload/v1590221336/HD_313_e7du9v.jpg"}),c.a.createElement("p",{className:"card-text text-center"},this.state.sugarCrates),c.a.createElement("button",{className:"butterButton1",onClick:this.IncreaseSugarCrates},"Update Crates"),c.a.createElement("button",{className:"butterButton2",onClick:this.DecreaseSugarCrates},"Delete Value")))),c.a.createElement("div",{className:"col col-sm-4"},c.a.createElement("div",{className:"card shadow  mb-3 rounded",style:{width:300}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title text-center"},"The Price Of Flour"),c.a.createElement("img",{src:"https://res.cloudinary.com/deborahao/image/upload/c_fill,e_sharpen:1840,h_400,r_40,w_534/v1590221358/SQ-How-to-Make-Homemade-Oat-Flour-Gluten-Free-Vegan-1.5_j4apjg.jpg"}),c.a.createElement("p",{className:"card-text text-center"},this.state.flourPrice),c.a.createElement("button",{className:"butterButton1",onClick:this.IncreaseflourPrice},"Update Price"),c.a.createElement("button",{className:"butterButton2",onClick:this.DecreaseflourPrice},"Delete Value")))),c.a.createElement("div",{className:"col col-sm-4"},c.a.createElement("div",{className:"card shadow  mb-3 rounded",style:{width:300}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title text-center"},"The Price Of Milk"),c.a.createElement("img",{src:"https://res.cloudinary.com/deborahao/image/upload/v1590223082/GUEST_b733eb0f-5f2d-44c6-82d2-c7f3845e37d3_zfnopv.jpg"}),c.a.createElement("p",{className:"card-text text-center"},this.state.milkPrice),c.a.createElement("button",{className:"butterButton1",onClick:this.IncreaseMilkPrice},"Update Price"),c.a.createElement("button",{className:"butterButton2",onClick:this.DecreaseMilkPrice},"Delete Value")))),c.a.createElement("div",{className:"col col-sm-4"},c.a.createElement("div",{className:"card shadow  mb-3 rounded",style:{width:300}},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title text-center"},"The Quantity of milk"),c.a.createElement("img",{src:"https://res.cloudinary.com/deborahao/image/upload/v1590223082/GUEST_b733eb0f-5f2d-44c6-82d2-c7f3845e37d3_zfnopv.jpg"}),c.a.createElement("p",{className:"card-text text-center"},this.state.milkQuantity),c.a.createElement("button",{className:"butterButton1",onClick:this.IncreaseMilkQuantity},"Update Quantity"),c.a.createElement("button",{className:"butterButton2",onClick:this.DecreaseMilkQuantity},"Delete Value")))))))}}]),a}(r.Component);h.contextType=d;var E=h,f=(a(14),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(b,null,c.a.createElement(E,null)))}}]),a}(r.Component));s.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.278f1e46.chunk.js.map