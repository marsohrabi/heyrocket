import React from 'react';
import { Grid, Card, CardHeader, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => {

});

const shuttleImage = process.env.PUBLIC_URL + "/shuttle.png";

const Content: React.FC = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <Card>
                    <CardHeader title="Card 1" />
                    <CardMedia 
                        style={{ height: "200px", width: "200px" }} 
                        image={shuttleImage} 
                        title="Card 1 image" />
                    <CardContent>
                        This is the content of Card 1. This is the content of Card 1. This is the content of Card 1.
              </CardContent>

                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardHeader title="Card 2" />
                    <CardMedia 
                        style={{ height: "200px", width: "200px" }} 
                        image={shuttleImage} 
                        title="Card 2 image" />
                    <CardContent>
                        This is the content of Card 2. This is the content of Card 2. This is the content of Card 2.
              </CardContent>

                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardHeader title="Card 3" />
                    <CardMedia 
                    style={{ height: "200px", width: "200px" }} 
                    image={shuttleImage} 
                    title="Card 3 image" />
                    <CardContent>
                        This is the content of Card 3. This is the content of Card 3. This is the content of Card 3.
              </CardContent>

                </Card>
            </Grid>
        </Grid>

    );
};

export default Content;
