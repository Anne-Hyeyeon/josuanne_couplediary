import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import album1 from '../assets/images/album1.jpeg'
import album2 from '../assets/images/album2.jpeg'
import album3 from '../assets/images/album3.jpeg'
import album4 from '../assets/images/album4.jpeg'
import album5 from '../assets/images/album5.jpeg'
import album6 from '../assets/images/album6.jpeg'
import album7 from '../assets/images/album7.jpeg'
import album8 from '../assets/images/album8.jpeg'
import album9 from '../assets/images/album9.jpeg'
import album10 from '../assets/images/album10.jpeg'
import album11 from '../assets/images/album11.jpeg'
import album12 from '../assets/images/album12.jpeg'


const itemData = [
    {
        img: album1,
        title: 'photo1',
        rows: 2,
        cols: 2,
      },
      {
        img: album2,
        title: 'photo2',
      },
      {
        img: album3,
        title: 'photo3',
      },
      {
        img: album4,
        title: 'photo4',
        cols: 2,
      },
      {
        img: album5,
        title: 'photo5',
        cols: 2,
      },
      {
        img: album6,
        title: 'photo6',
        rows: 2,
        cols: 2,
      },
      {
        img: album7,
        title: 'photo7',
      },
      {
        img: album8,
        title: 'photo8',
      },
      {
        img: album9,
        title: 'photo9',
        rows: 2,
        cols: 2,
      },
      {
        img: album12,
        title: 'Tomato photo10',
      },
      {
        img: album11,
        title: 'photo11',
      },
      {
        img: album10,
        title: 'photo12',
        cols: 2,
      },
  ];
  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  
  export default function Album() {
    return (
        
    <Container maxwidth="lg">
               <div className="blogTitle" style={{ 
                    fontWeight: 800,
                    fontSize: 30,
                    paddingBottom: 20,
                    marginTop: 50,
                    fontFamily: 'Namun Myeongjo',
                    color: 'rgba(0,0,0,0.6)',
                    textDecoration: 'underline'
                 }}>
                    <FavoriteTwoToneIcon sx={{ "&:hover" : { fontSize:30 } }} />
                    Photos
                </div>
      <ImageList
        sx={{ width: '100%', height: 700 }}
        variant="quilted"
        cols={4}
        rowHeight={300}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Container>
    );
  }
  


