import React from 'react';
import { Container, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Card } from '@mui/material';
import { CardActions } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import anne from "../assets/images/profile_anne.jpeg"
import joshua from "../assets/images/profile_joshua.png"
import blog1 from "../assets/images/blog1.jpeg"
import blog2 from "../assets/images/blog2.jpeg"
import blog3 from "../assets/images/blog4.jpeg"
import blog4 from "../assets/images/blog3.jpeg"
import blog5 from "../assets/images/blog5.jpeg"
import blog6 from "../assets/images/blog6.jpeg"

function Blog(props) {
    return (
        <div>
            <Container maxWidth="lg" className="blogContainer">
                <div className="blogTitle" style={{ 
                    fontWeight: 800,
                    fontSize: 30,
                    paddingBottom: 20,
                    marginTop: 50,
                    fontFamily: 'Namun Myeongjo',
                    color: 'rgba(0,0,0,0.6)',
                    textDecoration: 'underline'
                 }}>
                    <IconButton aria-label="add to favorites">
                    <FavoriteTwoToneIcon />
                    </IconButton>
                    Moments
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%' }}>
                            <CardHeader
                                avatar={
                                <Avatar src={anne} alt="anne">
                                    
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title="문래동 점심시간 데이트"
                                subheader="March 10, 2022"
                            />
                            <CardMedia
                                component="img"
                                height="300"
                                image={blog1}
                                alt="photo"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                밍밍님이 이직 준비할 때 항상 점심시간마다 우리 회사가 있는 문래동으로 찾아와주었지! 그때 회사 다니면서도 못 가본 문래 맛집을 많이 갔었는데, 가장 기억에 남는 건 역시 맛있는 케이크가 있는 카페 기글이야. 또 가고 싶다!
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%' }}>
                            <CardHeader
                                avatar={
                                <Avatar src={joshua}>
                                    
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title="처음으로 훠궈에 눈뜬 날"
                                subheader="Feburary 27, 2022"
                            />
                            <CardMedia
                                component="img"
                                height="300"
                                image={blog2}
                                alt="photo"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                만약에 훠궈가 없었더라면 무슨 낙으로 데이트를 할까 ㅎㅎ 낯선 음식은 잘 도전하지 않는 밍밍이지만 이날은 처음으로 훠궈라는 걸 먹어봤고! 첫 입에 사랑에 빠져버렸지 ㅎㅎ 전국 훠궈 맛집을 모두 정복하는 그날을 위해! <br />
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                    </Card>
                </Grid>                    
                <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%' }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={joshua}>
                                    
                                    </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title="경복궁 야간개장 데이트"
                                subheader="April 10, 2022"
                            />
                            <CardMedia
                                component="img"
                                height="300"
                                image={blog3}
                                alt="photo"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                밤의 경복궁을 볼 기회가 없을 줄 알았는데, 운좋게 광클에 클릭해서 다녀왔지 뭐야! 낮과는 또다른 매력이 있었던 경복궁.. 실상은 사진 찍기 위한 전쟁터였지만 예쁜 벚꽃과 아름다운 도시의 야경을 구경할 수 있어서 좋았지.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                    </Card>
                </Grid>                    
                <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%' }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={anne}>
                                    
                                    </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title="타임스퀘어 이자와"
                                subheader="January 14, 2022"
                            />
                            <CardMedia
                                component="img"
                                height="300"
                                image={blog4}
                                alt="photo"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                타임스퀘어는 우리가 정말 자주 가는 데이트 장소. 집이랑 가까운데다가 놀거리, 먹을거리가 가득해서 언제 가도 즐거운 곳이지! 이날도 여느 때와 다름없이 데이트를 즐기던 중이었는데, 어쩌다 보니 인생 맛집을 발견하게 되어벼렀지!! 규카츠 진짜 맛있었다 그치?
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                    </Card>
                </Grid>                    
                <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%' }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={anne}>
                                    
                                    </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title="주일마다 함께 드리는 예배"
                                subheader="April 01, 2022"
                            />
                            <CardMedia
                                component="img"
                                height="300"
                                image={blog5}
                                alt="photo"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                민재가 주일마다 예배 드리러 가는 걸 보고 한번쯤 꼭 가보고 싶다고 생각했는데, 이렇게 빨리 교회에 나가게 될 줄은 몰랐지 뭐야. 예전에는 일 주일에 한번씩 영어 회화 스터디에서 만났는데, 지금은 교회에서 만나는 우리 커플 ㅎㅎ 기쁜 마음으로 함께 예배드리니 행복해!
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                    </Card>
                </Grid>                    
                <Grid item xs={12} sm={6} md={4}>
                        <Card variant="outlined" sx={{ maxWidth: '100%', maxHeight: '100%' }}>
                            <CardHeader
                                avatar={
                                    <Avatar src={joshua}>
                                    
                                    </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title="타임스퀘어 주렁주렁 데이트"
                                subheader="October 29, 2021"
                            />
                            <CardMedia
                                component="img"
                                height="300"
                                image={blog6}
                                alt="photo"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                처음 동물원 데이트를 하게 된다면 당연히 과천 서울대공원으로 갈 줄 알았는데, 그게 집 앞이 될 줄은 꿈에도 상상 못했었지. 집 30분 거리에 이렇게 아기자기하고 예쁜 실내 동물원이 있을지 누가 알았겠어! 다음에 꼭 다시 가보자. 예쁜 동물들 보러!
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </div>
    );
}

export default Blog;