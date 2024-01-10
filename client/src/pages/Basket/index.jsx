import React, { useContext } from "react";
import "./index.scss"
import { BasketContext } from "../../context/BasketContext";
import UseFetchData from "../../hooks/UseFetchData";
import { useNavigate } from "react-router-dom";

const Basket = () => {
    const { basketArr, setBasketArr } = useContext(BasketContext)
    
    let subtotal = 0;
    basketArr.map((element) => {
        subtotal += element.total;
    });

    function modifyCount(isIncrement, item) {
        const find = basketArr.find((x) => x.id === item.id);
        if (isIncrement) {
        find.count++;
        item.total = item.price * item.count;
        setBasketArr([...basketArr]);
        } else {
        if (find.count === 1) {
            return;
        }
        find.count--;
        item.total = item.price * item.count;
        setBasketArr([...basketArr]);
        }
    }

    const navigate = useNavigate()

    return (
        <div>
        <table>
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Count</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                basketArr && basketArr.map((item) => {
                    return (
                        <tr>
                            <td style={{width: "120px", height: "120px", paddingLeft: "0px"}}><img className="image" src={item.image} alt="" /></td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>
                                <div style={{display: "flex", alignItems: "center", gap: "10px", width: "120px", margin: "0 auto"}}>
                                    <button onClick={() => modifyCount(false, item)} style={{width: "30px", height: "30px", borderRadius: "6px", border: "none"}}>-</button>
                                    <p>{item.count}</p>
                                    <button onClick={() => modifyCount(true, item)} style={{width: "30px", height: "30px", borderRadius: "6px", border: "none"}}>+</button>
                                </div>
                            </td>
                            <td style={{width: "140px", padding: "10px"}}><button className="delete">Delete</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
            <tfoot>
                <span>Total: ${subtotal}</span>
            </tfoot>
        </table>
        
        </div>
    );
};

export default Basket;
