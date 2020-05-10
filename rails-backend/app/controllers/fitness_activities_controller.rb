class FitnessActivitiesController < ApplicationController

    def index
        @fitnessActivities = FitnessActivities.all 
        render json: FitnessActivitySerializer.new(@fitnessActivities).to_serialized_json
    end

    def create
        FitnessActivity.create(fitness_activity_params)
    end

    private

    def fitness_activity_params
        params.require(:fitnessActivity).permit(:exercise, :date, :notes)
    end

end
