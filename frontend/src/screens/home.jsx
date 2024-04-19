//import Categories from "./Categories";
import Banner from '../banner/banner.jsx';
import { Grid,Button,styled } from "@mui/material";
import Header from '../component/Header.jsx';
import { useNavigate } from 'react-router-dom';

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB6418;
    color;#fff;
    height: 48px;
    border-radius: 2px;
    `;

    

const Home = () =>{
    const navigate = useNavigate();
    const loginUser = ()=>{
        navigate('/login');
    }
    return (
        <>
    < Header />
        <Banner />
        <Grid container>
            <Grid item lg={2} sm={2} xs={12}>
        {/* <Categories />
         </Grid>
        <Grid container item xs={12} sm={10} lg={10}>
    Posts  */}
        </Grid> 
        </Grid> 
    <LoginButton variant="contained" onClick={()=> loginUser()}>Get started</LoginButton>
        </>
      
    )
}

export default Home;