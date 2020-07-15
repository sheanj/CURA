class TextpostController < ApplicationController
  before_action :authorize_request 

  def index 
    render json: @current_user.textposts, status: :ok
  end

  def create 
    @textpost = Textpost.new(textpost_params)
    @current_user.textposts << @textpost
    render json: @current_user.textposts, status: :created
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

  def get_user 
    @user = User.find(params[:id])
  end

  def set_textpost
    @textpost = Textpost.find(params[:id])
  end

  def textpost_params 
    params.require(:user).permit(:title, :body, :date, :tags)
  end
end
