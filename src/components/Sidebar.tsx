import GlobalStyles from '@mui/joy/GlobalStyles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import ModelTrainingIcon from '@mui/icons-material/ModelTraining';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useNavigate, useLocation } from 'react-router-dom';
import { closeSidebar } from '../utils';


export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => {
      return location.pathname === path;
  };

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
        // backgroundColor: "rgba(255, 155, 87, 0.02)",
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.22rem', sm: '1.3rem' },
            color: "#4c72f6"
          }}
        >
          CORTEX AI
        </Typography>
      </Box>
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton
              selected={isActive("/")}
              onClick={()=> navigate("/")}
              sx={{
                py: 1.5,
                mb: 0.5,
              }}
            >
              <HomeRoundedIcon
                sx={{
                  color: isActive("/") ? '#4c72f6' : '#000',
                  fontSize: { xs: '1.5rem', sm: '1.7rem' },
                }}
              />
              <ListItemContent>
                <Typography
                  level="title-sm"
                  sx={{ color: isActive("/") ? '#4c72f6' : '#000', fontWeight: 600 }}
                >
                  Home
                </Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              selected={isActive("/predict")}
              onClick={()=> navigate("/predict")}
              sx={{
                py: 1.5,
                mb: 0.5,
              }}
            >
              <OnlinePredictionIcon
                sx={{
                  color: isActive("/predict") ? '#4c72f6' : '#000',
                  fontSize: { xs: '1.5rem', sm: '1.7rem' },
                }}
              />
              <ListItemContent>
                <Typography
                  level="title-sm"
                  sx={{ color: isActive("/predict") ? '#4c72f6' : '#000', fontWeight: 600 }}
                >
                  Predict
                </Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              selected={isActive("/retrain")}
              onClick={()=> navigate("/retrain")}
              sx={{
                py: 1.5,
                mb: 0.5,
              }}
            >
              <ModelTrainingIcon
                sx={{
                  color: isActive("/retrain") ? '#4c72f6' : '#000',
                  fontSize: { xs: '1.5rem', sm: '1.7rem' },
                }}
              />
              <ListItemContent>
                <Typography
                  level="title-sm"
                  sx={{ color: isActive("/retrain") ? '#4c72f6' : '#000', fontWeight: 600 }}
                >
                  Retrain Model
                </Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              selected={isActive("/visualizations")}
              onClick={() => navigate("/visualizations")}
              sx={{
                py: 1.5,
                mb: 0.5,
              }}
            >
              <LeaderboardIcon
                sx={{
                  color: isActive("/visualizations") ? '#4c72f6' : '#000',
                  fontSize: { xs: '1.5rem', sm: '1.7rem' },
                }}
              />
              <ListItemContent>
                <Typography
                  level="title-sm"
                  sx={{ color: isActive("/visualizations") ? '#4c72f6' : '#000', fontWeight: 600 }}
                >
                  Visualizations
                </Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

        </List>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <Avatar
          variant="outlined"
          size="sm"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
        />
        <Box sx={{ minWidth: 0, flex: 1 }}>
          <Typography level="title-sm">Ronald A.</Typography>
          <Typography level="body-xs">r.abim@alustudent.com</Typography>
        </Box>
        <IconButton size="sm" variant="plain" color="neutral">
          <LogoutRoundedIcon />
        </IconButton>
      </Box>
    </Sheet>
  );
}
