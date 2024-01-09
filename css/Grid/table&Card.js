<div>
      <div className="sidebar">
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} className='side-content'>
            <div className="filters">
              <h2>Filters</h2>
              <Divider />
              <div className="cyclecat">
                <div className="sideicn" style={{ display: "flex" }}>
                  <MdPedalBike className="mdicon" />
                  <h3>CYCLE BY CATEGORIES</h3>
                </div>
                <ul>
                  <li>Men Bikes</li>
                  <li>Women Bikes</li>
                  <li>Boys Bikes</li>
                  <li>Girls Bikes</li>
                </ul>
              </div>
              <Divider />
              <div className="cyclecat">
                <div className="sideicn" style={{ display: "flex" }}>
                  <BsGearWide className="mdicon" />
                  <h3>GEARS</h3>
                </div>

                <ul>
                  <li>Geared</li>
                  <li>Single Speed</li>
                </ul>
              </div>
              <Divider />
              <div className="cyclecat">
                <div className="sideicn" style={{ display: "flex" }}>
                  <CurrencyRupeeIcon className="mdicon" />
                  <h3>CYCLE BY PRICE</h3>
                </div>

                <ul>
                  <li>₹5000 - ₹10,000</li>
                  <li>₹10,000 - ₹15,000</li>
                  <li>₹15,000 - ₹20,000</li>
                  <li>₹20,000 - ₹25,000</li>
                  <li>₹25,000+</li>
                </ul>
              </div>
              <Divider />
              <div className="cyclecat">
                <div className="sideicn" style={{ display: "flex" }}>
                  <GiCartwheel className="mdicon" />
                  <h3>WHEEL SIZE</h3>
                </div>
                <div className="inch-btn">
                  <Button variant="outlined" disabled size="small">
                    14 Inches
                  </Button>
                  <Button variant="outlined" size="small" disabled>
                    16 Inches
                  </Button>
                  <Button variant="outlined" size="small" disabled>
                    20 Inches
                  </Button>
                  <Button variant="outlined" size="small">
                    24 Inches
                  </Button>
                  <Button variant="outlined" size="small">
                    26 Inches
                  </Button>
                  <Button variant="outlined" size="small">
                    27.5 Inches
                  </Button>
                  <Button variant="outlined" size="small">
                    29 Inches
                  </Button>
                  <Button variant="outlined" size="small">
                    700c
                  </Button>
                </div>
              </div>
              <Divider />
              <div className="cyclecat">
                <div className="sideicn" style={{ display: "flex" }}>
                  <FiFramer className="mdicon" />
                  <h3>FRAME</h3>
                </div>

                <ul>
                  <li>Steel</li>
                  <li>Alloy</li>
                  <li>Carbon</li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid container item xs={12} md={10}  className="card-conts" style={{paddingTop:'1px'}}>
            <Itemlist />

            <Change/>
            {/* <Allcard/> */}
            <Content />
          </Grid>
        </Grid>
      </div>
    </div>
