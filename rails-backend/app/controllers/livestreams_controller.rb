class LivestreamsController < ApplicationController

    def index
        livestreams = Livestream.all 
        render json: LivestreamSerializer.new(livestreams).to_serialized_json
    end

    def create
        livestream = Livestream.create(livestream_params)
        render json: LivestreamSerializer.new(livestream).to_serialized_json
    end

    def show 
        livestream = Livestream.find(params[:id]) 
        render json: LivestreamSerializer.new(livestream).to_serialized_json
    end

    def update
        livestream = Livestream.find(params[:id])
        livestream.update(livestream_params)
        render json: LivestreamSerializer.new(livestream).to_serialized_json 
    end

    def destroy
        livestream = Livestream.find(params[:id])
        render json: LivestreamSerializer.new(livestream).to_serialized_json 
        livestream.destroy
    end

    private

    def livestream_params
        params.require(:livestream).permit(:name, :date, :notes)
    end

end
