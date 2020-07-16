class LinkpostsController < ApplicationController
  before_action :authorize_request 

  def index
    render json @current_user.linkposts, status: :ok
  end

  def create
    @linkpost = Linkpost.new(linkpost_params)
    @current_user.linkposts << @linkpost
    render json: @linkpost, status: :created
  end

  def show
    set_linkpost
    render json: @linkpost, status: :ok
  end

  def update
    set_linkpost
    linkpost.update(linkpost_params)
    render json: @linkpost, status: :ok
  end

  def destroy
    set_linkpost
    @linkpost.destroy
    render json: {message: 'destroyed'}
  end

  private

  def set_linkpost
    @linkpost = Linkpost.find(params[:id])
  end

  def linkpost_params
    params.require(:linkpost).permit(:title, :link, :date, :description, :image, :url, :tags)
  end
end
