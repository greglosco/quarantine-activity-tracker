class FitnessActivitiesController < ApplicationController

    def index
    end

    def create
        FitnessActivity.create(fitness_activity_params)
    end

    private

    def fitness_activity_params
        params.require(:fitnessActivity).permit(:exercise, :date, :notes)
    end

end
