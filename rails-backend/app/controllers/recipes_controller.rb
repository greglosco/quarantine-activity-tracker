class RecipesController < ApplicationController

    def index
        recipes = Recipe.all 
        render json: RecipeSerializer.new(recipes).to_serialized_json
    end

    def create
        recipe = Recipe.create(recipe_params)
        render json: RecipeSerializer.new(recipe).to_serialized_json
    end

    def show 
        recipe = Recipe.find(params[:id]) 
        render json: RecipeSerializer.new(recipe).to_serialized_json
    end

    def update
        recipe = Recipe.find(params[:id])
        recipe.update(recipe_params)
        render json: RecipeSerializer.new(recipe).to_serialized_json 
    end

    def destroy
        recipe = Recipe.find(params[:id])
        render json: RecipeSerializer.new(recipe).to_serialized_json 
        recipe.destroy
    end

    private

    def recipe_params
        params.require(:recipe).permit(:name, :date, :notes)
    end

end
