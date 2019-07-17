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
  message : {};
  classCss : {};

  constructor(
    private ghostgameService: GhostgameService
  ) { }

  findWord(){
    this.ghostgameService.findWord(this.word.letter,this.word.lettersInserted).subscribe((responseApi:ResponseApi) => {
        this.word = responseApi.data;
    } , err => {
      this.showMessage({
        type: 'error',
        text: err['error']['message']
      });
    });
  } 

  restartGame(){
    this.word = new Word('','',false,false);
  }

  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    }
    this.classCss['alert-'+type] =  true;
  }

}
