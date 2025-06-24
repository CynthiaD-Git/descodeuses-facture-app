import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-facture-liste',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],

  templateUrl: './facture-liste.component.html',
  styleUrl: './facture-liste.component.css'
})
export class FactureListeComponent  implements OnInit{

factureliste =[
  {designation: "Jus Naturel", quantite: 1, prixUnitaire: 3}, 
  {designation: "salade Quinoa", quantite: 2, prixUnitaire: 7}, 
  {designation: "pain complet", quantite: 1, prixUnitaire: 1.90},
  {designation: "mache", quantite: 4, prixUnitaire: 1.34},
  {designation: "Eau minerale", quantite: 1, prixUnitaire: 1.35}
];

total = 0;

formgroup!:FormGroup;



constructor(
  private formBuilder: FormBuilder,
) {}

ngOnInit(): void {
  this.formgroup = this.formBuilder.group({
    designation: ['',Validators.required],
    quantite: ['', Validators.required],
    prixUnitaire:['',Validators.required],
  });
  this.calculer();
}

calculer(){
  this.total= 0; //pour éviter d'additionner encore et encore les mêmes valeurs.
  for(const element of this.factureliste) {
    this.total+=(element.prixUnitaire*element.quantite)

  }
}

  onSubmit() {
    if (this.formgroup.invalid) return;
    const nouvelleFacture = this.formgroup.value;

    console.log(this.formgroup.value);
    this.factureliste.push(this.formgroup.value);
    this.calculer();
    console.log("contact: ",this.factureliste)
 
  this.total = this.total;

}
  
}


// créer variable tableau "facture-liste" qui contient tous les articles de la facture

// factureliste =[
//   {designation: "Jus Naturel", quantite: 1, prixUnitaire: 3}, 
//   {designation: "salade Quinoa", quantite: 2, prixUnitaire: 7}, 
//   {designation: "pain complet", quantite: 1, prixUnitaire: 1.90},
// ];

// total = 0;

// formgroup!:FormGroup;



// constructor(
//   private formBuilder: FormBuilder,
// ) {}
// ngOnInit(): void {

//   this.calculer();
// }

// calculer(){
//   for(const element of this.factureliste) {
//     this.total+=(element.prixUnitaire*element.quantite)

//   }

//   this.formgroup = this.formBuilder.group({
//     designation: [''],
//     quantite: [''],
//     prixUnitaire:[''],
//   });

//   onSubmit() {
//     console.log(this.formgroup.value);
//     this.factureliste = this.formgroup.value;
//     console.log("contact: ",this.factureliste)
 
//   this.total = this.total;
// }

