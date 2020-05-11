class FitnessActivitiesController < ApplicationController

    def index
        fitnessActivities = FitnessActivity.all 
        render json: FitnessActivitySerializer.new(fitnessActivities).to_serialized_json
    end

    def create
        fitnessActivity = FitnessActivity.create(fitness_activity_params)
        render json: FitnessActivitySerializer.new(fitnessActivity).to_serialized_json
    end

    private

    def fitness_activity_params
        params.require(:fitness_activity).permit(:exercise, :date, :notes)
    end

end
