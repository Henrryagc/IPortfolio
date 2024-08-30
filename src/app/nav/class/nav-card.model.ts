import { NavCardDto } from "../dto/nav-card.dto";

export class  NavCardModel {
    private iconSize = "bx-md"
    private navCardItems: NavCardDto[] = [
        <NavCardDto>{
            iconName: "bx bx-user",
            iconSize: this.iconSize,
            label: "WHOAMI"
        },
        <NavCardDto>{
            iconName: "bx bxs-server",
            iconSize: this.iconSize,
            label: "PROJECTS"
        },
        <NavCardDto>{
            iconName: "bx bx-user",
            iconSize: this.iconSize,
            label: ""
        },
        <NavCardDto>{
            iconName: "bx bx-user",
            iconSize: this.iconSize,
            label: "WHOAMI"
        },
        <NavCardDto>{
            iconName: "bx bx-user",
            iconSize: this.iconSize,
            label: "WHOAMI"
        },
        <NavCardDto>{
            iconName: "bx bx-user",
            iconSize: this.iconSize,
            label: "WHOAMI"
        },
    ]

    public getNavCardItems(): NavCardDto[] {
        return this.navCardItems
    }

}