class SpicesController < ApplicationController

    def index
     @spices = Spice.all 
        respond_to do |format|
        format.html
        format.json {render json: @spices }
      end
    end


end