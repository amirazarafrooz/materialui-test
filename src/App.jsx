import { 
Typography,
AppBar,
Card,
CardActions,
CardContent,
CardMedia,
CssBaseline,
Grid,
Toolbar,
Button,

Container } from '@mui/material';
import {PhotoCamera} from "@mui/icons-material";
import{ makeStyles} from '@material-ui/styles';



const useStyles = makeStyles((theme) => ({
  container: {
    padding:  "200px"
    
  }
}));

function App() {
  const classes = useStyles();
  

  return (
      <>
        <CssBaseline/>
        <AppBar position='relative'>
          <Toolbar>
            <PhotoCamera/>
            <Typography variant='h6'>
              photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Container className={classes.container} maxWidth="sm">
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo ALbum
              </Typography> 
              <Typography variant='h5' align='center' color='textSecondary' paragraph>
                this is photo album of muscle cars
              </Typography>
              <div>
                <Grid container spacing={2} justifyContent='center'>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                        see more photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='outlined' color='primary'>
                        more
                    </Button>
                  </Grid>

                </Grid>
              </div>
          </Container>
        </main>
      </>
  )
}

export default App
