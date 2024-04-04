<Box sx={{ display: "flex" }}>
        <CssBaseline />
  
        <Drawer variant="permanent" anchor="right" open={open} >
        
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <p
                  onClick={handleDrawerOpen}
                  style={{
                    writingMode: "vertical-lr",
                    textOrientation: "mixed",
                  }}
                >
                  Rate Your Score
                </p>
              </ListItemIcon>
              <ListItemText>
                <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h4 style={{ fontWeight: "bolder" ,marginTop:"80px"}}>Rate your Score here</h4>
        
            <Ratingpoint
          question="How effectively does the startup address a specific problem or pain point?"
          score={ques1}
          sentScore={setQues1}
        />
          </div>

          <div style={{ marginTop: "20px" }}>
           
            <Ratingpoint
          question="How cohensive and complementary is the startup team's skill set?"
          score={ques2}
          sentScore={setQues2}
        />
          </div>

          <div style={{ marginTop: "20px" }}>
          <Ratingpoint
          question="How clear is the startup's plan for utilizing funds effectively to achieve its goals?"
          score={ques3}
          sentScore={setQues3}
        />
          </div>

          <div style={{ marginTop: "20px" }}>
          <Ratingpoint
          question="How well does the startup understand its target market and customer needs?"
          score={ques4}
          sentScore={setQues4}
        />
          </div>

          <div style={{ marginTop: "20px" }}>
          <Ratingpoint
          question="How unique and differentiated is the startup's solution compared to existing alternatives?"
          score={ques5}
          sentScore={setQues5}
        />
          </div>
<div style={{marginTop:"20px"}}>
<textarea
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    rows={4}
    placeholder="Add a Comment"
    style={{ width: '100%' }}
/>

</div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button  variant="contained" type="submit">
              Submit
            </Button>
            <Button variant="outlined">Edit</Button>
          </div>
        </form>

              </ListItemText>
            </ListItem>
            <ListItem button>
             <ListItemIcon>{/* <MailIcon /> */}</ListItemIcon>
        
            </ListItem>
          </List>
        </Drawer>
      </Box>
