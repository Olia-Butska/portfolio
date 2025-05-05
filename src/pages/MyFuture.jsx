import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import {
   Timeline,
   TimelineItem,
   TimelineSeparator,
   TimelineConnector,
   TimelineContent,
   TimelineDot,
} from "@mui/lab";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const MyFuture = () => {
   return (
      <div>
         <Box sx={{ py: 5, px: 3, minHeight: "100vh", background: "#f0f4ff" }}>
            <Typography
               variant="h4"
               align="center"
               sx={{ fontWeight: "bold", mb: 4, color: "#1a237e" }}
            >
                Моє Майбутнє
            </Typography>

            <Card
               sx={{
                  maxWidth: 800,
                  mx: "auto",
                  mb: 5,
                  background: "#e3f2fd",
                  borderRadius: 3,
               }}
            >
               
            </Card>

            <Box sx={{ maxWidth: 900, mx: "auto", mb: 5 }}>
               <Typography variant="h6" gutterBottom>
                  📈 3 кроки до мрії:
               </Typography>
               <Timeline position="alternate">
                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineDot color="primary">
                           <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent>
                        <Typography variant="subtitle1" fontWeight="bold">
                           1. Освоїти UX/UI дизайн та створити якісне портфоліо
                        </Typography>
                        
                     </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineDot color="secondary">
                           <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                     </TimelineSeparator>
                     <TimelineContent>
                        <Typography variant="subtitle1" fontWeight="bold">
                           2. Пройти співбесіду на омріяну посаду
                        </Typography>
                        
                     </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                     <TimelineSeparator>
                        <TimelineDot color="success">
                           <RocketLaunchIcon />
                        </TimelineDot>
                     </TimelineSeparator>
                     <TimelineContent>
                        <Typography variant="subtitle1" fontWeight="bold">
                           3. Набувати нового досвіду та рухатись вгору по кар'єрних сходах, щоб стати професіоналом своєї справи
                        </Typography>
                        
                     </TimelineContent>
                  </TimelineItem>
               </Timeline>
            </Box>

            <Grid
               container
               spacing={4}
               justifyContent="center"
               alignItems="stretch"
            >
               <Grid item xs={12} md={6}>
                  <Card
                     sx={{
                        height: "100%",
                        borderRadius: 3,
                        background: "#fffde7",
                     }}
                  >
                     <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Моя мрія - стати UX/UI дизайнером, який створює не тільки гарні,
                            а й зручні та зрозумілі для користувача інтерфейси. Мені подобається знаходити нові рішення для покращення користувацького досвіду
                        </Typography>
                        
                     </CardContent>
                  </Card>
               </Grid>

               <Grid item xs={12} md={6}>
                  <Card sx={{ height: "100%", borderRadius: 3 }}>
                     <CardContent>
                        <Typography variant="h6" gutterBottom>
                          
                        </Typography>
                        <img
                           src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDExfHx1eCUyRnVpJTIwZGVzaWdufGVufDB8fHx8MTc0NjQ0NTA2NHww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
                           alt="Inspiration"
                           style={{ width: "100%", borderRadius: 12 }}
                        />
                     </CardContent>
                  </Card>
               </Grid>
            </Grid>
         </Box>
      </div>
   );
};

export default MyFuture;