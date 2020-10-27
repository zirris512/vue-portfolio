import planAndGoImg from "../assets/images/Plan_and_Go.png";
import epicAdventureImg from "../assets/images/Epic_Adventure.png";
import eatDaBurgerImg from "../assets/images/Eat_da_Burger.png";
import trainScheduleImg from "../assets/images/Train_Schedule.png";
import clickyGameImg from "../assets/images/Clicky_home.png";
import escapeImg from "../assets/images/escape.png";

export default [
   {
      id: "plan_and_go",
      title: "Plan and Go",
      description:
         "Plan and Go is an app where users can look for attractions at a searched destination and find nearby hotels.",
      technologies: [
         "HTML/CSS",
         "Javascript",
         "Bulma",
         "JQuery",
         "LocationIQ",
         "Leaflet",
      ],
      image: planAndGoImg,
      github: "https://github.com/zirris512/project-1",
      deploy: "https://zirris512.github.io/project-1/",
   },
   {
      id: "epic_adventure",
      title: "Epic Adventure!",
      description:
         "Epic Adventure is a choose your own adventure story. The user makes choices and winds up at an ending based on those choices.",
      technologies: [
         "HTML/CSS",
         "Javascript",
         "JQuery",
         "Pug",
         "MySQL",
         "Sequelize",
         "Express",
         "Nodejs",
      ],
      image: epicAdventureImg,
      github: "https://github.com/zirris512/Project2",
      deploy: "https://ku-project2-group3.herokuapp.com/",
   },
   {
      id: "eat_da_burger",
      title: "Eat-da-Burger",
      description:
         "A small project where the user could add items to a list. Then, remove and add them to another list from the database.",
      technologies: [
         "HTML/CSS",
         "Javascript",
         "JQuery",
         "Bootstrap",
         "MySQL",
         "Handlebars",
      ],
      image: eatDaBurgerImg,
      github: "https://github.com/zirris512/burger",
      deploy: "https://burgerappbse.herokuapp.com/",
   },
   {
      id: "train_schedule",
      title: "Train Schedule",
      description:
         "A small project where the user could enter values into a form and update the table with the new values and times.",
      technologies: [
         "HTML/CSS",
         "Javascript",
         "JQuery",
         "Bootstrap",
         "Momentjs",
         "Firebase",
      ],
      image: trainScheduleImg,
      github: "https://github.com/zirris512/Train_Schedule",
      deploy: "https://zirris512.github.io/Train_Schedule/",
   },
   {
      id: "clicky_game",
      title: "Clicky Game",
      description:
         "An app where the user tries to click on images that have not been previously clicked to increase their score. The goal is to achieve the highest score possible out of 12.",
      technologies: ["HTML/CSS", "Javascript", "Reactjs", "Bootstrap"],
      image: clickyGameImg,
      github: "https://github.com/zirris512/clicky-game",
      deploy: "https://zirris512.github.io/clicky-game/",
   },
   {
      id: "escape_room",
      title: "Escape Room",
      description: "",
      technologies: [
         "HTML/CSS",
         "Javascript",
         "Reactjs",
         "React-Router",
         "MongoDB",
         "Mongoose",
         "Passport",
         "SCSS",
      ],
      image: escapeImg,
      github: "https://github.com/zirris512/escaperoom",
      deploy: "https://shipescaperoom.herokuapp.com/",
   },
];
