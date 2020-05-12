class RecipeSerializer

    def initialize(recipe)
        @recipe = recipe
    end

    def to_serialized_json
        options = {
            except: [:created_at, :updated_at]
        }
        @recipe.to_json(options)
    end

end