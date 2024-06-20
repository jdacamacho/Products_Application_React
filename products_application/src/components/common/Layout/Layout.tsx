import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReactNode } from "react";

type Props = {
    header: ReactNode;
    breadCrumb?: ReactNode;
    sideBar?: ReactNode;
    content: ReactNode;
    footer: ReactNode;
}

function Layout( { header , breadCrumb , sideBar , content , footer} : Props){

    const sideBarGridSize = sideBar ? 2 : 0;
    const contentGridSize = sideBar ? 10 : 12;

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                
                <Grid item xs={12}>
                    {header}
                </Grid>

                {breadCrumb && (
                    <Grid item xs={12}>
                        {breadCrumb}
                    </Grid>
                )}  
                

                {sideBar && (
                    <Grid item xs={sideBarGridSize}>
                        {sideBar}
                    </Grid>
                )}

                <Grid item xs={contentGridSize}>
                    {content}
                </Grid>

                <Grid item xs={12}>
                    {footer}
                </Grid>

            </Grid>
        </Box>
    );
}

export default Layout;
