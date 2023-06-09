import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import useStyles from './ProductStyles'

const Product = ({ product }) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image='' title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price}
                        </Typography>
                    </div>
                    <Typography variant="h2" color="textSecondary">{product.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </>
  )
}

export default Product