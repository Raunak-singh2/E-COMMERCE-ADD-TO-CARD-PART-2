import React from "react";
import {useEffect } from "react";
import { add } from "../Redux/CartSlice";
import {useDispatch, useSelector} from "react-redux";
import { fetchproduct } from "../Redux/ProductSlice";
import { STATUSES } from "../Redux/ProductSlice";

function Home() {

const dispatch=useDispatch();
const { data,status} = useSelector((state)=>state.product);

useEffect(()=>{
  dispatch(fetchproduct());
   },[])

const handleadd=(items)=>{
  dispatch(add(items));
}

if(status===STATUSES.LOADING){
  return <h2 style={{fontWeight:'bolder'}}>Loadin....</h2>
}




  return (
    <div>
      <h1 style={{ textAlign: "center",marginTop: 20,fontSize: 30,textDecoration: "underline"}}>Product list home</h1>
      <div style={{display:"flex",flexDirection:'column'}}>
        {
            data.map((item)=>
             <div key={item.id} style={{textAlign:'center',width:200,border:"2px solid #ccc",marginBottom:10}}>
                <img src={item.image} style={{width:130,height:140,textAlign:'center'}} alt="image" />
                <h4>{item.title}</h4>
                <p>INR:{item.price}</p>
                <button onClick={()=>handleadd(item)} style={{padding:".6rem 1.7rem",fontSize:'17px',background:"darkblue",color:"#fff"}}>Add to card</button>
             </div>

            )
        }
      </div>
    </div>
  );
}

export default Home;
