import React from 'react'
import { useState } from 'react'
import { Navbar,Nav,Container,Button,Row,Col,InputGroup,FormControl, Form,Table, Alert} from 'react-bootstrap'

function Home() {


    const [row, setRow] = useState(0)
    const [itemno, setItemno] = useState(0)
    const [remno,setremno]=useState(0)
    const [addbtn,setAddbtn]=useState(false)
    const [rmvbtn,setRmvbtn]=useState(false)
    function addRow(){
        setItemno(row)

    }
   function remRow(){
       setremno(row)
       console.log("remv",row);
       
       
   }

   function remove(event){
     event.preventDefault()
     // console.log("index",index);
     let p_cod=event.target.productcode.value
    let p_qty=event.target.productqty.value
    // const newArr=products.filter(product=>product.p_code=p_cod)
    let index=products.findIndex(data=>data.p_code==p_cod)
    alert("Items succesfully removed..check list products!")
    if(products[index].p_qty<p_qty){
      p_qty=products[index].p_qty
    }
    
    setProducts([...products,products[index].p_qty-=p_qty])

    
    // newArr[0].p_qty-=p_qty
    // const prd={p_code,p_qty}
    // console.log("newArr",newArr);
    

   }
   

    const remitems=[]
    for (let i=1;i<=remno;i++) {
        remitems.push(
          <Form onSubmit={remove}>
      
         
        <Col lg={6} style={{marginLeft:"25%"}}>
      
  <InputGroup >
      <FormControl
        placeholder="Product Code"
        aria-label="Product Code"
        name={"productcode"}
        aria-describedby="basic-addon1"
        
      />
       <FormControl
        placeholder="Quantity"
        aria-label="Quantity"
        name="productqty"
        aria-describedby="basic-addon1"
        
      />
       <Button variant="success" type='submit' style={{border:"1px solid black"}}>Update </Button>
    </InputGroup>
    
    </Col>
    </Form>
   
    )
    
      }
  

   

    const items = []
  
    for (let i=1;i<=itemno;i++) {
      items.push(
        <Form onSubmit={add}>
      <Col lg={6} style={{marginLeft:"25%"}}>
    
<InputGroup >
    <FormControl
      placeholder="Product Code"
      aria-label="Product Code"
      name="productcode"
      aria-describedby="basic-addon1"
      
    />
     <FormControl
      placeholder="Product Name"
      aria-label="Product Name"
      name="productname"
      aria-describedby="basic-addon1"
      
    />
     <FormControl
      placeholder="Quantity"
      aria-label="Quantity"
      name="productqty"
      aria-describedby="basic-addon1"
      
    />
     <Button variant="success" type='submit' style={{border:"1px solid black"}}>ADD </Button>
  </InputGroup>
  
  </Col>
  
   </Form>
   )
    }
    const [table,setTable]=useState(false)
    const [products,setProducts]=useState([])
  
    function add(event){
        event.preventDefault()
           
            let p_code=event.target.productcode.value
            let p_name=event.target.productname.value
            let p_qty=event.target.productqty.value
             const prd={p_code,p_name,p_qty}
            if(p_code!="" & p_name!="" & p_qty!=""){


           
            setProducts([...products,prd])

            console.log("Inside Looop");
          }else{
            console.log("Outisde loop");
          }
            
          for(let data of products){
              console.log("Prdata",data);
              if(p_code!="" & p_name!="" & p_qty!=""){
              if (data.p_code==p_code){
                  let newqty=Number(data.p_qty)+Number(p_qty)
                setProducts([...products,data.p_qty=newqty])
              console.log("Duplicateee");
              }
              }
            }


            console.log("Arr",products);
        console.log(p_code,p_name,p_qty);

    }
         
    return (
        <div>
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      
      <Button variant="primary" onClick={()=>{setAddbtn(!addbtn)
    setRmvbtn(false)
    setTable(false)}} >Add Products</Button>{' '}
       
      </Nav>
      <Nav className="me-auto">
      
      <Button variant="primary" onClick={()=>{setRmvbtn(!rmvbtn)
    setAddbtn(false)
    setTable(false)}}>Remove Products</Button>{' '}
       
      </Nav>
      <Nav className="me-auto">
      
      <Button variant="primary" onClick={()=>{setTable(!table)
      setRmvbtn(false)
      setAddbtn(false)
      }}>List Products</Button>{' '}
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
{ addbtn?
<Row>
    <Col lg={4} style={{marginLeft:"30%",marginTop:"50px"}}>
 
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Enter number of products"
      aria-label="Username"
      aria-describedby="basic-addon1"
      onChange={(e)=>setRow(e.target.value)}
    />
     <Button variant="success" onClick={addRow} >ADD </Button>
  </InputGroup>
  </Col>
</Row>
:null
}
{ rmvbtn?
<Row>
    <Col lg={4} style={{marginLeft:"30%",marginTop:"50px"}}>
 
    <InputGroup className="mb-3">
    <FormControl
      placeholder="No of item to remove"
      aria-label="itemremove"
      aria-describedby="basic-addon1"
      onChange={(e)=>setRow(e.target.value)}
    />
     <Button variant="success" onClick={remRow} >Show Fields</Button>
  </InputGroup>
  </Col>
  {remitems}
</Row>


:null
}

{(addbtn)?items:null}

{/* {(rmvbtn)?:null} */}

  { (table) ? <Col lg={6} style={{marginLeft:"25%",marginTop:"50px"}}>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Product Code</th>
      <th>Product Name</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>

    {

      products.map((item)=>
      item.p_code ?
      
    <tr>
      
      <td>{item.p_code}</td>
      <td>{item.p_name}</td>
      <td>{item.p_qty}</td>
    </tr>:null
      ) 
}
  </tbody>
</Table>
</Col>:null}
      
 
  


        </div>
    )
}

export default Home
