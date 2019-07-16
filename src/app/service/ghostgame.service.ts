import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GHOST_GAME_API } from './ghostgame.api';

@Injectable()
export class GhostgameService {

  constructor(private http:HttpClient) { }

  findWord(letter:string,lettersInserted:string){
    if(lettersInserted == ''){
      lettersInserted = 'empty_letter';
    }
    return this.http.get(`${GHOST_GAME_API}/api/ghostGame/${letter}/${lettersInserted}`);
  }
}
