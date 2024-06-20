import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { ReactNode } from "react";

type Props = {
    header: ReactNode;
    breadCrumb : ReactNode;
    sideBar: ReactNode;
    content: ReactNode;
    footer: ReactNode;
}

function Layout( { header , breadCrumb , sideBar , content , footer} : Props){
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    {header}
                </Grid>
                <Grid item xs={12}>
                    {breadCrumb}
                </Grid>
                <Grid item xs={2}>
                    {sideBar}
                </Grid>
                <Grid item xs={10}>
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
