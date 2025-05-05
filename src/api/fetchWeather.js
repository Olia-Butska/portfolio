import axios from "axios";

export const fetchWeather = async (city) => {
   try {
      const response = await axios.get(
         `https://www.google.com/search?q=%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0+%D0%BA%D0%B8%D0%B5%D0%B2+%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B0&sca_esv=a53cd43173ba6200&sxsrf=AHTn8zpkfYzZUjXNpKmBJDYTW3yumpHGrg%3A1746444548604&ei=BKEYaJzSJKvHwPAP5crz4AM&ved=0ahUKEwic5MH3nIyNAxWrIxAIHWXlHDwQ4dUDCBA&uact=5&oq=%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0+%D0%BA%D0%B8%D0%B5%D0%B2+%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B0&gs_lp=Egxnd3Mtd2l6LXNlcnAiItC_0L7Qs9C-0LTQsCDQutC40LXQsiDRgdGB0YvQu9C60LAyBRAhGKABSP0qUOwEWM8kcAJ4AZABAJgBzQGgAYkKqgEFMC43LjG4AQPIAQD4AQGYAgqgAucKwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIZEC4YgAQYsAMY0QMYQxjHARjIAxiKBdgBAcICBRAAGIAEwgILEAAYgAQYsQMYgwHCAgcQIRigARgKmAMAiAYBkAYNugYECAEYCJIHBTIuNy4xoAeaIbIHBTAuNy4xuAfQCg&sclient=gws-wiz-serp`
      );
      return response.data;
   } catch (error) {
      console.error(error);
   }
};