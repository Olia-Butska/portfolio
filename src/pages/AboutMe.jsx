import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
 } from "@mui/material";
 
 const projects = {
    html: [
       {
          title: "Прототип додатка банку",
          url: "https://www.figma.com/proto/Zuw83I8XHvXGpAD3kuNN3T/Playground-UI-UX?node-id=133-44&t=wJnXRKuAhBgaPs4n-1",
       },
       {
          title: "Дизайн флористичного магазину",
          url: "https://www.figma.com/design/Zuw83I8XHvXGpAD3kuNN3T/Playground-UI-UX?node-id=142-65&t=QdCfGw3Oy07cAafn-1",
       },
    ],
    Figma: [
       {
          title: "Дизайн елементів для відображення статистики ",
          url: "https://www.figma.com/design/Zuw83I8XHvXGpAD3kuNN3T/Playground-UI-UX?node-id=49-37",
       },
       {
          title: "Дизайн вікна авторизації",
          url: "https://www.figma.com/design/Zuw83I8XHvXGpAD3kuNN3T/Playground-UI-UX?node-id=93-47&t=QdCfGw3Oy07cAafn-1",
       },
    ],
    figma: [
       {
          title: "Прототип додатку для кав'ярні",
          url: "https://www.figma.com/design/QJykyhddpsugdey5a4yQrR/Design-task?node-id=0-1&t=QdCfGw3Oy07cAafn-1",
       },
       {
          title: "Лендинг для флористичного магазину",
          url: "https://www.figma.com/design/Zuw83I8XHvXGpAD3kuNN3T/Playground-UI-UX?node-id=22-37&t=QdCfGw3Oy07cAafn-1",
       },
    ],
 };
 
 const AboutMe = () => {
    return (
       <div>
          <Box sx={{ px: 4, py: 6 }}>
             <Typography variant="h4" gutterBottom>
                Про мене
             </Typography>
             <Typography variant="body1" paragraph>
             Добрий день! Мене звати Оля, і я — UX/UI дизайнер. 
             Мої ключові якості — відповідальність, гнучкість у прийнятті рішень та націленість на результат. 
             Я прагну постійно вчитися новому, люблю знаходити рішення для складних завдань і створювати інтерфейси, які  не лише гарно виглядають, але й є максимально зрозумілими для користувача.
             </Typography>
             
             <Typography variant="body1" paragraph>
                 Студентка 2 курсу спеціальності "Комп'ютерні науки". Постійно вивчаю нові технології та створюю власні проекти у Figma.
             </Typography>
 
             <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
                Мої проєкти
             </Typography>
 
             {Object.entries(projects).map(([category, repos]) => (
                <Box key={category} sx={{ mt: 4 }}>
                   <Typography variant="h6" gutterBottom>
                      {category === "Figma"
                         ? "Figma"
                         : category === "Figma"
                         ? "Figma"
                         : "Figma"}
                   </Typography>
 
                   <Grid container spacing={2} justifyContent="center">
                      {repos.map((repo, index) => (
                         <Grid item xs={12} md={6} key={index}>
                            <Card
                               sx={{
                                  width: 300,
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-between",
                                  minHeight: 200,
                                  background:
                                     "linear-gradient(135deg,rgb(49, 249, 9),rgb(138, 241, 109))", 
                                  color: "white",
                                  borderRadius: 3,
                                  boxShadow:
                                     "0 4px 20px rgba(216, 240, 244, 0.3)",
                                  transition: "transform 0.3s ease",
                                  "&:hover": {
                                     transform: "scale(1.03)",
                                     boxShadow:
                                        "0 6px 25px rgba(188, 211, 230, 0.5)",
                                  },
                               }}
                            >
                               <CardContent sx={{ flexGrow: 1 }}>
                                  <Typography variant="h6">
                                     {repo.title}
                                  </Typography>
                               </CardContent>
                               <CardActions sx={{ justifyContent: "center" }}>
                                  <Button
                                     size="small"
                                     color="#fff"
                                     href={repo.url}
                                     target="_blank"
                                     rel="noopener"
                                  >
                                     Figma
                                  </Button>
                               </CardActions>
                            </Card>
                         </Grid>
                      ))}
                   </Grid>
                </Box>
             ))}
          </Box>
       </div>
    );
 };
 
 export default AboutMe;