import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe:Recipe;
  constructor( private activatedRoute:ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private recipeService:RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('recipeId')){
        return;
      }
      const recId= paramMap.get('recipeId');
      this.loadedRecipe= this.recipeService.getRecipe(recId);
    });
  }

  deleteRecipe(){
    this.alertController.create({
      header: 'Warnning!',
      message:"Do you really want to Delete?",
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },
    {
      text:'Delete',
      handler:()=>{

        this.recipeService.deleteRecipe(this.loadedRecipe.id);
        this.router.navigate(['/recipes']);
      }
    }]
    }).then(aleElm=>{
      aleElm.present();
    })


  }

}
