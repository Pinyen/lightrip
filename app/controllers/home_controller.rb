class HomeController < ApplicationController
  def index
    @spots=Spot.all
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

  def step3
    # we will use params in the future  EX. params['attr1']

    #respond_to do |format|
    #    format.html # show.html.erb
    #    format.json { render json: @spot }
    #  end
    #end
    
    @spots = Spot.all
    hash = {:test => "YOYO"}
    render json: @spots
  end

end
