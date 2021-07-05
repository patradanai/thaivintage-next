import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '../../tyrography'

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden'
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(0, 5),
    marginLeft: theme.spacing(2)
  },
  images: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap'
  },
  imageSrc: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(2),
    '&:hover': {
      opacity: 0.5
    }
  },
  Text: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    lineHeight: 3
  }
})

const Contact = (props) => {
  const { classes } = props

  const images = [
    {
      url: '/images/facebook.png',
      title: 'facebook',
      link: 'https://www.facebook.com/Thai-Vintage-Whitchurch-Restaurant-100411281542289'
    },
    { url: '/images/instagram.png', title: 'instagram', link: '' },
    { url: '/images/twitter.png', title: 'twitter', link: '' }
  ]
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Typography variant='h4' align='center' component='h2'>
                OPENING HOURS
              </Typography>
              <Typography variant='h5' align='center' className={classes.Text}>
                <pre>
                  {/* Open 6 days <br /> */}
                  Lunch: Wed - Sunday <br />
                  12.00 pm - 3.00 pm <br />
                  Dinner: Wed - Sunday <br />
                  5.30 pm - 10.00 pm
                </pre>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Typography variant='h4' align='center' component='h2'>
                THAI VINTAGE WHITCHURCH
              </Typography>
              <Typography variant='h5' align='center' className={classes.Text}>
                <pre>
                  Old Mill, <br />
                  Park Avenue, <br />
                  Whitchurch, <br />
                  SY13 1SH
                </pre>
              </Typography>
              <div className={classes.images}>
                {images.map((data, index) => (
                  <a href={data.link} key={index}>
                    <div
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${data.url})`,
                        backgroundSize: 48
                      }}
                      key={data.title}
                    ></div>
                  </a>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <Typography variant='h4' align='center'>
                CONTACT US
              </Typography>
              <Typography variant='h5' className={classes.Text}>
                <pre>
                  +44 1948 661800
                  <br />
                  OR
                  <br />
                  Email :
                  <br />
                  <a href='mailto:info@thaivintagewhitchurch.co.uk'>
                    info
                    <br />
                    @thaivintagewhitchurch.co.uk
                  </a>
                </pre>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

Contact.prototype = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Contact)
