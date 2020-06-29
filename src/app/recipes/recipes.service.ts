import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {


  recipes: Recipe[]=[
    {
      id:'r1',
      title:'Gormeh Sabji',
      imageUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGhormeh_sabzi&psig=AOvVaw0RKatRMhRfAAQcpT-gn6QX&ust=1593537400315000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjhgMjDp-oCFQAAAAAdAAAAABAD',
      ingredients:['sabji','meat','onion','oil'],
    },
    {
      id:'r2',
      title:'Fesenjoon',
      imageUrl:'https://en.wikipedia.org/wiki/Ghormeh_sabzi#/media/File:Ghormeh_Sabzi.JPG',
      ingredients:['sabji','meat','onion','oil'],
    },
    {
      id:'r3',
      title:'Sabji Polo',
      imageUrl:'https://en.wikipedia.org/wiki/Ghormeh_sabzi#/media/File:Ghormeh_Sabzi.JPG',
      ingredients:['sabji','meat','onion','oil'],
    },
  ]


  constructor() { }

  getAllRecipes()
  {
    return [...this.recipes]
  }

  getRecipe(recepeId:string)
  {
    return {
      ...this.recipes.find(r=> {
      return r.id==recepeId; 
    })
  }
  }

  deleteRecipe(recipeId:String)
  {
    this.recipes = this.recipes.filter(r=>{
      return r.id !== recipeId;
    });
  }

}
