class HobbiesController < ApplicationController

    def index
        hobbies = Hobby.all 
        render json: HobbySerializer.new(hobbies).to_serialized_json
    end

    def create
        hobby = Hobby.create(hobby_params)
        render json: HobbySerializer.new(hobby).to_serialized_json
    end

    def show 
        hobby = Hobby.find(params[:id]) 
        render json: HobbySerializer.new(hobby).to_serialized_json
    end

    def update
        hobby = Hobby.find(params[:id])
        hobby.update(hobby_params)
        render json: HobbySerializer.new(hobby).to_serialized_json 
    end

    def destroy
        hobby = Hobby.find(params[:id])
        render json: HobbySerializer.new(hobby).to_serialized_json 
        hobby.destroy
    end

    private

    def hobby_params
        params.require(:hobby).permit(:name, :date, :notes)
    end

end
