import {  Grid } from "@mui/material";
import React from "react";
import { arrival } from "./ArrivlCrdData";

import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { FaCartPlus } from "react-icons/fa";
import "./ArrivlCrd.css";

function ArrivlCrd() {
  return (
    <div className="arrCrd-section">
      
        <h1 className="newarrival-head">New Arrivals for you</h1>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          {arrival &&
            arrival.map((a, i) => {
              return (
                <Grid item xs={12} sm={4} md={3} lg={3} key={i}>
                  <Card style={{ width: "22rem" }}>
                    <div className="main-stock">
                      <p className="stock">{a.stock}</p>
                    </div>
                    <Card.Img variant="top" src={a.imag} style={{width:'100%',maxWidth:'260px'}}/>
                    <Card.Body>
                      <div className="crd-flex">
                        <div>
                          <Card.Title className="arrcrd-title">
                            {a.title}
                          </Card.Title>
                          <Card.Text className="arrcrd-text">
                            {a.price}
                          </Card.Text>
                        </div>
                        <div>
                          <FaCartPlus style={{ fontSize: "22px" }} />
                        </div>
                      </div>
                      <Stack spacing={1}>
                        <Rating name="size-small" size="small" />
                      </Stack>
                    </Card.Body>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      
    </div>
  );
}

export default ArrivlCrd;
