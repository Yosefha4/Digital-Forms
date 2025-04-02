import { Box, Typography } from "@mui/material";
import LikeImg from "../assets/like.png";

const DonePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "80vh",
        gap: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "midnightblue",
          fontSize: "1.53em",
          textAlign: "center",
          overflow: "hidden",
          fontWeight: "bold",
        }}
      >
        עד לכאן החלק שלך. עכשיו החלק שלנו.
      </Typography>
      <Box>
        <Typography
          sx={{
            color: "midnightblue",
            fontSize: "1.21em",
            textAlign: "center",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          קיבלנו את פנייתך
        </Typography>
        <Typography
          sx={{
            color: "midnightblue",
            fontSize: "1.21em",
            textAlign: "center",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          מספרה במערכת יישלח אליך בהודעת sms בדקות הקרובות
        </Typography>
        <Typography
          sx={{
            color: "midnightblue",
            fontSize: "1.21em",
            textAlign: "center",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          אנו מטפלים בפנייה ונעדכן אותך בסטטוס תוך 3 ימים (בדר"כ פחות..){" "}
        </Typography>
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "center",mb:2 }}>
        <img src={LikeImg} width={50} alt="Thumb symbol" />
        </Box>

        {/* Text section */}
        <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
            מידע נוסף על חידושים בשירות, פיתוח תשתיות ועולם המים אפשר למצוא <br />
            <a href="https://www.facebook.com/mei.avivim" target="_blank" style={{ textDecoration: "underline",color: "rgb(39, 121, 195)", }}>
              בלחיצה ממש כאן
            </a>
          </Typography>
        </Box>
      </Box>
      {/* Add pronouncement content */}
    </Box>
  );
};

export default DonePage;
