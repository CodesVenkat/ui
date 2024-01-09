import { Grid } from "@mui/material";
import React from "react";
import Shopcard1 from "./Shopcard1";
import Select1 from "./select1";
import Select2 from "./Select2";
import Paginations from "../Paginations";
import { arrival } from "../imgdata/data";
import { Card } from "react-bootstrap";
import Cardmap from "./Cardmap";

const Shoptwo = () => {
  return (
    <div>
    <div className="sidebar">
      <Grid container direction="row" alignItems='flex-start' justifyContent="center" >
        <Grid item xs={12} md={3} className='side-content'>
          <Shopcard1/>
         
        </Grid>
        <Grid container item xs={12} md={8} alignItems='center' justifyContent="flex-start"   className="card-conts" >
        <Select1/>
          <Select2/>
          <Paginations/>
       <Cardmap/>
        </Grid>
      </Grid>
    </div>
  </div>
  );
};

export default Shoptwo;
