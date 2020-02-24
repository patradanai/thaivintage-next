import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Tyrograpy from "../tyrography";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    marginTop: theme.spacing(5),
    flexDirection: "column"
  },
  body: {
    display: "block",
    position: "relative",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5)
  },
  images: {}
}));

const photos = [
  {
    src: "/images/gallery/thaivintagewhitchurch-thai-cuisin-welcome.jpg",
    width: 4,
    height: 3
  },
  {
    src: "/images/gallery/thaivintagewhitchurch-thai-cuisin-small.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/images/gallery/thaivintagewhitchurch-thai-cuisin-view-lunch.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "/images/gallery/thaivintagewhitchurch-thai-cuisin-view-restaurant.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/images/gallery/thaivintagewhitchurch-thai-cuisin-view.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/images/gallery/thaivintagewhitchurch-thai-cuisin.jpg",
    width: 3,
    height: 4
  },
  {
    src: "/images/gallery/thaivintagewhitchurch-thai-cuisin-view-meeting.jpg",
    width: 6,
    height: 4
  }
];

const GalleryContainer = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const classes = useStyles();

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <Container className={classes.container}>
      <Tyrograpy variant="h4" style={{ margin: 30 }}>
        Our Restaurant
      </Tyrograpy>
      <div className={classes.body}>
        <Gallery
          photos={photos}
          alt="Thaivintagewhitchurch-thai-cu"
          onClick={openLightbox}
        />
        ;
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </Container>
  );
};

export default GalleryContainer;
