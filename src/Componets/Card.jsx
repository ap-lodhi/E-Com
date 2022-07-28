import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarRateIcon from '@mui/icons-material/StarRate';
import Box from '@mui/material/Box';
import StarRate from '@mui/icons-material/StarRate';



export const MediaCard =({title , imageBase ,hex ,color,rating,price}) => {
  return (
    <Card sx={{ Width: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${imageBase}/${hex.slice(1)}`}

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
        <Button size="small">view</Button>
      </CardActions>
    </Card>
  );
}