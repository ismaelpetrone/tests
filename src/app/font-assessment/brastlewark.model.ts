export class Brastlewark {
    public id: number;
    public name: string;
    public thumbnail: string;
    public age: number;
    public height: number;
    public weight: number;
    public hair_color: string;
    public friends: string[];
    public professions: string[];
    public display: boolean;
    public scrollDisplay: boolean;

    constructor(
        id?: number,
        name?: string,
        thumbnail?: string,
        age?: number,
        height?: number,
        weight?: number,
        hair_color?: string,
        friends?: string[],
        professions?: string[],
        display?: boolean
    ) { 
        this.display = true;
        this.scrollDisplay = true;
    }

}