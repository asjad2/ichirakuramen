function TableHeader() {
    return ( 
        <div style={{width:"100%"}}>
        <h2 style={{color:"Black",marginBottom:"40px",textAlign:"center"}}>Priority Customers</h2>
      <table className="table">
        <div style={{backgroundColor:"orangered"}}>
          <tr>
            <th className="col-1" scope="col" style={{width:"5%"}}>#</th>
            <th className="col-3" scope="col" style={{width:"15%"}}>Name</th>
            <th className="col-3" scope="col"style={{width:"15%"}}>Username</th>
            <th className="col-3" scope="col"style={{width:"15%"}}>Password</th>
            <th className="col-2" scope="col"style={{width:"20%"}}>Email</th>
            <th className="col-2" scope="col"style={{width:"10%"}}>PhonenNumber</th>
            <th className="col-3" scope="col"style={{width:"10%"}}>Update</th>
            <th className="col-3" scope="col"style={{width:"10%"}}>Remove</th>
            
          </tr>
        </div>
        </table>
        </div>
     );
}
export default TableHeader;