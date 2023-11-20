import { Nature } from "./nature.model";
export class Piece {
    idPiece? : number;
    nom? : string;
    model? :string;
    prix? : number;
    dateMise? : Date ;
    nature! : Nature;
    }