class HomeController < ApplicationController
  def index
  end
  def attr
  	respond_to do |format|
      format.html # show.html.erb
     # format.json { render json: @spot }
    end
  end

  def smart
	respond_to do |format|
      format.html # show.html.erb
     # format.json { render json: @spot }
    end
  end


end
