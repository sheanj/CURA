class TimelineController < ApplicationController
  before_action :authorize_request 

  def all_posts
    @text_posts = @current_user.textposts
    @link_posts = @current_user.linkposts
    @posts = @text_posts + @link_posts
    @sorted = @posts.sort_by do |post|
      post.created_at
    end
    render json: @sorted.reverse, status: :ok
  end
end
