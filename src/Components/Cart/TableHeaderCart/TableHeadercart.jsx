function TableHeadercart() {
    return ( 
        <div style={{marginTop:"8px",backgroundColor:"#e85d04"}}>
      <table className="table">
    
          <tr>
            {/* <th className="col-2" scope="col" style={{width:"5%"}}>#</th> */}
            <th  scope="col" style={{width:"25%"}}>Item</th>
            <th  scope="col"style={{width:"15%"}}>Item Name</th>
            <th  scope="col"style={{width:"30%"}}>Quantity</th>
            <th  scope="col"style={{width:"10%"}}>Price</th>
            <th  scope="col"style={{width:"20%"}}>Remove</th>
            
          </tr>
        
        </table>
        </div>
     );
}
export default TableHeadercart;