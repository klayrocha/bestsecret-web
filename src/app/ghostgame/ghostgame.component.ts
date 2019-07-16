import { Component, OnInit } from '@angular/core';
import { GhostgameService } from '../service/ghostgame.service';
import { Word } from './../model/word.model';
import { ResponseApi } from './../model/response-api';

@Component({
  selector: 'app-ghostgame',
  templateUrl: './ghostgame.component.html',
  styleUrls: ['./ghostgame.component.css']
})
export class GhostgameComponent {

  word = new Word('','',false,false);

  constructor(
    private ghostgameService: GhostgameService
  ) { }

  findWord(){
    this.ghostgameService.findWord(this.word.letter,this.word.lettersInserted).subscribe((responseApi:ResponseApi) => {
        this.word = responseApi.data;
        console.log('RETORNO --> ',this.word);
    } , err => {
      console.log(err);
    });
  }

  restartGame(){
    this.word = new Word('','',false,false);
  }

}
