import React, {useState} from 'react';
import Description from "./Description.js"
export default function Cards({id,name,type,image,height,weight,stat1,stat2,bs1,bs2,}){
   const style=`thumb-container ${type}`
   const [modal2Visible,setModal2Visible]= useState(false);
   const handleModalOpen=()=>{
    if(!modal2Visible){
        setModal2Visible(true);
    }
   }
    return (
       <>
        <div className={style}>
          <div className="number">
            <small>#{id}</small>
          </div>
          <img src={image} alt={name}/>
          <div className="detail-wrapper">
            <h3>{name.toUpperCase()}</h3>
            <small>Type: {type}</small>
            <button className={`pokeinfo `} onClick={handleModalOpen}>know more...</button>
          </div>
        </div>

        {modal2Visible === true ? 
         <Description visible={modal2Visible} setVisible={setModal2Visible}
         name={name}
         image={image}
         type={type}
         obj={{height,weight,stat1,stat2,bs1,bs2}}
         />
         
         :<></>  }
       </>
    )
}