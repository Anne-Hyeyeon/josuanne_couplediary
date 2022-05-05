import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';

function Quotes(props) {
    return (
        <Container maxWidth="lg">
            <Box 
            sx={{
                p:10,
                mt:10,
                fontFamily:'Nanum Myeongjo',
                textAlign: 'center',
                fontSize: 20

            }}>     
        사랑은 오래 참고 사랑은 온유하며 <br />
        투기하는 자가 되지 아니하며 사랑은 자랑하지 아니하며<br /> 교만하지 아니하며 무례히 행치 아니하며 <br />
        자기의 유익을 구치 아니하며 성내지 아니하며 <br />악한 것을 생각지 아니하며 불의를 기뻐하지 아니하며<br /> 
        진리와 함께 기뻐하고 모든 것을 참으며 모든 것을 믿으며 <br />
        모든 것을 바라며 모든 것을 견디느니라 
        </Box>
        <Box
        sx={{
                fontFamily:'Nanum Myeongjo',
                textAlign: 'center',
                fontSize: 15,
                mb:5

            }}
        >
            <MenuBookTwoToneIcon fontSize="small" sx={{ mr:1 }} />
            고린도전서 13:4-7
        </Box> 
    </Container>
    );
}

export default Quotes;