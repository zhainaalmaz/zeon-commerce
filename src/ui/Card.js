import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { getBestSellerRequest } from '../api/service';

export default function ActionAreaCard() {
  const [bestSeller, setBestSeller] = React.useState([]);

  React.useEffect(() => {
    const getBestSeller = async () => {
      try {
        const bestSellerResponse = await getBestSellerRequest();
        setBestSeller(bestSellerResponse.data);
        console.log(bestSellerResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBestSeller();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {bestSeller.collection}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
