import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';

function List(props) {
    const columns = [
        { field: 'id', headerName:'id', width: 90 },
        {
          field: 'restaurant',
          headerName: 'restaurant',
          width: 200,
          editable: true,
        },
        {
          field: 'location',
          headerName: 'location',
          width: 300,
          editable: true,
        },
        {
            field: 'description',
            headerName: 'description',
            width: 540,
            editable: true,
          },
  

      ];
      
      const rows = [
        { id: 1, restaurant: '부처스컷', location: '서울특별시 중구 세종대로 136', description: '기념일에 한번 가보고싶은 엄청 비싼 스테이크 파는 식당!' },
        { id: 2, restaurant: '청키면가', location: '서울 영등포구 여의대방로69길 28 유성빌딩', description: '혜연이가 좋아하는 홍콩 음식 파는 가게! 탄탄멘부터 뿌수고 올 예정' },
        { id: 3, restaurant: '고든램지 버거', location: '서울 송파구 올림픽로 300', description: '맛집 유튜버 쯔양도 뿌수고 왔다는데... 수제버거에 환장하는 밍밍이 데리고 가야됨' },
        { id: 4, restaurant: '노량진 수산시장', location: '서울 동작구 노들로 674 노량진수산물도매시장', description: '대게가 너무 먹고싶습니다... 월급타면 꼭 먹으러 가야지' },
        { id: 5, restaurant: '상남스시', location: '서울 동작구 여의대방로24길 64', description: '한국에서 가장 가성비 좋은 스시 오마카세가 보라매에..! 여긴 꼭 가야해.' },
        { id: 6, restaurant: '텍사스로드하우스', location: '경기도 김포시 고촌읍 아라육로152번길 100 EAST 1층', description: '예전부터 꼭 한번 가보고싶었던 스테이크 맛집!' },
        { id: 7, restaurant: '독도참치 신대방점', location: '서울특별시 동작구 대방동 407-29', description: '내돈내산 참치를 먹을 수 있을 때까지..부지런히 돈을 벌어야겠다.' },
        { id: 8, restaurant: '그랜드하얏트 애프터눈티', location: '서울특별시 용산구 소월로 322', description: '애프터눈티 먹으면서 공주님 놀이 하고싶다. 가격은 1인 10만원 ㄷㄷ' },
        { id: 9, restaurant: '이한스시', location: '서울 영등포구 선유로22길 3', description: '점심특선 가성비 매우 좋아서 웨이팅 있는 곳! 꼭 먹어야돼...' },
      ];
    return (
        <Container maxWidth="lg">
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
                    must-go Restaurant
                </div>
        <div style={{ height: 400, width: '100%'}}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          
        />
      </div>
    </Container>
    );
}

export default List;