import React from 'react';
import {Grid} from '@material-ui/core';
import {Card, CardContent, CardHeader, CardMedia, CardActions} from '@material-ui/core';
import { RemoteData, Rocket } from '../rockets/redux/model';

interface IRocketGrid {
    rocketList: RemoteData<Rocket[]>;
    
}

const RocketGrid: React.FC<IRocketGrid> = ({rocketList}: IRocketGrid) => {

    return (
        <div>Rockets rockets rockets</div>
    );
};

export default RocketGrid;