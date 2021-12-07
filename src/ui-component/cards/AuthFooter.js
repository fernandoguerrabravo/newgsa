// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
    <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle2" component={Link} href="https://www.gsasellers.com/" target="_blank" underline="hover">
        www.gsasellers.com
        </Typography>
        <Typography variant="subtitle2" component={Link} href="https://www.gsasellers.com/" target="_blank" underline="hover">
            &copy; www.gsasellers.com
        </Typography>
    </Stack>
);

export default AuthFooter;
