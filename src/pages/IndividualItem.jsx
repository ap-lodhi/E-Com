import { useParams } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarRate from '@mui/icons-material/StarRate';
import { Link } from 'react-router-dom';
import axios from "axios";


export const IndividualItem =()=>{

    const [itemDetails, setItemDetails]= React.useState({})
    const{imageBase,title, hex ,color ,price, rating} =itemDetails;
    const {id} =useParams()

    React.useEffect(()=>{
        axios({
            method:"get",
            url:`http://localhost:8000/products/${id}`
        }).then(res =>setItemDetails(res.data))
        .catch(err => console.log(err));
    },[])
    return(
        <>
        <Card sx={{ Width: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${imageBase}/${hex?.slice(1)}`}

        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {color}-{title}
        </Typography>
        <Box className='flex-between'> 
        <Typography className='price_card' gutterBottom variant="h5" component="div">
        ₹- {price}
        </Typography>
        <Typography className='rating_card' gutterBottom variant="h5" component="div">
       {rating} <StarRate/>
        </Typography>
        </Box>
       
      </CardContent>
      <CardActions>
        <Link to={`/product/${id}`}>
        <Button size="small">view</Button>
        </Link>
        <Button size="small">ADD TO CART</Button>
      </CardActions>
      <Box>
      <Button size="small" color="success" variant="contained">+</Button>
      <Button size="small" color="success" variant="contained">+</Button>
      <Button size="small" color="error" variant="contained">-</Button>
      </Box>
    </Card>
        </>
    )
}