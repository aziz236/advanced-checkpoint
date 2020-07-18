import React from 'react'


function ProductTable(props) {
    return (
        <div>
        <table width="400px" style={{marginLeft:"450px",marginTop:"120px"}}>
            <tbody>
            <tr>
            <th style={{border:"1px solid black" }}>category</th>
            <th style={{border:"1px solid black" }}>name</th>
            <th style={{border:"1px solid black" }}>price</th>
            </tr>
          
            {
                props.Products.map(product=>
                    <tr>
                    <td key={product.category} style={{border:"1px solid black" }}>{product.category}</td>
                    <td key={product.name} style={{border:"1px solid black" }}>{product.name}</td>
                    <td key={product.price} style={{border:"1px solid black" }}>{product.price}</td>
                    </tr>
                    )
            }
     </tbody>
        </table>
        
        </div>
        
    )
}

export default ProductTable;