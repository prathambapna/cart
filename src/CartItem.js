import React from  "react";
class CartItem extends React.Component{
    // constructor(){
    //     super();
    //     this.state={
    //         price:999,
    //         title:'Phone',
    //         qty:1,
    //         img:'',
    //     }
    //     // this.increaseQuantity=this.increaseQuantity.bind(this);
    // }
    increaseQuantity=()=> {
        //setstate comes from Component in react inbuilt

        //setstate form 1
        // this.setState({
        //     qty:this.state.qty+1
        // });

        //setstate form 2
        this.setState((prevState)=>{
            return {
                qty:prevState.qty+1
            }
        });
    }
    decreaseQuantity=()=> {
        const {qty}=this.state;
        if(qty==0) return;
        this.setState((prevState)=>{
            return {
                qty:prevState.qty-1
            }
        });
    }
    render(){
        console.log('this.props',this.props);
        // const {price,title,qty}=this.state;
        const {price,title,qty}=this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img className="itemimage" />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price}</div>
                    <div style={{color:'#777 '}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/484/484662.png"
                        />
                    </div>

                </div>
            </div>
        );
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc',
    }
}
export default CartItem;