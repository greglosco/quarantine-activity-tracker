class FitnessActivitiesController < ApplicationController

    def index
        fitnessActivities = FitnessActivity.all 
        render json: FitnessActivitySerializer.new(fitnessActivities).to_serialized_json
    end

    def create
        fitnessActivity = FitnessActivity.create(fitness_activity_params)
        render json: FitnessActivitySerializer.new(fitnessActivity).to_serialized_json
    end

    def show 
        fitnessActivity = FitnessActivity.find(params[:id]) 
        render json: FitnessActivitySerializer.new(fitnessActivity).to_serialized_json
    end

    def destroy
        fitnessActivity = FitnessActivity.find(params[:id])
        render json: FitnessActivitySerializer.new(fitnessActivity).to_serialized_json 
        fitnessActivity.destroy
    end

    private

    def fitness_activity_params
        params.require(:fitness_activity).permit(:exercise, :date, :notes)
    end

end
