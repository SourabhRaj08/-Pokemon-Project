import "./App.css"
export default function Description({
    name,image,type,
    visible,setVisible,obj}){

    const {height,weight,stat1,stat2,bs1,bs2}=obj;
    return (
        <>
         <div className="opaquescreen">
         </div>
         <div className={`expanded-overlay ${type}`}>
          <button className={`close-button ${type}`} 
          onClick={()=>setVisible(false)}>x</button>
          <div className="expanded-left">
            <img className="expanded-image" src={image} alt={name}/>
            <h3 className="expanded-name">{name}</h3>
          </div>
        <div className={`expanded-right ${type}`}>
           <table className={`expanded-table ${type}`}>
             <tbody>
               <tr>
                 <td>
                    <table>
                      <tr> 
                         <td>Weight:</td>
                         <td>{weight}</td>
                      </tr>
                      <tr> 
                         <td>Height:</td>
                         <td>{height}</td>
                      </tr>
                    </table>
                 </td>
                 <td>
                    <table>
                      <tr> 
                         <td>Stat1:</td>
                         <td>{stat1}</td>
                      </tr>
                      <tr> 
                         <td>stat2:</td>
                         <td>{stat2}</td>
                      </tr>
                    </table>
                 </td>
                 <td>
                    <table>
                      <tr> 
                         <td>Bs1:</td>
                         <td>{bs1}</td>
                      </tr>
                      <tr> 
                         <td>Bs2:</td>
                         <td>{bs2}</td>
                      </tr>
                    </table>
                 </td>
               </tr>
             </tbody>
           </table>
        </div>
         </div>
        </>
    )
}