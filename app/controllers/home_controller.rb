class HomeController < ApplicationController
  include RestGraph::RailsUtil
  require 'rest-graph'
  before_filter :login_facebook, :only => [:login]
  before_filter :load_facebook, :except => [:login]
  before_filter :filter_setup_rest_graph
  before_filter :filter_cache, :only => [:cache]

  def index
    @access_token = rest_graph.access_token

    if @access_token
      @me = rest_graph.get('/me')
    end

    @spots=Spot.all
  end

  def login
    redirect_to home_path
  end

  def logout
    reset_session
    redirect_to home_path
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

private
  
  def load_facebook
    rest_graph_setup(:write_session => true)
  end

  def login_facebook
    rest_graph_setup(:auto_authorize         => true,
                     :auto_authorize_scope   => 'publish_checkins',
                     :ensure_authorized      => true,
                     :write_session          => true)
  end

  def filter_setup_rest_graph
    rest_graph_setup(:auto_authorize => true,
                      :auto_authorize_scope   => 'read_stream')
  end

  def filter_cache
    rest_graph_setup(:cache => Rails.cache)
  end

end