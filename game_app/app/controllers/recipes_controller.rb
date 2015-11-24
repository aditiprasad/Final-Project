class RecipesController < ApplicationController

    def index
        response = HTTParty.get("http://food2fork.com/api/search?key=#{ENV["FOOD2FORK"]}&q=#{params[:q]}")
        @render = JSON.parse(response)
        render json: @render
    end
end

