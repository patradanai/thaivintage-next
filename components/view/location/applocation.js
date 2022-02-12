import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '../../tyrography'
import Google from '../../googleMap'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: '#e4c290'
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5)
  },
  title: {
    marginBottom: theme.spacing(1)
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing(8)
  },
  mapSrc: {
    width: '100%',
    height: 400,
    position: 'relative',
    display: 'block',
    justifyContent: 'center',
    paddingBotton: theme.spacing(5),
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3)
  }
})

const AppLocation = (props) => {
  const { classes } = props
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {/* <Typography variant='h5'>
          <span id='location'></span>
          <a
            style={{
              textDecoration: 'none',
              color: 'black',
              fontSize: 25
            }}
            href='https://www.google.com/maps/place/Thai+Vintage+Whitchurch/@52.9681605,-2.6864069,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0xbf366d0ce8f023dd!8m2!3d52.9681597!4d-2.6858597'
          >
            >>> Click for Get Direction `Thai Vintage Whitchurch, Old Mill, Park Ave,`
          </a>
        </Typography> */}
        <div className={classes.mapSrc} id='location'>
          {/* <Google
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6ZlEgybYqVlX6oFQZ5FulqUlMMnyMqjA"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />*/}
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2402.8998235197664!2d-2.688171184175767!3d52.96821647990148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a92547cee01c7%3A0x29afcbc53b320152!2sThai%20Vintage%20Whitchurch!5e0!3m2!1sth!2sth!4v1643159280846!5m2!1sth!2sth'
            width='100%'
            height='100%'
            allowfullscreen
            loading='lazy'
            style={{ border: 0 }}
          ></iframe>
        </div>
      </Container>
    </section>
  )
}

AppLocation.prototype = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppLocation)
