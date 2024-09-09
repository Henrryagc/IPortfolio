import { NavCardDto } from "../dto/nav-card.dto";

export class  NavCardModel {
    private iconSize = "bx-md"
    private navCardItems: NavCardDto[] = [
        <NavCardDto>{
            iconName: "bx bx-user",
            iconSize: this.iconSize,
            label: "WHOAMI",
            route: "home"
        },
        <NavCardDto>{
            iconName: "bx bxs-server",
            iconSize: this.iconSize,
            label: "PROJECTS",
            route: "projects"
        },
        <NavCardDto>{
            iconName: "bx bx-user",
            iconSize: this.iconSize,
            label: "",
            route: "about-me"
        },
        <NavCardDto>{
            iconName: "bx bx-user",
            iconSize: this.iconSize,
            label: "WHOAMI",
            route: "contact"
        }
    ]

    public getNavCardItems(): NavCardDto[] {
        return this.navCardItems
    }

}