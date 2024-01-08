import { Container, Grid, Pagination } from '@mui/material'
import React from 'react'
import { arrival } from './imgdata/data'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Paginations from './Paginations'
const Fourthpage = () => {
  return (
    
      
<Container>
<div>
 <div style={{textAlign:"center" ,marginTop:"50px"}}>
  <h1>Featured Products</h1>
  <p>Who are in extremely love with eco friendly system.</p>
 </div>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  // gap={2}
  spacing={5}
  sx={{ textAlign: 'center', justifyContent: 'center' }}
>
{
  arrival && arrival.map((a,i)=>{
    return(
        <Grid item lg={2.25}  sm={6} md={4} sx={12}key={i} >
              <Card style={{ width: '10rem'}}>
      <Card.Img variant="top" src={a.img} width="110%" />
      <Card.Body>
        <Card.Title>{a.title}</Card.Title>
        <Card.Text>
           {a.price}
        </Card.Text>
      </Card.Body>
    </Card>
           
        </Grid>
    )
  })
  
}

</Grid>
<div style={{display:"flex", justifyContent:"center", padding:"50px"}}>
<Paginations/>
</div>
</div>
</Container>
   
  )
}

export default Fourthpage
