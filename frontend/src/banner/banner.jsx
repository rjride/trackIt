import { Box, Typography,styled} from '@mui/material';


const Image = styled(Box)`
        background:url(https://twproject.com/blog/wp-content/uploads/2022/02/the-project-management-report-840x556.png) center/65% repeat-x #000 ;
        width: 100%;
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
`;

const Heading = styled(Typography)`
        font-size: 70px;
        color: #FFFFFF;
        line-height: 1;
`;
const SubHeading = styled(Typography)`
        font-size: 20px;
        background: #FFFFFF;
        line-height: 1;
`



const Banner = ()=>{
    return (
        <Image>
            <Heading>TRACKIT</Heading>
            <SubHeading> A  Journey to Control Your Expanses</SubHeading>
        </Image>
    )
}
export default Banner;