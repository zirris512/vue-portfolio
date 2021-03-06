import planAndGoImg from "../assets/images/Plan_and_Go.png";
import epicAdventureImg from "../assets/images/Epic_Adventure.png";
import eatDaBurgerImg from "../assets/images/Eat_da_Burger.png";
import trainScheduleImg from "../assets/images/Train_Schedule.png";
import clickyGameImg from "../assets/images/Clicky_home.png";
import mangaImg from "../assets/images/manga_hub.png";
import planAndGoImgLg from "../assets/images/large/plan_and_go_lg.png";
import epicAdventureImgLg from "../assets/images/large/epic_adventure_lg.png";
import eatDaBurgerImgLg from "../assets/images/large/eat_da_burger_lg.png";
import trainScheduleImgLg from "../assets/images/large/train_schedule_lg.png";
import clickyGameImgLg from "../assets/images/large/clicky_game_lg.png";
import mangaImgLg from "../assets/images/large/manga_hub_lg.png";

export default [
    {
        id: "plan_and_go",
        title: "Plan and Go",
        description:
            "Plan and Go is an app where users can look for attractions at a searched destination and find nearby hotels.",
        technologies: ["HTML/CSS", "Javascript", "Bulma", "JQuery", "LocationIQ", "Leaflet"],
        image: planAndGoImg,
        largeImg: planAndGoImgLg,
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
        largeImg: epicAdventureImgLg,
        github: "https://github.com/zirris512/Project2",
        deploy: "https://ku-project2-group3.herokuapp.com/",
    },
    {
        id: "eat_da_burger",
        title: "Eat-da-Burger",
        description:
            "A small project where the user could add items to a list. Then, remove and add them to another list from the database.",
        technologies: ["HTML/CSS", "Javascript", "JQuery", "Bootstrap", "MySQL", "Handlebars"],
        image: eatDaBurgerImg,
        largeImg: eatDaBurgerImgLg,
        github: "https://github.com/zirris512/burger",
        deploy: "https://burgerappbse.herokuapp.com/",
    },
    {
        id: "train_schedule",
        title: "Train Schedule",
        description:
            "A small project where the user could enter values into a form and update the table with the new values and times.",
        technologies: ["HTML/CSS", "Javascript", "JQuery", "Bootstrap", "Momentjs", "Firebase"],
        image: trainScheduleImg,
        largeImg: trainScheduleImgLg,
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
        largeImg: clickyGameImgLg,
        github: "https://github.com/zirris512/clicky-game",
        deploy: "https://zirris512.github.io/clicky-game/",
    },
    {
        id: "manga_hub",
        title: "Manga Hub",
        description:
            "An app where the user can search for their favorite anime or manga. The user can create an account or login to an existing account to add/remove favorites.",
        technologies: [
            "HTML/CSS",
            "Javascript",
            "Reactjs",
            "React-Router",
            "Apollo",
            "MongoDB",
            "Mongoose",
            "Nodejs",
            "Express",
            "GraphQL",
            "Passport",
            "Bootstrap",
        ],
        image: mangaImg,
        largeImg: mangaImgLg,
        github: "https://github.com/zirris512/manga_project",
        deploy: "https://mangaproject.herokuapp.com/",
    },
];
