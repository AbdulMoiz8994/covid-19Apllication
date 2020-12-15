import React from 'react'

//import mterail-UI compnents
import { Card, Typography, CardContent, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import style from './Card.module.css'
import CNames from 'classnames'

export function Cards({ data: { confirmed, deaths, recovered, lastUpdate } }) {
    if (!confirmed) {
        return "Loading..."
    }
    return (
        <div className={style.container}>
            <Grid container spacing={2}  justify="center">
                <Grid item component={Card} xs={12} md={3} className={CNames(style.cards, style.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varient="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total number of active cases by Covid19</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={CNames(style.cards, style.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varient="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total number of Recovered cases by Covid19</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={CNames(style.cards, style.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varient="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Total number of Deaths cases by Covid19</Typography>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}