class TextpostsController < ApplicationController
  before_action :authorize_request 

  def index 
    render json: @current_user.textposts, status: :ok
  end

  def create 
    @textpost = Textpost.new(textpost_params)
    @textpost.user = @current_user
    @textpost.save()
    render json: @textpost, status: :created
  end

  def show 
    set_textpost
    render json: @textpost, status: :ok
  end

  def update 
    set_textpost
    @textpost.update(textpost_params)
    render json: @textpost, status: :ok
  end

  def destroy
    set_textpost
    @textpost.destroy
    render json: {message: 'destroyed'}
  end

  private 

  def set_textpost
    @textpost = Textpost.find(params[:id])
  end

  def textpost_params 
    params.require(:textpost).permit(:title, :body, :date, :tags)
  end
end
