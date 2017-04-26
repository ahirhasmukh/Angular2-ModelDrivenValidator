import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {


  isRequired = false;
  isDisabled = false;
  _search: string = '';
  item: any = null;
  pokemonRequired = false;
  pokemonDisabled = false;
  currentPokemon: string[];
  disableIdProof:boolean = false;
  constructor() { }

  ngOnInit() {
    this.setPokemonValue();
    this.disableIdProof =  true;
  }


  items: Array<any> =
      [
        { name: 'Vadodara', value: '1' },
        { name: 'Rajkot', value: '2' },
        { name: 'Delhi', value: '3' },
        { name: 'Chennai', value: '4' },
        { name: 'Mumbai', value: '5' },
        { name: 'Goa', value: '6' }
      ];

  pokemon =  [
    { name: 'Vadodara', value: '1' },
    { name: 'Rajkot', value: '2' },
    { name: 'Delhi', value: '3' },
    { name: 'Chennai', value: '4' },
    { name: 'Mumbai', value: '5' },
    { name: 'Goa', value: '6' }
  ];

  passparam(event){
    console.log('Change evvent');
  }

  setPokemonValue() {
    /*let selected =  [
      { name: 'Vadodara', value: '1' },
      { name: 'Goa', value: '6' }
    ];*/
    this.currentPokemon = ['1', '6'];
  }

  resetValue(){
    debugger
    this.pokemon.splice(0,1);
  }
}
