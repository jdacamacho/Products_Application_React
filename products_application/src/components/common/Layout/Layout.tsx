import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ReactNode } from "react";
import { styled } from '@mui/material/styles';

type Props = {
    header: ReactNode;
    breadCrumb?: ReactNode;
    sideBar?: ReactNode;
    content: ReactNode;
    footer: ReactNode;
}

function Layout( { header , breadCrumb , sideBar , content , footer} : Props){

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                
                <Grid item xs={12} sm={12} md={12}>
                    <Item>
                        {header}
                    </Item>
                </Grid>

                {breadCrumb && (
                    <Grid item xs={12} sm={12} md={12}>
                        <Item>
                            {breadCrumb}
                        </Item>
                    </Grid>
                )}  
                

                {sideBar && (
                    <Grid item xs={12} sm={2} md={2}>
                        <Item>
                            {sideBar}
                        </Item>
                    </Grid>
                )}

                <Grid item xs={12} sm={10} md={10}>
                    <Item>
                        {content}
                    </Item>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <Item>
                        {footer}
                    </Item>
                </Grid>

            </Grid>
        </Box>
    );
}

export default Layout;
